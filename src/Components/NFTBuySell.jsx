import { useState } from "react";
import Header from "./header";

export default function NFTBuySell() {
  const [action, setAction] = useState("buy");
  const [amount, setAmount] = useState("");

  const handleActionChange = (newAction) => {
    setAction(newAction);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = () => {
    alert(`${action === "buy" ? "Buying" : "Selling"} ${amount} NFT(s)`);
  };

  return (
    <>
      {" "}
      <div className="headerCommon">
        <div
          data-v-b49386ae=""
          class="headerImg headerimg-custom header-banner"
        >
          <Header></Header>
          {/* <img
                    data-v-b49386ae=""
                    src="https://image.treasurenft.xyz/PC/img/header_bg_L.png"
                    alt="headerImg"
                    loading="lazy"
                  /> */}
          <h2 data-v-b49386ae="" class="headerImg-text title-black-PR-30">
            NFT Buy/Sell
          </h2>
        </div>
      </div>
      <div className="card nft-buy-sell-card p-4">
        <div className="card-header text-center">
          <h5 className="card-title">NFT Buy/Sell</h5>
        </div>
        <div className="card-body">
          <div className="btn-group w-100 mb-3">
            <button
              className={`btn ${
                action === "buy" ? "btn-success" : "btn-outline-success"
              }`}
              onClick={() => handleActionChange("buy")}
            >
              Buy
            </button>
            <button
              className={`btn ${
                action === "sell" ? "btn-danger" : "btn-outline-danger"
              }`}
              onClick={() => handleActionChange("sell")}
            >
              Sell
            </button>
          </div>
          <input
            type="number"
            className="form-control mb-3 nft-input"
            placeholder="Enter Amount"
            value={amount}
            onChange={handleAmountChange}
          />
          <button
            className="btn btn-primary w-100 nft-btn"
            onClick={handleSubmit}
          >
            {action === "buy" ? "Buy NFT" : "Sell NFT"}
          </button>
        </div>
      </div>
    </>
  );
}
