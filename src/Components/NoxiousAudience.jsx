import React, { useState } from "react";
import TUsdt from "../assets/TUsdt.png";
import Header from "./header";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import Footer from "./footer";
export default function NoxiousAudience() {
  const [isExpanded, setIsExpanded] = useState(false);
  const shortText = "Michelangelo Buonarroti (foreign name: Michel...";
  const fullText = `Michelangelo Buonarroti (foreign name: Michelangelo di Lodovico Buonarroti Simoni), born on March 6, 1475 in Florence, Italy, was a great Italian Renaissance painter, sculptor, architect, and poet, representative of the highest peak of Renaissance sculpture art. He pursued the perfection of art all his life and insisted on his own artistic ideas. His sculpture "David" is world-famous, and his most famous paintings are the "Genesis" ceiling painting and the fresco "The Last Judgment."`;

  return (
    <>
      <Header />
      <div className="content-wrap">
        <div className="exploreCreator">
          <div class="banner-area">
            <picture>
              <source
                type="image/avif"
                srcset="https://treasurenft.xyz/userdata/img/20230217145623_NoxiousAudience_banner.avif"
              />
              <img
                alt="banner"
                loading="lazy"
                class="banner-img"
                src="https://treasurenft.xyz/userdata/img/20230217145623_NoxiousAudience_banner_compre.jpg"
              />
            </picture>
          </div>
          <div className="info-area">
            <div className="name-area">
              <div className="avatar-area">
                <picture className="img-wrap">
                  <source
                    type="image/avif"
                    srcSet="https://treasurenft.xyz/userdata/img/20230217145616_NoxiousAudience_logo.avif"
                  />
                  <img
                    alt="img"
                    loading="lazy"
                    className="img"
                    src="https://treasurenft.xyz/userdata/img/20230217145616_NoxiousAudience_logo_compre.jpg"
                  />
                </picture>
              </div>
              <div className="name-area-imgGroup">
                <div className="name-area-imgGroup-div">
                  <span className="title-black-PR-26 font-weight-700">
                    Noxious Audience
                  </span>
                  <img
                    src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
                    alt="icon"
                    loading="lazy"
                    className="icon"
                  />
                  <a
                    href="https://polygonscan.com/address/0xb44bD5c99f8130527154C19536145286F51E1a0A#readContract"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex" }}
                  >
                    <img
                      src="https://image.treasurenft.xyz/NewVer2212/icon/icon_polygon_01.png"
                      alt="icon"
                      loading="lazy"
                      className="icon polygon-icon"
                    />
                  </a>
                </div>
                <div className="title-grey999-PR-24 by-name">By BLAINE</div>
              </div>
            </div>
            <div className="subInfo-area">
              <div className="ivu-row-flex">
                <div className="ivu-col subInfo-area-Col ivu-col-span-xs-6 ivu-col-span-sm-8 ivu-col-span-md-6">
                  <div className="title-black-PR-24 subInfo-value">701,736</div>
                  <div className="title-grey999-PR-20">Items</div>
                </div>
                <div className="ivu-col subInfo-area-Col ivu-col-span-xs-6 ivu-col-span-sm-8 ivu-col-span-md-6">
                  <div className="title-black-PR-24 subInfo-value">4,544</div>
                  <div className="title-grey999-PR-20">Owner</div>
                </div>
                <div className="ivu-col subInfo-area-Col ivu-col-span-xs-6 ivu-col-span-sm-8 ivu-col-span-md-6">
                  <div className="price-block">
                    <img
                      src={TUsdt}
                      alt="coin"
                      loading="lazy"
                      className="coinIconUSDT"
                    />
                    <span className="title-black-PR-24 subInfo-value">
                      5170.15M
                    </span>
                  </div>
                  <div className="title-grey999-PR-20">Volume Traded</div>
                </div>
                <div className="ivu-col subInfo-area-Col ivu-col-span-xs-6 ivu-col-span-sm-8 ivu-col-span-md-6">
                  <div className="price-block">
                    <img
                      src={TUsdt}
                      alt="coin"
                      loading="lazy"
                      className="coinIconUSDT"
                    />
                    <span className="title-black-PR-24 subInfo-value">
                      32.39
                    </span>
                  </div>
                  <div className="title-grey999-PR-20">Floor price</div>
                </div>
              </div>
            </div>
            <div className="intro-wrap">
              <div
                className="ivu-row"
                style={{ marginLeft: "-8px", marginRight: "-8px" }}
              >
                <div
                  className="ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-14"
                  style={{ paddingLeft: "8px", paddingRight: "8px" }}
                >
                  <p className="title-black-PR-20">BIO</p>
                  <div className="title-grey666-PR-18 intro">
                    {isExpanded ? fullText : shortText}
                    <div
                      className="intro-block specialText-PR-20"
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      {isExpanded ? "See Less" : "See More"}{" "}
                      {isExpanded ? (
                        <MdKeyboardArrowUp color="#5fc2fb" />
                      ) : (
                        <MdKeyboardArrowDown color="#5fc2fb" />
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className="ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-10"
                  style={{ paddingLeft: "8px", paddingRight: "8px" }}
                >
                  <p className="title-black-PR-20">Share</p>
                  <div className="social-link-wrap">
                    <a
                      href="https://twitter.com/Treasurenft_xyz"
                      className="social-icon"
                    >
                      <img
                        src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_twitter01.png"
                        alt="icon"
                        loading="lazy"
                      />
                    </a>
                    <a className="social-icon">
                      <img
                        src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_share_03.png"
                        alt="share"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="commodity">
            <div className="search-block">
              <div className="input-search ivu-input-wrapper ivu-input-wrapper-default ivu-input-type-text">
                <i className="ivu-icon ivu-icon-ios-loading ivu-load-loop ivu-input-icon ivu-input-icon-validate"></i>
                <input
                  autoComplete="off"
                  spellCheck="false"
                  type="text"
                  placeholder="Enter name to search"
                  className="ivu-input ivu-input-default ivu-input-with-prefix"
                />
                <span className="ivu-input-prefix">
                  <img
                    src="https://image.treasurenft.xyz/icon/icon_search_03.png"
                    alt="search"
                    loading="lazy"
                    className="iconSearch"
                  />
                </span>
              </div>
              <div className="select-search ivu-select ivu-select-single ivu-select-default">
                <div tabIndex="0" className="ivu-select-selection">
                  <input type="hidden" />
                  <div>
                    <span
                      className="ivu-select-placeholder"
                      style={{ display: "none" }}
                    ></span>
                    <i className="ivu-icon ivu-icon-ios-arrow-down ivu-select-arrow"></i>
                  </div>
                </div>
              </div>
              <img
                src="https://image.treasurenft.xyz/icon/icon_sort_03.png"
                alt="sort"
                loading="lazy"
                className="sortIcon"
              />
            </div>
            <div className="bestSeller-product-wrap">
              <div className="bestSeller-products">
                <div
                  className="ivu-row"
                  style={{ marginLeft: "-8px", marginRight: "-8px" }}
                >
                  <div
                    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
                    style={{ paddingLeft: "8px", paddingRight: "8px" }}
                  >
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      className="product-card aos-init aos-animate"
                    >
                      <div className="product-block">
                        <div className="product-img">
                          <picture>
                            <source
                              type="image/avif"
                              srcSet="https://prodimage-dan.treasurenft.xyz/NoxiousAudience/Noxious%20Audience_2551.avif"
                            />
                            <img
                              alt="img"
                              loading="lazy"
                              src="https://prodimage-dan.treasurenft.xyz/NoxiousAudience/Noxious Audience_2551_compre.png"
                            />
                          </picture>
                        </div>
                        <div className="product-detail margin-bottom-10">
                          <div>
                            <span className="name title-black-PR-18">
                              Noxious Audience_2551
                            </span>
                          </div>
                          <div className="product-detail-row">
                            <div className="price-block">
                              <img src={TUsdt} alt="icon" loading="lazy" />
                              <span className="price title-grey999-PR-14">
                                0.9
                              </span>
                            </div>
                            <div className="trend-up">
                              <img
                                src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_trend_up_01.png"
                                alt="icon"
                                loading="lazy"
                              />
                              <span className="price">0.04</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
                    style={{ paddingLeft: "8px", paddingRight: "8px" }}
                  >
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      className="product-card aos-init aos-animate"
                    >
                      <div className="product-block">
                        <div className="product-img">
                          <picture>
                            <source
                              type="image/avif"
                              srcSet="https://prodimage-dan.treasurenft.xyz/NoxiousAudience/Noxious%20Audience_1944.avif"
                            />
                            <img
                              alt="img"
                              loading="lazy"
                              src="https://prodimage-dan.treasurenft.xyz/NoxiousAudience/Noxious Audience_1944_compre.png"
                            />
                          </picture>
                        </div>
                        <div className="product-detail margin-bottom-10">
                          <div>
                            <span className="name title-black-PR-18">
                              Noxious Audience_2551
                            </span>
                          </div>
                          <div className="product-detail-row">
                            <div className="price-block">
                              <img src={TUsdt} alt="icon" loading="lazy" />
                              <span className="price title-grey999-PR-14">
                                0.9
                              </span>
                            </div>
                            <div className="trend-up">
                              <img
                                src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_trend_up_01.png"
                                alt="icon"
                                loading="lazy"
                              />
                              <span className="price">0.04</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
                    style={{ paddingLeft: "8px", paddingRight: "8px" }}
                  >
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      className="product-card aos-init aos-animate"
                    >
                      <div className="product-block">
                        <div className="product-img">
                          <picture>
                            <source
                              type="image/avif"
                              srcSet="https://prodimage-dan.treasurenft.xyz/NoxiousAudience/Noxious%20Audience_7048.avif"
                            />
                            <img
                              alt="img"
                              loading="lazy"
                              src="https://prodimage-dan.treasurenft.xyz/NoxiousAudience/Noxious Audience_7048_compre.png"
                            />
                          </picture>
                        </div>
                        <div className="product-detail margin-bottom-10">
                          <div>
                            <span className="name title-black-PR-18">
                              Noxious Audience_2551
                            </span>
                          </div>
                          <div className="product-detail-row">
                            <div className="price-block">
                              <img src={TUsdt} alt="icon" loading="lazy" />
                              <span className="price title-grey999-PR-14">
                                0.9
                              </span>
                            </div>
                            <div className="trend-up">
                              <img
                                src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_trend_up_01.png"
                                alt="icon"
                                loading="lazy"
                              />
                              <span className="price">0.04</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
                    style={{ paddingLeft: "8px", paddingRight: "8px" }}
                  >
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      className="product-card aos-init aos-animate"
                    >
                      <div className="product-block">
                        <div className="product-img">
                          <picture>
                            <source
                              type="image/avif"
                              srcSet="https://prodimage-dan.treasurenft.xyz/NoxiousAudience/Noxious%20Audience_9985.avif"
                            />
                            <img
                              alt="img"
                              loading="lazy"
                              src="https://prodimage-dan.treasurenft.xyz/NoxiousAudience/Noxious Audience_9985_compre.png"
                            />
                          </picture>
                        </div>
                        <div className="product-detail margin-bottom-10">
                          <div>
                            <span className="name title-black-PR-18">
                              Noxious Audience_2551
                            </span>
                          </div>
                          <div className="product-detail-row">
                            <div className="price-block">
                              <img src={TUsdt} alt="icon" loading="lazy" />
                              <span className="price title-grey999-PR-14">
                                0.9
                              </span>
                            </div>
                            <div className="trend-up">
                              <img
                                src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_trend_up_01.png"
                                alt="icon"
                                loading="lazy"
                              />
                              <span className="price">0.04</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
                    style={{ paddingLeft: "8px", paddingRight: "8px" }}
                  >
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      className="product-card aos-init aos-animate"
                    >
                      <div className="product-block">
                        <div className="product-img">
                          <picture>
                            <source
                              type="image/avif"
                              srcSet="https://prodimage-dan.treasurenft.xyz/NoxiousAudience/Noxious%20Audience_0719.avif"
                            />
                            <img
                              alt="img"
                              loading="lazy"
                              src="https://prodimage-dan.treasurenft.xyz/NoxiousAudience/Noxious Audience_0719_compre.png"
                            />
                          </picture>
                        </div>
                        <div className="product-detail margin-bottom-10">
                          <div>
                            <span className="name title-black-PR-18">
                              Noxious Audience_2551
                            </span>
                          </div>
                          <div className="product-detail-row">
                            <div className="price-block">
                              <img src={TUsdt} alt="icon" loading="lazy" />
                              <span className="price title-grey999-PR-14">
                                0.9
                              </span>
                            </div>
                            <div className="trend-up">
                              <img
                                src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_trend_up_01.png"
                                alt="icon"
                                loading="lazy"
                              />
                              <span className="price">0.04</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
                    style={{ paddingLeft: "8px", paddingRight: "8px" }}
                  >
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      className="product-card aos-init aos-animate"
                    >
                      <div className="product-block">
                        <div className="product-img">
                          <picture>
                            <source
                              type="image/avif"
                              srcSet="https://prodimage-dan.treasurenft.xyz/NoxiousAudience/Noxious%20Audience_7048.avif"
                            />
                            <img
                              alt="img"
                              loading="lazy"
                              src="https://prodimage-dan.treasurenft.xyz/NoxiousAudience/Noxious Audience_7048_compre.png"
                            />
                          </picture>
                        </div>
                        <div className="product-detail margin-bottom-10">
                          <div>
                            <span className="name title-black-PR-18">
                              Noxious Audience_2551
                            </span>
                          </div>
                          <div className="product-detail-row">
                            <div className="price-block">
                              <img src={TUsdt} alt="icon" loading="lazy" />
                              <span className="price title-grey999-PR-14">
                                0.9
                              </span>
                            </div>
                            <div className="trend-up">
                              <img
                                src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_trend_up_01.png"
                                alt="icon"
                                loading="lazy"
                              />
                              <span className="price">0.04</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
