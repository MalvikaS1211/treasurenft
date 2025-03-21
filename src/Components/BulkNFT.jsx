import React, { useState } from "react";
import CyberDoberman from "../assets/CyberDoberman.jpg";
import MattRamos from "../assets/MattRamos.jpg";

export default function BulkNFT() {
  const [file, setFile] = useState(null);
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [activeTab, setActiveTab] = useState("single");
  const [nftValue, setNftValue] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState("");
  const BulkNFTpriceOptions = [
    300, 500, 700, 1000, 1200, 1700, 2400, 3100, 3500, 4000, 4700, 5400, 5900,
    6300, 7000,
  ];
  const handleBulkNFTFile = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    }
  };
  return (
    <>
      <div
        class="col-xl-3 col-lg-6 col-md-6 col-12"
        style={{ paddingTop: "40px" }}
      >
        <h4 class="title-create-item">Preview item</h4>
        <div class="sc-card-product">
          <div class="card-media">
            <a href="/item-details-01">
              <img src={CyberDoberman} alt="Axies" />
            </a>
            <a class="wishlist-button heart" href="/login">
              <span class="number-like"> 100</span>
            </a>
            {/* <div class="featured-countdown">
              <span class="slogan"></span>
              <span>05:18:51:31</span>
            </div> */}
          </div>
          <div class="card-title">
            <h5>
              <a href="/item-details-01">"Cyber Doberman #766”</a>
            </h5>
            <div class="tags">bsc</div>
          </div>
          <div class="meta-info">
            <div class="author">
              <div class="avatar">
                <img src={MattRamos} alt="Axies" />
              </div>
              <div class="info">
                <span>Owned By</span>
                <h6>
                  <a href="/author-02">Freddie Carpenter</a>
                </h6>
              </div>
            </div>
            <div class="price">
              <span>Current Bid</span>
              <h5> 4.89 ETH</h5>
            </div>
          </div>
          {/* <div class="card-bottom">
              <a
                class="sc-button style 
                                  bag fl-button pri-3"
                href="/wallet-connect"
              >
                <span>Place Bid</span>
              </a>
              <a class="view-history reload" href="/activity-01">
                      View History
                    </a>
            </div> */}
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
                {selectedFiles.length > 0
                  ? selectedFiles.map((file) => file.name).join(" , ")
                  : "PNG, JPG, GIF, WEBP, or MP4. Max 200MB."}
              </span>
              <input
                type="file"
                className="inputfile form-control"
                name="images"
                onChange={handleBulkNFTFile}
                multiple
              />
            </label>
          </form>

          <div className="flat-tabs tab-create-item">
            <div className="react-tabs__tab-panel">
              <form>
                <h4 className="title-create-item">Price</h4>
                <select
                  className=" mb-4"
                  value={nftValue}
                  onChange={(e) => setNftValue(e.target.value)}
                >
                  <option value="">Enter price for bulk items (USDT)</option>
                  {BulkNFTpriceOptions.map((price, index) => (
                    <option key={index} value={price}>
                      ${price}
                    </option>
                  ))}
                </select>
                {/* <input
                    type="text"
                    placeholder="Enter price for one item (USDT)"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  /> */}

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
                <button className="createbtn">Create NFT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
