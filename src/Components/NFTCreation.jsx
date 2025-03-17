import { useEffect, useState } from "react";
import Header from "./header";
import LogoWhite from "../assets/LogoWhite.png";
import Footer from "./Footer";
import PhoneHeader from "./PhoneHeader";

export default function NFTCreationCard() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [nftValue, setNftValue] = useState("");
  const [activeTab, setActiveTab] = useState("single");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const SingleNFTpriceOptions = [
    50, 100, 150, 200, 250, 350, 500, 650, 750, 850, 1000, 1150, 1250, 1350,
    1500,
  ];
  const BulkNFTpriceOptions = [
    300, 500, 700, 1000, 1200, 1700, 2400, 3100, 3500, 4000, 4700, 5400, 5900,
    6300, 7000,
  ];
  const SingleNFTCreation = () => {
    return (
      <div className="p-2">
        <div className="card nft-card text-center py-5 ">
          <h1 className="text-white pb-3">Single NFT Creation</h1>
          <div
            className="nft-form p-4 rounded"
            style={{
              backgroundColor: "white",
              maxWidth: "400px",
              margin: "auto",
            }}
          >
            <input
              type="text"
              className="form-control mb-3"
              placeholder="NFT Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              className="form-control mb-3"
              placeholder="NFT Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <select
              className="form-control mb-3"
              value={nftValue}
              onChange={(e) => setNftValue(e.target.value)}
            >
              <option value="">Select NFT Value</option>
              {SingleNFTpriceOptions.map((price, index) => (
                <option key={index} value={price}>
                  ${price}
                </option>
              ))}
            </select>
            <input
              type="file"
              className="form-control mb-3"
              onChange={handleImageUpload}
            />
            {image && (
              <img src={image} alt="NFT Preview" className="img-fluid mb-3" />
            )}
            <button className="btn nft-btn w-100">Create NFT</button>
          </div>
        </div>
      </div>
    );
  };

  const BulkNFTCreation = () => {
    return (
      <div className="p-2">
        <div className="card nft-card text-center py-5 ">
          <h1 className="text-white pb-3">Bulk NFT Creation</h1>
          <div
            className="nft-form p-4 rounded"
            style={{
              backgroundColor: "white",
              maxWidth: "400px",
              margin: "auto",
            }}
          >
            <input
              type="text"
              className="form-control mb-3"
              placeholder="NFT Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              className="form-control mb-3"
              placeholder="NFT Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <select
              className="form-control mb-3"
              value={nftValue}
              onChange={(e) => setNftValue(e.target.value)}
            >
              <option value="">Select NFT Value</option>
              {BulkNFTpriceOptions.map((price, index) => (
                <option key={index} value={price}>
                  ${price}
                </option>
              ))}
            </select>
            <input
              type="number"
              className="form-control mb-3"
              placeholder="NFT Quantity"
              min="1"
            />

            <input
              type="file"
              className="form-control mb-3"
              onChange={handleImageUpload}
            />
            {image && (
              <img src={image} alt="NFT Preview" className="img-fluid mb-3" />
            )}
            <button className="btn nft-btn w-100">Create NFT</button>
          </div>
        </div>
      </div>
    );
  };
  const [paddingValue, setPaddingValue] = useState("30px");

  const handleResize = () => {
    if (window.innerWidth <= 576) {
      setPaddingValue("110px");
    } else {
      setPaddingValue("30px");
    }
  };

  useEffect(() => {
    handleResize(); // For initial load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div
        data-v-b49386ae=""
        className="headerImg headerimg-custom header-banner"
        style={{ padding: paddingValue }}
      >
        <div className="d-none d-md-block">
          <Header Logo={LogoWhite} />
        </div>
        <div className="d-block d-md-none">
          <PhoneHeader Logo={LogoWhite} />
        </div>
        <h2 data-v-b49386ae="" className="headerImg-text title-black-PR-30">
          NFT Creation
        </h2>
      </div>

      <div className="container justify-content-center">
        <ul className="nav nav-pills w-100">
          <li
            className={activeTab === "single" ? "active" : ""}
            onClick={() => setActiveTab("single")}
          >
            <a>Single NFT Creation</a>
          </li>
          <li
            className={activeTab === "bulk" ? "active" : ""}
            onClick={() => setActiveTab("bulk")}
          >
            <a>Bulk NFT Creation</a>
          </li>
        </ul>
      </div>
      {activeTab === "single" ? <SingleNFTCreation /> : <BulkNFTCreation />}
      <div className="Footerbg" style={{ paddingTop: "60px" }}>
        <Footer />
      </div>
    </>
  );
}
