import React, { useEffect } from "react";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import bg3 from "../../assets/bg3.png";
import bg4 from "../../assets/bg4.png";
import bg5 from "../../assets/cartoon-kid-with-vr-helmet.png";
import { TiTick } from "react-icons/ti";
import collection1 from "../../assets/scene.jpg";
import collection2 from "../../assets/squirrel.jpg";
import collection3 from "../../assets/dolphinart.jpg";

import collection5 from "../../assets/deer.jpg";
import collection6 from "../../assets/peacock.jpg";

import collection8 from "../../assets/butterfly.jpg";

import collection10 from "../../assets/collection10.jpg";
import collection11 from "../../assets/collection11.jpg";
import collection12 from "../../assets/parrot.jpg";
import collection13 from "../../assets/collection13.jpg";
import collection14 from "../../assets/collection14.jpg";
import collection15 from "../../assets/collection15.jpg";
import collection16 from "../../assets/collection16.jpg";
import collection17 from "../../assets/collection17.jpg";
import collection18 from "../../assets/collection18.jpg";
import creativeArt from "../../assets/man-with-hat.jpg";
import women from "../../assets/woman-with-hijab.jpg";
import TommyAlrez from "../../assets/long-hair-woman.jpg";
import SamsonFrost from "../../assets/with-glasses.jpg";
import WindsorLane from "../../assets/short-hair-man-with-glasses.jpg";
import AndyHurlbutt from "../../assets/curly-hair-man-with-glasses.jpg";
import MattRamos from "../../assets/long-hair-woman-with-glasses.jpg";
import BlakeBanks from "../../assets/man-with-beard.jpg";
import MonicaLucas from "../../assets/dreadlocked-man-with-glasses.jpg";
import HarperWilcher from "../../assets/curly-hair-man-with-glasses-2.jpg";
import Man from "../../assets/man.jpg";
import img1 from "../../assets/Stake_01493_compre.webp";
import img2 from "../../assets/Stake_06195_compre.webp";
import img3 from "../../assets/Penguin_Pals_549781.webp";
import sonic from "../../assets/sonic.jpg";
import animal from "../../assets/animal.jpg";
import robot from "../../assets/robot12.jpg";
import bunny from "../../assets/bunny.jpg";
import elephantpic from "../../assets/elephantpic.jpg";
import { FiUserPlus } from "react-icons/fi";
import { FaShoppingBag } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LiveAuction from "./LiveAuction";
import { Link, useLocation, useNavigate } from "react-router-dom";

import walletImage from "../../assets/walletImage.png";
import collectionBtn from "../../assets/collectionBtn.png";
import AddNftIcon from "../../assets/AddNftIcon.png";
import ListIcon from "../../assets/ListIcon.png";
import WelcomeModal from "../Common/WelcomeModal";

export default function DashboardNew() {
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
      <div className="mainslider">
        <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
          <div className="swiper-scrollbar">
            <div
              className="swiper-scrollbar-drag"
              style={{
                transform: "translate3d(0px, 0px, 0px)",
                transitionDuration: "0ms",
                width: "635px",
              }}
            ></div>
          </div>
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-b1d0a1eb310bca730"
            aria-live="polite"
            style={{
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "0ms",
            }}
          >
            <div
              className="swiper-slide left swiper-slide-active"
              role="group"
              aria-label="1 / 3"
            >
              <div className="flat-title-page ">
                <img className="bgr-gradient gradient1" src={bg1} alt="Axies" />
                <img className="bgr-gradient gradient2" src={bg2} alt="Axies" />
                <img className="bgr-gradient gradient3" src={bg3} alt="Axies" />
                <div className="shape item-w-16"></div>
                <div className="shape item-w-32"></div>
                <div className="shape item-w-22"></div>
                <div className="shape item-w-35"></div>

                <div className="shape item-w-48"></div>
                <div className="shape style2 item-w-51"></div>
                <div className="shape style2 item-w-51 position2"></div>

                <div className="shape item-w-68"></div>
                <div className="overlay"></div>
                <div className="swiper-container mainslider home">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="slider-item">
                        <div className="themesflat-container ">
                          <div className="wrap-heading flat-slider flex">
                            <div className="content-custom">
                              <h2 className="heading">Unleash and Trade</h2>
                              <h1 className="heading mb-style">
                                <span className="">mythical</span>
                              </h1>
                              <h1 className="heading">
                                <span className="fill">IFT </span>NFTs and
                                Tokens
                              </h1>
                              <p className="sub-heading">
                                Unleash your collection with exclusive beastly
                                tokens at Mythic IFT Market
                              </p>
                              <div className="flat-bt-slider flex style2 button-container">
                                <a
                                  className="sc-button header-slider style style-1 rocket fl-button pri-1"
                                  onClick={() => navigate("/signup")}
                                >
                                  <div className="d-flex justify-content-center gap-3 cursor-pointer">
                                    <FiUserPlus
                                      color="#fff"
                                      className="signupIcon"
                                      size={20}
                                    />
                                    <span className="pl-0">Sign Up</span>
                                  </div>
                                </a>

                                {/* <a
                                  href={PDF}
                                  download="MagicVerse.pdf"
                                  className="sc-button header-slider style style-1 rocket fl-button pri-1"
                                  onClick={handleDownload}
                                >
                                  <div className="d-flex justify-content-center gap-3">
                                    <GoDownload color="#5142fc" size={20} />
                                    <span className="pl-0">DownLoad Pdf</span>
                                  </div>
                                </a> */}
                              </div>
                            </div>
                            <div className="image">
                              <img className="img-bg" src={bg4} alt="axies" />
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
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
      </div>
      <section
        className="tf-box-icon create tf-section bg-home-3 "
        style={{ background: "var(--primary-bg-color)" }}
      >
        <div className="themesflat-container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="sc-box-icon">
                <div className="image center">
                  <div className="icon-create icon-color1">
                    <img src={walletImage} />
                  </div>
                </div>
                <h3 className="heading">
                  <a>Connect Your Wallet</a>
                </h3>
                <p className="content-custom">
                  After setting up your preferred wallet, connect it to OpenSea
                  by selecting the NFT Marketplace option in the top right
                  corner of the platform.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="sc-box-icon">
                <div className="image center">
                  <div className="icon-create icon-color2">
                    <img src={collectionBtn} alt="" />
                  </div>
                </div>
                <h3 className="heading">
                  <a>Create Your Collection</a>
                </h3>
                <p className="content-custom">
                  Click "Create NFT" to set up your collection. Add social
                  links, a description, profile and banner images, and specify a
                  secondary sales fee.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="sc-box-icon">
                <div className="image center">
                  <div className="icon-create icon-color3">
                    <img src={AddNftIcon} alt="" />
                  </div>
                </div>
                <h3 className="heading">
                  <a>Add Your NFTs</a>
                </h3>
                <p className="content-custom">
                  Upload your work (image or 3D art), add a title and
                  description, and customize your NFTs with properties and
                  stats.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="sc-box-icon">
                <div className="image center">
                  <div className="icon-create icon-color4">
                    <img src={ListIcon} alt="" />
                  </div>
                </div>
                <h3 className="heading">
                  <a>Sell Your NFTs</a>
                </h3>
                <p className="content-custom">
                  Select your preferred selling method, such as auctions,
                  fixed-price listings, or declining-price listings, to showcase
                  and sell your NFTs your way!
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
              <div className="col-md-12">
                <div className="heading-live-auctions">
                  <h2 className="tf-title pb-22 text-left">
                    Popular Collection
                  </h2>
                  {/* <a className="exp style2" href="/explore-03">
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
                        className="swiper-slide swiper-slide-active"
                        role="group"
                        aria-label="1 / 12"
                        // style={{ width: "450px", marginRight: "30px" }}
                      >
                        <div className="swiper-container show-shadow carousel4 button-arow-style">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="slider-item">
                                <div className="sc-card-collection style-3">
                                  <a>
                                    <div className="media-images-box">
                                      <div className="top-media">
                                        <img src={collection1} alt="Axies" />
                                        <img src={collection2} alt="Axies" />
                                      </div>
                                      <div className="bottom-media">
                                        <img src={collection3} alt="Axies" />
                                        <img src={collection8} alt="Axies" />
                                        <img src={collection5} alt="Axies" />
                                      </div>
                                    </div>
                                  </a>
                                  <div className="card-bottom">
                                    <div className="author">
                                      <div className="sc-author-box style-2">
                                        <div className="author-avatar">
                                          <img
                                            src={creativeArt}
                                            alt=""
                                            className="avatar"
                                          />
                                          <div className="badge">
                                            <TiTick
                                              style={{ fontSize: "15px" }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="content-custom">
                                        <h4>
                                          <a>Creative Art Collection</a>
                                        </h4>
                                        <div className="infor">
                                          <span>Created by</span>
                                          <span className="name">
                                            <a>Elara Moon</a>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    {/* <div className="wishlist-button public heart">
                                      <IoIosHeartEmpty size={18} />
                                      <span className="number-like">100</span>
                                    </div> */}
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
                        className="swiper-slide swiper-slide-active"
                        role="group"
                        aria-label="1 / 12"
                        // style={{ width: "450px", marginRight: "30px" }}
                      >
                        <div className="swiper-container show-shadow carousel4 button-arow-style">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="slider-item">
                                <div className="sc-card-collection style-3">
                                  <a>
                                    <div className="media-images-box">
                                      <div className="top-media">
                                        <img src={collection6} alt="Axies" />
                                        <img src={collection11} alt="Axies" />
                                      </div>
                                      <div className="bottom-media">
                                        <img src={collection13} alt="Axies" />
                                        <img src={collection12} alt="Axies" />
                                        <img src={collection10} alt="Axies" />
                                      </div>
                                    </div>
                                  </a>
                                  <div className="card-bottom">
                                    <div className="author">
                                      <div className="sc-author-box style-2">
                                        <div className="author-avatar">
                                          <img
                                            src={MonicaLucas}
                                            alt=""
                                            className="avatar"
                                          />
                                          <div className="badge">
                                            <TiTick
                                              style={{ fontSize: "15px" }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="content-custom">
                                        <h4>
                                          <a>Colorful Abstract</a>
                                        </h4>
                                        <div className="infor">
                                          <span>Created by</span>
                                          <span className="name">
                                            <a>Noah Velasquez</a>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    {/* <div className="wishlist-button public heart">
                                      <IoIosHeartEmpty size={18} />
                                      <span className="number-like">100</span>
                                    </div> */}
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
                        className="swiper-slide swiper-slide-active"
                        role="group"
                        aria-label="1 / 12"
                        // style={{ width: "450px", marginRight: "30px" }}
                      >
                        <div className="swiper-container show-shadow carousel4 button-arow-style">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="slider-item">
                                <div className="sc-card-collection style-3">
                                  <a>
                                    <div className="media-images-box">
                                      <div className="top-media">
                                        <img src={collection17} alt="Axies" />
                                        <img src={collection18} alt="Axies" />
                                      </div>
                                      <div className="bottom-media">
                                        <img src={collection16} alt="Axies" />
                                        <img src={collection15} alt="Axies" />
                                        <img src={collection14} alt="Axies" />
                                      </div>
                                    </div>
                                  </a>
                                  <div className="card-bottom">
                                    <div className="author">
                                      <div className="sc-author-box style-2">
                                        <div className="author-avatar">
                                          <img
                                            src={MattRamos}
                                            alt=""
                                            className="avatar"
                                          />
                                          <div className="badge">
                                            <TiTick
                                              style={{ fontSize: "15px" }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="content-custom">
                                        <h4>
                                          <a>Modern Art Collection</a>
                                        </h4>
                                        <div className="infor">
                                          <span>Created by</span>
                                          <span className="name">
                                            <a>Iris Calderon</a>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    {/* <div className="wishlist-button public heart">
                                      <IoIosHeartEmpty size={18} />
                                      <span className="number-like">100</span>
                                    </div> */}
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
              <div className="heading-live-auctions">
                <h2 className="tf-title mb-25">Top Seller</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="tf-box grid-container">
                <div className="box-item">
                  <div className="sc-author-box style-3 pd-0">
                    <div className="author-avatar">
                      <a>
                        <img src={creativeArt} alt="axies" className="avatar" />
                      </a>
                      <div className="badge">
                        <TiTick style={{ fontSize: "15px" }} />
                      </div>
                    </div>
                    <div className="author-infor">
                      <h5 className="fs-16">
                        <a>Crispin Berry</a>
                      </h5>
                      <span className="price">214.2 $</span>
                    </div>
                  </div>
                </div>
                <div className="box-item pl-17">
                  <div className="sc-author-box style-3 pd-0">
                    <div className="author-avatar">
                      <a>
                        <img src={SamsonFrost} alt="axies" className="avatar" />
                      </a>
                      <div className="badge">
                        <TiTick style={{ fontSize: "15px" }} />
                      </div>
                    </div>
                    <div className="author-infor">
                      <h5 className="fs-16">
                        <a>Samson Frost</a>
                      </h5>
                      <span className="price">205.43 $</span>
                    </div>
                  </div>
                </div>
                <div className="box-item pl-34">
                  <div className="sc-author-box style-3 pd-0">
                    <div className="author-avatar">
                      <a>
                        <img src={TommyAlrez} alt="axies" className="avatar" />
                      </a>
                      <div className="badge">
                        <TiTick style={{ fontSize: "15px" }} />
                      </div>
                    </div>
                    <div className="author-infor">
                      <h5 className="fs-16">
                        <a>Chris Torres</a>
                      </h5>
                      <span className="price">170.3 $</span>
                    </div>
                  </div>
                </div>
                <div className="box-item pl-51">
                  <div className="sc-author-box style-3 pd-0">
                    <div className="author-avatar">
                      <a>
                        <img src={WindsorLane} alt="axies" className="avatar" />
                      </a>
                      <div className="badge">
                        <TiTick style={{ fontSize: "15px" }} />
                      </div>
                    </div>
                    <div className="author-infor">
                      <h5 className="fs-16">
                        <a>Windsor Lane</a>
                      </h5>
                      <span className="price">120.7 $</span>
                    </div>
                  </div>
                </div>
                <div className="box-item pl-68">
                  <div className="sc-author-box style-3 pd-0">
                    <div className="author-avatar">
                      <a>
                        <img
                          src={AndyHurlbutt}
                          alt="axies"
                          className="avatar"
                        />
                      </a>
                      <div className="badge">
                        <TiTick style={{ fontSize: "15px" }} />
                      </div>
                    </div>
                    <div className="author-infor">
                      <h5 className="fs-16">
                        <a>Andy Hurlbutt</a>
                      </h5>
                      <span className="price">82.79 $</span>
                    </div>
                  </div>
                </div>
                <div className="box-item ">
                  <div
                    className="sc-author-box 
                                         style-3 pd-0"
                  >
                    <div className="author-avatar">
                      <a>
                        <img src={BlakeBanks} alt="axies" className="avatar" />
                      </a>
                      <div className="badge">
                        <TiTick style={{ fontSize: "15px" }} />
                      </div>
                    </div>
                    <div className="author-infor">
                      <h5 className="fs-16">
                        <a>Micah Dowbak</a>
                      </h5>
                      <span className="price">68.2 $</span>
                    </div>
                  </div>
                </div>
                <div className="box-item pl-17">
                  <div className="sc-author-box style-3 pd-0">
                    <div className="author-avatar">
                      <a>
                        <img src={MonicaLucas} alt="axies" className="avatar" />
                      </a>
                      <div className="badge">
                        <TiTick style={{ fontSize: "15px" }} />
                      </div>
                    </div>
                    <div className="author-infor">
                      <h5 className="fs-16">
                        <a>Monica Lucas</a>
                      </h5>
                      <span className="price">52.8 $</span>
                    </div>
                  </div>
                </div>
                <div className="box-item pl-34">
                  <div className="sc-author-box style-3 pd-0">
                    <div className="author-avatar">
                      <a>
                        <img src={MattRamos} alt="axies" className="avatar" />
                      </a>
                      <div className="badge">
                        <TiTick style={{ fontSize: "15px" }} />
                      </div>
                    </div>
                    <div className="author-infor">
                      <h5 className="fs-16">
                        <a>Matt Ramos</a>
                      </h5>
                      <span className="price">38.4 $</span>
                    </div>
                  </div>
                </div>
                <div className="box-item pl-51">
                  <div className="sc-author-box style-3 pd-0">
                    <div className="author-avatar">
                      <a>
                        <img
                          src={HarperWilcher}
                          alt="axies"
                          className="avatar"
                        />
                      </a>
                      <div className="badge">
                        <TiTick style={{ fontSize: "15px" }} />
                      </div>
                    </div>
                    <div className="author-infor">
                      <h5 className="fs-16">
                        <a>Harper Wilcher</a>
                      </h5>
                      <span className="price">29.2 $</span>
                    </div>
                  </div>
                </div>
                <div className="box-item pl-68">
                  <div className="sc-author-box style-3 pd-0">
                    <div className="author-avatar">
                      <a>
                        <img src={women} alt="axies" className="avatar" />
                      </a>
                      <div className="badge">
                        <TiTick style={{ fontSize: "15px" }} />
                      </div>
                    </div>
                    <div className="author-infor">
                      <h5 className="fs-16">
                        <a>Kevin McCoy</a>
                      </h5>
                      <span className="price">214.2 $</span>
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
            <div className="col-md-12">
              <div className="heading-live-auctions mg-bt-21">
                <h2 className="tf-title pb-18">Today's Picks</h2>
              </div>
            </div>
            <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="sc-card-product explode style2 mg-bt  ">
                <div className="card-media">
                  <a>
                    <img src={img1} alt="Axies" />
                  </a>
                  <div className="button-place-bid">
                    <button className="sc-button style-place-bid style bag fl-button pri-3">
                      <FaShoppingBag color="black" />
                      <span>Place Bid</span>
                    </button>
                  </div>
                  {/* <div className="wishlist-button heart">
                    <IoIosHeartEmpty size={18} />
                    <span className="number-like">100</span>
                  </div> */}
                  <div className="coming-soon"></div>
                </div>
                <div className="card-title">
                  <h5>
                    <a>"ApeX Legend"</a>
                  </h5>
                </div>
                <div className="meta-info">
                  <div className="author">
                    <div className="avatar">
                      <img src={AndyHurlbutt} alt="Axies" />
                    </div>
                    <div className="info">
                      <span>Creator</span>
                      <h6>
                        <a>SalvadorDali</a>
                      </h6>
                    </div>
                  </div>
                  <div className="tags">bsc</div>
                </div>
                <div
                  className="card-bottom
                        style-explode"
                >
                  <div className="price">
                    <span>Current Bid</span>
                    <div className="price-details">
                      <h5>4.89 $</h5>
                      <span>= $12.246</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="sc-card-product explode style2 mg-bt  ">
                <div className="card-media">
                  <a>
                    <img src={bunny} alt="Axies" />
                  </a>
                  <div className="button-place-bid">
                    <button className="sc-button style-place-bid style bag fl-button pri-3">
                      <FaShoppingBag color="black" />
                      <span>Place Bid</span>
                    </button>
                  </div>
                  {/* <div className="wishlist-button heart">
                    <IoIosHeartEmpty size={18} />
                    <span className="number-like">100</span>
                  </div> */}
                  <div className="coming-soon"></div>
                </div>
                <div className="card-title">
                  <h5>
                    <a>"Moonlight Bunny Dreams"</a>
                  </h5>
                </div>
                <div className="meta-info">
                  <div className="author">
                    <div className="avatar">
                      <img src={TommyAlrez} alt="Axies" />
                    </div>
                    <div className="info">
                      <span>Creator</span>
                      <h6>
                        <a>SalvadorDali</a>
                      </h6>
                    </div>
                  </div>
                  <div className="tags">bsc</div>
                </div>
                <div
                  className="card-bottom
                        style-explode"
                >
                  <div className="price">
                    <span>Current Bid</span>
                    <div className="price-details">
                      <h5>4.89 $</h5>
                      <span>= $12.246</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="sc-card-product explode style2 mg-bt  ">
                <div className="card-media">
                  <a>
                    <img src={elephantpic} alt="Axies" />
                  </a>
                  <div className="button-place-bid">
                    <button className="sc-button style-place-bid style bag fl-button pri-3">
                      <FaShoppingBag color="black" />
                      <span>Place Bid</span>
                    </button>
                  </div>
                  {/* <div className="wishlist-button heart">
                    <IoIosHeartEmpty size={18} />
                    <span className="number-like">100</span>
                  </div> */}
                  <div className="coming-soon"></div>
                </div>
                <div className="card-title">
                  <h5>
                    <a>"The Majestic Elephant"</a>
                  </h5>
                </div>
                <div className="meta-info">
                  <div className="author">
                    <div className="avatar">
                      <img src={Man} alt="Axies" />
                    </div>
                    <div className="info">
                      <span>Creator</span>
                      <h6>
                        <a>SalvadorDali</a>
                      </h6>
                    </div>
                  </div>
                  <div className="tags">bsc</div>
                </div>
                <div
                  className="card-bottom
                        style-explode"
                >
                  <div className="price">
                    <span>Current Bid</span>
                    <div className="price-details">
                      <h5>4.89 $</h5>
                      <span>= $12.246</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="sc-card-product explode style2 mg-bt  ">
                <div className="card-media">
                  <a>
                    <img src={img3} alt="Axies" />
                  </a>
                  <div className="button-place-bid">
                    <button className="sc-button style-place-bid style bag fl-button pri-3">
                      <FaShoppingBag color="black" />
                      <span>Place Bid</span>
                    </button>
                  </div>
                  {/* <div className="wishlist-button heart">
                    <IoIosHeartEmpty size={18} />
                    <span className="number-like">100</span>
                  </div> */}
                  <div className="coming-soon"></div>
                </div>
                <div className="card-title">
                  <h5>
                    <a>"Doodle Heroes"</a>
                  </h5>
                </div>
                <div className="meta-info">
                  <div className="author">
                    <div className="avatar">
                      <img src={women} alt="Axies" />
                    </div>
                    <div className="info">
                      <span>Creator</span>
                      <h6>
                        <a>SalvadorDali</a>
                      </h6>
                    </div>
                  </div>
                  <div className="tags">bsc</div>
                </div>
                <div
                  className="card-bottom
                        style-explode"
                >
                  <div className="price">
                    <span>Current Bid</span>
                    <div className="price-details">
                      <h5>4.89 $</h5>
                      <span>= $12.246</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="sc-card-product explode style2 mg-bt  ">
                <div className="card-media">
                  <a>
                    <img src={sonic} alt="Axies" />
                  </a>
                  <div className="button-place-bid">
                    <button className="sc-button style-place-bid style bag fl-button pri-3">
                      <FaShoppingBag color="black" />
                      <span>Place Bid</span>
                    </button>
                  </div>
                  {/* <div className="wishlist-button heart">
                    <IoIosHeartEmpty size={18} />
                    <span className="number-like">100</span>
                  </div> */}
                  <div className="coming-soon"></div>
                </div>
                <div className="card-title">
                  <h5>
                    <a>"Sonic Rush "</a>
                  </h5>
                </div>
                <div className="meta-info">
                  <div className="author">
                    <div className="avatar">
                      <img src={creativeArt} alt="Axies" />
                    </div>
                    <div className="info">
                      <span>Creator</span>
                      <h6>
                        <a>SalvadorDali</a>
                      </h6>
                    </div>
                  </div>
                  <div className="tags">bsc</div>
                </div>
                <div
                  className="card-bottom
                        style-explode"
                >
                  <div className="price">
                    <span>Current Bid</span>
                    <div className="price-details">
                      <h5>4.89 $</h5>
                      <span>= $12.246</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="sc-card-product explode style2 mg-bt  ">
                <div className="card-media">
                  <a>
                    <img src={img2} alt="Axies" />
                  </a>
                  <div className="button-place-bid">
                    <button className="sc-button style-place-bid style bag fl-button pri-3">
                      <FaShoppingBag color="black" />
                      <span>Place Bid</span>
                    </button>
                  </div>
                  {/* <div className="wishlist-button heart">
                    <IoIosHeartEmpty size={18} />
                    <span className="number-like">100</span>
                  </div> */}
                  <div className="coming-soon"></div>
                </div>
                <div className="card-title">
                  <h5>
                    <a>"Crypto Chimp"</a>
                  </h5>
                </div>
                <div className="meta-info">
                  <div className="author">
                    <div className="avatar">
                      <img src={BlakeBanks} alt="Axies" />
                    </div>
                    <div className="info">
                      <span>Creator</span>
                      <h6>
                        <a>SalvadorDali</a>
                      </h6>
                    </div>
                  </div>
                  <div className="tags">bsc</div>
                </div>
                <div
                  className="card-bottom
                        style-explode"
                >
                  <div className="price">
                    <span>Current Bid</span>
                    <div className="price-details">
                      <h5>4.89 $</h5>
                      <span>= $12.246</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="sc-card-product explode style2 mg-bt  ">
                <div className="card-media">
                  <a>
                    <img src={animal} alt="Axies" />
                  </a>
                  <div className="button-place-bid">
                    <button className="sc-button style-place-bid style bag fl-button pri-3">
                      <FaShoppingBag color="black" />
                      <span>Place Bid</span>
                    </button>
                  </div>
                  {/* <div className="wishlist-button heart">
                    <IoIosHeartEmpty size={18} />
                    <span className="number-like">100</span>
                  </div> */}
                  <div className="coming-soon"></div>
                </div>
                <div className="card-title">
                  <h5>
                    <a>"Whispers of the Wild"</a>
                  </h5>
                </div>
                <div className="meta-info">
                  <div className="author">
                    <div className="avatar">
                      <img src={SamsonFrost} alt="Axies" />
                    </div>
                    <div className="info">
                      <span>Creator</span>
                      <h6>
                        <a>SalvadorDali</a>
                      </h6>
                    </div>
                  </div>
                  <div className="tags">bsc</div>
                </div>
                <div
                  className="card-bottom
                        style-explode"
                >
                  <div className="price">
                    <span>Current Bid</span>
                    <div className="price-details">
                      <h5>4.89 $</h5>
                      <span>= $12.246</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="sc-card-product explode style2 mg-bt  ">
                <div className="card-media">
                  <a>
                    <img src={robot} alt="Axies" />
                  </a>
                  <div className="button-place-bid">
                    <button className="sc-button style-place-bid style bag fl-button pri-3">
                      <FaShoppingBag color="black" />
                      <span>Place Bid</span>
                    </button>
                  </div>
                  {/* <div className="wishlist-button heart">
                    <IoIosHeartEmpty size={18} />
                    <span className="number-like">100</span>
                  </div> */}
                  <div className="coming-soon"></div>
                </div>
                <div className="card-title">
                  <h5>
                    <a>"Neon Automaton"</a>
                  </h5>
                </div>
                <div className="meta-info">
                  <div className="author">
                    <div className="avatar">
                      <img src={HarperWilcher} alt="Axies" />
                    </div>
                    <div className="info">
                      <span>Creator</span>
                      <h6>
                        <a>SalvadorDali</a>
                      </h6>
                    </div>
                  </div>
                  <div className="tags">bsc</div>
                </div>
                <div
                  className="card-bottom
                        style-explode"
                >
                  <div className="price">
                    <span>Current Bid</span>
                    <div className="price-details">
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
