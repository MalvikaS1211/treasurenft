import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import LogoWhite from "../assets/LogoWhite.png";
import PhoneHeader from "./PhoneHeader";

export default function Account() {
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
      {/* <Header /> */}

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
          Account
        </h2>
      </div>
      <div className="userCenter">
        <div data-v-1d6f6910="" class="ivu-row UserAreaStraight-row">
          <div
            data-v-1d6f6910=""
            class="ivu-col ivu-col-span-xs-24 ivu-col-span-sm-8 ivu-col-span-md-8 ivu-col-span-lg-8 ivu-col-span-xl-8"
            style={{ height: "560px" }}
          >
            <div data-v-7971ee0e="" data-v-1d6f6910="" class="userAreaStraight">
              <div data-v-7971ee0e="" class="header-area">
                <img
                  data-v-7971ee0e=""
                  src="https://image.treasurenft.xyz/PC/img/img_avatar_background.png"
                  alt="imgBanner"
                  loading="lazy"
                  class="user-bg-img user-bg-img"
                />
                <div data-v-7971ee0e="" class="info-area">
                  <img
                    data-v-7971ee0e=""
                    src="https://image.treasurenft.xyz/NewVer2212/img/img_avatar_01_defult.png"
                    alt="user-img"
                    loading="lazy"
                    class="user-img"
                  />
                  <div
                    data-v-7971ee0e=""
                    class=""
                    style={{ lineHeight: "1.7" }}
                  >
                    <div data-v-7971ee0e="" class="ivu-col ivu-col-span-24">
                      <div data-v-7971ee0e="" class="title-row">
                        <h2
                          data-v-7971ee0e=""
                          class="margin-right-10 title-black-PR-20"
                        >
                          **********
                        </h2>
                        <div data-v-60cb6f39="" class="">
                          <img
                            data-v-60cb6f39=""
                            src="https://image.treasurenft.xyz/img/icon-eye-on.svg"
                            alt="eye on"
                            width="30"
                            height="30"
                            decoding="sync"
                            class="eye-img"
                            style={{ display: "none" }}
                          />
                          <img
                            data-v-60cb6f39=""
                            src="https://image.treasurenft.xyz/img/icon-eye-off.svg"
                            alt="eye off"
                            width="30"
                            height="30"
                            decoding="sync"
                            class="eye-img"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-v-7971ee0e=""
                      class="ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-24 ivu-col-span-lg-24 ivu-col-span-xl-24"
                    >
                      <div
                        data-v-7971ee0e=""
                        class="title-grey666-PR-18 setMiddle margin-bottom-10 info-area-UID"
                      >
                        <span data-v-7971ee0e="" class=" margin-right-5">
                          UID:
                        </span>
                        <span data-v-7971ee0e="">*********</span>
                        <img
                          data-v-7971ee0e=""
                          src="https://image.treasurenft.xyz/icon/icon_copy_02.png"
                          alt="UIDimg"
                          loading="lazy"
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                    <div
                      data-v-7971ee0e=""
                      class="ivu-col ivu-col-span-xs-11 ivu-col-span-sm-24 ivu-col-span-md-24 ivu-col-span-lg-24 ivu-col-span-xl-24 info-block-out margin-bottom-10"
                    >
                      <div data-v-7971ee0e="" class="info-block">
                        <img
                          data-v-7971ee0e=""
                          src="https://image.treasurenft.xyz/NewVer2212/img/badges_lv0.png"
                          alt="imgLevel"
                          loading="lazy"
                          class="medal-img"
                        />
                        <span data-v-7971ee0e="" class="title-black-PR-16">
                          Level 0
                        </span>
                      </div>
                    </div>
                    <div
                      data-v-7971ee0e=""
                      class="ivu-col ivu-col-span-xs-11 ivu-col-span-sm-24 ivu-col-span-md-24 ivu-col-span-lg-24 ivu-col-span-xl-24 info-block-out"
                    >
                      <div data-v-7971ee0e="" class="info-block">
                        <span data-v-7971ee0e="" class="title-black-PR-16">
                          0 Points
                        </span>
                      </div>
                    </div>
                    <Link to="/account/level">
                      <div data-v-7971ee0e="" class="ivu-col ivu-col-span-24">
                        <div
                          data-v-7971ee0e=""
                          class="level-btn margin-bottom-10"
                        >
                          <span data-v-7971ee0e="" class="title-grey666-PR-16">
                            Level Information
                          </span>
                          <img
                            data-v-7971ee0e=""
                            src="https://image.treasurenft.xyz/btn/type%3Dbtn_arrow_03_up.png"
                            alt="imgRight"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div data-v-c5baec9a="" data-v-7971ee0e=""></div>
              </div>
            </div>
          </div>
          <div
            data-v-1d6f6910=""
            class="ivu-col info-wrap-Col ivu-col-span-xs-24 ivu-col-span-sm-16 ivu-col-span-md-16 ivu-col-span-lg-16 ivu-col-span-xl-16"
          >
            <div data-v-70b0a695="" data-v-1d6f6910="" class="UserAssetsInfo">
              <div
                data-v-70b0a695=""
                class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
              >
                <div data-v-70b0a695="" class="ivu-col UserAssetsInfo__balance">
                  <div data-v-70b0a695="" class="margin-left-50">
                    <span data-v-70b0a695="" class="d-flex align-items-center">
                      <img
                        data-v-70b0a695=""
                        src="https://image.treasurenft.xyz/coin/usdt.png"
                        alt="usdtImg"
                        class="UserAssetsInfo__icon margin-right-10"
                      />
                      <p data-v-70b0a695="" class="title-black-SB-40">
                        43.72
                      </p>
                    </span>
                  </div>
                  <h2 data-v-70b0a695="" class="title-black-PR-28">
                    Wallet Balance
                  </h2>
                </div>
                <div data-v-70b0a695="" class="ivu-col">
                  <div data-v-70b0a695="" class="d-flex align-items-center">
                    <img
                      data-v-70b0a695=""
                      src="https://image.treasurenft.xyz/coin/usdt.png"
                      alt="usdtImg"
                      class="UserAssetsInfo__icon"
                    />
                    <span
                      data-v-70b0a695=""
                      class="title-black-PR-24 margin-left-10"
                    >
                      0
                    </span>
                  </div>
                  <h5
                    data-v-70b0a695=""
                    class="title-grey666-PR-18 ellipsis-text"
                  >
                    Daily comprehensive income
                  </h5>
                </div>
                <div data-v-70b0a695="" class="ivu-col">
                  <div data-v-70b0a695="" class="d-flex align-items-center">
                    <img
                      data-v-70b0a695=""
                      src="https://image.treasurenft.xyz/coin/usdt.png"
                      loading="lazy"
                      alt="usdtImg"
                      class="UserAssetsInfo__icon"
                    />
                    <span
                      data-v-70b0a695=""
                      class="title-black-PR-24 margin-left-10"
                    >
                      0
                    </span>
                  </div>
                  <h5
                    data-v-70b0a695=""
                    class="title-grey666-PR-18 ellipsis-text"
                  >
                    Comprehensive total income
                  </h5>
                </div>
                <div
                  data-v-70b0a695=""
                  class="d-flex flex-direction-column UserAssetsInfo__btn-box ivu-col"
                >
                  <div data-v-70b0a695="" class="daily-btn margin-bottom-20">
                    <img
                      data-v-70b0a695=""
                      src="https://image.treasurenft.xyz/icon/icon_email.svg"
                      loading="lazy"
                      alt="imgDaily"
                      class="margin-right-5"
                    />
                    <span
                      data-v-70b0a695=""
                      class="title-black-PR-18 font-weight-600"
                    >
                      Message
                    </span>
                  </div>
                  <div data-v-70b0a695="" class="daily-btn">
                    <img
                      data-v-70b0a695=""
                      src="https://image.treasurenft.xyz/icon/btn_date_02.png"
                      loading="lazy"
                      alt="imgDaily"
                      class="margin-right-5"
                    />
                    <span
                      data-v-70b0a695=""
                      class="title-black-PR-18 font-weight-600"
                    >
                      Mission
                    </span>
                  </div>
                </div>
              </div>
              <div
                data-v-70b0a695=""
                class="ivu-divider ivu-divider-horizontal ivu-divider-default"
                style={{ margin: "24px" }}
              ></div>
              <div data-v-70b0a695="" class="table">
                <div data-v-70b0a695="" class="table__inner">
                  <div
                    data-v-70b0a695=""
                    class="ivu-row-flex ivu-row-flex-middle margin-bottom-20 flex-nowrap"
                  >
                    <div data-v-70b0a695="" class="ivu-col label-column"></div>
                    <div data-v-70b0a695="" class="ivu-col flex-grow-0">
                      <h5
                        data-v-70b0a695=""
                        class="title-grey666-PR-18 text-align-center"
                      >
                        Reserve
                      </h5>
                    </div>
                    <div data-v-70b0a695="" class="ivu-col flex-grow-0">
                      <h5
                        data-v-70b0a695=""
                        class="title-grey666-PR-18 text-align-center"
                      >
                        Event Reward
                      </h5>
                    </div>
                    <div data-v-70b0a695="" class="ivu-col flex-grow-0">
                      <h5
                        data-v-70b0a695=""
                        class="title-grey666-PR-18 text-align-center"
                      >
                        Team
                      </h5>
                    </div>
                    <div data-v-70b0a695="" class="ivu-col flex-grow-0">
                      <h5
                        data-v-70b0a695=""
                        class="title-grey666-PR-18 text-align-center"
                      >
                        Stake
                      </h5>
                    </div>
                  </div>
                  <div
                    data-v-70b0a695=""
                    class="ivu-row-flex ivu-row-flex-middle flex-nowrap"
                  >
                    <div data-v-70b0a695="" class="ivu-col label-column">
                      <h5
                        data-v-70b0a695=""
                        class="title-grey666-PR-18 text-align-center"
                      >
                        Daily
                      </h5>
                    </div>
                    <div data-v-70b0a695="" class="ivu-col flex-grow-0">
                      <div data-v-70b0a695="">
                        <div
                          data-v-70b0a695=""
                          class="d-flex align-items-center justify-content-center"
                        >
                          <img
                            data-v-70b0a695=""
                            src="https://image.treasurenft.xyz/coin/usdt.png"
                            loading="lazy"
                            alt="usdtImg"
                            class="UserAssetsInfo__icon"
                          />
                          <span
                            data-v-70b0a695=""
                            class="title-black-PR-24 margin-left-10"
                          >
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                    <div data-v-70b0a695="" class="ivu-col flex-grow-0">
                      <div data-v-70b0a695="">
                        <div
                          data-v-70b0a695=""
                          class="d-flex align-items-center justify-content-center"
                        >
                          <img
                            data-v-70b0a695=""
                            src="https://image.treasurenft.xyz/coin/usdt.png"
                            loading="lazy"
                            alt="usdtImg"
                            class="UserAssetsInfo__icon"
                          />
                          <span
                            data-v-70b0a695=""
                            class="title-black-PR-24 margin-left-10"
                          >
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                    <div data-v-70b0a695="" class="ivu-col flex-grow-0">
                      <div data-v-70b0a695="">
                        <div
                          data-v-70b0a695=""
                          class="d-flex align-items-center justify-content-center"
                        >
                          <img
                            data-v-70b0a695=""
                            src="https://image.treasurenft.xyz/coin/usdt.png"
                            loading="lazy"
                            alt="usdtImg"
                            class="UserAssetsInfo__icon"
                          />
                          <span
                            data-v-70b0a695=""
                            class="title-black-PR-24 margin-left-10"
                          >
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                    <div data-v-70b0a695="" class="ivu-col flex-grow-0">
                      <div data-v-70b0a695="">
                        <div
                          data-v-70b0a695=""
                          class="d-flex align-items-center justify-content-center"
                        >
                          <img
                            data-v-70b0a695=""
                            src="https://image.treasurenft.xyz/coin/usdt.png"
                            loading="lazy"
                            alt="usdtImg"
                            class="UserAssetsInfo__icon"
                          />
                          <span
                            data-v-70b0a695=""
                            class="title-black-PR-24 margin-left-10"
                          >
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-v-70b0a695=""
                    class="ivu-divider ivu-divider-horizontal ivu-divider-default"
                  ></div>
                  <div
                    data-v-70b0a695=""
                    class="ivu-row-flex ivu-row-flex-middle flex-nowrap"
                  >
                    <div data-v-70b0a695="" class="ivu-col label-column">
                      <h5
                        data-v-70b0a695=""
                        class="title-grey666-PR-18 text-align-center"
                      >
                        Comprehensive
                      </h5>
                    </div>
                    <div data-v-70b0a695="" class="ivu-col flex-grow-0">
                      <div data-v-70b0a695="">
                        <div
                          data-v-70b0a695=""
                          class="d-flex align-items-center justify-content-center"
                        >
                          <img
                            data-v-70b0a695=""
                            src="https://image.treasurenft.xyz/coin/usdt.png"
                            loading="lazy"
                            alt="usdtImg"
                            class="UserAssetsInfo__icon"
                          />
                          <span
                            data-v-70b0a695=""
                            class="title-black-PR-24 margin-left-10"
                          >
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                    <div data-v-70b0a695="" class="ivu-col flex-grow-0">
                      <div data-v-70b0a695="">
                        <div
                          data-v-70b0a695=""
                          class="d-flex align-items-center justify-content-center"
                        >
                          <img
                            data-v-70b0a695=""
                            src="https://image.treasurenft.xyz/coin/usdt.png"
                            loading="lazy"
                            alt="usdtImg"
                            class="UserAssetsInfo__icon"
                          />
                          <span
                            data-v-70b0a695=""
                            class="title-black-PR-24 margin-left-10"
                          >
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                    <div data-v-70b0a695="" class="ivu-col flex-grow-0">
                      <div data-v-70b0a695="">
                        <div
                          data-v-70b0a695=""
                          class="d-flex align-items-center justify-content-center"
                        >
                          <img
                            data-v-70b0a695=""
                            src="https://image.treasurenft.xyz/coin/usdt.png"
                            loading="lazy"
                            alt="usdtImg"
                            class="UserAssetsInfo__icon"
                          />
                          <span
                            data-v-70b0a695=""
                            class="title-black-PR-24 margin-left-10"
                          >
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                    <div data-v-70b0a695="" class="ivu-col flex-grow-0">
                      <div data-v-70b0a695="">
                        <div
                          data-v-70b0a695=""
                          class="d-flex align-items-center justify-content-center"
                        >
                          <img
                            data-v-70b0a695=""
                            src="https://image.treasurenft.xyz/coin/usdt.png"
                            loading="lazy"
                            alt="usdtImg"
                            class="UserAssetsInfo__icon"
                          />
                          <span
                            data-v-70b0a695=""
                            class="title-black-PR-24 margin-left-10"
                          >
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-v-1d6f6910="" class="info-wrap-group">
          <div
            data-v-1d6f6910=""
            class="list-area-wrap ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
          >
            <div
              data-v-1d6f6910=""
              class="list-area-wrap-Col ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-11"
            >
              <div data-v-1d6f6910="" class="list-area">
                <div data-v-1d6f6910="" class="list-title-block">
                  <div data-v-1d6f6910="" class="block-left">
                    <h2 data-v-1d6f6910="" class="title-black-PR-24">
                      My Team
                    </h2>
                  </div>
                </div>
                <div
                  data-v-1d6f6910=""
                  class="order-info ivu-row-flex ivu-row-flex-top ivu-row-flex-space-between"
                >
                  <div data-v-1d6f6910="" class="ivu-col ivu-col-span-6">
                    <h3
                      data-v-1d6f6910=""
                      class="title-black-PR-18 font-weight-700"
                    >
                      0
                    </h3>
                    <p data-v-1d6f6910="" class="title-black-PR-18">
                      Community rewards
                    </p>
                  </div>
                  <div data-v-1d6f6910="" class="ivu-col ivu-col-span-6">
                    <h3
                      data-v-1d6f6910=""
                      class="title-black-PR-18 font-weight-700"
                    >
                      0
                    </h3>
                    <p data-v-1d6f6910="" class="title-black-PR-18">
                      Valid Members
                    </p>
                  </div>
                  <div data-v-1d6f6910="" class="ivu-col ivu-col-span-6">
                    <h3
                      data-v-1d6f6910=""
                      class="title-black-PR-18 font-weight-700"
                    >
                      0
                    </h3>
                    <p data-v-1d6f6910="" class="title-black-PR-18">
                      A enthusiast
                    </p>
                  </div>
                  <div data-v-1d6f6910="" class="ivu-col ivu-col-span-6">
                    <h3
                      data-v-1d6f6910=""
                      class="title-black-PR-18 font-weight-700"
                    >
                      0
                    </h3>
                    <p data-v-1d6f6910="" class="title-black-PR-18">
                      B+C enthusiasts
                    </p>
                  </div>
                </div>
                <div
                  data-v-1d6f6910=""
                  class="ivu-divider ivu-divider-horizontal ivu-divider-default"
                ></div>
                <div
                  data-v-1d6f6910=""
                  class="team-box ivu-row-flex ivu-row-flex-top ivu-row-flex-space-between"
                >
                  <div
                    data-v-1d6f6910=""
                    class="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-6"
                  >
                    <div data-v-1d6f6910="" class="team-box-block">
                      <img
                        data-v-1d6f6910=""
                        src="https://image.treasurenft.xyz/icon/icon_group_01.png"
                        alt="teamMember"
                        loading="lazy"
                        class="team-icon"
                      />
                      <p data-v-1d6f6910="" class="title-black-PR-18">
                        Community enthusiasts
                      </p>
                    </div>
                  </div>
                  <div
                    data-v-1d6f6910=""
                    class="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-6"
                  >
                    <div data-v-1d6f6910="" class="team-box-block">
                      <img
                        data-v-1d6f6910=""
                        src="https://image.treasurenft.xyz/icon/icon_trophy_01.png"
                        alt="teamContribution"
                        loading="lazy"
                        class="team-icon"
                      />
                      <p data-v-1d6f6910="" class="title-black-PR-18">
                        Community contributions
                      </p>
                    </div>
                  </div>
                  <div
                    data-v-1d6f6910=""
                    class="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-6"
                  >
                    <div data-v-1d6f6910="" class="team-box-block">
                      <img
                        data-v-1d6f6910=""
                        src="https://image.treasurenft.xyz/icon/icon_order_01.png"
                        alt="teamOrder"
                        loading="lazy"
                        class="team-icon"
                      />
                      <p data-v-1d6f6910="" class="title-black-PR-18">
                        Community orders
                      </p>
                    </div>
                  </div>
                  <div
                    data-v-1d6f6910=""
                    class="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-6"
                  >
                    <div data-v-1d6f6910="" class="team-box-block">
                      <img
                        data-v-1d6f6910=""
                        src="https://image.treasurenft.xyz/icon/icon_share_03.png"
                        alt="referral-code"
                        loading="lazy"
                        class="team-icon"
                      />
                      <p data-v-1d6f6910="" class="title-black-PR-18">
                        Referral
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-v-1d6f6910=""
              class="list-area-wrap-Col ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-12"
            >
              <div data-v-1d6f6910="" class="list-area">
                <div data-v-1d6f6910="" class="list-title-block">
                  <div data-v-1d6f6910="" class="block-left">
                    <h2 data-v-1d6f6910="" class="title-black-PR-24">
                      My Orders
                    </h2>
                  </div>
                  <div data-v-1d6f6910="" class="block-right color-sub">
                    <span data-v-1d6f6910="" class="title-grey999-PR-16">
                      Check Orders
                    </span>
                    <img
                      data-v-1d6f6910=""
                      src="https://image.treasurenft.xyz/Treasure2.5/icon/btn_arrow_right_01_nor.png"
                      loading="lazy"
                      alt="imgSee"
                    />
                  </div>
                </div>
                <div
                  data-v-1d6f6910=""
                  class="order-info ivu-row-flex ivu-row-flex-top ivu-row-flex-space-between"
                >
                  <div data-v-1d6f6910="" class="ivu-col ivu-col-span-6">
                    <h3
                      data-v-1d6f6910=""
                      class="title-black-PR-18 font-weight-700"
                    >
                      1
                    </h3>
                    <p data-v-1d6f6910="" class="title-grey666-PR-18">
                      Orders
                    </p>
                  </div>
                  <div data-v-1d6f6910="" class="ivu-col ivu-col-span-6">
                    <h3
                      data-v-1d6f6910=""
                      class="title-black-PR-18 font-weight-700"
                    >
                      0
                    </h3>
                    <p data-v-1d6f6910="" class="title-grey666-PR-18">
                      Processing
                    </p>
                  </div>
                  <div data-v-1d6f6910="" class="ivu-col ivu-col-span-6">
                    <h3
                      data-v-1d6f6910=""
                      class="title-black-PR-18 font-weight-700"
                    >
                      1
                    </h3>
                    <p data-v-1d6f6910="" class="title-grey666-PR-18">
                      Bought
                    </p>
                  </div>
                  <div data-v-1d6f6910="" class="ivu-col ivu-col-span-6">
                    <h3
                      data-v-1d6f6910=""
                      class="title-black-PR-18 font-weight-700"
                    >
                      0
                    </h3>
                    <p data-v-1d6f6910="" class="title-grey666-PR-18">
                      Sold
                    </p>
                  </div>
                </div>
                <div
                  data-v-1d6f6910=""
                  class="ivu-divider ivu-divider-horizontal ivu-divider-default"
                ></div>
                <div
                  data-v-1d6f6910=""
                  class="order-btn ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                >
                  <div
                    data-v-1d6f6910=""
                    class="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12 ivu-col-span-md-12
                                                                     ivu-col-span-lg-6"
                  >
                    <div data-v-1d6f6910="" class="order-btn-block">
                      <img
                        data-v-1d6f6910=""
                        src="https://image.treasurenft.xyz/icon/icon_user_03.png"
                        loading="lazy"
                        alt="imgNft"
                      />
                      <p data-v-1d6f6910="" class="specialText-PR-18">
                        NFTs
                      </p>
                    </div>
                  </div>
                  <div
                    data-v-1d6f6910=""
                    class="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-6"
                  >
                    <div data-v-1d6f6910="" class="order-btn-block">
                      <img
                        data-v-1d6f6910=""
                        src="https://image.treasurenft.xyz/icon/icon_file_03.png"
                        loading="lazy"
                        alt="imgBal"
                      />
                      <p data-v-1d6f6910="" class="title-black-PR-18">
                        Details
                      </p>
                    </div>
                  </div>
                  <div
                    data-v-1d6f6910=""
                    class="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-6"
                  >
                    <div data-v-1d6f6910="" class="order-btn-block">
                      <img
                        data-v-1d6f6910=""
                        src="https://image.treasurenft.xyz/icon/icon_card03.png"
                        loading="lazy"
                        alt="imgRecharge"
                      />
                      <p data-v-1d6f6910="" class="title-black-PR-18">
                        Deposit
                      </p>
                    </div>
                  </div>
                  <div
                    data-v-1d6f6910=""
                    class="ivu-col ivu-col-span-xs-6
                                                                                      ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-6"
                  >
                    <div data-v-1d6f6910="" class="order-btn-block">
                      <img
                        data-v-1d6f6910=""
                        src="https://image.treasurenft.xyz/icon/icon_extraction_05.png"
                        loading="lazy"
                        alt="imgWithdraw"
                      />
                      <p data-v-1d6f6910="" class="title-black-PR-18">
                        Withdraw
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-v-1d6f6910=""
              class="list-area-wrap-Col ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-11"
            >
              <div data-v-1d6f6910="" class="list-area last-list">
                <div data-v-1d6f6910="" class="list-title-block">
                  <div data-v-1d6f6910="" class="block-left">
                    <h2 data-v-1d6f6910="" class="title-black-PR-24">
                      Common Functions
                    </h2>
                  </div>
                </div>
                <div
                  data-v-1d6f6910=""
                  class="fun-btn ivu-row-flex ivu-row-flex-top ivu-row-flex-start"
                >
                  <div
                    data-v-1d6f6910=""
                    class="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12
                                                                                             ivu-col-span-md-12 ivu-col-span-lg-6"
                  >
                    <div data-v-1d6f6910="" class="fun-btn-block">
                      <img
                        data-v-1d6f6910=""
                        src="https://image.treasurenft.xyz/icon/icon_course_01.png"
                        loading="lazy"
                        alt="imgNovice"
                      />
                      <p data-v-1d6f6910="" class="title-black-PR-18">
                        Tutorials
                      </p>
                    </div>
                  </div>
                  <div
                    data-v-1d6f6910=""
                    class="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12 ivu-col-span-md-12
                                                                                                     ivu-col-span-lg-6"
                  >
                    <div data-v-1d6f6910="" class="fun-btn-block">
                      <img
                        data-v-1d6f6910=""
                        src="https://image.treasurenft.xyz/icon/icon_setting_03.png"
                        loading="lazy"
                        alt="imgSetting"
                      />
                      <p data-v-1d6f6910="" class="title-black-PR-18">
                        Settings
                      </p>
                    </div>
                  </div>
                  <div
                    data-v-1d6f6910=""
                    class="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-6"
                  >
                    <div data-v-1d6f6910="" class="fun-btn-block">
                      <img
                        data-v-1d6f6910=""
                        src="https://image.treasurenft.xyz/icon/icon_hammer_04.png"
                        loading="lazy"
                        alt="imgMint"
                      />
                      <p data-v-1d6f6910="" class="title-black-PR-18">
                        Mint
                      </p>
                    </div>
                  </div>
                  <div
                    data-v-1d6f6910=""
                    class="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-6"
                  >
                    <div data-v-1d6f6910="" class="fun-btn-block">
                      <img
                        data-v-1d6f6910=""
                        src="https://image.treasurenft.xyz/icon/icon_favorite.svg"
                        loading="lazy"
                        alt="imgMint"
                      />
                      <p data-v-1d6f6910="" class="title-black-PR-18">
                        Collection
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
