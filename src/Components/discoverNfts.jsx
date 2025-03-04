import React from "react";
import "../css/3094.9a4c8b48.css";

import Stake_07758_compre from "../assets/Stake_07758_compre.webp";
import stake_img from "../assets/stake_img.webp";
import TUsdt from "../assets/TUsdt.png";
import Stake_03083_compre from "../assets/Stake_03083_compre.webp";
import Stake_04050_compre from "../assets/Stake_04050_compre.webp";
import Stake_07123_compre from "../assets/Stake_07123_compre.webp";
import Stake_06195_compre from "../assets/Stake_06195_compre.webp";
import Stake_02690_compre from "../assets/Stake_02690_compre.webp";
import Stake_01493_compre from "../assets/Stake_01493_compre.webp";
import Stake_01425_compre from "../assets/Stake_01425_compre.webp";
import icon_filter from "../assets/icon_filter.webp";

export default function DiscoverNFTs() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 cards at a time
    slidesToScroll: 4, // Scroll 4 cards at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="discover-nfts discovernft-custom">
        <h2 class="discover-title title-black-1927B-30">Discover more NFTs</h2>
        <div class="filter-btn filter-btn-custom">
          <img
            src={icon_filter}
            alt="filterImg"
            loading="lazy"
            class="filter-img"
          />
          <span class="title-grey333-PR-16">All Filters</span>
        </div>
        <div className="bottons-section">
          <div className="d-flex gap-3">
            <button className="discovernft-btn">Stake</button>
            <button className="discovernft-btn">polygonNFT</button>
            <button className="discovernft-btn">Art</button>
            <button className="discovernft-btn">collectibles</button>
          </div>
        </div>
        <div className="discovernft-grid-stake ">
          <div className="d-flex gap-3">
            <div className="discover-card-wrap col-3">
              <div className="discover-box">
                <div className="img-box">
                  <img
                    src={Stake_07758_compre}
                    alt=""
                    className="discover-img"
                  />
                  <img src={stake_img} alt="" className="staking-image" />
                </div>
              </div>
              <div className="text-section">
                <h3>Stake_670416</h3>
                <div className="coin-price-text">
                  <div className="text-section-usdt">
                    <img src={TUsdt} alt="" className="coinimage" />
                    <span className="price-text">321 USDT</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="discover-card-wrap col-3">
              <div className="discover-box">
                <div className="img-box">
                  <img
                    src={Stake_03083_compre}
                    alt=""
                    className="discover-img"
                  />
                  <img src={stake_img} alt="" className="staking-image" />
                </div>
              </div>
              <div className="text-section">
                <h3>Stake_670416</h3>
                <div className="coin-price-text">
                  <div className="text-section-usdt">
                    <img src={TUsdt} alt="" className="coinimage" />
                    <span className="price-text">321 USDT</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="discover-card-wrap col-3">
              <div className="discover-box">
                <div className="img-box">
                  <img
                    src={Stake_04050_compre}
                    alt=""
                    className="discover-img"
                  />
                  <img src={stake_img} alt="" className="staking-image" />
                </div>
              </div>
              <div className="text-section">
                <h3>Stake_670416</h3>
                <div className="coin-price-text">
                  <div className="text-section-usdt">
                    <img src={TUsdt} alt="" className="coinimage" />
                    <span className="price-text">321 USDT</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="discover-card-wrap col-3">
              <div className="discover-box">
                <div className="img-box">
                  <img
                    src={Stake_07123_compre}
                    alt=""
                    className="discover-img"
                  />
                  <img src={stake_img} alt="" className="staking-image" />
                </div>
              </div>
              <div className="text-section">
                <h3>Stake_670416</h3>
                <div className="coin-price-text">
                  <div className="text-section-usdt">
                    <img src={TUsdt} alt="" className="coinimage" />
                    <span className="price-text">321 USDT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex gap-3">
            <div className="discover-card-wrap col-3">
              <div className="discover-box">
                <div className="img-box">
                  <img
                    src={Stake_06195_compre}
                    alt=""
                    className="discover-img"
                  />
                  <img src={stake_img} alt="" className="staking-image" />
                </div>
              </div>
              <div className="text-section">
                <h3>Stake_670416</h3>
                <div className="coin-price-text">
                  <div className="text-section-usdt">
                    <img src={TUsdt} alt="" className="coinimage" />
                    <span className="price-text">321 USDT</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="discover-card-wrap col-3">
              <div className="discover-box">
                <div className="img-box">
                  <img
                    src={Stake_02690_compre}
                    alt=""
                    className="discover-img"
                  />
                  <img src={stake_img} alt="" className="staking-image" />
                </div>
              </div>
              <div className="text-section">
                <h3>Stake_670416</h3>
                <div className="coin-price-text">
                  <div className="text-section-usdt">
                    <img src={TUsdt} alt="" className="coinimage" />
                    <span className="price-text">321 USDT</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="discover-card-wrap col-3">
              <div className="discover-box">
                <div className="img-box">
                  <img
                    src={Stake_01493_compre}
                    alt=""
                    className="discover-img"
                  />
                  <img src={stake_img} alt="" className="staking-image" />
                </div>
              </div>
              <div className="text-section">
                <h3>Stake_670416</h3>
                <div className="coin-price-text">
                  <div className="text-section-usdt">
                    <img src={TUsdt} alt="" className="coinimage" />
                    <span className="price-text">321 USDT</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="discover-card-wrap col-3">
              <div className="discover-box">
                <div className="img-box">
                  <img
                    src={Stake_01425_compre}
                    alt=""
                    className="discover-img"
                  />
                  <img src={stake_img} alt="" className="staking-image" />
                </div>
              </div>
              <div className="text-section">
                <h3>Stake_670416</h3>
                <div className="coin-price-text">
                  <div className="text-section-usdt">
                    <img src={TUsdt} alt="" className="coinimage" />
                    <span className="price-text">321 USDT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="discovernft-grid-polygonNFT d-none ">
          <div className="d-flex gap-3">
            <div className="discover-card-wrap col-3">
              <div className="discover-box">
                <div className="img-box">
                  <img
                    src={Stake_07758_compre}
                    alt=""
                    className="discover-img"
                  />
                  <img src={stake_img} alt="" className="staking-image" />
                </div>
              </div>
              <div className="text-section">
                <h3>Stake_670416</h3>
                <div className="coin-price-text">
                  <div className="text-section-usdt">
                    <img src={TUsdt} alt="" className="coinimage" />
                    <span className="price-text">321 USDT</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="discover-card-wrap col-3">
              <div className="discover-box">
                <div className="img-box">
                  <img
                    src={Stake_03083_compre}
                    alt=""
                    className="discover-img"
                  />
                  <img src={stake_img} alt="" className="staking-image" />
                </div>
              </div>
              <div className="text-section">
                <h3>Stake_670416</h3>
                <div className="coin-price-text">
                  <div className="text-section-usdt">
                    <img src={TUsdt} alt="" className="coinimage" />
                    <span className="price-text">321 USDT</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="discover-card-wrap col-3">
              <div className="discover-box">
                <div className="img-box">
                  <img
                    src={Stake_04050_compre}
                    alt=""
                    className="discover-img"
                  />
                  <img src={stake_img} alt="" className="staking-image" />
                </div>
              </div>
              <div className="text-section">
                <h3>Stake_670416</h3>
                <div className="coin-price-text">
                  <div className="text-section-usdt">
                    <img src={TUsdt} alt="" className="coinimage" />
                    <span className="price-text">321 USDT</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="discover-card-wrap col-3">
              <div className="discover-box">
                <div className="img-box">
                  <img
                    src={Stake_07123_compre}
                    alt=""
                    className="discover-img"
                  />
                  <img src={stake_img} alt="" className="staking-image" />
                </div>
              </div>
              <div className="text-section">
                <h3>Stake_670416</h3>
                <div className="coin-price-text">
                  <div className="text-section-usdt">
                    <img src={TUsdt} alt="" className="coinimage" />
                    <span className="price-text">321 USDT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex gap-3">
            <div className="discover-card-wrap col-3">
              <div className="discover-box">
                <div className="img-box">
                  <img
                    src={Stake_06195_compre}
                    alt=""
                    className="discover-img"
                  />
                  <img src={stake_img} alt="" className="staking-image" />
                </div>
              </div>
              <div className="text-section">
                <h3>Stake_670416</h3>
                <div className="coin-price-text">
                  <div className="text-section-usdt">
                    <img src={TUsdt} alt="" className="coinimage" />
                    <span className="price-text">321 USDT</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="discover-card-wrap col-3">
              <div className="discover-box">
                <div className="img-box">
                  <img
                    src={Stake_02690_compre}
                    alt=""
                    className="discover-img"
                  />
                  <img src={stake_img} alt="" className="staking-image" />
                </div>
              </div>
              <div className="text-section">
                <h3>Stake_670416</h3>
                <div className="coin-price-text">
                  <div className="text-section-usdt">
                    <img src={TUsdt} alt="" className="coinimage" />
                    <span className="price-text">321 USDT</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="discover-card-wrap col-3">
              <div className="discover-box">
                <div className="img-box">
                  <img
                    src={Stake_01493_compre}
                    alt=""
                    className="discover-img"
                  />
                  <img src={stake_img} alt="" className="staking-image" />
                </div>
              </div>
              <div className="text-section">
                <h3>Stake_670416</h3>
                <div className="coin-price-text">
                  <div className="text-section-usdt">
                    <img src={TUsdt} alt="" className="coinimage" />
                    <span className="price-text">321 USDT</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="discover-card-wrap col-3">
              <div className="discover-box">
                <div className="img-box">
                  <img
                    src={Stake_01425_compre}
                    alt=""
                    className="discover-img"
                  />
                  <img src={stake_img} alt="" className="staking-image" />
                </div>
              </div>
              <div className="text-section">
                <h3>Stake_670416</h3>
                <div className="coin-price-text">
                  <div className="text-section-usdt">
                    <img src={TUsdt} alt="" className="coinimage" />
                    <span className="price-text">321 USDT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="moreBtn moreBtn-custom">
          <div class="gradient-btn discover-more-btn">
            <button id="Gradient" class="padding-10 colorTransparent">
              <div class="GradientBtn-div">
                <p class="specialText-SB-20">Discover more NFTs</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
