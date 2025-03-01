import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  return (
    <div className="explanationArea">
      <div className="row justify-content-center text-center">
        <div className="col-lg-4 col-md-6 col-12 text-area mb-4">
          <div className="title">
            Explore, Discover and Earn Big with one of the top Web3 NFT
            Marketplaces in the world
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 text-area mb-4">
          <img
            src="https://image.treasurenft.xyz/icon/icon_cardTick_01.png"
            alt="icon"
            className="icon"
            loading="lazy"
          />
          <div>
            <p className="title-sub">Multi-Reward</p>
            <p className="description">
              TreasureNFT leverages a proprietary AI-powered algorithmic trading
              model, and provides a dual earnings mechanism with trading rewards
              as well as referral rewards.
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 text-area mb-4">
          <img
            src="https://image.treasurenft.xyz/icon/icon_histogram_01.png"
            alt="icon"
            className="icon"
            loading="lazy"
          />
          <div>
            <p className="title-sub">Earn Future Value</p>
            <p className="description">
              TreasureNFT reduces the entry hurdles of the NFT market and
              expands the boundaries of the NFT collection & trading through its
              innovative AI algorithmic trading process and rewarding financial
              model.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
