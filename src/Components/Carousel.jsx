import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Import your images here
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
import { Carousel as BootstrapCarousel } from "bootstrap";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const carouselElement = document.getElementById("carouselExample");
    if (carouselElement) {
      new BootstrapCarousel(carouselElement);
    }
  }, []);

  const handleSelect = (index) => {
    setActiveIndex(index);
    const carousel = new BootstrapCarousel(
      document.getElementById("carouselExample")
    );
    carousel.to(index);
  };

  return (
    <div className="discover-nfts discovernft-custom">
      <h2 className="discover-title pb-4 title-black-1927B-30">
        Discover more NFTs
      </h2>
      <div className="filter-btn filter-btn-custom">
        <img
          src={icon_filter}
          alt="filterImg"
          loading="lazy"
          className="filter-img"
        />
        <span className="title-grey333-PR-16">All Filters</span>
      </div>
      <div className="bottons-section">
        <div className="d-flex gap-3">
          <button className="discovernft-btn" onClick={() => handleSelect(0)}>
            Stake
          </button>
          <button className="discovernft-btn" onClick={() => handleSelect(1)}>
            PolygonNFT
          </button>
          <button className="discovernft-btn" onClick={() => handleSelect(2)}>
            Art
          </button>
          <button className="discovernft-btn" onClick={() => handleSelect(3)}>
            Collectibles
          </button>
        </div>
      </div>
      <div
        id="carouselExample"
        className="carousel slide"
        // Remove data-bs-ride to disable automatic sliding
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="0"
            className={activeIndex === 0 ? "active" : ""}
            aria-current={activeIndex === 0 ? "true" : "false"}
            aria-label="Slide 1"
            onClick={() => handleSelect(0)} // Manually handle slide change
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="1"
            className={activeIndex === 1 ? "active" : ""}
            aria-current={activeIndex === 1 ? "true" : "false"}
            aria-label="Slide 2"
            onClick={() => handleSelect(1)} // Manually handle slide change
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="2"
            className={activeIndex === 2 ? "active" : ""}
            aria-current={activeIndex === 2 ? "true" : "false"}
            aria-label="Slide 3"
            onClick={() => handleSelect(2)} // Manually handle slide change
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="3"
            className={activeIndex === 3 ? "active" : ""}
            aria-current={activeIndex === 3 ? "true" : "false"}
            aria-label="Slide 4"
            onClick={() => handleSelect(3)} // Manually handle slide change
          ></button>
        </div>

        {/* Wrapper for slides */}
        <div className="carousel-inner">
          <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
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
          </div>
          <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
            <div className="discovernft-grid-polygonNFT ">
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
          </div>
          <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
            <div className="discovernft-grid-art ">
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
          </div>
          <div className={`carousel-item ${activeIndex === 3 ? "active" : ""}`}>
            <div className="discovernft-grid-collectibles ">
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
          </div>
        </div>

        {/* Left and right controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          onClick={() => handleSelect((activeIndex - 1 + 4) % 4)} // Handle previous slide
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          onClick={() => handleSelect((activeIndex + 1) % 4)} // Handle next slide
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="moreBtn moreBtn-custom">
        <div className="gradient-btn discover-more-btn">
          <button id="Gradient" className="padding-10 colorTransparent">
            <div className="GradientBtn-div">
              <p className="specialText-SB-20">Discover more NFTs</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
