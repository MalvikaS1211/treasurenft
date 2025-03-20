import React from "react";

import { FaGripfire } from "react-icons/fa";

import hemlet from "../assets/hemlet.jpg";

import LivingVase from "../assets/LivingVase.jpg";
import FlameDress from "../assets/FlameDress.jpg";

import creativeArt from "../assets/creativeArt.jpg";

import RenaiXance from "../assets/RenaiXance.jpg";
import space from "../assets/space.jpg";
import cryptoegg from "../assets/cryptoegg.jpg";
import cyberprimal from "../assets/cyberprimal.jpg";
import CyberDoberman from "../assets/CyberDoberman.jpg";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import FooterNew from "./FooterNew";
import HeaderNew from "./HeaderNew";
export default function Trade() {
  return (
    <>
      <HeaderNew />
      <div className="tf-create-item tf-section p-0">
        <div className="dashboardbg">
          {" "}
          <div
            class="col-md-12 "
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <div
              class="page-title-heading mg-bt-40"
              style={{ marginTop: "40px" }}
            >
              <h1 class="heading text-center mt-0" style={{ color: "black" }}>
                Buy Item
              </h1>
            </div>
          </div>
        </div>
        <section className="tf-section today-pick">
          <div className="themesflat-container">
            <div className="row">
              {/* <div class="col-md-12">
                <div class="heading-live-auctions mg-bt-21">
                  <h2 class="tf-title pb-18">Today's Picks</h2>
                  <a class="exp style2" href="/explore-03">
                      EXPLORE MORE
                    </a>
                </div>
              </div> */}
              <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div class="sc-card-product explode style2 mg-bt  ">
                  <div class="card-media">
                    <a href="">
                      <img src={RenaiXance} alt="Axies" />
                    </a>
                    <div class="button-place-bid">
                      <button class="sc-button style-place-bid style bag fl-button pri-3">
                        <FaShoppingBag color="black" />
                        <span>Buy</span>
                      </button>
                    </div>
                    <div class="wishlist-button heart">
                      <IoIosHeartEmpty size={18} />
                      <span class="number-like">100</span>
                    </div>
                    <div class="coming-soon"></div>
                  </div>
                  <div class="card-title">
                    <h5>
                      <a href="">"The RenaiXance Rising the sun "</a>
                    </h5>
                  </div>
                  <div class="meta-info">
                    <div class="author">
                      <div class="avatar">
                        <img src={creativeArt} alt="Axies" />
                      </div>
                      <div class="info">
                        <span>Creator</span>
                        <h6>
                          <a href="">SalvadorDali</a>
                        </h6>
                      </div>
                    </div>
                    <div class="tags">bsc</div>
                  </div>
                  <div
                    class="card-bottom
                            style-explode"
                  >
                    <div class="price">
                      <span>Current Bid</span>
                      <div class="price-details">
                        <h5>4.89 ETH</h5>
                        <span>= $12.246</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div class="sc-card-product explode style2 mg-bt  ">
                  <div class="card-media">
                    <a href="">
                      <img src={cyberprimal} alt="Axies" />
                    </a>
                    <div class="button-place-bid">
                      <button class="sc-button style-place-bid style bag fl-button pri-3">
                        <FaShoppingBag color="black" />
                        <span>Buy</span>
                      </button>
                    </div>
                    <div class="wishlist-button heart">
                      <IoIosHeartEmpty size={18} />
                      <span class="number-like">100</span>
                    </div>
                    <div class="coming-soon"></div>
                  </div>
                  <div class="card-title">
                    <h5>
                      <a href="">"The RenaiXance Rising the sun "</a>
                    </h5>
                  </div>
                  <div class="meta-info">
                    <div class="author">
                      <div class="avatar">
                        <img src={creativeArt} alt="Axies" />
                      </div>
                      <div class="info">
                        <span>Creator</span>
                        <h6>
                          <a href="">SalvadorDali</a>
                        </h6>
                      </div>
                    </div>
                    <div class="tags">bsc</div>
                  </div>
                  <div
                    class="card-bottom
                            style-explode"
                  >
                    <div class="price">
                      <span>Current Bid</span>
                      <div class="price-details">
                        <h5>4.89 ETH</h5>
                        <span>= $12.246</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div class="sc-card-product explode style2 mg-bt  ">
                  <div class="card-media">
                    <a href="">
                      <img src={cryptoegg} alt="Axies" />
                    </a>
                    <div class="button-place-bid">
                      <button class="sc-button style-place-bid style bag fl-button pri-3">
                        <FaShoppingBag color="black" />
                        <span>Buy</span>
                      </button>
                    </div>
                    <div class="wishlist-button heart">
                      <IoIosHeartEmpty size={18} />
                      <span class="number-like">100</span>
                    </div>
                    <div class="coming-soon"></div>
                  </div>
                  <div class="card-title">
                    <h5>
                      <a href="">"The RenaiXance Rising the sun "</a>
                    </h5>
                  </div>
                  <div class="meta-info">
                    <div class="author">
                      <div class="avatar">
                        <img src={creativeArt} alt="Axies" />
                      </div>
                      <div class="info">
                        <span>Creator</span>
                        <h6>
                          <a href="">SalvadorDali</a>
                        </h6>
                      </div>
                    </div>
                    <div class="tags">bsc</div>
                  </div>
                  <div
                    class="card-bottom
                            style-explode"
                  >
                    <div class="price">
                      <span>Current Bid</span>
                      <div class="price-details">
                        <h5>4.89 ETH</h5>
                        <span>= $12.246</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div class="sc-card-product explode style2 mg-bt  ">
                  <div class="card-media">
                    <a href="">
                      <img src={space} alt="Axies" />
                    </a>
                    <div class="button-place-bid">
                      <button class="sc-button style-place-bid style bag fl-button pri-3">
                        <FaShoppingBag color="black" />
                        <span>Buy</span>
                      </button>
                    </div>
                    <div class="wishlist-button heart">
                      <IoIosHeartEmpty size={18} />
                      <span class="number-like">100</span>
                    </div>
                    <div class="coming-soon"></div>
                  </div>
                  <div class="card-title">
                    <h5>
                      <a href="">"The RenaiXance Rising the sun "</a>
                    </h5>
                  </div>
                  <div class="meta-info">
                    <div class="author">
                      <div class="avatar">
                        <img src={creativeArt} alt="Axies" />
                      </div>
                      <div class="info">
                        <span>Creator</span>
                        <h6>
                          <a href="">SalvadorDali</a>
                        </h6>
                      </div>
                    </div>
                    <div class="tags">bsc</div>
                  </div>
                  <div
                    class="card-bottom
                            style-explode"
                  >
                    <div class="price">
                      <span>Current Bid</span>
                      <div class="price-details">
                        <h5>4.89 ETH</h5>
                        <span>= $12.246</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div class="sc-card-product explode style2 mg-bt  ">
                  <div class="card-media">
                    <a href="">
                      <img src={FlameDress} alt="Axies" />
                    </a>
                    <div class="button-place-bid">
                      <button class="sc-button style-place-bid style bag fl-button pri-3">
                        <FaShoppingBag color="black" />
                        <span>Buy</span>
                      </button>
                    </div>
                    <div class="wishlist-button heart">
                      <IoIosHeartEmpty size={18} />
                      <span class="number-like">100</span>
                    </div>
                    <div class="coming-soon"></div>
                  </div>
                  <div class="card-title">
                    <h5>
                      <a href="">"The RenaiXance Rising the sun "</a>
                    </h5>
                  </div>
                  <div class="meta-info">
                    <div class="author">
                      <div class="avatar">
                        <img src={creativeArt} alt="Axies" />
                      </div>
                      <div class="info">
                        <span>Creator</span>
                        <h6>
                          <a href="">SalvadorDali</a>
                        </h6>
                      </div>
                    </div>
                    <div class="tags">bsc</div>
                  </div>
                  <div
                    class="card-bottom
                            style-explode"
                  >
                    <div class="price">
                      <span>Current Bid</span>
                      <div class="price-details">
                        <h5>4.89 ETH</h5>
                        <span>= $12.246</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div class="sc-card-product explode style2 mg-bt  ">
                  <div class="card-media">
                    <a href="">
                      <img src={LivingVase} alt="Axies" />
                    </a>
                    <div class="button-place-bid">
                      <button class="sc-button style-place-bid style bag fl-button pri-3">
                        <FaShoppingBag color="black" />
                        <span>Buy</span>
                      </button>
                    </div>
                    <div class="wishlist-button heart">
                      <IoIosHeartEmpty size={18} />
                      <span class="number-like">100</span>
                    </div>
                    <div class="coming-soon"></div>
                  </div>
                  <div class="card-title">
                    <h5>
                      <a href="">"The RenaiXance Rising the sun "</a>
                    </h5>
                  </div>
                  <div class="meta-info">
                    <div class="author">
                      <div class="avatar">
                        <img src={creativeArt} alt="Axies" />
                      </div>
                      <div class="info">
                        <span>Creator</span>
                        <h6>
                          <a href="">SalvadorDali</a>
                        </h6>
                      </div>
                    </div>
                    <div class="tags">bsc</div>
                  </div>
                  <div
                    class="card-bottom
                            style-explode"
                  >
                    <div class="price">
                      <span>Current Bid</span>
                      <div class="price-details">
                        <h5>4.89 ETH</h5>
                        <span>= $12.246</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div class="sc-card-product explode style2 mg-bt  ">
                  <div class="card-media">
                    <a href="">
                      <img src={CyberDoberman} alt="Axies" />
                    </a>
                    <div class="button-place-bid">
                      <button class="sc-button style-place-bid style bag fl-button pri-3">
                        <FaShoppingBag color="black" />
                        <span>Buy</span>
                      </button>
                    </div>
                    <div class="wishlist-button heart">
                      <IoIosHeartEmpty size={18} />
                      <span class="number-like">100</span>
                    </div>
                    <div class="coming-soon"></div>
                  </div>
                  <div class="card-title">
                    <h5>
                      <a href="">"The RenaiXance Rising the sun "</a>
                    </h5>
                  </div>
                  <div class="meta-info">
                    <div class="author">
                      <div class="avatar">
                        <img src={creativeArt} alt="Axies" />
                      </div>
                      <div class="info">
                        <span>Creator</span>
                        <h6>
                          <a href="">SalvadorDali</a>
                        </h6>
                      </div>
                    </div>
                    <div class="tags">bsc</div>
                  </div>
                  <div
                    class="card-bottom
                            style-explode"
                  >
                    <div class="price">
                      <span>Current Bid</span>
                      <div class="price-details">
                        <h5>4.89 ETH</h5>
                        <span>= $12.246</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div class="sc-card-product explode style2 mg-bt  ">
                  <div class="card-media">
                    <a href="">
                      <img src={hemlet} alt="Axies" />
                    </a>
                    <div class="button-place-bid">
                      <button class="sc-button style-place-bid style bag fl-button pri-3">
                        <FaShoppingBag color="black" />
                        <span>Buy</span>
                      </button>
                    </div>
                    <div class="wishlist-button heart">
                      <IoIosHeartEmpty size={18} />
                      <span class="number-like">100</span>
                    </div>
                    <div class="coming-soon"></div>
                  </div>
                  <div class="card-title">
                    <h5>
                      <a href="">"The RenaiXance Rising the sun "</a>
                    </h5>
                  </div>
                  <div class="meta-info">
                    <div class="author">
                      <div class="avatar">
                        <img src={creativeArt} alt="Axies" />
                      </div>
                      <div class="info">
                        <span>Creator</span>
                        <h6>
                          <a href="">SalvadorDali</a>
                        </h6>
                      </div>
                    </div>
                    <div class="tags">bsc</div>
                  </div>
                  <div
                    class="card-bottom
                            style-explode"
                  >
                    <div class="price">
                      <span>Current Bid</span>
                      <div class="price-details">
                        <h5>4.89 ETH</h5>
                        <span>= $12.246</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="Footerbg">
        <FooterNew />
      </div>
    </>
  );
}
