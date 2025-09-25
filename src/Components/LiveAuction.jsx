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
import Avatar1 from "../assets/long-hair-woman.jpg";
import Avatar2 from "../assets/curly-hair-man-with-glasses-2.jpg";
import Avatar3 from "../assets/man.jpg";
import Avatar4 from "../assets/man-with-beard.jpg";
import Avatar5 from "../assets/curly-hair-man-with-glasses.jpg";

import Piggy from "../assets/pigy.jpg";
import Rino from "../assets/charming-rhinoceros-figurine.jpg";
import kungfuPanda from "../assets/kungfuPanda.jpg";
import robot from "../assets/robot1.jpg";

import squirel from "../assets/squirel.jpg";

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
                      <div className="sc-card-product explode style2 live-Auction-card">
                        <div className="card-media">
                          <a>
                            <img src={Piggy} alt="Hamlet Contemplates" />
                          </a>
                        </div>
                        <div className="card-title">
                          <h5>
                            <a>The Piggy Paradox</a>
                          </h5>
                        </div>
                        <div class="meta-info">
                          <div class="author">
                            <div class="avatar">
                              <img src={Avatar1} alt="axies" />
                            </div>
                            <div class="info">
                              <span>Creator</span>
                              <h6>
                                <a>VisionMorph</a>
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
                            <img src={LivingVase} alt="Trimphant" />
                          </a>
                        </div>
                        <div className="card-title">
                          <h5>
                            <a>Trimphant</a>
                          </h5>
                        </div>
                        <div class="meta-info">
                          <div class="author">
                            <div class="avatar">
                              <img src={Avatar2} alt="axies" />
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
                            <img src={robot} alt="Living Vase" />
                          </a>
                        </div>
                        <div className="card-title">
                          <h5>
                            <a>Crystal Echoes</a>
                          </h5>
                        </div>
                        <div class="meta-info">
                          <div class="author">
                            <div class="avatar">
                              <img src={Avatar3} alt="axies" />
                            </div>
                            <div class="info">
                              <span>Creator</span>
                              <h6>
                                <a>PixelOracle</a>
                              </h6>
                            </div>
                          </div>
                          <div class="tags">bsc</div>
                        </div>
                        <div class="card-bottom style-explode">
                          <div class="price">
                            <span>Current Bid</span>
                            <div class="price-details">
                              <h5>8.67 $</h5>
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
                            <img src={Rino} alt="Flame Dress" />
                          </a>
                        </div>
                        <div className="card-title">
                          <h5>
                            <a>Flame Dress</a>
                          </h5>
                        </div>
                        <div class="meta-info">
                          <div class="author">
                            <div class="avatar">
                              <img src={Avatar4} alt="axies" />
                            </div>
                            <div class="info">
                              <span>Creator</span>
                              <h6>
                                <a>Mike Winkelmann</a>
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
                            <img src={kungfuPanda} alt="Flame Dress" />
                          </a>
                        </div>
                        <div className="card-title">
                          <h5>
                            <a>Kungfu Panda</a>
                          </h5>
                        </div>
                        <div class="meta-info">
                          <div class="author">
                            <div class="avatar">
                              <img src={Avatar5} alt="axies" />
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
