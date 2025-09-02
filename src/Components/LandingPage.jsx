import React, { useEffect } from "react";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import bg4 from "../assets/bg4.png";
import bg5 from "../assets/cartoon-kid-with-vr-helmet.png";
import hemlet from "../assets/hemlet.jpg";
import Trimphant from "../assets/Trimphant.jpg";
import LivingVase from "../assets/LivingVase.jpg";
import FlameDress from "../assets/FlameDress.jpg";
import { TiTick } from "react-icons/ti";
import collection1 from "../assets/collection1.jpg";
import collection2 from "../assets/collection2.jpg";
import collection3 from "../assets/collection3.jpg";
import collection4 from "../assets/collection4.jpg";
import collection5 from "../assets/collection5.jpg";
import collection6 from "../assets/collection6.jpg";
import collection7 from "../assets/collection7.jpg";
import collection8 from "../assets/collection8.jpg";
import collection9 from "../assets/collection9.jpg";
import creativeArt from "../assets/creativeArt.jpg";
import TommyAlrez from "../assets/TommyAlrez.jpg";
import SamsonFrost from "../assets/SamsonFrost.jpg";
import WindsorLane from "../assets/WindsorLane.jpg";
import AndyHurlbutt from "../assets/AndyHurlbutt.jpg";
import MattRamos from "../assets/MattRamos.jpg";
import BlakeBanks from "../assets/BlakeBanks.jpg";
import MonicaLucas from "../assets/MonicaLucas.jpg";
import HarperWilcher from "../assets/HarperWilcher.jpg";
import RenaiXance from "../assets/RenaiXance.jpg";
import space from "../assets/space.jpg";
import cryptoegg from "../assets/cryptoegg.jpg";
import cyberprimal from "../assets/cyberprimal.jpg";
import CyberDoberman from "../assets/CyberDoberman.jpg";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LiveAuction from "./LiveAuction";
import { Link, useLocation, useNavigate } from "react-router-dom";

import PDF from "../assets/Pdf/MagicVerse.Org.pdf";
import { GoDownload } from "react-icons/go";
import toast from "react-hot-toast";
import walletImage from "../assets/walletImage.png";
import collectionBtn from "../assets/collectionBtn.png";
import AddNftIcon from "../assets/AddNftIcon.png";
import ListIcon from "../assets/ListIcon.png";
import WelcomeModal from "./WelcomeModal";

export default function DashboardNew() {
  const handleDownload = () => {
    toast.success("PDF downloaded successfully!");
  };

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <div class="mainslider">
        <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
          <div class="swiper-scrollbar">
            <div
              class="swiper-scrollbar-drag"
              style={{
                transform: "translate3d(0px, 0px, 0px)",
                transitionDuration: "0ms",
                width: "635px",
              }}
            ></div>
          </div>
          <div
            class="swiper-wrapper"
            id="swiper-wrapper-b1d0a1eb310bca730"
            aria-live="polite"
            style={{
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "0ms",
            }}
          >
            <div
              class="swiper-slide left swiper-slide-active"
              role="group"
              aria-label="1 / 3"
              // style={{ width: "1905px" }}
            >
              <div class="flat-title-page ">
                <img class="bgr-gradient gradient1" src={bg1} alt="Axies" />
                <img class="bgr-gradient gradient2" src={bg2} alt="Axies" />
                <img class="bgr-gradient gradient3" src={bg3} alt="Axies" />
                <div class="shape item-w-16"></div>
                <div class="shape item-w-22"></div>
                <div class="shape item-w-32"></div>
                {/* <div class="shape item-w-48"></div> */}
                <div class="shape style2 item-w-51"></div>
                <div class="shape style2 item-w-51 position2"></div>
                <div class="shape item-w-68"></div>
                <div class="overlay"></div>
                <div class="swiper-container mainslider home">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="slider-item">
                        <div class="themesflat-container ">
                          <div class="wrap-heading flat-slider flex">
                            <div class="content-custom">
                              <h2 class="heading">Discover, and collect</h2>
                              <h1 class="heading mb-style">
                                <span class="">extraordinary</span>
                              </h1>
                              <h1 class="heading">
                                <span class="fill">Monster </span>NFTs
                              </h1>
                              <p class="sub-heading">
                                Marketplace for monster character cllections non
                                fungible token NFTs
                              </p>
                              <div class="flat-bt-slider flex style2 button-container">
                                <a
                                  class="sc-button header-slider style style-1 rocket fl-button pri-1"
                                  onClick={() => navigate("/signup")}
                                >
                                  <div className="d-flex justify-content-center gap-3">
                                    <span className="pl-0">Sign Up</span>
                                  </div>
                                </a>

                                <a
                                  href={PDF}
                                  download="MagicVerse.pdf"
                                  class="sc-button header-slider style style-1 rocket fl-button pri-1"
                                  onClick={handleDownload}
                                >
                                  <div className="d-flex justify-content-center gap-3">
                                    <GoDownload color="#5142fc" size={20} />
                                    <span className="pl-0">DownLoad Pdf</span>
                                  </div>
                                </a>

                                {/* <a
                                  class="sc-button header-slider style style-1 note fl-button pri-1"
                                  href="/create-item"
                                >
                                  <span>Create</span>
                                </a> */}
                              </div>
                            </div>
                            <div class="image">
                              <img class="img-bg" src={bg4} alt="axies" />
                              <img
                                src={bg5}
                                alt="axies"
                                style={{ width: "90%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span
            class="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
      </div>
      <section
        class="tf-box-icon create tf-section bg-home-3 "
        style={{ background: "var(--primary-bg-color)" }}
      >
        <div class="themesflat-container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-12">
              <div class="sc-box-icon">
                <div class="image center">
                  <div class="icon-create icon-color1">
                    <img src={walletImage} />
                  </div>
                </div>
                <h3 class="heading">
                  <a>Set Up Your Wallet</a>
                </h3>
                <p class="content-custom">
                  Once you’ve set up your wallet of choice, connect it to
                  OpenSeaby clicking the NFT Marketplacein the top right corner.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="sc-box-icon">
                <div class="image center">
                  <div class="icon-create icon-color2">
                    <img src={collectionBtn} alt="" />
                  </div>
                </div>
                <h3 class="heading">
                  <a>Create Your Collection</a>
                </h3>
                <p class="content-custom">
                  Click Create and set up your collection. Add social links, a
                  description, profile &amp; banner images, and set a secondary
                  sales fee.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="sc-box-icon">
                <div class="image center">
                  <div class="icon-create icon-color3">
                    <img src={AddNftIcon} alt="" />
                  </div>
                </div>
                <h3 class="heading">
                  <a>Add Your NFTs</a>
                </h3>
                <p class="content-custom">
                  Upload your work (image or 3D art), add a title and
                  description, and customize your NFTs with properties, stats
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="sc-box-icon">
                <div class="image center">
                  <div class="icon-create icon-color4">
                    <img src={ListIcon} alt="" />
                  </div>
                </div>
                <h3 class="heading">
                  <a>List Them For Sale</a>
                </h3>
                <p class="content-custom">
                  Choose between auctions, fixed-price listings, and
                  declining-price listings. You choose how you want to sell your
                  NFTs!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LiveAuction />
      <div id="collections">
        <section className="tf-section popular-collection">
          <div className="themesflat-container">
            <div className="row">
              <div class="col-md-12">
                <div class="heading-live-auctions">
                  <h2 class="tf-title pb-22 text-left">Popular Collection</h2>
                  {/* <a class="exp style2" href="/explore-03">
                  EXPLORE MORE
                </a> */}
                </div>
              </div>
              <div className="col-md-12 col-lg-4 col-sm-12">
                <div className="collection">
                  <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                    <div className="swiper-scrollbar">
                      <div
                        className="swiper-scrollbar-drag"
                        style={{
                          transform: "translate3d(0px, 0px, 0px)",
                          width: "346.963px",
                        }}
                      ></div>
                    </div>
                    <div
                      className="swiper-wrapper"
                      id="swiper-wrapper-8504f942b2bafbdf"
                      style={{ transform: "translate3d(0px, 0px, 0px)" }}
                    >
                      <div
                        class="swiper-slide swiper-slide-active"
                        role="group"
                        aria-label="1 / 12"
                        // style={{ width: "450px", marginRight: "30px" }}
                      >
                        <div class="swiper-container show-shadow carousel4 button-arow-style">
                          <div class="swiper-wrapper">
                            <div class="swiper-slide">
                              <div class="slider-item">
                                <div class="sc-card-collection style-3">
                                  <a>
                                    <div class="media-images-box">
                                      <div class="top-media">
                                        <img src={collection1} alt="Axies" />
                                        <img src={collection2} alt="Axies" />
                                      </div>
                                      <div class="bottom-media">
                                        <img src={collection3} alt="Axies" />
                                        <img src={collection4} alt="Axies" />
                                        <img src={collection5} alt="Axies" />
                                      </div>
                                    </div>
                                  </a>
                                  <div class="card-bottom">
                                    <div class="author">
                                      <div class="sc-author-box style-2">
                                        <div class="author-avatar">
                                          <img
                                            src={creativeArt}
                                            alt=""
                                            class="avatar"
                                          />
                                          <div class="badge">
                                            <TiTick
                                              style={{ fontSize: "15px" }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="content-custom">
                                        <h4>
                                          <a>Creative Art Collection</a>
                                        </h4>
                                        <div class="infor">
                                          <span>Created by</span>
                                          <span class="name">
                                            <a>Ralph Garraway</a>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="wishlist-button public heart">
                                      <IoIosHeartEmpty size={18} />
                                      <span class="number-like">100</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 col-sm-12">
                <div className="collection">
                  <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                    <div className="swiper-scrollbar">
                      <div
                        className="swiper-scrollbar-drag"
                        style={{
                          transform: "translate3d(0px, 0px, 0px)",
                          width: "346.963px",
                        }}
                      ></div>
                    </div>
                    <div
                      className="swiper-wrapper"
                      id="swiper-wrapper-8504f942b2bafbdf"
                      style={{ transform: "translate3d(0px, 0px, 0px)" }}
                    >
                      <div
                        class="swiper-slide swiper-slide-active"
                        role="group"
                        aria-label="1 / 12"
                        // style={{ width: "450px", marginRight: "30px" }}
                      >
                        <div class="swiper-container show-shadow carousel4 button-arow-style">
                          <div class="swiper-wrapper">
                            <div class="swiper-slide">
                              <div class="slider-item">
                                <div class="sc-card-collection style-3">
                                  <a>
                                    <div class="media-images-box">
                                      <div class="top-media">
                                        <img src={collection6} alt="Axies" />
                                        <img src={collection7} alt="Axies" />
                                      </div>
                                      <div class="bottom-media">
                                        <img src={collection8} alt="Axies" />
                                        <img src={collection4} alt="Axies" />
                                        <img src={collection9} alt="Axies" />
                                      </div>
                                    </div>
                                  </a>
                                  <div class="card-bottom">
                                    <div class="author">
                                      <div class="sc-author-box style-2">
                                        <div class="author-avatar">
                                          <img
                                            src={MonicaLucas}
                                            alt=""
                                            class="avatar"
                                          />
                                          <div class="badge">
                                            <TiTick
                                              style={{ fontSize: "15px" }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="content-custom">
                                        <h4>
                                          <a>Colorful Abstract</a>
                                        </h4>
                                        <div class="infor">
                                          <span>Created by</span>
                                          <span class="name">
                                            <a>Ralph Garraway</a>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="wishlist-button public heart">
                                      <IoIosHeartEmpty size={18} />
                                      <span class="number-like">100</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 col-sm-12">
                <div className="collection">
                  <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                    <div className="swiper-scrollbar">
                      <div
                        className="swiper-scrollbar-drag"
                        style={{
                          transform: "translate3d(0px, 0px, 0px)",
                          width: "346.963px",
                        }}
                      ></div>
                    </div>
                    <div
                      className="swiper-wrapper"
                      id="swiper-wrapper-8504f942b2bafbdf"
                      style={{ transform: "translate3d(0px, 0px, 0px)" }}
                    >
                      <div
                        class="swiper-slide swiper-slide-active"
                        role="group"
                        aria-label="1 / 12"
                        // style={{ width: "450px", marginRight: "30px" }}
                      >
                        <div class="swiper-container show-shadow carousel4 button-arow-style">
                          <div class="swiper-wrapper">
                            <div class="swiper-slide">
                              <div class="slider-item">
                                <div class="sc-card-collection style-3">
                                  <a>
                                    <div class="media-images-box">
                                      <div class="top-media">
                                        <img src={Trimphant} alt="Axies" />
                                        <img src={collection2} alt="Axies" />
                                      </div>
                                      <div class="bottom-media">
                                        <img src={cryptoegg} alt="Axies" />
                                        <img src={space} alt="Axies" />
                                        <img src={collection7} alt="Axies" />
                                      </div>
                                    </div>
                                  </a>
                                  <div class="card-bottom">
                                    <div class="author">
                                      <div class="sc-author-box style-2">
                                        <div class="author-avatar">
                                          <img
                                            src={MattRamos}
                                            alt=""
                                            class="avatar"
                                          />
                                          <div class="badge">
                                            <TiTick
                                              style={{ fontSize: "15px" }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="content-custom">
                                        <h4>
                                          <a>Modern Art Collection</a>
                                        </h4>
                                        <div class="infor">
                                          <span>Created by</span>
                                          <span class="name">
                                            <a>Ralph Garraway</a>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="wishlist-button public heart">
                                      <IoIosHeartEmpty size={18} />
                                      <span class="number-like">100</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="tf-section top-seller">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div class="heading-live-auctions">
                <h2 class="tf-title mb-25">Top Seller</h2>
              </div>
            </div>
            <div class="col-md-12">
              <div class="tf-box grid-container">
                <div class="box-item">
                  <div class="sc-author-box style-3 pd-0">
                    <div class="author-avatar">
                      <a>
                        <img src={creativeArt} alt="axies" class="avatar" />
                      </a>
                      <div class="badge">
                        <TiTick style={{ fontSize: "15px" }} />
                      </div>
                    </div>
                    <div class="author-infor">
                      <h5 class="fs-16">
                        <a>Crispin Berry</a>
                      </h5>
                      <span class="price">214.2 $</span>
                    </div>
                  </div>
                </div>
                <div class="box-item pl-17">
                  <div class="sc-author-box style-3 pd-0">
                    <div class="author-avatar">
                      <a>
                        <img src={SamsonFrost} alt="axies" class="avatar" />
                      </a>
                      <div class="badge">
                        <TiTick style={{ fontSize: "15px" }} />
                      </div>
                    </div>
                    <div class="author-infor">
                      <h5 class="fs-16">
                        <a>Samson Frost</a>
                      </h5>
                      <span class="price">205.43 $</span>
                    </div>
                  </div>
                </div>
                <div class="box-item pl-34">
                  <div class="sc-author-box style-3 pd-0">
                    <div class="author-avatar">
                      <a>
                        <img src={TommyAlrez} alt="axies" class="avatar" />
                      </a>
                      <div class="badge">
                        <TiTick style={{ fontSize: "15px" }} />
                      </div>
                    </div>
                    <div class="author-infor">
                      <h5 class="fs-16">
                        <a>Tommy Alrez</a>
                      </h5>
                      <span class="price">170.3 $</span>
                    </div>
                  </div>
                </div>
                <div class="box-item pl-51">
                  <div class="sc-author-box style-3 pd-0">
                    <div class="author-avatar">
                      <a>
                        <img src={WindsorLane} alt="axies" class="avatar" />
                      </a>
                      <div class="badge">
                        <TiTick style={{ fontSize: "15px" }} />
                      </div>
                    </div>
                    <div class="author-infor">
                      <h5 class="fs-16">
                        <a>Windsor Lane</a>
                      </h5>
                      <span class="price">120.7 $</span>
                    </div>
                  </div>
                </div>
                <div class="box-item pl-68">
                  <div class="sc-author-box style-3 pd-0">
                    <div class="author-avatar">
                      <a>
                        <img src={AndyHurlbutt} alt="axies" class="avatar" />
                      </a>
                      <div class="badge">
                        <TiTick style={{ fontSize: "15px" }} />
                      </div>
                    </div>
                    <div class="author-infor">
                      <h5 class="fs-16">
                        <a>Andy Hurlbutt</a>
                      </h5>
                      <span class="price">82.79 $</span>
                    </div>
                  </div>
                </div>
                <div class="box-item ">
                  <div
                    class="sc-author-box 
                                         style-3 pd-0"
                  >
                    <div class="author-avatar">
                      <a>
                        <img src={BlakeBanks} alt="axies" class="avatar" />
                      </a>
                      <div class="badge">
                        <TiTick style={{ fontSize: "15px" }} />
                      </div>
                    </div>
                    <div class="author-infor">
                      <h5 class="fs-16">
                        <a>Blake Banks</a>
                      </h5>
                      <span class="price">68.2 $</span>
                    </div>
                  </div>
                </div>
                <div class="box-item pl-17">
                  <div class="sc-author-box style-3 pd-0">
                    <div class="author-avatar">
                      <a>
                        <img src={MonicaLucas} alt="axies" class="avatar" />
                      </a>
                      <div class="badge">
                        <TiTick style={{ fontSize: "15px" }} />
                      </div>
                    </div>
                    <div class="author-infor">
                      <h5 class="fs-16">
                        <a>Monica Lucas</a>
                      </h5>
                      <span class="price">52.8 $</span>
                    </div>
                  </div>
                </div>
                <div class="box-item pl-34">
                  <div class="sc-author-box style-3 pd-0">
                    <div class="author-avatar">
                      <a>
                        <img src={MattRamos} alt="axies" class="avatar" />
                      </a>
                      <div class="badge">
                        <TiTick style={{ fontSize: "15px" }} />
                      </div>
                    </div>
                    <div class="author-infor">
                      <h5 class="fs-16">
                        <a>Matt Ramos</a>
                      </h5>
                      <span class="price">38.4 $</span>
                    </div>
                  </div>
                </div>
                <div class="box-item pl-51">
                  <div class="sc-author-box style-3 pd-0">
                    <div class="author-avatar">
                      <a>
                        <img src={HarperWilcher} alt="axies" class="avatar" />
                      </a>
                      <div class="badge">
                        <TiTick style={{ fontSize: "15px" }} />
                      </div>
                    </div>
                    <div class="author-infor">
                      <h5 class="fs-16">
                        <a>Harper Wilcher</a>
                      </h5>
                      <span class="price">29.2 $</span>
                    </div>
                  </div>
                </div>
                <div class="box-item pl-68">
                  <div class="sc-author-box style-3 pd-0">
                    <div class="author-avatar">
                      <a>
                        <img src={creativeArt} alt="axies" class="avatar" />
                      </a>
                      <div class="badge">
                        <TiTick style={{ fontSize: "15px" }} />
                      </div>
                    </div>
                    <div class="author-infor">
                      <h5 class="fs-16">
                        <a>Crispin Berry</a>
                      </h5>
                      <span class="price">214.2 $</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section today-pick">
        <div className="themesflat-container">
          <div className="row">
            <div class="col-md-12">
              <div class="heading-live-auctions mg-bt-21">
                <h2 class="tf-title pb-18">Today's Picks</h2>
                {/* <a class="exp style2" href="/explore-03">
                  EXPLORE MORE
                </a> */}
              </div>
            </div>
            <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div class="sc-card-product explode style2 mg-bt  ">
                <div class="card-media">
                  <a>
                    <img src={RenaiXance} alt="Axies" />
                  </a>
                  <div class="button-place-bid">
                    <button class="sc-button style-place-bid style bag fl-button pri-3">
                      <FaShoppingBag color="black" />
                      <span>Place Bid</span>
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
                    <a>"The RenaiXance Rising the sun "</a>
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
                        <a>SalvadorDali</a>
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
                      <h5>4.89 $</h5>
                      <span>= $12.246</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div class="sc-card-product explode style2 mg-bt  ">
                <div class="card-media">
                  <a>
                    <img src={cyberprimal} alt="Axies" />
                  </a>
                  <div class="button-place-bid">
                    <button class="sc-button style-place-bid style bag fl-button pri-3">
                      <FaShoppingBag color="black" />
                      <span>Place Bid</span>
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
                    <a>"The RenaiXance Rising the sun "</a>
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
                        <a>SalvadorDali</a>
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
                      <h5>4.89 $</h5>
                      <span>= $12.246</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div class="sc-card-product explode style2 mg-bt  ">
                <div class="card-media">
                  <a>
                    <img src={cryptoegg} alt="Axies" />
                  </a>
                  <div class="button-place-bid">
                    <button class="sc-button style-place-bid style bag fl-button pri-3">
                      <FaShoppingBag color="black" />
                      <span>Place Bid</span>
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
                    <a>"The RenaiXance Rising the sun "</a>
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
                        <a>SalvadorDali</a>
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
                      <h5>4.89 $</h5>
                      <span>= $12.246</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div class="sc-card-product explode style2 mg-bt  ">
                <div class="card-media">
                  <a>
                    <img src={space} alt="Axies" />
                  </a>
                  <div class="button-place-bid">
                    <button class="sc-button style-place-bid style bag fl-button pri-3">
                      <FaShoppingBag color="black" />
                      <span>Place Bid</span>
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
                    <a>"The RenaiXance Rising the sun "</a>
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
                        <a>SalvadorDali</a>
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
                      <h5>4.89 $</h5>
                      <span>= $12.246</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div class="sc-card-product explode style2 mg-bt  ">
                <div class="card-media">
                  <a>
                    <img src={FlameDress} alt="Axies" />
                  </a>
                  <div class="button-place-bid">
                    <button class="sc-button style-place-bid style bag fl-button pri-3">
                      <FaShoppingBag color="black" />
                      <span>Place Bid</span>
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
                    <a>"The RenaiXance Rising the sun "</a>
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
                        <a>SalvadorDali</a>
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
                      <h5>4.89 $</h5>
                      <span>= $12.246</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div class="sc-card-product explode style2 mg-bt  ">
                <div class="card-media">
                  <a>
                    <img src={LivingVase} alt="Axies" />
                  </a>
                  <div class="button-place-bid">
                    <button class="sc-button style-place-bid style bag fl-button pri-3">
                      <FaShoppingBag color="black" />
                      <span>Place Bid</span>
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
                    <a>"The RenaiXance Rising the sun "</a>
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
                        <a>SalvadorDali</a>
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
                      <h5>4.89 $</h5>
                      <span>= $12.246</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div class="sc-card-product explode style2 mg-bt  ">
                <div class="card-media">
                  <a>
                    <img src={CyberDoberman} alt="Axies" />
                  </a>
                  <div class="button-place-bid">
                    <button class="sc-button style-place-bid style bag fl-button pri-3">
                      <FaShoppingBag color="black" />
                      <span>Place Bid</span>
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
                    <a>"The RenaiXance Rising the sun "</a>
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
                        <a>SalvadorDali</a>
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
                      <h5>4.89 $</h5>
                      <span>= $12.246</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div class="sc-card-product explode style2 mg-bt  ">
                <div class="card-media">
                  <a>
                    <img src={hemlet} alt="Axies" />
                  </a>
                  <div class="button-place-bid">
                    <button class="sc-button style-place-bid style bag fl-button pri-3">
                      <FaShoppingBag color="black" />
                      <span>Place Bid</span>
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
                    <a>"The RenaiXance Rising the sun "</a>
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
                        <a>SalvadorDali</a>
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
                      <h5>4.89 $</h5>
                      <span>= $12.246</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
