import React, { useState } from "react";
import CyberDoberman from "../assets/CyberDoberman.jpg";
import MattRamos from "../assets/MattRamos.jpg";
import { FaPlus } from "react-icons/fa";

export default function BulkNFT() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [nftPrice, setNftPrice] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [nfts, setNfts] = useState([
    { file: null, price: "", title: "", description: "" },
  ]);
  const [preview, setPreview] = useState(null);

  const BulkNFTpriceOptions = [
    250, 500, 750, 1000, 1250, 1750, 2500, 3250, 3750, 4250, 5000, 5750, 6250,
    6750, 7500,
  ];

  const handleFileChange = (event, index) => {
    const files = Array.from(event.target.files);
    const newNfts = [...nfts];
    newNfts[index].file = files.length > 0 ? files[0] : null;
    setNfts(newNfts);
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
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

  return (
    <div className="row" style={{ paddingTop: "40px" }}>
      {nfts.map((nft, index) => (
        <div key={index} className="col-12 d-flex flex-wrap">
          {/* Left side - Preview */}
          <div className="col-xl-3 col-lg-6 col-md-6 col-12">
            <h4 className="title-create-item">Preview item</h4>
            <div className="sc-card-product">
              <div className="card-media">
                <a href="">
                  <img src={preview || CyberDoberman} alt="Axies" />
                </a>
                <a className="wishlist-button heart" href="/login">
                  <span className="number-like">{nft.price || 0}</span>
                </a>
              </div>
              <div class="card-title">
                <h6>NFT Price</h6>
                <div class="tags">{nft.price || 0}</div>
              </div>
              <div class="card-title">
                <h6>Creation Fee (20%)</h6>
                <div class="tags">{(nft.price * 20) / 100}</div>
              </div>
              <div class="card-title">
                <h6>Total Amount</h6>
                <div class="tags">
                  {" "}
                  <div class="tags">
                    {parseFloat(nft.price || 0) +
                      parseFloat((nft.price * 20) / 100 || 0)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="col-xl-9 col-lg-6 col-md-12 col-12">
            <div className="form-create-item">
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
                <option value="">Enter price for bulk items (USDT)</option>
                {BulkNFTpriceOptions.map((price, idx) => (
                  <option key={idx} value={price}>
                    ${price} ({price / 5} * 5)
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

      {/* Add NFT Button */}
      <div className="create-nft-container">
        <button className="createbtn">Create NFTs</button>
        <FaPlus onClick={addNFTField} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
}
