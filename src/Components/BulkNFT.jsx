import React, { useState } from "react";
import CyberDoberman from "../assets/CyberDoberman.jpg";
import MattRamos from "../assets/MattRamos.jpg";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { approveToken, createNFTsBulkFn } from "../Helper/Web3";
import { createNftVrsFn, getCreateBulkNFT } from "../Helper/API_Functions";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";

export default function BulkNFT() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [nftPrice, setNftPrice] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { address } = useAccount();
  const [nfts, setNfts] = useState([
    { file: null, price: "", title: "", description: "", preview: null },
  ]);

  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    if (!file) return;

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
      if (
        nfts.some(
          (nft) => !nft.title || !nft.description || !nft.file || !nft.price
        )
      ) {
        setIsLoading(false);
        return toast.error(
          "Please fill all fields and select a file for each NFT!"
        );
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
        initialPrices.push(Number(50)); // to be changed
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
        275
      );
      console.log("BulkNFTVrs", res);
      const res1 = createNFTsBulkFn(
        res.vrs.titles,
        res.vrs.descriptions,
        res.vrs.metadataURIs,
        res.vrs.initialPrices,
        res.vrs.totalAmount,
        res.vrs.signature.v,
        res.vrs.signature.r,
        res.vrs.signature.s
      );
      await toast.promise(res, {
        loading: "NFTs creation in process",
        success: "NFTs created successfully",
        error: "Error in NFT creation",
      });

      console.log("NFTs created:", res);
      setIsLoading(false);
    } catch (error) {
      console.log("Error creating NFTs:", error);
      setIsLoading(false);
    }
  };

  const availablePkg = ["250", "230"];
  return (
    <>
      <div className="row  available-packages">
        <div className="row" style={{ paddingLeft: "34px" }}>
          <h4
            className="title-create-item mt-4 col-lg-12"
            style={{ textAlign: "left" }}
          >
            Available Packages
          </h4>
          <div className="d-flex flex-wrap justify-content-start  gap-3">
            {availablePkg.map((pkg, index) => (
              <div className="package-container" key={index}>
                <button
                  type="button"
                  className="sc-button  style style-1  "
                  style={{ padding: "5px 26px" }}
                >
                  ${pkg}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row" style={{ paddingTop: "40px" }}>
        <>
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
                <h4 className="title-create-item mt-4 ">Preview item</h4>
                <div
                  className="sc-card-product"
                  style={{ border: " 1px solid rgb(81, 66, 252)" }}
                >
                  <div className="card-media">
                    <a href="">
                      <img src={nft.preview || CyberDoberman} alt="Axies" />
                    </a>
                    <a className="wishlist-button heart" href="/login">
                      <span className="number-like">${nft.price || 0}</span>
                    </a>
                  </div>
                  <div class="card-title">
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
                  </div>
                </div>
              </div>

              <div className="col-xl-9 col-lg-6 col-md-12 col-12">
                <div className="form-create-item mt-4">
                  <h4 className="title-create-item">Upload NFT</h4>
                  <h4 className="title-create-item">{index + 1} NFT</h4>
                  <label className="uploadFile">
                    <span className="filename">
                      {nft.file
                        ? nft.file.name
                        : "PNG, JPG, GIF, WEBP, or MP4. Max 200MB."}
                    </span>
                    <input
                      type="file"
                      className="inputfile form-control"
                      name="images"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, index)}
                    />
                  </label>

                  <h4 className="title-create-item">Price</h4>
                  <select
                    className="mb-4 nft-price-dropdown"
                    value={nft.price}
                    onChange={(e) => handleInputChange(e, index, "price")}
                  >
                    <option value="">Enter price for one item (USDT)</option>
                    {BulkNFTpriceOptions.map((price, idx) => (
                      <option key={idx} value={price / 5}>
                        ${price / 5} ({price / 5} * 5)
                      </option>
                    ))}
                  </select>

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
        </>
      </div>
      <div className="create-nft-container  ">
        <button className="createbtn mt-4" type="button" onClick={nftCreate}>
          {isLoading ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
            ></span>
          ) : (
            "Create NFT"
          )}
        </button>
        <FaPlus onClick={addNFTField} size={20} style={{ cursor: "pointer" }} />
      </div>
    </>
  );
}
