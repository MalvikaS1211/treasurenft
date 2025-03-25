import React, { useState } from "react";
import CyberDoberman from "../assets/CyberDoberman.jpg";
import MattRamos from "../assets/MattRamos.jpg";
import axios from "axios";
import { createNftVrsFn } from "../Helper/API_Functions";
import { approveToken, createNFTFn } from "../Helper/Web3";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";

export default function SingleNFT() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [nftPrice, setNftPrice] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const { address } = useAccount();
  const [apiCall, setApiCall] = useState(false);

  const [preview, setPreview] = useState(null);
  const [creationFee, setCreationFee] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleNFTPrice = (e) => {
    const price = e.target.value;
    setNftPrice(price);
    setCreationFee((price * 20) / 100);
  };

  const SingleNFTpriceOptions = [
    50, 100, 150, 200, 250, 350, 500, 650, 750, 850, 1000, 1150, 1250, 1350,
    1500,
  ];
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

  const uploadMetadataToIPFS = async (imageHash) => {
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
      if (isLoading == true) {
        setIsLoading(false);
        return toast.error("Your request is pending");
      }
      if (!title || !description || !selectedFile || !amount) {
        setIsLoading(false);
        return toast.error("Please fill all fields and select a file!");
      }
      const iphashRes = await handleMintNFT();
      console.log(iphashRes, "step 1 ");
      const totalAmount = Number(nftPrice) + 0.2 * Number(nftPrice);
      console.log(
        address,
        Number(nftPrice),
        title,
        description,
        iphashRes,
        totalAmount,
        "step2"
      );
      if (iphashRes) {
        const res = await createNftVrsFn(
          address,
          Number(nftPrice),
          title,
          description,
          iphashRes,
          totalAmount
        );
        console.log(res, res.vrs, res.success, "VRS response");
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
            console.log(nft, "ASFDDDDDDDDDD");
            setIsLoading(false);
            setSelectedFile("");
            setNftPrice("");
            setTitle("");
            setDescription("");
            setPreview(CyberDoberman);
            setTimeout(() => {}, 2000);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        class="col-xl-3 col-lg-6 col-md-6 col-12"
        style={{ paddingTop: "40px" }}
      >
        <h4 class="title-create-item">Preview item</h4>
        <div
          class="sc-card-product"
          style={{ border: " 1px solid rgb(81, 66, 252)" }}
        >
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
            <div class="tags">
              ${parseFloat(nftPrice || 0) + parseFloat(creationFee || 0)}
            </div>
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
                {selectedFile
                  ? selectedFile.name
                  : "PNG, JPG, GIF, WEBP, or MP4."}
              </span>
              <input
                type="file"
                className="inputfile form-control"
                name="file"
                onChange={handleFileChange}
              />
            </label>
          </form>

          <div className="flat-tabs tab-create-item">
            <div className="react-tabs__tab-panel">
              <form>
                <h4 className="title-create-item">Price</h4>
                <select
                  className=" mb-4 nft-price-dropdown"
                  value={nftPrice}
                  onChange={handleNFTPrice}
                >
                  <option value="">Enter price for one item (USDT)</option>
                  {SingleNFTpriceOptions.map((price, index) => (
                    <option key={index} value={price}>
                      ${price}
                    </option>
                  ))}
                </select>

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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
