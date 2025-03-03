import React from "react";
import "../css/3094.9a4c8b48.css";
import Stake_07758_compre from "../assets/Stake_07758_compre.webp";
import stake_img from "../assets/stake_img.webp";
import TUsdt from "../assets/TUsdt.png";

export default function DiscoverNFTs() {
  return (
    <div>
      {" "}
      <div className="discover-nfts discovernft-custom">
        <h2 class="discover-title title-black-1927B-30">Discover more NFTs</h2>
        <div class="filter-btn filter-btn-custom">
          <img
            src="https://image.treasurenft.xyz/icon/icon_filter.png"
            alt="filterImg"
            loading="lazy"
            class="filter-img"
          />
          <span class="title-grey333-PR-16">All Filters</span>
        </div>
        <div classname="bottons-section">
          <div className="d-flex gap-3">
            <button className="discovernft-btn">Stake</button>
            <button className="discovernft-btn">polygonNFT</button>
            <button className="discovernft-btn">Art</button>
            <button className="discovernft-btn">collectibles</button>
          </div>
        </div>
        <div className="row gap-1">
          <div className="discover-card-wrap col-3">
            <div className="discover-box">
              <div className="img-box">
                <img src={Stake_07758_compre} alt="" className="discover-img" />
                <img src={stake_img} alt="" className="staking-image" />
              </div>
            </div>
            <div classname="text-section">
              <h3>Stake_670416</h3>
              <div className="coin-price-text">
                <div classname="text-section-usdt">
                  <img src={TUsdt} alt="" classname="coinimage" />
                  <span claasname="price-text">321 USDT</span>
                </div>
              </div>
            </div>
          </div>
          <div className="discover-card-wrap col-3">
            <div className="discover-box">
              <div className="img-box">
                <img src={Stake_07758_compre} alt="" className="discover-img" />
                <img src={stake_img} alt="" className="staking-image" />
              </div>
            </div>
            <div classname="text-section">
              <h3>Stake_670416</h3>
              <div className="coin-price-text">
                <div classname="text-section-usdt">
                  <img src={TUsdt} alt="" classname="coinimage" />
                  <span claasname="price-text">321 USDT</span>
                </div>
              </div>
            </div>
          </div>
          <div className="discover-card-wrap col-3">
            <div className="discover-box">
              <div className="img-box">
                <img src={Stake_07758_compre} alt="" className="discover-img" />
                <img src={stake_img} alt="" className="staking-image" />
              </div>
            </div>
            <div classname="text-section">
              <h3>Stake_670416</h3>
              <div className="coin-price-text">
                <div classname="text-section-usdt">
                  <img src={TUsdt} alt="" classname="coinimage" />
                  <span claasname="price-text">321 USDT</span>
                </div>
              </div>
            </div>
          </div>
          <div className="discover-card-wrap col-3">
            <div className="discover-box">
              <div className="img-box">
                <img src={Stake_07758_compre} alt="" className="discover-img" />
                <img src={stake_img} alt="" className="staking-image" />
              </div>
            </div>
            <div classname="text-section">
              <h3>Stake_670416</h3>
              <div className="coin-price-text">
                <div classname="text-section-usdt">
                  <img src={TUsdt} alt="" classname="coinimage" />
                  <span claasname="price-text">321 USDT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
