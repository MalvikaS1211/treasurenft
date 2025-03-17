import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import TUsdt from "../assets/TUsdt.png";
import Header from "./header";
import LogoBlue from "../assets/LogoBlue.png";
import PhoneHeader from "./PhoneHeader";
import LogoWhite from "../assets/LogoWhite.png";

export default function NFTBuy() {
  const [paddingValue, setPaddingValue] = useState("30px");
  const handleResize = () => {
    if (window.innerWidth <= 576) {
      setPaddingValue("110px");
    } else {
      setPaddingValue("30px");
    }
  };

  useEffect(() => {
    handleResize(); // For initial load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div
        data-v-b49386ae=""
        className="headerImg headerimg-custom header-banner"
        style={{ padding: paddingValue }}
      >
        <div className="d-none d-md-block">
          <Header Logo={LogoWhite} />
        </div>
        <div className="d-block d-md-none">
          <PhoneHeader Logo={LogoWhite} />
        </div>
        <h2 data-v-b49386ae="" className="headerImg-text title-black-PR-30">
          Buy NFT
        </h2>
      </div>
      <div className="container stake-tabs-tab-content">
        <div className="stake-tabs-tab-content-box">
          <div className="stake-area">
            <div className="commodity">
              {/* <div data-v-090235b6="" class="search-block pb-3">
                <div
                  data-v-090235b6=""
                  class="ivu-row-flex ivu-row-flex-middle"
                  style={{ marginLeft: "-4px", marginRight: "-4px" }}
                >
                  <div
                    data-v-090235b6=""
                    class="ivu-col"
                    style={{ paddingLeft: "4px", paddingRight: "4px" }}
                  >
                    <img
                      data-v-090235b6=""
                      src="https://image.treasurenft.xyz/PC/img/arrow-circle-left.svg"
                      alt="arrow back"
                      width="32"
                      height="32"
                      decoding="async"
                      class="icon-back"
                    />
                  </div>
                  <div
                    data-v-090235b6=""
                    class="ivu-col"
                    style={{ paddingLeft: "4px", paddingRight: "4px" }}
                    onClick={() => {
                      <ExclusiveZone></ExclusiveZone>;
                    }}
                  >
                    <span
                      data-v-090235b6=""
                      class="title-grey333-PR-16 font-weight-500"
                    >
                      Return
                    </span>
                  </div>
                </div>
                <div
                  data-v-090235b6=""
                  class="ivu-row-flex ivu-row-flex-middle"
                  style={{ marginLeft: "-2.5px", marginRight: "-2.5px" }}
                >
                  <div
                    data-v-090235b6=""
                    class="ivu-col"
                    style={{ paddingLeft: "2.5px", paddingRight: "2.5px" }}
                  >
                    <div
                      data-v-090235b6=""
                      class="input-search ivu-input-wrapper ivu-input-wrapper-default ivu-input-type-text"
                    >
                      <i class="ivu-icon ivu-icon-ios-loading ivu-load-loop ivu-input-icon ivu-input-icon-validate"></i>
                      <input
                        autocomplete="off"
                        spellcheck="false"
                        type="text"
                        placeholder="Enter name to search"
                        class="ivu-input
                         ivu-input-default ivu-input-with-prefix"
                      />
                      <span class="ivu-input-prefix">
                     
                        <CiSearch size={25} />
                      </span>
                    </div>
                  </div>
                  <div
                    data-v-090235b6=""
                    class="ivu-col"
                    style={{ paddingLeft: "2.5px", paddingRight: "2.5px" }}
                  >
                    <img
                      data-v-090235b6=""
                      src="https://image.treasurenft.xyz/icon/icon_sort_03.png"
                      alt="sort"
                      loading="lazy"
                      class="sortIcon"
                    />
                  </div>
                </div>
              </div> */}
              <div className="bestSeller-product-wrap">
                <div className="bestSeller-products">
                  <div
                    className="row"
                    style={{ marginLeft: "-8px", marginRight: "-8px" }}
                  >
                    <div
                      data-v-090235b6=""
                      class="col-sm-6 col-lg-2 col-md-3 buy-card-container pb-2"
                    >
                      <div
                        data-v-090235b6=""
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        class="product-card aos-init aos-animate"
                      >
                        <div data-v-090235b6="" class="product-block">
                          <div data-v-090235b6="" class="product-img">
                            <picture data-v-090235b6="">
                              <source
                                data-v-090235b6=""
                                type="image/avif"
                                srcset="https://prodimage-dan.treasurenft.xyz/Stake/Stake_08222.avif"
                              />
                              <img
                                data-v-090235b6=""
                                alt="img"
                                loading="lazy"
                                src="https://prodimage-dan.treasurenft.xyz/Stake/Stake_08222_compre.png"
                                style={{ width: "100%" }}
                              />
                            </picture>
                          </div>
                          <div
                            data-v-090235b6=""
                            class="product-detail margin-bottom-10"
                          >
                            <div data-v-090235b6="">
                              <span
                                data-v-090235b6=""
                                class="name title-black-PR-18"
                              >
                                Stake_250921
                              </span>
                            </div>
                            <div data-v-090235b6="" class="product-detail-row">
                              <div data-v-090235b6="" class="price-block">
                                <img
                                  data-v-090235b6=""
                                  src={TUsdt}
                                  alt="icon"
                                  loading="lazy"
                                />
                                <span
                                  data-v-090235b6=""
                                  class="price title-grey999-PR-14"
                                  style={{
                                    textDecoration: "none",
                                    marginLeft: "0px",
                                  }}
                                >
                                  50
                                </span>
                              </div>
                            </div>
                          </div>
                          <div data-v-090235b6="" class="ivu-row">
                            <div data-v-090235b6="" class="ivu-col">
                              <button
                                data-v-090235b6=""
                                type="button"
                                class="ivu-btn ivu-btn-primary ivu-btn-long button-stake"
                                data-bs-toggle="modal"
                                data-bs-target="#BuyModal"
                              >
                                <span>Buy</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-v-090235b6=""
                      class="col-sm-6 col-lg-2 col-md-3 buy-card-container pb-2"
                    >
                      <div
                        data-v-090235b6=""
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        class="product-card aos-init aos-animate"
                      >
                        <div data-v-090235b6="" class="product-block">
                          <div data-v-090235b6="" class="product-img">
                            <picture data-v-090235b6="">
                              <source
                                data-v-090235b6=""
                                type="image/avif"
                                srcset="https://prodimage-dan.treasurenft.xyz/Stake/Stake_01865.avif"
                              />
                              <img
                                data-v-090235b6=""
                                alt="img"
                                loading="lazy"
                                src="https://prodimage-dan.treasurenft.xyz/Stake/Stake_01865_compre.png"
                                style={{ width: "100%" }}
                              />
                            </picture>
                          </div>
                          <div
                            data-v-090235b6=""
                            class="product-detail margin-bottom-10"
                          >
                            <div data-v-090235b6="">
                              <span
                                data-v-090235b6=""
                                class="name title-black-PR-18"
                              >
                                Stake_258454
                              </span>
                            </div>
                            <div data-v-090235b6="" class="product-detail-row">
                              <div data-v-090235b6="" class="price-block">
                                <img
                                  data-v-090235b6=""
                                  src={TUsdt}
                                  alt="icon"
                                  loading="lazy"
                                />
                                <span
                                  data-v-090235b6=""
                                  class="price title-grey999-PR-14"
                                  style={{
                                    textDecoration: "none",
                                    marginLeft: "0px",
                                  }}
                                >
                                  50
                                </span>
                              </div>
                            </div>
                          </div>
                          <div data-v-090235b6="" class="ivu-row">
                            <div data-v-090235b6="" class="ivu-col">
                              <button
                                data-v-090235b6=""
                                type="button"
                                class="ivu-btn ivu-btn-primary ivu-btn-long button-stake"
                              >
                                {" "}
                                <span>Buy</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-v-090235b6=""
                      class="col-sm-6 col-lg-2 col-md-3 buy-card-container pb-2"
                    >
                      <div
                        data-v-090235b6=""
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        class="product-card aos-init aos-animate"
                      >
                        <div data-v-090235b6="" class="product-block">
                          <div data-v-090235b6="" class="product-img">
                            <picture data-v-090235b6="">
                              <source
                                data-v-090235b6=""
                                type="image/avif"
                                srcset="https://prodimage-dan.treasurenft.xyz/Stake/Stake_00153.avif"
                              />
                              <img
                                data-v-090235b6=""
                                alt="img"
                                loading="lazy"
                                src="https://prodimage-dan.treasurenft.xyz/Stake/Stake_00153_compre.png"
                                style={{ width: "100%" }}
                              />
                            </picture>
                          </div>
                          <div
                            data-v-090235b6=""
                            class="product-detail margin-bottom-10"
                          >
                            <div data-v-090235b6="">
                              <span
                                data-v-090235b6=""
                                class="name title-black-PR-18"
                              >
                                Stake_258454
                              </span>
                            </div>
                            <div data-v-090235b6="" class="product-detail-row">
                              <div data-v-090235b6="" class="price-block">
                                <img
                                  data-v-090235b6=""
                                  src={TUsdt}
                                  alt="icon"
                                  loading="lazy"
                                />
                                <span
                                  data-v-090235b6=""
                                  class="price title-grey999-PR-14"
                                  style={{
                                    textDecoration: "none",
                                    marginLeft: "0px",
                                  }}
                                >
                                  50
                                </span>
                              </div>
                            </div>
                          </div>
                          <div data-v-090235b6="" class="ivu-row">
                            <div data-v-090235b6="" class="ivu-col">
                              <button
                                data-v-090235b6=""
                                type="button"
                                class="ivu-btn ivu-btn-primary ivu-btn-long button-stake"
                              >
                                {" "}
                                <span>Buy</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-v-090235b6=""
                      class="col-sm-6 col-lg-2 col-md-3 buy-card-container pb-2"
                    >
                      <div
                        data-v-090235b6=""
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        class="product-card aos-init aos-animate"
                      >
                        <div data-v-090235b6="" class="product-block">
                          <div data-v-090235b6="" class="product-img">
                            <picture data-v-090235b6="">
                              <source
                                data-v-090235b6=""
                                type="image/avif"
                                srcset="https://prodimage-dan.treasurenft.xyz/Stake/Stake_06291.avif"
                              />
                              <img
                                data-v-090235b6=""
                                alt="img"
                                loading="lazy"
                                src="https://prodimage-dan.treasurenft.xyz/Stake/Stake_06291_compre.png"
                                style={{ width: "100%" }}
                              />
                            </picture>
                          </div>
                          <div
                            data-v-090235b6=""
                            class="product-detail margin-bottom-10"
                          >
                            <div data-v-090235b6="">
                              <span
                                data-v-090235b6=""
                                class="name title-black-PR-18"
                              >
                                Stake_258454
                              </span>
                            </div>
                            <div data-v-090235b6="" class="product-detail-row">
                              <div data-v-090235b6="" class="price-block">
                                <img
                                  data-v-090235b6=""
                                  src={TUsdt}
                                  alt="icon"
                                  loading="lazy"
                                />
                                <span
                                  data-v-090235b6=""
                                  class="price title-grey999-PR-14"
                                  style={{
                                    textDecoration: "none",
                                    marginLeft: "0px",
                                  }}
                                >
                                  280{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div data-v-090235b6="" class="ivu-row">
                            <div data-v-090235b6="" class="ivu-col">
                              <button
                                data-v-090235b6=""
                                type="button"
                                class="ivu-btn ivu-btn-primary ivu-btn-long button-stake"
                              >
                                {" "}
                                <span>Buy</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-v-090235b6=""
                      class="col-sm-6 col-lg-2 col-md-3 buy-card-container pb-2"
                    >
                      <div
                        data-v-090235b6=""
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        class="product-card aos-init aos-animate"
                      >
                        <div data-v-090235b6="" class="product-block">
                          <div data-v-090235b6="" class="product-img">
                            <picture data-v-090235b6="">
                              <source
                                data-v-090235b6=""
                                type="image/avif"
                                srcset="https://prodimage-dan.treasurenft.xyz/Stake/Stake_02784.avif"
                              />
                              <img
                                data-v-090235b6=""
                                alt="img"
                                loading="lazy"
                                src="https://prodimage-dan.treasurenft.xyz/Stake/Stake_02784_compre.png"
                                style={{ width: "100%" }}
                              />
                            </picture>
                          </div>
                          <div
                            data-v-090235b6=""
                            class="product-detail margin-bottom-10"
                          >
                            <div data-v-090235b6="">
                              <span
                                data-v-090235b6=""
                                class="name title-black-PR-18"
                              >
                                Stake_258454
                              </span>
                            </div>
                            <div data-v-090235b6="" class="product-detail-row">
                              <div data-v-090235b6="" class="price-block">
                                <img
                                  data-v-090235b6=""
                                  src={TUsdt}
                                  alt="icon"
                                  loading="lazy"
                                />
                                <span
                                  data-v-090235b6=""
                                  class="price title-grey999-PR-14"
                                  style={{
                                    textDecoration: "none",
                                    marginLeft: "0px",
                                  }}
                                >
                                  50
                                </span>
                              </div>
                            </div>
                          </div>
                          <div data-v-090235b6="" class="ivu-row">
                            <div data-v-090235b6="" class="ivu-col">
                              <button
                                data-v-090235b6=""
                                type="button"
                                class="ivu-btn ivu-btn-primary ivu-btn-long button-stake"
                              >
                                {" "}
                                <span>Buy</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-v-090235b6=""
                      class="col-sm-6 col-lg-2 col-md-3 buy-card-container pb-2"
                    >
                      <div
                        data-v-090235b6=""
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        class="product-card aos-init aos-animate"
                      >
                        <div data-v-090235b6="" class="product-block">
                          <div data-v-090235b6="" class="product-img">
                            <picture data-v-090235b6="">
                              <source
                                data-v-090235b6=""
                                type="image/avif"
                                srcset="https://prodimage-dan.treasurenft.xyz/Stake/Stake_03549.avif"
                              />
                              <img
                                data-v-090235b6=""
                                alt="img"
                                loading="lazy"
                                src="https://prodimage-dan.treasurenft.xyz/Stake/Stake_03549_compre.png"
                                style={{ width: "100%" }}
                              />
                            </picture>
                          </div>
                          <div
                            data-v-090235b6=""
                            class="product-detail margin-bottom-10"
                          >
                            <div data-v-090235b6="">
                              <span
                                data-v-090235b6=""
                                class="name title-black-PR-18"
                              >
                                Stake_258454
                              </span>
                            </div>
                            <div data-v-090235b6="" class="product-detail-row">
                              <div data-v-090235b6="" class="price-block">
                                <img
                                  data-v-090235b6=""
                                  src={TUsdt}
                                  alt="icon"
                                  loading="lazy"
                                />
                                <span
                                  data-v-090235b6=""
                                  class="price title-grey999-PR-14"
                                  style={{
                                    textDecoration: "none",
                                    marginLeft: "0px",
                                  }}
                                >
                                  50
                                </span>
                              </div>
                            </div>
                          </div>
                          <div data-v-090235b6="" class="ivu-row">
                            <div data-v-090235b6="" class="ivu-col">
                              <button
                                data-v-090235b6=""
                                type="button"
                                class="ivu-btn ivu-btn-primary ivu-btn-long button-stake"
                              >
                                {" "}
                                <span>Buy</span>
                              </button>
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
      {/* Buy Modal */}
      <div
        class="modal fade"
        id="BuyModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="BuyModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="m-4">
              {/* Header */}
              <div className="d-flex justify-content-between">
                <h3 className="font-bold text-lg">Buy</h3>
                <img
                  src="https://image.treasurenft.xyz/PC/img/icon-close_01.svg"
                  width="40"
                  height="40"
                  alt="close"
                  data-bs-dismiss="modal"
                  className="cursor-pointer"
                />
              </div>
            </div>
            {/* Body */}
            <div className="text-center py-4 modal-body">
              <img
                src="https://image.treasurenft.xyz/PC/img/img-stake-warning_01.png"
                width="152"
                height="152"
                alt="stake-img"
                className="mx-auto mb-4"
              />
              <h4 className="font-semibold text-lg">
                Reached at Daily Purchase Limit
              </h4>
            </div>
            {/* Footer */}
            <div className="text-center mt-4 modal-footer">
              {/* <button className="bg-blue-600 text-white py-2 px-6 rounded-lg w-full font-bold">
                  Close
                </button> */}

              <div data-v-30490456="" class="ivu-col ivu-col-span-24 px-4">
                <button
                  data-v-30490456=""
                  type="button"
                  class="ivu-btn ivu-btn-primary ivu-btn-long font-weight-700 button-stake"
                  data-bs-dismiss="modal"
                >
                  <span> Close </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
