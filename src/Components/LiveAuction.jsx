import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick-theme.css";
import hemlet from "../assets/hemlet.jpg";
import Trimphant from "../assets/Trimphant.jpg";
import LivingVase from "../assets/LivingVase.jpg";
import FlameDress from "../assets/FlameDress.jpg";
import { FaGripfire } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import Axies from "../assets/Axies.jpg";

export default function LiveAuction() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    swipe: true, // Enable swipe
    swipeToSlide: true, // Allow direct swiping
    touchMove: true, // Enable touch movement
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          swipe: true, // Ensure swipe is enabled
          swipeToSlide: true,
          touchMove: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
          swipe: true,
          swipeToSlide: true,
          touchMove: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          swipe: true,
          swipeToSlide: true,
          touchMove: true,
        },
      },
    ],
  };

  return (
    <div id="liveAuctionMenu">
      <section className="tf-section live-auctions bg-style">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-live-auctions">
                <h2 className="tf-title pb-24">Live Auctions</h2>
                {/* <a className="exp style2" href="/explore-03">
                EXPLORE MORE
              </a> */}
              </div>
            </div>
            <div className="row">
              <Slider {...settings}>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div
                        className="sc-card-product explode style2"
                        style={{ height: "50.5rem" }}
                      >
                        <div className="card-media">
                          <a>
                            <img
                              src="https://axiesreact.themesflat.co/static/media/card-item-7.7f4ad6d33deea16f00f9.jpg"
                              alt="Hamlet Contemplates"
                            />
                          </a>
                          {/* <div className="featured-countdown">
                            <FaGripfire color="#5142fc" size={25} />
                            <span>05:17:44:21</span>
                          </div> */}
                          {/* <div className="button-place-bid">
                          <button className="sc-button style-place-bid style bag fl-button pri-3">
                            <FaShoppingBag color="black" />
                            <span>Place Bid</span>
                          </button>
                        </div> */}
                        </div>
                        <div className="card-title">
                          <h5>
                            <a>Hamlet Contemplates</a>
                          </h5>
                        </div>
                        <div class="meta-info">
                          <div class="author">
                            <div class="avatar">
                              <img src={Axies} alt="axies" />
                            </div>
                            <div class="info">
                              <span>Creator</span>
                              <h6>
                                <a>SalvadorDali</a>
                              </h6>
                            </div>
                          </div>
                          <div class="tags">bsc</div>
                        </div>
                        <div class="card-bottom style-explode">
                          <div class="price">
                            <span>Current Bid</span>
                            <div class="price-details">
                              <h5>4.89 $</h5>
                              <span>= $12.246</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="sc-card-product explode style2">
                        <div className="card-media">
                          <a>
                            <img
                              src="https://axiesreact.themesflat.co/static/media/card-item-2.bfe0307457e2f66fb932.jpg"
                              alt="Trimphant"
                            />
                          </a>
                          {/* <div className="featured-countdown">
                            <FaGripfire color="#5142fc" size={25} />
                            <span>04:10:30:12</span>
                          </div> */}
                          {/* <div className="button-place-bid">
                          <button className="sc-button style-place-bid style bag fl-button pri-3">
                            <FaShoppingBag color="black" />
                            <span>Place Bid</span>
                          </button>
                        </div> */}
                        </div>
                        <div className="card-title">
                          <h5>
                            <a>Trimphant</a>
                          </h5>
                        </div>
                        <div class="meta-info">
                          <div class="author">
                            <div class="avatar">
                              <img src={Axies} alt="axies" />
                            </div>
                            <div class="info">
                              <span>Creator</span>
                              <h6>
                                <a>SalvadorDali</a>
                              </h6>
                            </div>
                          </div>
                          <div class="tags">bsc</div>
                        </div>
                        <div class="card-bottom style-explode">
                          <div class="price">
                            <span>Current Bid</span>
                            <div class="price-details">
                              <h5>4.89 $</h5>
                              <span>= $12.246</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="sc-card-product explode style2">
                        <div className="card-media">
                          <a>
                            <img
                              src="https://axiesreact.themesflat.co/static/media/image-box-31.59e66da3fd7a717dfc59.jpg"
                              alt="Living Vase"
                            />
                          </a>
                          {/* <div className="featured-countdown">
                            <FaGripfire color="#5142fc" size={25} />
                            <span>03:15:20:05</span>
                          </div> */}
                          {/* <div className="button-place-bid">
                          <button className="sc-button style-place-bid style bag fl-button pri-3">
                            <FaShoppingBag color="black" />
                            <span>Place Bid</span>
                          </button>
                        </div> */}
                        </div>
                        <div className="card-title">
                          <h5>
                            <a>Living Vase</a>
                          </h5>
                        </div>
                        <div class="meta-info">
                          <div class="author">
                            <div class="avatar">
                              <img src={Axies} alt="axies" />
                            </div>
                            <div class="info">
                              <span>Creator</span>
                              <h6>
                                <a>SalvadorDali</a>
                              </h6>
                            </div>
                          </div>
                          <div class="tags">bsc</div>
                        </div>
                        <div class="card-bottom style-explode">
                          <div class="price">
                            <span>Current Bid</span>
                            <div class="price-details">
                              <h5>4.89 $</h5>
                              <span>= $12.246</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="sc-card-product explode style2">
                        <div className="card-media">
                          <a>
                            <img src={FlameDress} alt="Flame Dress" />
                          </a>
                          {/* <div className="featured-countdown">
                            <FaGripfire color="#5142fc" size={25} />
                            <span>06:20:40:10</span>
                          </div> */}
                          {/* <div className="button-place-bid">
                          <button className="sc-button style-place-bid style bag fl-button pri-3">
                            <FaShoppingBag color="black" />
                            <span>Place Bid</span>
                          </button>
                        </div> */}
                        </div>
                        <div className="card-title">
                          <h5>
                            <a>Flame Dress</a>
                          </h5>
                        </div>
                        <div class="meta-info">
                          <div class="author">
                            <div class="avatar">
                              <img src={Axies} alt="axies" />
                            </div>
                            <div class="info">
                              <span>Creator</span>
                              <h6>
                                <a>SalvadorDali</a>
                              </h6>
                            </div>
                          </div>
                          <div class="tags">bsc</div>
                        </div>
                        <div class="card-bottom style-explode">
                          <div class="price">
                            <span>Current Bid</span>
                            <div class="price-details">
                              <h5>4.89 $</h5>
                              <span>= $12.246</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
