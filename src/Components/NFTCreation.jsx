import { useState } from "react";
import Header from "./header";
import LogoWhite from "../assets/LogoWhite.png";
import Footer from "./Footer";

export default function NFTCreationCard() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="headerCommon">
        <div
          data-v-b49386ae=""
          class="headerImg headerimg-custom header-banner"
        >
          <Header Logo={LogoWhite}></Header>
          {/* <img
                data-v-b49386ae=""
                src="https://image.treasurenft.xyz/PC/img/header_bg_L.png"
                alt="headerImg"
                loading="lazy"
              /> */}
          <h2 data-v-b49386ae="" class="headerImg-text title-black-PR-30">
            NFT Creation
          </h2>
        </div>
      </div>
      <div className="p-4">
        {" "}
        <div className="card nft-card p-4">
          <div className="card-header text-center">
            <h5 className="card-title">Create Your NFT</h5>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <input
                type="text"
                color="white"
                className="form-control nft-input"
                placeholder="NFT Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control nft-textarea"
                color="white"
                placeholder="NFT Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Upload Image</label>
              <input
                type="file"
                className="form-control nft-upload"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            {image && (
              <img
                src={image}
                alt="NFT Preview"
                className="img-fluid nft-preview"
              />
            )}
            <button className="btn nft-btn w-100">Create NFT</button>
          </div>
        </div>
      </div>

      <div className="Footerbg" style={{ paddingTop: "60px" }}>
        <Footer />
      </div>
    </>
  );
}
