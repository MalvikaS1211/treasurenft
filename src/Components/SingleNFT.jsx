import React, { useEffect, useState } from "react";
import CyberDoberman from "../assets/blogbg3.jpg";
import MattRamos from "../assets/MattRamos.jpg";
import axios from "axios";
import {
  createNftVrsFn,
  dueNFT,
  eligibleForCreateNFT,
  getNftStartStop,
  getStatus,
  getUserInfo,
  pinataApiKey,
  pinataSecretApiKey,
  updateNFTDetails,
  verifyNftFn,
} from "../Helper/API_Functions";
import {
  approveToken,
  createNFTFn,
  fetchUserTokenBalance,
} from "../Helper/Web3";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";

export default function SingleNFT() {
  const { address } = useAccount();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [nftPrice, setNftPrice] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [preview, setPreview] = useState(null);
  const [creationFee, setCreationFee] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [totalNFTAmount, setTotalNFTAmount] = useState(0);
  const [allUsers, setAllUsers] = useState(null);
  const [isAllowed, setIsAllowed] = useState(false);
  const [NftAction, setNftAction] = useState(false);
  const [dueNFts, setDueNFTs] = useState();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedNft, setSelectedNft] = useState({
    tokenId: "",
    buyer: "",
    buyerPaid: "",
  });

  const UserInfo = async () => {
    try {
      const res = await getUserInfo(address);
      setAllUsers(res.userLimits);
      console.log("UserInfo in SingleNFT", res.userLimits);
    } catch (error) {
      console.log(error);
    }
  };

  const handleIsAllowedNFT = async () => {
    try {
      const res = await getStatus(address);
      console.log(res, "getStatus");
      console.log(res.data.isAllowed, "IsAllowed");
      setIsAllowed(res.data.isAllowed);
    } catch (error) {}
  };

  const handleDueNFT = async () => {
    try {
      const response = await dueNFT(address);
      console.log(response, "DueNFT");
      setDueNFTs(response?.dueData);
      console.log(response?.dueData, "buyerpaid");
    } catch (error) {
      setDueNFTs([]);
    }
  };

  useEffect(() => {
    UserInfo();
    handleIsAllowedNFT();
    handleDueNFT();
  }, [address]);

  const handleFileChange = (e) => {
    try {
      const file = e.target.files[0];
      setSelectedFile(file);
      if (file) {
        const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];
        if (!allowedTypes.includes(file.type)) {
          toast.error("Only PNG and JPG files are allowed!");
          return;
        }
        setSelectedFile(file);
        setPreview(URL.createObjectURL(file));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleNFTPrice = (e) => {
    try {
      const price = parseFloat(e.target.value) || 0;
      const fee = (price * 20) / 100;
      const total = price + fee;

      setNftPrice(price);
      setCreationFee(fee);
      setTotalNFTAmount(total);
    } catch (error) {
      console.log("handleNFTPrice".error);
    }
  };
  const SingleNFTpriceOptions = [5, 15, 100];
  // const SingleNFTpriceOptions = [
  //   50, 100, 150, 200, 250, 350, 500, 650, 750, 850, 1000, 1150, 1250, 1350,
  //   1500,
  // ];
  // const pinataApiKey = "e45f06a4f288fd4c7ded";
  // const pinataSecretApiKey =
  //   "5d66447d15dde18b2851a2d6aefc48f4ca25b29c05440027f816f7d176cb7fdd";

  const uploadToIPFS = async (file) => {
    try {
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
    } catch (error) {
      console.log("uploadToIPFS", error);
    }
  };

  const uploadMetadataToIPFS = async (imageHash) => {
    try {
      const metadata = {
        name: title,
        description: description,
        image: imageHash,
      };
      console.log(metadata, "metadata");
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
      console.log("second one ", data.IpfsHash, "::::");

      return `ipfs://${data.IpfsHash}`;
    } catch (error) {
      console.log("uploadMetadataToIPFS", error);
    }
  };

  const tokenApp1 = async (amt) => {
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

  const handleMintNFT = async () => {
    if (!selectedFile || !title || !description) {
      toast.error("Please fill all fields and select a file!");
      return;
    }
    try {
      console.log(selectedFile, title, description);
      const imageHash = await uploadToIPFS(selectedFile);
      console.log(imageHash, "imagasHash aftewr firesat step");
      const metadataURI = await uploadMetadataToIPFS(imageHash);
      console.log(title, "::::", description, imageHash, metadataURI);
      return metadataURI;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const nftCreate = async () => {
    setIsLoading(true);
    try {
      if (!address) {
        setIsLoading(false);
        toast.error("Please connect your wallet");
        return;
      }
      if (isLoading == true) {
        setIsLoading(false);
        return toast.error("Your request is pending");
      }
      if (!title || !description || !selectedFile || !nftPrice) {
        setIsLoading(false);
        return toast.error("Please fill all fields and select a file!");
      }
      const userBalance = await fetchUserTokenBalance(address);
      console.log(userBalance,totalNFTAmount, "userBalance");
      if (userBalance < totalNFTAmount) {
        setIsLoading(false);
        return toast.error(
          `You need to have at least ${totalNFTAmount} USDT to register`
        );
      }
      const iphashRes = await handleMintNFT();
      const totalAmount = Number(nftPrice) + 0.2 * Number(nftPrice);
      if (iphashRes) {
        const res = await createNftVrsFn(
          address,
          Number(nftPrice),
          title,
          description,
          iphashRes,
          totalAmount
        );
        // console.log(res, res.data.message, "VRS response");
        if (res.success) {
          const tokenApp = await tokenApp1(totalAmount);
          if (tokenApp) {
            const nft = createNFTFn(
              res.vrs.title,
              res.vrs.description,
              res.vrs.metadataURI,
              res.vrs.initialPrice,
              res.vrs.totalAmount,
              res.vrs.signature.v,
              res.vrs.signature.r,
              res.vrs.signature.s
            );
            await toast.promise(nft, {
              loading: "Nft creation in process",
              success: "Nft created successfully",
              error: "error in nft creation",
            });
            setIsLoading(false);
            setSelectedFile("");
            setNftPrice("");
            setTitle("");
            setDescription("");
            setPreview(CyberDoberman);
            setTimeout(() => {}, 2000);
          }
          setIsLoading(false);
        } else {
          setIsLoading(false);
          toast.error(res.data.message);
          return;
        }
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleNftAction = async () => {
    try {
      const response = await getNftStartStop("GET");
      console.log(response.nftCreationBlockStatus, "response::::::");
      setNftAction(response?.nftCreationBlockStatus);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleNftAction();
  }, [address]);

  const dueNFTCreate = async () => {
    try {
      if (!address) {
        setIsLoading(false);
        toast.error("Please connect your wallet");
        return;
      }
      if (isLoading == true) {
        setIsLoading(false);
        return toast.error("Your request is pending");
      }
      if (!title || !description || !selectedFile) {
        setIsLoading(false);
        return toast.error("Please fill all fields and select a file!");
      }
      const iphashRes = await handleMintNFT();
      let totalAmount = 0;
      ``;
      if (iphashRes) {
        const res = await verifyNftFn(
          selectedNft.tokenId,
          address,
          Number(selectedNft.buyerPaid) / 1e18,
          title,
          description,
          iphashRes,
          totalAmount
        );
        console.log(iphashRes, "iphashRes");

        if (res.success) {
          const tokenApp = await tokenApp1(totalAmount);
          if (tokenApp) {
            const nft = createNFTFn(
              res.vrs.title,
              res.vrs.description,
              res.vrs.metadataURI,
              res.vrs.initialPrice,
              res.vrs.totalAmount,
              res.vrs.signature.v,
              res.vrs.signature.r,
              res.vrs.signature.s
            );
            const tx = await toast.promise(nft, {
              loading: "Nft creation in process",
              success: "Nft created successfully",
              error: "error in nft creation",
            });

            console.log(tx);
            let obj = {};
            obj["txHash"] = tx.transactionHash;
            obj["from"] = tx.from;
            obj["blockNumber"] = Number(tx.blockNumber);
            console.log(obj, ":::obj");
            if (tx) {
              const apiRes = await updateNFTDetails(
                address,
                selectedNft.tokenId,
                obj
              );
              console.log(apiRes);

              setTimeout(() => {
                handleDueNFT();
              }, 3000);
            }
            console.log(tx, "::::::::asdfasfdfsadfdsfsdafdsasadfdfs");
            setIsLoading(false);
            setSelectedFile("");
            setNftPrice("");
            setTitle("");
            setDescription("");
            setPreview(CyberDoberman);
            setTimeout(() => {}, 2000);
            setSelectedNft({});
          }
          setIsLoading(false);
        } else {
          setIsLoading(false);
          toast.error(res.data.message);
          setSelectedNft({});
          return;
        }
      }
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Something went wrong. Please try again.";
      toast.error(message);
      console.log("Error in dueNFTCreate", error);
    }
  };
  const [eligibleForCreate, setEligibleForCreate] = useState(null);
  const showNFTBtn = async () => {
    const res = await eligibleForCreateNFT(address);
    console.log(res?.eligible, "eligibleForCreateNFT");
    setEligibleForCreate(res?.eligible);
  };
  useEffect(() => {
    showNFTBtn();
  }, [address]);

  return (
    <>
      <div>
        <p
          className="pt-4 text-white p-4"
          style={{ textAlign: "justify", color: "black", fontSize: "16px" }}
        >
          <b> Note :</b> All NFTs must follow the ERC-721 standard. Content must
          not include political or religious themes, nudity or explicit
          material, violence, copyright violations, or any illegal or offensive
          material. The image must be in a square aspect ratio. Any breach of
          these guidelines will result in the permanent deactivation of NFT
          creation rights.
        </p>
      </div>
      <div className="row available-packages">
        <div className="row" style={{ paddingLeft: "34px" }}>
          <h4
            className="title-create-item mt-4 col-lg-12"
            style={{ textAlign: "left" }}
            onClick={dueNFTCreate}
          >
            Due NFTs
          </h4>
          <div className="d-flex flex-wrap justify-content-start gap-3">
            {dueNFts &&
              dueNFts?.map((nft, index) => {
                return (
                  <div className="package-container" key={index}>
                    {/* <span> ${nft?.buyerPaid}</span> */}
                    <button
                      type="button"
                      className="sc-button style style-1"
                      style={{
                        padding: "5px 26px",
                        backgroundColor:
                          selectedIndex === index ? "#5142fc" : "",
                        color: selectedIndex === index ? "white" : "",
                      }}
                      onClick={() => {
                        setSelectedIndex(index);
                        setSelectedNft({
                          tokenId: nft?.tokenId,
                          buyer: nft?.buyer,
                          buyerPaid: nft?.buyerPaid,
                        });
                      }}
                    >
                      ${(nft?.buyerPaid / 1e18).toFixed(4)}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div
        class="col-xl-3 col-lg-6 col-md-6 col-12"
        style={{ paddingTop: "40px" }}
      >
        <h4 class="title-create-item">Preview item</h4>
        <div class="sc-card-product">
          <div class="card-media">
            <a href="">
              <img src={preview || CyberDoberman} alt="Axies" />
            </a>
            <a class="wishlist-button heart" href="/login">
              <span className="number-like">${nftPrice || 0}</span>
            </a>
          </div>
          <div class="card-title">
            <h6>NFT Price</h6>
            <div class="tags">${nftPrice || 0}</div>
          </div>
          <div class="card-title">
            <h6>Creation Fee (20%)</h6>
            <div class="tags">${creationFee}</div>
          </div>
          <div class="card-title">
            <h6>Total Amount</h6>
            <div class="tags">${totalNFTAmount}</div>
          </div>
        </div>
      </div>
      <div
        className="col-xl-9 col-lg-6 col-md-12 col-12"
        style={{ paddingTop: "40px" }}
      >
        <div className="form-create-item">
          <form>
            <h4 className="title-create-item">Upload File</h4>
            <label className="uploadFile">
              <span className="filename">
                {selectedFile ? selectedFile.name : "PNG, JPG"}
              </span>
              <input
                type="file"
                className="inputfile form-control"
                name="file"
                accept="image/png, image/jpg"
                onChange={handleFileChange}
              />
            </label>
          </form>

          <div className="flat-tabs tab-create-item">
            <div className="react-tabs__tab-panel">
              <form>
                {!selectedNft.tokenId && (
                  <>
                    <h4 className="title-create-item">Price</h4>
                    <select
                      className=" mb-4 nft-price-dropdown "
                      style={{ background: "var(--primary-bg-color)" }}
                      value={nftPrice}
                      onChange={handleNFTPrice}
                    >
                      <option className="text-white" value="">
                        Enter price for one item (USDT)
                      </option>
                      {SingleNFTpriceOptions.map((price, index) => (
                        <option
                          key={index}
                          value={price}
                          className="text-white"
                        >
                          $ {price}
                        </option>
                      ))}
                    </select>
                  </>
                )}
                <h4 className="title-create-item">Title</h4>
                <input
                  type="text"
                  placeholder="Item Name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <h4 className="title-create-item">Description</h4>
                <textarea
                  placeholder="e.g. “This is a very limited item”"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <div className="create-nft-container">
                  {eligibleForCreate === true && (
                    <button
                      className="createbtn"
                      onClick={nftCreate}
                      type="button"
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
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
