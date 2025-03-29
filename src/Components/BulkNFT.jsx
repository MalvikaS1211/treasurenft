import React, { useEffect, useState } from "react";
import CyberDoberman from "../assets/CyberDoberman.jpg";
import MattRamos from "../assets/MattRamos.jpg";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import {
  approveToken,
  createNFTsBulkFn,
  fetchUserTokenBalance,
  getAvailaibleBalance,
} from "../Helper/Web3";
import {
  createNftVrsFn,
  getCreateBulkNFT,
  getMaturedNFTs,
} from "../Helper/API_Functions";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";

export default function BulkNFT() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [nftPrice, setNftPrice] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAmount, setAmount] = useState(0);
  const { address } = useAccount();
  const [tokenId, setTokenId] = useState();
  const [isFetch, setIsFetch] = useState(false);
  // const address = "0x25b0ecc38e02e9ee0dfe4c22680d1605be80dcc9";
  const [nfts, setNfts] = useState([
    { file: null, price: "", title: "", description: "", preview: null },
  ]);

  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Only JPG and PNG files are allowed.");
      return;
    }

    const newNfts = [...nfts];
    newNfts[index] = {
      ...newNfts[index],
      file,
      preview: URL.createObjectURL(file),
    };

    setNfts(newNfts);
  };

  const BulkNFTpriceOptions = [
    250, 500, 750, 1000, 1250, 1750, 2500, 3250, 3750, 4250, 5000, 5750, 6250,
    6750, 7500,
  ];

  const tokenApp = async (amt) => {
    try {
      const appres = approveToken(amt);
      await toast.promise(appres, {
        loading: "Approval in process",
        success: "Successfully Approved",
        error: "Approval failed",
      });
      return appres;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const handleInputChange = (event, index, field) => {
    const newNfts = [...nfts];
    newNfts[index][field] = event.target.value;
    setNfts(newNfts);
  };

  const addNFTField = () => {
    setNfts([...nfts, { file: null, price: "", title: "", description: "" }]);
  };

  const pinataApiKey = "e45f06a4f288fd4c7ded";
  const pinataSecretApiKey =
    "5d66447d15dde18b2851a2d6aefc48f4ca25b29c05440027f816f7d176cb7fdd";

  const uploadToIPFS = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    const { data } = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        headers: {
          pinata_api_key: pinataApiKey,
          pinata_secret_api_key: pinataSecretApiKey,
        },
      }
    );
    console.log("first one", data.IpfsHash, "::::");
    return `ipfs://${data.IpfsHash}`;
  };

  // const uploadMetadataToIPFS = async (imageHash) => {
  //   const metadata = {
  //     name: title,
  //     description: description,
  //     image: imageHash,
  //   };
  //   console.log(metadata, "metadata");
  //   const blob = new Blob([JSON.stringify(metadata)], {
  //     type: "application/json",
  //   });
  //   const formData = new FormData();
  //   formData.append("file", blob, "metadata.json");
  //   const { data } = await axios.post(
  //     "https://api.pinata.cloud/pinning/pinFileToIPFS",
  //     formData,
  //     {
  //       headers: {
  //         pinata_api_key: pinataApiKey,
  //         pinata_secret_api_key: pinataSecretApiKey,
  //       },
  //     }
  //   );
  //   console.log("second one ", data.IpfsHash, "::::");

  //   return `ipfs://${data.IpfsHash}`;
  // };

  const uploadMetadataToIPFS = async (imageHash, nft) => {
    const metadata = {
      name: nft.title,
      description: nft.description,
      image: imageHash,
    };

    console.log(metadata, "Metadata for:", nft.title);

    const blob = new Blob([JSON.stringify(metadata)], {
      type: "application/json",
    });
    const formData = new FormData();
    formData.append("file", blob, "metadata.json");

    const { data } = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        headers: {
          pinata_api_key: pinataApiKey,
          pinata_secret_api_key: pinataSecretApiKey,
        },
      }
    );

    return `ipfs://${data.IpfsHash}`;
  };

  const nftCreate = async () => {
    setIsLoading(true);
    try {
      console.log("1");
      toast.success("Please wait transaction is in process");
      if (isLoading) {
        return toast.error("Your previous transaction is pending");
      }
      if (nfts.some((nft) => !nft.title || !nft.description || !nft.file)) {
        setIsLoading(false);
        return toast.error(
          "Please fill all fields and select a file for each NFT!"
        );
      }
      const userBalance = await fetchUserTokenBalance(address);
      const totalPrice = selectedAmount * 1.1;
      // const totalPrice = nfts.reduce((sum, nft) => sum + Number(nft.price), 0);
      if (userBalance < totalPrice) {
        setIsLoading(false);
        return toast.error(`You need at least ${totalPrice} USDT to Buy`);
      }
      let metadataURIs = [];
      let titles = [];
      let descriptions = [];
      let initialPrices = [];
      for (const nft of nfts) {
        const imageHash = await uploadToIPFS(nft.file);
        console.log(`Uploaded image: ${imageHash}`);
        const metadataURI = await uploadMetadataToIPFS(imageHash, nft);
        console.log(
          `Uploaded metadata: ${metadataURI}`,
          nft["title"],
          nft.title,
          nft
        );
        metadataURIs.push(metadataURI);
        titles.push(nft.title);
        descriptions.push(nft.description);
        initialPrices.push(Number(selectedAmount / 5)); // to be changed
      }

      console.log("All metadata uploaded:", metadataURIs, nfts);

      console.log(
        "check all the array",
        metadataURIs,
        titles,
        descriptions,
        initialPrices
      );
      // const totalAmount = Number(initialPrices) + 0.2 * Number(initialPrices);
      const res = await getCreateBulkNFT(
        address,
        initialPrices,
        titles,
        descriptions,
        metadataURIs,
        selectedAmount * 1.1
      );
      console.log("BulkNFTVrs", res, tokenId);
      const tokenRes = await tokenApp(res.vrs.totalAmount);
      if (tokenRes) {
        const res1 = createNFTsBulkFn(
          res.vrs.titles,
          res.vrs.descriptions,
          res.vrs.metadataURIs,
          res.vrs.initialPrices,
          res.vrs.totalAmount,
          res.vrs.signature.v,
          res.vrs.signature.r,
          res.vrs.signature.s,
          tokenId
        );
        await toast.promise(res1, {
          loading: "NFTs creation in process",
          success: "NFTs created successfully",
          error: "Error in NFT creation",
        });
        setTimeout(() => {
          setIsFetch(!isFetch);
        }, 2000);
        console.log("NFTs created:", res1);
        setIsLoading(false);
      }
      setIsLoading(false);
    } catch (error) {
      console.log("Error creating NFTs:", error);
      setIsLoading(false);
    }
  };
  const [availablePkg, setAvailablePkg] = useState([]);
  const HandleAvailablePkg = async () => {
    try {
      const resPkg = await getMaturedNFTs(address);
      setAvailablePkg(resPkg?.userMaturedNfts);
      console.log("Available packages:", resPkg);
    } catch (error) {
      setAvailablePkg([]);
      console.log(error);
    }
  };
  const [availableBalance, setAvailableBalance] = useState(0);
  const ShowAvailablepkg = async () => {
    const availablBal = await getAvailaibleBalance(address);
    console.log(availablBal, "Available balance in package");
    setAvailableBalance(availablBal);
  };

  useEffect(() => {
    if (address) {
      HandleAvailablePkg();
      ShowAvailablepkg();
    } else toast.error("Please connect your wallet");
  }, [address, isFetch]);

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index, pkg) => {
    setSelectedIndex(index);
    const amount = (Number(pkg.nftCreatedDetails.price) * 5) / 1e18;

    setAmount(amount);
    setTokenId(pkg.nftCreatedDetails.tokenId);
  };

  return (
    <>
      <>
        <div className="row available-packages">
          <div className="row" style={{ paddingLeft: "34px" }}>
            <h4
              className="title-create-item mt-4 col-lg-12"
              style={{ textAlign: "left" }}
            >
              Available Packages
            </h4>
            <div className="d-flex flex-wrap justify-content-start gap-3">
              {availablePkg &&
                availablePkg?.map((pkg, index) => (
                  <div className="package-container" key={index}>
                    <button
                      type="button"
                      className="sc-button style style-1"
                      style={{
                        padding: "5px 26px",
                        backgroundColor:
                          selectedIndex === index ? "#5142fc" : "",
                        color: selectedIndex === index ? "white" : "",
                      }}
                      onClick={() => handleClick(index, pkg)}
                    >
                      $
                      {(
                        (Number(pkg.nftCreatedDetails.price) * 5 * 1.1) /
                        1e18
                      ).toFixed(2)}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {selectedAmount > 0 && (
          <div
            style={{ fontSize: "20px", paddingLeft: "36px" }}
            className="row mt-5"
          >
            Note: You had selected {selectedAmount * 1.1} USDT package. You can
            create 5 NFTs of {selectedAmount / 5} USDT.
          </div>
        )}

        <div className="row" style={{ paddingTop: "40px" }}>
          {nfts.map((nft, index) => (
            <div
              key={index}
              className="col-12 d-flex flex-wrap"
              style={{
                borderTop: index !== 0 ? "1px solid #80808057" : "none",
                paddingTop: index !== 0 ? "10px" : "0",
              }}
            >
              <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                <h4 className="title-create-item mt-4">Preview item</h4>
                <div
                  className="sc-card-product"
                  style={{ border: "1px solid rgb(81, 66, 252)" }}
                >
                  <div className="card-media">
                    <a href="">
                      <img src={nft.preview || CyberDoberman} alt="Axies" />
                    </a>
                    {/* <a className="wishlist-button heart" href="/login">
                        <span className="number-like">${nft.price || 0}</span>
                      </a> */}
                  </div>
                  {/* <div class="card-title">
                      <h6>NFT Price</h6>
                      <div class="tags">${nft.price || 0}</div>
                    </div>
                    <div class="card-title">
                      <h6>Creation Fee (10%)</h6>
                      <div class="tags">${(nft.price * 10) / 100}</div>
                    </div>
                    <div class="card-title">
                      <h6>Total Amount</h6>
                      <div class="tags">
                        {" "}
                        <div class="tags">
                          $
                          {parseFloat(nft.price || 0) +
                            parseFloat((nft.price * 20) / 100 || 0)}
                        </div>
                      </div>
                    </div> */}
                </div>
              </div>

              <div className="col-xl-9 col-lg-6 col-md-12 col-12">
                <div className="form-create-item mt-4">
                  <h4 className="title-create-item">Upload NFT</h4>
                  <h4 className="title-create-item">{index + 1} NFT</h4>
                  <label className="uploadFile">
                    <span className="filename">
                      {nft.file ? nft.file.name : "PNG, JPG"}
                    </span>
                    <input
                      type="file"
                      className="inputfile form-control"
                      name="images"
                      accept="image/png, image/jpg"
                      onChange={(e) => handleFileChange(e, index)}
                    />
                  </label>

                  <h4 className="title-create-item">Title</h4>
                  <input
                    type="text"
                    placeholder="Item Name"
                    className="mb-4"
                    value={nft.title}
                    onChange={(e) => handleInputChange(e, index, "title")}
                  />

                  <h4 className="title-create-item">Description</h4>
                  <textarea
                    placeholder="e.g. “This is a very limited item”"
                    className="mb-4"
                    value={nft.description}
                    onChange={(e) => handleInputChange(e, index, "description")}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="create-nft-container">
          <button
            className="createbtn"
            type="button"
            onClick={nftCreate}
            disabled={isLoading}
          >
            {isLoading ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
              ></span>
            ) : (
              "Create NFT"
            )}
          </button>
          <FaPlus
            onClick={nfts.length < 5 ? addNFTField : null}
            size={20}
            style={{
              cursor: nfts.length < 5 ? "pointer" : "not-allowed",
              opacity: nfts.length < 5 ? 1 : 0.5,
            }}
          />
        </div>
      </>
    </>
  );
}
