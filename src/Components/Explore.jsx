import React, { useState } from "react";
import Header from "./header";
import TUsdt from "../assets/TUsdt.png";
import Footer from "./footer";
export default function Explore() {
  const [activeTab, setActiveTab] = useState(1);
  const [exclusiveTab, setExclusiveTab] = useState(1);
  const [showStake, setShowStake] = useState(false);
  const [showExclusiveStake, setshowExclusiveStake] = useState(1);

  const getInkBarStyle = () => {
    if (activeTab === 1) {
      return {
        visibility: "visible",
        width: "77px",
        left: "0px",
      };
    }
    if (activeTab === 2) {
      return {
        visibility: "visible",
        width: "139px",
        left: "88px",
      };
    }
    if (activeTab === 3) {
      return {
        visibility: "visible",
        width: "58px",
        left: "221px",
      };
    }
    if (activeTab === 4) {
      return {
        visibility: "visible",
        width: "129px",
        left: "285px",
      };
    }
    if (exclusiveTab === 1) {
      return {
        visibility: "visible",
        width: "77px",
        left: "0px",
      };
    }
    if (exclusiveTab === 2) {
      return {
        visibility: "visible",
        width: "139px",
        left: "88px",
      };
    }
    return {};
  };

  const Art = () => {
    return (
      <>
        <div class="ivu-tabs-tabpane" style={{ visibily: "visible" }}>
          <div
            class="list-area ivu-row"
            style={{ marginright: "-8px", marginleft: "-8px" }}
          >
            <div
              class="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <div class="explore-card-div">
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://treasurenft.xyz/userdata/img/20230615122322_%E6%89%8B%E6%9C%BA.avif"
                    />
                    <img
                      alt="img"
                      loading="lazy"
                      class="explore-card-BIGimg"
                      src="https://treasurenft.xyz/userdata/img/20230615122322_手机_compre.png"
                    />
                  </picture>
                  <div class="explore-card-title">
                    <div class="explore-card-small-div">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="https://treasurenft.xyz/userdata/img/20230615122301_Frame%2017.avif"
                        />
                        <img
                          alt="img"
                          loading="lazy"
                          class="explore-card-smallImg"
                          src="https://treasurenft.xyz/userdata/img/20230615122301_Frame 17_compre.png"
                        />
                      </picture>
                    </div>
                    <p class="title-black-SB-24 explore-card-text">
                      Penguin Pals{" "}
                    </p>
                    <img
                      src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
                      alt="icon"
                      loading="lazy"
                      class="explore-card-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <div class="explore-card-div">
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://treasurenft.xyz/userdata/img/20230217145542_GiffgaffApeClub_banner.avif"
                    />
                    <img
                      alt="img"
                      loading="lazy"
                      class="explore-card-BIGimg"
                      src="https://treasurenft.xyz/userdata/img/20230217145542_GiffgaffApeClub_banner_compre.png"
                    />
                  </picture>
                  <div class="explore-card-title">
                    <div class="explore-card-small-div">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="https://treasurenft.xyz/userdata/img/20230217145535_GiffgaffApeClub_logo.avif"
                        />
                        <img
                          alt="img"
                          loading="lazy"
                          class="explore-card-smallImg"
                          src="https://treasurenft.xyz/userdata/img/20230217145535_GiffgaffApeClub_logo_compre.png"
                        />
                      </picture>
                    </div>
                    <p class="title-black-SB-24 explore-card-text">
                      {" "}
                      Giffgaff Ape Club{" "}
                    </p>
                    <img
                      src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
                      alt="icon"
                      loading="lazy"
                      class="explore-card-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <div class="explore-card-div">
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://treasurenft.xyz/userdata/img/20230217163506_PunkCat_banner.avif"
                    />
                    <img
                      alt="img"
                      loading="lazy"
                      class="explore-card-BIGimg"
                      src="https://treasurenft.xyz/userdata/img/20230217163506_PunkCat_banner_compre.png"
                    />
                  </picture>
                  <div class="explore-card-title">
                    <div class="explore-card-small-div">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="https://treasurenft.xyz/userdata/img/20230217145557_PunkCat_logo.avif"
                        />
                        <img
                          alt="img"
                          loading="lazy"
                          class="explore-card-smallImg"
                          src="https://treasurenft.xyz/userdata/img/20230217145557_PunkCat_logo_compre.jpg"
                        />
                      </picture>
                    </div>
                    <p class="title-black-SB-24 explore-card-text">PunkCat </p>
                    <img
                      src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
                      alt="icon"
                      loading="lazy"
                      class="explore-card-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <div class="explore-card-div">
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://treasurenft.xyz/userdata/img/20230217163907_PixelsPunk_banner.avif"
                    />
                    <img
                      alt="img"
                      loading="lazy"
                      class="explore-card-BIGimg"
                      src="https://treasurenft.xyz/userdata/img/20230217163907_PixelsPunk_banner_compre.png"
                    />
                  </picture>
                  <div class="explore-card-title">
                    <div class="explore-card-small-div">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="https://treasurenft.xyz/userdata/img/20230217145650_PixelsPunk_logo.avif"
                        />
                        <img
                          alt="img"
                          loading="lazy"
                          class="explore-card-smallImg"
                          src="https://treasurenft.xyz/userdata/img/20230217145650_PixelsPunk_logo_compre.png"
                        />
                      </picture>
                    </div>
                    <p class="title-black-SB-24 explore-card-text">
                      {" "}
                      Pixels Punk{" "}
                    </p>
                    <img
                      src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
                      alt="icon"
                      loading="lazy"
                      class="explore-card-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <div class="explore-card-div">
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://treasurenft.xyz/userdata/img/20230217145521_Wild%20Girl_banner.avif"
                    />
                    <img
                      alt="img"
                      loading="lazy"
                      class="explore-card-BIGimg"
                      src="https://treasurenft.xyz/userdata/img/20230217145521_Wild Girl_banner_compre.png"
                    />
                  </picture>
                  <div class="explore-card-title">
                    <div class="explore-card-small-div">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="https://treasurenft.xyz/userdata/img/20230217145514_WildGirl_logo.avif"
                        />
                        <img
                          alt="img"
                          loading="lazy"
                          class="explore-card-smallImg"
                          src="https://treasurenft.xyz/userdata/img/20230217145514_WildGirl_logo_compre.jpg"
                        />
                      </picture>
                    </div>
                    <p class="title-black-SB-24 explore-card-text">
                      {" "}
                      Wild Girl{" "}
                    </p>
                    <img
                      src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
                      alt="icon"
                      loading="lazy"
                      class="explore-card-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <div class="explore-card-div">
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://treasurenft.xyz/userdata/img/20230602154453_%E6%89%8B%E6%9C%BA%E8%83%8C%E6%99%AF.avif"
                    />
                    <img
                      alt="img"
                      loading="lazy"
                      class="explore-card-BIGimg"
                      src="https://treasurenft.xyz/userdata/img/20230602154453_手机背景_compre.png"
                    />
                  </picture>
                  <div class="explore-card-title">
                    <div class="explore-card-small-div">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="https://treasurenft.xyz/userdata/img/20230602154427_%E5%A4%B4%E5%83%8F.avif"
                        />
                        <img
                          alt="img"
                          loading="lazy"
                          class="explore-card-smallImg"
                          src="https://treasurenft.xyz/userdata/img/20230602154427_头像_compre.png"
                        />
                      </picture>
                    </div>
                    <p class="title-black-SB-24 explore-card-text">
                      {" "}
                      PEPE Frog Nobility{" "}
                    </p>
                    <img
                      src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
                      alt="icon"
                      loading="lazy"
                      class="explore-card-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <div class="explore-card-div">
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://treasurenft.xyz/userdata/img/20230217145435_YoungLady_banner.avif"
                    />
                    <img
                      alt="img"
                      loading="lazy"
                      class="explore-card-BIGimg"
                      src="https://treasurenft.xyz/userdata/img/20230217145435_YoungLady_banner_compre.png"
                    />
                  </picture>
                  <div class="explore-card-title">
                    <div class="explore-card-small-div">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="https://treasurenft.xyz/userdata/img/20230217145424_YoungLady_logo.avif"
                        />
                        <img
                          alt="img"
                          loading="lazy"
                          class="explore-card-smallImg"
                          src="https://treasurenft.xyz/userdata/img/20230217145424_YoungLady_logo_compre.jpg"
                        />
                      </picture>
                    </div>
                    <p class="title-black-SB-24 explore-card-text">
                      {" "}
                      YoungLady{" "}
                    </p>
                    <img
                      src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
                      alt="icon"
                      loading="lazy"
                      class="explore-card-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <div class="explore-card-div">
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://treasurenft.xyz/userdata/img/20230217145712_CoolAPE_banner1.avif"
                    />
                    <img
                      alt="img"
                      loading="lazy"
                      class="explore-card-BIGimg"
                      src="https://treasurenft.xyz/userdata/img/20230217145712_CoolAPE_banner1_compre.jpg"
                    />
                  </picture>
                  <div class="explore-card-title">
                    <div class="explore-card-small-div">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="https://treasurenft.xyz/userdata/img/20230217145709_CoolAPE_logo.avif"
                        />
                        <img
                          alt="img"
                          loading="lazy"
                          class="explore-card-smallImg"
                          src="https://treasurenft.xyz/userdata/img/20230217145709_CoolAPE_logo_compre.png"
                        />
                      </picture>
                    </div>
                    <p class="title-black-SB-24 explore-card-text">
                      {" "}
                      Cool APE{" "}
                    </p>
                    <img
                      src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
                      alt="icon"
                      loading="lazy"
                      class="explore-card-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const PolygonNFT = () => {
    return (
      <>
        <div class="ivu-tabs-tabpane" style={{ visibily: "visible" }}>
          <div
            class="list-area ivu-row"
            style={{ marginLeft: "-8px", marginright: "-8px" }}
          >
            <div
              class="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <div class="explore-card-div">
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://treasurenft.xyz/userdata/img/20230217145620_NoxiousAudience_banner.avif"
                    />
                    <img
                      alt="img"
                      loading="lazy"
                      class="explore-card-BIGimg"
                      src="https://treasurenft.xyz/userdata/img/20230217145620_NoxiousAudience_banner_compre.jpg"
                    />
                  </picture>
                  <div class="explore-card-title">
                    <div class="explore-card-small-div">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="https://treasurenft.xyz/userdata/img/20230217145616_NoxiousAudience_logo.avif"
                        />
                        <img
                          alt="img"
                          loading="lazy"
                          class="explore-card-smallImg"
                          src="https://treasurenft.xyz/userdata/img/20230217145616_NoxiousAudience_logo_compre.jpg"
                        />
                      </picture>
                    </div>
                    <p class="title-black-SB-24 explore-card-text">
                      Noxious Audience{" "}
                    </p>
                    <img
                      src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
                      alt="icon"
                      loading="lazy"
                      class="explore-card-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <div class="explore-card-div">
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://treasurenft.xyz/userdata/img/20230217145353_Banner-MB.avif"
                    />
                    <img
                      alt="img"
                      loading="lazy"
                      class="explore-card-BIGimg"
                      src="https://treasurenft.xyz/userdata/img/20230217145353_Banner-MB_compre.jpg"
                    />
                  </picture>
                  <div class="explore-card-title">
                    <div class="explore-card-small-div">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="https://treasurenft.xyz/userdata/img/20230217145338_PIXER%20Eternity-LOGO.avif"
                        />
                        <img
                          alt="img"
                          loading="lazy"
                          class="explore-card-smallImg"
                          src="https://treasurenft.xyz/userdata/img/20230217145338_PIXER Eternity-LOGO_compre.png"
                        />
                      </picture>
                    </div>
                    <p class="title-black-SB-24 explore-card-text">
                      {" "}
                      PixerEternity 2022 x RVP{" "}
                    </p>
                    <img
                      src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
                      alt="icon"
                      loading="lazy"
                      class="explore-card-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <div class="explore-card-div">
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://treasurenft.xyz/userdata/img/20230217145459_TheCryptoLuckyGirl_banner.avif"
                    />
                    <img
                      alt="img"
                      loading="lazy"
                      class="explore-card-BIGimg"
                      src="https://treasurenft.xyz/userdata/img/20230217145459_TheCryptoLuckyGirl_banner_compre.png"
                    />
                  </picture>
                  <div class="explore-card-title">
                    <div class="explore-card-small-div">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="https://treasurenft.xyz/userdata/img/20230217145453_TheCryptoLuckyGirl_logo.avif"
                        />
                        <img
                          alt="img"
                          loading="lazy"
                          class="explore-card-smallImg"
                          src="https://treasurenft.xyz/userdata/img/20230217145453_TheCryptoLuckyGirl_logo_compre.jpg"
                        />
                      </picture>
                    </div>
                    <p class="title-black-SB-24 explore-card-text">
                      {" "}
                      The Crypto Lucky Girl{" "}
                    </p>
                    <img
                      src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
                      alt="icon"
                      loading="lazy"
                      class="explore-card-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const Stake = () => {
    return (
      <>
        <div className="ivu-tabs-bar">
          <div className="ivu-tabs-nav-container">
            <div className="ivu-tabs-nav-wrap" style={{ position: "relative" }}>
              <div className="ivu-tabs-nav-scroll overflow-nav-scroll">
                <div class="ivu-tabs-nav">
                  <div
                    class="ivu-tabs-ink-bar"
                    style={{
                      visibility: "visible",
                      width: "77px",
                      left: "0px",
                    }}
                  ></div>
                  <div
                    draggable="false"
                    class="ivu-tabs-tab ivu-tabs-tab-active ivu-tabs-tab-focused"
                  >
                    Stake
                  </div>
                  <div draggable="false" class="ivu-tabs-tab">
                    Collection
                  </div>
                  <div draggable="false" class="ivu-tabs-tab">
                    My Stake
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ivu-tabs-bar">
          <div className="ivu-tabs-nav-container">
            <div className="ivu-tabs-nav-wrap" style={{ position: "relative" }}>
              <div className="ivu-tabs-nav-scroll overflow-nav-scroll">
                <div class="ivu-tabs-nav">
                  <div class="ivu-tabs-ink-bar" style={getInkBarStyle()}></div>
                  <div
                    draggable="false"
                    class="ivu-tabs-tab ivu-tabs-tab-active ivu-tabs-tab-focused"
                    onClick={() => setExclusiveTab(1)}
                  >
                    Exclusive Zone
                  </div>
                  <div
                    draggable="false"
                    class={`ivu-tabs-tab ${
                      activeTab === 5
                        ? "ivu-tabs-tab-active ivu-tabs-tab-focused"
                        : ""
                    }`}
                    onClick={() => setExclusiveTab(2)}
                  >
                    Free Zone
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {exclusiveTab == 1 && <ExclusiveZone />}
        {exclusiveTab == 2 && <FreeZone />}
      </>
    );
  };

  const Collectibles = () => {
    return (
      <>
        <div class="ivu-tabs-tabpane" style={{ visibility: "visible" }}>
          <div
            class="list-area ivu-row"
            style={{ marginLeft: "-8px", marginRight: "-8px" }}
          >
            <div
              class="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <div class="explore-card-div">
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://treasurenft.xyz/userdata/img/20230615122322_%E6%89%8B%E6%9C%BA.avif"
                    />
                    <img
                      alt="img"
                      loading="lazy"
                      class="explore-card-BIGimg"
                      src="https://treasurenft.xyz/userdata/img/20230615122322_手机_compre.png"
                    />
                  </picture>
                  <div class="explore-card-title">
                    <div class="explore-card-small-div">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="https://treasurenft.xyz/userdata/img/20230615122301_Frame%2017.avif"
                        />
                        <img
                          alt="img"
                          loading="lazy"
                          class="explore-card-smallImg"
                          src="https://treasurenft.xyz/userdata/img/20230615122301_Frame 17_compre.png"
                        />
                      </picture>
                    </div>
                    <p class="title-black-SB-24 explore-card-text">
                      Penguin Pals{" "}
                    </p>
                    <img
                      src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
                      alt="icon"
                      loading="lazy"
                      class="explore-card-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <div class="explore-card-div">
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://treasurenft.xyz/userdata/img/20230217145353_Banner-MB.avif"
                    />
                    <img
                      alt="img"
                      loading="lazy"
                      class="explore-card-BIGimg"
                      src="https://treasurenft.xyz/userdata/img/20230217145353_Banner-MB_compre.jpg"
                    />
                  </picture>
                  <div class="explore-card-title">
                    <div class="explore-card-small-div">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="https://treasurenft.xyz/userdata/img/20230217145338_PIXER%20Eternity-LOGO.avif"
                        />
                        <img
                          alt="img"
                          loading="lazy"
                          class="explore-card-smallImg"
                          src="https://treasurenft.xyz/userdata/img/20230217145338_PIXER Eternity-LOGO_compre.png"
                        />
                      </picture>
                    </div>
                    <p class="title-black-SB-24 explore-card-text">
                      {" "}
                      PixerEternity 2022 x RVP{" "}
                    </p>
                    <img
                      src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
                      alt="icon"
                      loading="lazy"
                      class="explore-card-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <div class="explore-card-div">
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://treasurenft.xyz/userdata/img/20230217163506_PunkCat_banner.avif"
                    />
                    <img
                      alt="img"
                      loading="lazy"
                      class="explore-card-BIGimg"
                      src="https://treasurenft.xyz/userdata/img/20230217163506_PunkCat_banner_compre.png"
                    />
                  </picture>
                  <div class="explore-card-title">
                    <div class="explore-card-small-div">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="https://treasurenft.xyz/userdata/img/20230217145557_PunkCat_logo.avif"
                        />
                        <img
                          alt="img"
                          loading="lazy"
                          class="explore-card-smallImg"
                          src="https://treasurenft.xyz/userdata/img/20230217145557_PunkCat_logo_compre.jpg"
                        />
                      </picture>
                    </div>
                    <p class="title-black-SB-24 explore-card-text">PunkCat </p>
                    <img
                      src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
                      alt="icon"
                      loading="lazy"
                      class="explore-card-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <div class="explore-card-div">
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://treasurenft.xyz/userdata/img/20230217145459_TheCryptoLuckyGirl_banner.avif"
                    />
                    <img
                      alt="img"
                      loading="lazy"
                      class="explore-card-BIGimg"
                      src="https://treasurenft.xyz/userdata/img/20230217145459_TheCryptoLuckyGirl_banner_compre.png"
                    />
                  </picture>
                  <div class="explore-card-title">
                    <div class="explore-card-small-div">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="https://treasurenft.xyz/userdata/img/20230217145453_TheCryptoLuckyGirl_logo.avif"
                        />
                        <img
                          alt="img"
                          loading="lazy"
                          class="explore-card-smallImg"
                          src="https://treasurenft.xyz/userdata/img/20230217145453_TheCryptoLuckyGirl_logo_compre.jpg"
                        />
                      </picture>
                    </div>
                    <p class="title-black-SB-24 explore-card-text">
                      {" "}
                      The Crypto Lucky Girl
                    </p>
                    <img
                      src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
                      alt="icon"
                      loading="lazy"
                      class="explore-card-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <div class="explore-card-div">
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://treasurenft.xyz/userdata/img/20230217163907_PixelsPunk_banner.avif"
                    />
                    <img
                      alt="img"
                      loading="lazy"
                      class="explore-card-BIGimg"
                      src="https://treasurenft.xyz/userdata/img/20230217163907_PixelsPunk_banner_compre.png"
                    />
                  </picture>
                  <div class="explore-card-title">
                    <div class="explore-card-small-div">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="https://treasurenft.xyz/userdata/img/20230217145650_PixelsPunk_logo.avif"
                        />
                        <img
                          alt="img"
                          loading="lazy"
                          class="explore-card-smallImg"
                          src="https://treasurenft.xyz/userdata/img/20230217145650_PixelsPunk_logo_compre.png"
                        />
                      </picture>
                    </div>
                    <p class="title-black-SB-24 explore-card-text">
                      {" "}
                      Pixels Punk{" "}
                    </p>
                    <img
                      src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
                      alt="icon"
                      loading="lazy"
                      class="explore-card-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <div class="explore-card-div">
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://treasurenft.xyz/userdata/img/20230602154453_%E6%89%8B%E6%9C%BA%E8%83%8C%E6%99%AF.avif"
                    />
                    <img
                      alt="img"
                      loading="lazy"
                      class="explore-card-BIGimg"
                      src="https://treasurenft.xyz/userdata/img/20230602154453_手机背景_compre.png"
                    />
                  </picture>
                  <div class="explore-card-title">
                    <div class="explore-card-small-div">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="https://treasurenft.xyz/userdata/img/20230602154427_%E5%A4%B4%E5%83%8F.avif"
                        />
                        <img
                          alt="img"
                          loading="lazy"
                          class="explore-card-smallImg"
                          src="https://treasurenft.xyz/userdata/img/20230602154427_头像_compre.png"
                        />
                      </picture>
                    </div>
                    <p class="title-black-SB-24 explore-card-text">
                      {" "}
                      PEPE Frog Nobility{" "}
                    </p>
                    <img
                      src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
                      alt="icon"
                      loading="lazy"
                      class="explore-card-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <div class="explore-card-div">
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://treasurenft.xyz/userdata/img/20230217145435_YoungLady_banner.avif"
                    />
                    <img
                      alt="img"
                      loading="lazy"
                      class="explore-card-BIGimg"
                      src="https://treasurenft.xyz/userdata/img/20230217145435_YoungLady_banner_compre.png"
                    />
                  </picture>
                  <div class="explore-card-title">
                    <div class="explore-card-small-div">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="https://treasurenft.xyz/userdata/img/20230217145424_YoungLady_logo.avif"
                        />
                        <img
                          alt="img"
                          loading="lazy"
                          class="explore-card-smallImg"
                          src="https://treasurenft.xyz/userdata/img/20230217145424_YoungLady_logo_compre.jpg"
                        />
                      </picture>
                    </div>
                    <p class="title-black-SB-24 explore-card-text">
                      {" "}
                      YoungLady{" "}
                    </p>
                    <img
                      src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
                      alt="icon"
                      loading="lazy"
                      class="explore-card-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <div class="explore-card-div">
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://treasurenft.xyz/userdata/img/20230217145712_CoolAPE_banner1.avif"
                    />
                    <img
                      alt="img"
                      loading="lazy"
                      class="explore-card-BIGimg"
                      src="https://treasurenft.xyz/userdata/img/20230217145712_CoolAPE_banner1_compre.jpg"
                    />
                  </picture>
                  <div class="explore-card-title">
                    <div class="explore-card-small-div">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="https://treasurenft.xyz/userdata/img/20230217145709_CoolAPE_logo.avif"
                        />
                        <img
                          alt="img"
                          loading="lazy"
                          class="explore-card-smallImg"
                          src="https://treasurenft.xyz/userdata/img/20230217145709_CoolAPE_logo_compre.png"
                        />
                      </picture>
                    </div>
                    <p class="title-black-SB-24 explore-card-text">
                      {" "}
                      Cool APE{" "}
                    </p>
                    <img
                      src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
                      alt="icon"
                      loading="lazy"
                      class="explore-card-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const ExclusiveStake1 = () => {
    return (
      <>
        <div
          data-v-15fe7f40=""
          class="ivu-col margin-bottom-15 ivu-col-span-xs-24 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
          style={{ paddingLeft: "8px", paddingRight: "8px" }}
        >
          <div data-v-567f87f6="" class="stake-spec-card">
            <div
              data-v-15fe7f40=""
              class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
              data-v-567f87f6=""
              style={{
                marginleft: "-2.5px",
                marginright: "-2.5px",
              }}
            >
              <div
                data-v-15fe7f40=""
                class="ivu-col"
                data-v-567f87f6=""
                style={{
                  paddingLeft: "2.5px",
                  paddingRight: "2.5px",
                }}
              >
                <p data-v-567f87f6="" class="title-black-PR-16">
                  Exclusive Stake1
                </p>
              </div>
              <div
                data-v-15fe7f40=""
                class="ivu-col"
                data-v-567f87f6=""
                style={{
                  marginright: "auto",
                  paddingLeft: "2.5px",
                  paddingRight: "2.5px",
                }}
              >
                <div
                  data-v-64cde390=""
                  data-v-15fe7f40=""
                  class="d-flex"
                  data-v-567f87f6=""
                >
                  <img
                    data-v-64cde390=""
                    src="https://image.treasurenft.xyz/icon/icon_question-mark_01.svg"
                    alt="question-mark"
                    loading="lazy"
                    width="24"
                    height="24"
                    class="questionIcon"
                  />
                </div>
              </div>
              <div
                data-v-15fe7f40=""
                class="ivu-col"
                data-v-567f87f6=""
                style={{
                  paddingLeft: "2.5px",
                  paddingRight: "2.5px",
                }}
              >
                <p data-v-567f87f6="" class="title-green-PR-14">
                  LV2~LV6
                </p>
              </div>
            </div>
            <div
              data-v-15fe7f40=""
              class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
              data-v-567f87f6=""
            >
              <div data-v-15fe7f40="" class="ivu-col" data-v-567f87f6="">
                <div data-v-567f87f6="" class="img-box">
                  <img
                    data-v-567f87f6=""
                    src="https://image.treasurenft.xyz/PC/img/stake_card_img_spec_01.png"
                    alt="discount img 1"
                    width="614"
                    height="200"
                    class="img"
                  />
                </div>
              </div>
            </div>
            <div
              data-v-15fe7f40=""
              class="ivu-row-flex ivu-row-flex-middle margin-bottom-10"
              data-v-567f87f6=""
            >
              <div
                data-v-15fe7f40=""
                class="ivu-col"
                data-v-567f87f6=""
                style={{ flex: "1 1 0px" }}
              >
                <div
                  data-v-15fe7f40=""
                  class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                  data-v-567f87f6=""
                >
                  <div data-v-15fe7f40="" class="ivu-col" data-v-567f87f6="">
                    <p data-v-567f87f6="" class="exclusive-card-sub-head">
                      Status:
                    </p>
                  </div>
                  <div data-v-15fe7f40="" class="ivu-col" data-v-567f87f6="">
                    <p
                      data-v-567f87f6=""
                      class="title-white-PR-12 status-label status-label--enable"
                    >
                      {" "}
                      Open
                    </p>
                  </div>
                </div>
                <div
                  data-v-15fe7f40=""
                  class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                  data-v-567f87f6=""
                >
                  <div data-v-15fe7f40="" class="ivu-col" data-v-567f87f6="">
                    <p data-v-567f87f6="" class="exclusive-card-sub-head">
                      Price Range:
                    </p>
                  </div>
                  <div data-v-15fe7f40="" class="ivu-col" data-v-567f87f6="">
                    <div
                      data-v-15fe7f40=""
                      class="ivu-row-flex ivu-row-flex-middle"
                      data-v-567f87f6=""
                      style={{
                        marginleft: "-4pxpx",
                        marginright: "-4pxpx",
                      }}
                    >
                      <div
                        data-v-15fe7f40=""
                        class="ivu-col"
                        data-v-567f87f6=""
                        style={{
                          paddingLeft: "4px",
                          paddingRight: "4px",
                        }}
                      >
                        <img
                          data-v-567f87f6=""
                          src={TUsdt}
                          alt="icon coin"
                          width="14"
                          height="14"
                          style={{ display: "block" }}
                        />
                      </div>
                      <div
                        data-v-15fe7f40=""
                        class="ivu-col"
                        data-v-567f87f6=""
                        style={{
                          paddingLeft: "4px",
                          paddingRight: "4px",
                        }}
                      >
                        <p data-v-567f87f6="" class="title-black-PR-14">
                          199~1000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-v-15fe7f40=""
                  class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                  data-v-567f87f6=""
                >
                  <div data-v-15fe7f40="" class="ivu-col" data-v-567f87f6="">
                    <p data-v-567f87f6="" class="exclusive-card-sub-head">
                      Income:
                    </p>
                  </div>
                  <div data-v-15fe7f40="" class="ivu-col" data-v-567f87f6="">
                    <p data-v-567f87f6="" class="title-black-PR-14">
                      1.5%
                    </p>
                  </div>
                </div>
                <div
                  data-v-15fe7f40=""
                  class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                  data-v-567f87f6=""
                >
                  <div data-v-15fe7f40="" class="ivu-col" data-v-567f87f6="">
                    <p data-v-567f87f6="" class="exclusive-card-sub-head">
                      handling fee:
                    </p>
                  </div>
                  <div data-v-15fe7f40="" class="ivu-col" data-v-567f87f6="">
                    <p data-v-567f87f6="" class="title-black-PR-14">
                      1%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              data-v-15fe7f40=""
              type="button"
              class="ivu-btn ivu-btn-primary ivu-btn-long button-stake "
              data-v-567f87f6=""
              onClick={() => setshowExclusiveStake(2)}
            >
              <span> Go to stake </span>
            </button>
          </div>
        </div>
      </>
    );
  };
  const ExclusiveZone = () => {
    return (
      <>
        <div className="stake-tabs-tab-content">
          <div className="stake-tabs-tab-content-box">
            <div className="stake-area">
              <div className="discount-category-area">
                <div
                  data-v-15fe7f40=""
                  class="ivu-row-flex ivu-row-flex-middle"
                  style={{ paddingLeft: "-8px", paddingRight: "-8px" }}
                >
                  <ExclusiveStake1></ExclusiveStake1>

                  <div
                    data-v-15fe7f40=""
                    class="ivu-col margin-bottom-15 ivu-col-span-xs-24 ivu-col-span-sm-12
          ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
                    style={{ paddingLeft: "8px", paddingRight: "8px" }}
                  >
                    <div data-v-567f87f6="" class="stake-spec-card">
                      <div
                        data-v-15fe7f40=""
                        class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                        data-v-567f87f6=""
                        style={{
                          marginleft: "-2.5px",
                          marginright: "-2.5px",
                        }}
                      >
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                          style={{
                            paddingLeft: "2.5px",
                            paddingRight: "2.5px",
                          }}
                        >
                          <p data-v-567f87f6="" class="title-black-PR-16">
                            Exclusive Stake2
                          </p>
                        </div>
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                          style={{
                            marginright: "auto",
                            paddingleft: "2.5px",
                            paddingright: "2.5px",
                          }}
                        >
                          <div
                            data-v-64cde390=""
                            data-v-15fe7f40=""
                            class="d-flex"
                            data-v-567f87f6=""
                          >
                            <img
                              data-v-64cde390=""
                              src="https://image.treasurenft.xyz/icon/icon_question-mark_01.svg"
                              alt="question-mark"
                              loading="lazy"
                              width="24"
                              height="24"
                              class="questionIcon"
                            />
                          </div>
                        </div>
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                          style={{
                            paddingLeft: "2.5px",
                            paddingRight: "2.5px",
                          }}
                        >
                          <p data-v-567f87f6="" class="title-green-PR-14">
                            LV2~LV6
                          </p>
                        </div>
                      </div>
                      <div
                        data-v-15fe7f40=""
                        class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                        data-v-567f87f6=""
                      >
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                        >
                          <div data-v-567f87f6="" class="img-box">
                            <img
                              data-v-567f87f6=""
                              src="https://image.treasurenft.xyz/PC/img/stake_card_img_spec_02.png"
                              alt="discount img 2"
                              width="614"
                              height="200"
                              class="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-15fe7f40=""
                        class="ivu-row-flex ivu-row-flex-middle margin-bottom-10"
                        data-v-567f87f6=""
                      >
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                          style={{ flex: "1 1 0px" }}
                        >
                          <div
                            data-v-15fe7f40=""
                            class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="exclusive-card-sub-head"
                              >
                                Status:
                              </p>
                            </div>
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="title-white-PR-12 status-label status-label--enable"
                              >
                                Open{" "}
                              </p>
                            </div>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="exclusive-card-sub-head"
                              >
                                Price Range:
                              </p>
                            </div>
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <div
                                data-v-15fe7f40=""
                                class="ivu-row-flex ivu-row-flex-middle"
                                data-v-567f87f6=""
                                style={{
                                  marginleft: "-4px",
                                  marginright: "-4px",
                                }}
                              >
                                <div
                                  data-v-15fe7f40=""
                                  class="ivu-col"
                                  data-v-567f87f6=""
                                  style={{
                                    paddingleft: "4px",
                                    paddingright: "4px",
                                  }}
                                >
                                  <img
                                    data-v-567f87f6=""
                                    src={TUsdt}
                                    alt="icon coin"
                                    width="14"
                                    height="14"
                                    style={{ display: "block" }}
                                  />
                                </div>
                                <div
                                  data-v-15fe7f40=""
                                  class="ivu-col"
                                  data-v-567f87f6=""
                                  style={{
                                    paddingleft: "4px",
                                    paddingright: "4px",
                                  }}
                                >
                                  <p
                                    data-v-567f87f6=""
                                    class="title-black-PR-14"
                                  >
                                    499~2000
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="exclusive-card-sub-head"
                              >
                                Income:
                              </p>
                            </div>
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p data-v-567f87f6="" class="title-black-PR-14">
                                1.8%
                              </p>
                            </div>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="exclusive-card-sub-head"
                              >
                                handling fee:
                              </p>
                            </div>
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p data-v-567f87f6="" class="title-black-PR-14">
                                1%
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        data-v-15fe7f40=""
                        type="button"
                        class="ivu-btn ivu-btn-primary ivu-btn-long button-stake"
                        data-v-567f87f6=""
                      >
                        {" "}
                        <span>Go to stake </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-15fe7f40=""
                    class="ivu-col margin-bottom-15 ivu-col-span-xs-24
                  ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
                    style={{ paddingLeft: "8px", paddingRight: "8px" }}
                  >
                    <div data-v-567f87f6="" class="stake-spec-card">
                      <div
                        data-v-15fe7f40=""
                        class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                        data-v-567f87f6=""
                        style={{
                          marginleft: "-2.5px",
                          marginright: "-2.5px",
                        }}
                      >
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                          style={{
                            paddingLeft: "2.5px",
                            paddingRight: "2.5px",
                          }}
                        >
                          <p data-v-567f87f6="" class="title-black-PR-16">
                            Exclusive Stake3
                          </p>
                        </div>
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                          style={{
                            marginright: "auto",
                            paddingLeft: "2.5px",
                            paddingRight: "2.5px",
                          }}
                        >
                          <div
                            data-v-64cde390=""
                            data-v-15fe7f40=""
                            class="d-flex"
                            data-v-567f87f6=""
                          >
                            <img
                              data-v-64cde390=""
                              src="https://image.treasurenft.xyz/icon/icon_question-mark_01.svg"
                              alt="question-mark"
                              loading="lazy"
                              width="24"
                              height="24"
                              class="questionIcon"
                            />
                          </div>
                        </div>
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                          style={{
                            paddingLeft: "2.5px",
                            paddingRight: "2.5px",
                          }}
                        >
                          <p data-v-567f87f6="" class="title-green-PR-14">
                            LV2~LV6
                          </p>
                        </div>
                      </div>
                      <div
                        data-v-15fe7f40=""
                        class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                        data-v-567f87f6=""
                      >
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                        >
                          <div data-v-567f87f6="" class="img-box">
                            <img
                              data-v-567f87f6=""
                              src="https://image.treasurenft.xyz/PC/img/stake_card_img_spec_03.png"
                              alt="discount img 3"
                              width="614"
                              height="200"
                              class="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-15fe7f40=""
                        class="ivu-row-flex ivu-row-flex-middle margin-bottom-10"
                        data-v-567f87f6=""
                      >
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                          style={{ flex: "1 1 0px" }}
                        >
                          <div
                            data-v-15fe7f40=""
                            class="ivu-row-flex ivu-row-flex-middle 
                       ivu-row-flex-space-between margin-bottom-10"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="exclusive-card-sub-head"
                              >
                                Status:
                              </p>
                            </div>
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="title-white-PR-12 status-label status-label--enable"
                              >
                                {" "}
                                Open{" "}
                              </p>
                            </div>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="exclusive-card-sub-head"
                              >
                                Price Range:
                              </p>
                            </div>
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <div
                                data-v-15fe7f40=""
                                class="ivu-row-flex ivu-row-flex-middle"
                                data-v-567f87f6=""
                                style={{
                                  marginleft: "-4px",
                                  marginright: "-4px",
                                }}
                              >
                                <div
                                  data-v-15fe7f40=""
                                  class="ivu-col"
                                  data-v-567f87f6=""
                                  style={{
                                    paddingLeft: "4px",
                                    paddingRight: "4px",
                                  }}
                                >
                                  <img
                                    data-v-567f87f6=""
                                    src={TUsdt}
                                    alt="icon coin"
                                    width="14"
                                    height="14"
                                    style={{ display: "block" }}
                                  />
                                </div>
                                <div
                                  data-v-15fe7f40=""
                                  class="ivu-col"
                                  data-v-567f87f6=""
                                  style={{
                                    paddingLeft: "4px",
                                    paddingRight: "4px",
                                  }}
                                >
                                  <p
                                    data-v-567f87f6=""
                                    class="title-black-PR-14"
                                  >
                                    799~3000
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="exclusive-card-sub-head"
                              >
                                Income:
                              </p>
                            </div>
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p data-v-567f87f6="" class="title-black-PR-14">
                                2.1%
                              </p>
                            </div>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-row-flex
                          ivu-row-flex-middle ivu-row-flex-space-between"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="exclusive-card-sub-head"
                              >
                                handling fee:
                              </p>
                            </div>
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p data-v-567f87f6="" class="title-black-PR-14">
                                1%
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        data-v-15fe7f40=""
                        type="button"
                        class="ivu-btn ivu-btn-primary ivu-btn-long button-stake"
                        data-v-567f87f6=""
                      >
                        {" "}
                        <span> Go to stake </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-15fe7f40=""
                    class="ivu-col margin-bottom-15 ivu-col-span-xs-24
                             ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
                    style={{ paddingLeft: "8px", paddingRight: "8px" }}
                  >
                    <div data-v-567f87f6="" class="stake-spec-card">
                      <div
                        data-v-15fe7f40=""
                        class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between
                              margin-bottom-10"
                        data-v-567f87f6=""
                        style={{
                          marginleft: "-2.5px",
                          marginright: "-2.5px",
                        }}
                      >
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                          style={{
                            paddingLeft: "2.5px",
                            paddingRight: "2.5px",
                          }}
                        >
                          <p data-v-567f87f6="" class="title-black-PR-16">
                            Exclusive Stake4
                          </p>
                        </div>
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                          style={{
                            marginright: "auto",
                            paddingLeft: "2.5px",
                            paddingRight: "2.5px",
                          }}
                        >
                          <div
                            data-v-64cde390=""
                            data-v-15fe7f40=""
                            class="d-flex"
                            data-v-567f87f6=""
                          >
                            <img
                              data-v-64cde390=""
                              src="https://image.treasurenft.xyz/icon/icon_question-mark_01.svg"
                              alt="question-mark"
                              loading="lazy"
                              width="24"
                              height="24"
                              class="questionIcon"
                            />
                          </div>
                        </div>
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                          style={{
                            paddingLeft: "2.5px",
                            paddingRight: "2.5px",
                          }}
                        >
                          <p data-v-567f87f6="" class="title-green-PR-14">
                            LV2~LV6
                          </p>
                        </div>
                      </div>
                      <div
                        data-v-15fe7f40=""
                        class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                        data-v-567f87f6=""
                      >
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                        >
                          <div data-v-567f87f6="" class="img-box">
                            <img
                              data-v-567f87f6=""
                              src="https://image.treasurenft.xyz/PC/img/stake_card_img_spec_04.png"
                              alt="discount img 4"
                              width="614"
                              height="200"
                              class="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-15fe7f40=""
                        class="ivu-row-flex ivu-row-flex-middle margin-bottom-10"
                        data-v-567f87f6=""
                      >
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                          style={{ flex: "1 1 0px" }}
                        >
                          <div
                            data-v-15fe7f40=""
                            class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="exclusive-card-sub-head"
                              >
                                Status:
                              </p>
                            </div>
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="title-white-PR-12 status-label status-label--disable"
                              >
                                {" "}
                                Open{" "}
                              </p>
                            </div>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="exclusive-card-sub-head"
                              >
                                Price Range:
                              </p>
                            </div>
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <div
                                data-v-15fe7f40=""
                                class="ivu-row-flex ivu-row-flex-middle"
                                data-v-567f87f6=""
                                style={{
                                  marginleft: "-4px",
                                  marginright: "-4px",
                                }}
                              >
                                <div
                                  data-v-15fe7f40=""
                                  class="ivu-col"
                                  data-v-567f87f6=""
                                  style={{
                                    paddingLeft: "4px",
                                    paddingRight: "4px",
                                  }}
                                >
                                  <img
                                    data-v-567f87f6=""
                                    src={TUsdt}
                                    alt="icon coin"
                                    width="14"
                                    height="14"
                                    style={{ display: "block" }}
                                  />
                                </div>
                                <div
                                  data-v-15fe7f40=""
                                  class="ivu-col"
                                  data-v-567f87f6=""
                                  style={{
                                    paddingLeft: "4px",
                                    paddingRight: "4px",
                                  }}
                                >
                                  <p
                                    data-v-567f87f6=""
                                    class="title-black-PR-14"
                                  >
                                    999~4000
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="exclusive-card-sub-head"
                              >
                                Income:
                              </p>
                            </div>
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p data-v-567f87f6="" class="title-black-PR-14">
                                2.5%
                              </p>
                            </div>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="exclusive-card-sub-head"
                              >
                                handling fee:
                              </p>
                            </div>
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p data-v-567f87f6="" class="title-black-PR-14">
                                1%
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        data-v-15fe7f40=""
                        disabled="disabled"
                        type="button"
                        class="ivu-btn ivu-btn-primary ivu-btn-long button-stake"
                        data-v-567f87f6=""
                      >
                        {" "}
                        <span> Go to stake </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-15fe7f40=""
                    class="ivu-col margin-bottom-15 ivu-col-span-xs-24 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
                    style={{ paddingLeft: "8px", paddingRight: "8px" }}
                  >
                    <div data-v-567f87f6="" class="stake-spec-card">
                      <div
                        data-v-15fe7f40=""
                        class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                        data-v-567f87f6=""
                        style={{
                          marginleft: "-2.5px",
                          marginright: "-2.5px",
                        }}
                      >
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                          style={{
                            paddingLeft: "2.5px",
                            paddingRight: "2.5px",
                          }}
                        >
                          <p data-v-567f87f6="" class="title-black-PR-16">
                            Exclusive Stake5
                          </p>
                        </div>
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                          style={{
                            marginright: "auto",
                            paddingLeft: "2.5px",
                            paddingRight: "2.5px",
                          }}
                        >
                          <div
                            data-v-64cde390=""
                            data-v-15fe7f40=""
                            class="d-flex"
                            data-v-567f87f6=""
                          >
                            <img
                              data-v-64cde390=""
                              src="https://image.treasurenft.xyz/icon/icon_question-mark_01.svg"
                              alt="question-mark"
                              loading="lazy"
                              width="24"
                              height="24"
                              class="questionIcon"
                            />
                          </div>
                        </div>
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                          style={{
                            paddingLeft: "2.5px",
                            paddingRight: "2.5px",
                          }}
                        >
                          <p data-v-567f87f6="" class="title-green-PR-14">
                            LV2~LV6
                          </p>
                        </div>
                      </div>
                      <div
                        data-v-15fe7f40=""
                        class="ivu-row-flex ivu-row-flex-middle
                                                  ivu-row-flex-space-between margin-bottom-10"
                        data-v-567f87f6=""
                      >
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                        >
                          <div data-v-567f87f6="" class="img-box">
                            <img
                              data-v-567f87f6=""
                              src="https://image.treasurenft.xyz/PC/img/stake_card_img_spec_05.png"
                              alt="discount img 5"
                              width="614"
                              height="200"
                              class="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-15fe7f40=""
                        class="ivu-row-flex ivu-row-flex-middle margin-bottom-10"
                        data-v-567f87f6=""
                      >
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                          style={{ flex: "1 1 0px" }}
                        >
                          <div
                            data-v-15fe7f40=""
                            class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="exclusive-card-sub-head"
                              >
                                Status:
                              </p>
                            </div>
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="title-white-PR-12 status-label status-label--disable"
                              >
                                {" "}
                                Open{" "}
                              </p>
                            </div>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="exclusive-card-sub-head"
                              >
                                Price Range:
                              </p>
                            </div>
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <div
                                data-v-15fe7f40=""
                                class="ivu-row-flex ivu-row-flex-middle"
                                data-v-567f87f6=""
                                style={{
                                  marginleft: "-4px",
                                  marginright: "-4px",
                                }}
                              >
                                <div
                                  data-v-15fe7f40=""
                                  class="ivu-col"
                                  data-v-567f87f6=""
                                  style={{
                                    paddingLeft: "4px",
                                    paddingRight: "4px",
                                  }}
                                >
                                  <img
                                    data-v-567f87f6=""
                                    src={TUsdt}
                                    alt="icon coin"
                                    width="14"
                                    height="14"
                                    style={{ display: "block" }}
                                  />
                                </div>
                                <div
                                  data-v-15fe7f40=""
                                  class="ivu-col"
                                  data-v-567f87f6=""
                                  style={{
                                    paddingLeft: "4px",
                                    paddingRight: "4px",
                                  }}
                                >
                                  <p
                                    data-v-567f87f6=""
                                    class="title-black-PR-14"
                                  >
                                    1499~5000
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="exclusive-card-sub-head"
                              >
                                Income:
                              </p>
                            </div>
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p data-v-567f87f6="" class="title-black-PR-14">
                                3%
                              </p>
                            </div>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="exclusive-card-sub-head"
                              >
                                handling fee:
                              </p>
                            </div>
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p data-v-567f87f6="" class="title-black-PR-14">
                                1%
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        data-v-15fe7f40=""
                        disabled="disabled"
                        type="button"
                        class="ivu-btn ivu-btn-primary ivu-btn-long button-stake"
                        data-v-567f87f6=""
                      >
                        {" "}
                        <span> Go to stake </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-15fe7f40=""
                    class="ivu-col margin-bottom-15 ivu-col-span-xs-24 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
                    style={{ paddingLeft: "8px", paddingRight: "8px" }}
                  >
                    <div data-v-567f87f6="" class="stake-spec-card">
                      <div
                        data-v-15fe7f40=""
                        class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                        data-v-567f87f6=""
                        style={{
                          marginLeft: "-2.5px",
                          marginRight: "-2.5px",
                        }}
                      >
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                          style={{
                            paddingLeft: "2.5px",
                            paddingRight: "2.5px",
                          }}
                        >
                          <p data-v-567f87f6="" class="title-black-PR-16">
                            Exclusive Stake6
                          </p>
                        </div>
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                          style={{
                            marginright: "auto",
                            paddingLeft: "2.5px",
                            paddingRight: "2.5px",
                          }}
                        >
                          <div
                            data-v-64cde390=""
                            data-v-15fe7f40=""
                            class="d-flex"
                            data-v-567f87f6=""
                          >
                            <img
                              data-v-64cde390=""
                              src="https://image.treasurenft.xyz/icon/icon_question-mark_01.svg"
                              alt="question-mark"
                              loading="lazy"
                              width="24"
                              height="24"
                              class="questionIcon"
                            />
                          </div>
                        </div>
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                          style={{
                            paddingLeft: "2.5px",
                            paddingRight: "2.5px",
                          }}
                        >
                          <p data-v-567f87f6="" class="title-green-PR-14">
                            LV2~LV6
                          </p>
                        </div>
                      </div>
                      <div
                        data-v-15fe7f40=""
                        class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                        data-v-567f87f6=""
                      >
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                        >
                          <div data-v-567f87f6="" class="img-box">
                            <img
                              data-v-567f87f6=""
                              src="https://image.treasurenft.xyz/PC/img/stake_card_img_spec_06.png"
                              alt="discount img 6"
                              width="614"
                              height="200"
                              class="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-15fe7f40=""
                        class="ivu-row-flex ivu-row-flex-middle margin-bottom-10"
                        data-v-567f87f6=""
                      >
                        <div
                          data-v-15fe7f40=""
                          class="ivu-col"
                          data-v-567f87f6=""
                          style={{ flex: "1 1 0px" }}
                        >
                          <div
                            data-v-15fe7f40=""
                            class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="exclusive-card-sub-head"
                              >
                                Status:
                              </p>
                            </div>
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="title-white-PR-12 status-label status-label--disable"
                              >
                                {" "}
                                Open{" "}
                              </p>
                            </div>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="exclusive-card-sub-head"
                              >
                                Price Range:
                              </p>
                            </div>
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <div
                                data-v-15fe7f40=""
                                class="ivu-row-flex ivu-row-flex-middle"
                                data-v-567f87f6=""
                                style={{
                                  marginleft: "-4px",
                                  marginright: "-4px",
                                }}
                              >
                                <div
                                  data-v-15fe7f40=""
                                  class="ivu-col"
                                  data-v-567f87f6=""
                                  style={{
                                    paddingLeft: "4px",
                                    paddingRight: "4px",
                                  }}
                                >
                                  <img
                                    data-v-567f87f6=""
                                    src={TUsdt}
                                    alt="icon coin"
                                    width="14"
                                    height="14"
                                    style={{ display: "block" }}
                                  />
                                </div>
                                <div
                                  data-v-15fe7f40=""
                                  class="ivu-col"
                                  data-v-567f87f6=""
                                  style={{
                                    paddingLeft: "4px",
                                    paddingRight: "4px",
                                  }}
                                >
                                  <p
                                    data-v-567f87f6=""
                                    class="title-black-PR-14"
                                  >
                                    1999~6000
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="exclusive-card-sub-head"
                              >
                                Income:
                              </p>
                            </div>
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p data-v-567f87f6="" class="title-black-PR-14">
                                3.5%
                              </p>
                            </div>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p
                                data-v-567f87f6=""
                                class="exclusive-card-sub-head"
                              >
                                handling fee:
                              </p>
                            </div>
                            <div
                              data-v-15fe7f40=""
                              class="ivu-col"
                              data-v-567f87f6=""
                            >
                              <p data-v-567f87f6="" class="title-black-PR-14">
                                1%
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        data-v-15fe7f40=""
                        disabled="disabled"
                        type="button"
                        class="ivu-btn ivu-btn-primary ivu-btn-long button-stake"
                        data-v-567f87f6=""
                      >
                        {" "}
                        <span> Go to stake </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const FreeZone = () => {
    return (
      <>
        <div data-v-4a568f61="" class="stake-tabs-tab-content-box">
          <div data-v-15fe7f40="" class="stake-area" data-v-4a568f61="">
            <div data-v-15fe7f40="" class="discount-category-area">
              <div
                data-v-15fe7f40=""
                class="ivu-row-flex ivu-row-flex-middle"
                style={{ marginLeft: "-8px", marginRight: "-8px" }}
              >
                <div
                  data-v-15fe7f40=""
                  class="ivu-col margin-bottom-15 ivu-col-span-xs-24 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 
 ivu-col-span-xxl-4"
                  style={{ paddingLeft: "8px", paddingRight: "8px" }}
                >
                  <div data-v-567f87f6="" class="stake-spec-card">
                    <div
                      data-v-15fe7f40=""
                      class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                      data-v-567f87f6=""
                      style={{ marginLeft: "-2.5px", marginRight: "-2.5px" }}
                    >
                      <div
                        data-v-15fe7f40=""
                        class="ivu-col"
                        data-v-567f87f6=""
                        style={{
                          marginLeft: "2.5px",
                          marginRight: "2.5px",
                        }}
                      >
                        <p data-v-567f87f6="" class="title-black-PR-16">
                          Free Zone1
                        </p>
                      </div>
                      <div
                        data-v-15fe7f40=""
                        class="ivu-col"
                        data-v-567f87f6=""
                        style={{
                          marginright: "auto",
                          paddingLeft: "2.5px",
                          paddingRight: "2.5px",
                        }}
                      >
                        <div
                          data-v-64cde390=""
                          data-v-15fe7f40=""
                          class="d-flex"
                          data-v-567f87f6=""
                        >
                          <img
                            data-v-64cde390=""
                            src="https://image.treasurenft.xyz/icon/icon_question-mark_01.svg"
                            alt="question-mark"
                            loading="lazy"
                            width="24"
                            height="24"
                            class="questionIcon"
                          />
                        </div>
                      </div>
                      <div
                        data-v-15fe7f40=""
                        class="ivu-col"
                        data-v-567f87f6=""
                        style={{
                          marginLeft: "2.5px",
                          marginRight: "2.5px",
                        }}
                      >
                        <p data-v-567f87f6="" class="title-green-PR-14">
                          LV1~LV6
                        </p>
                      </div>
                    </div>
                    <div
                      data-v-15fe7f40=""
                      class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                      data-v-567f87f6=""
                    >
                      <div
                        data-v-15fe7f40=""
                        class="ivu-col"
                        data-v-567f87f6=""
                      >
                        <div data-v-567f87f6="" class="img-box">
                          <img
                            data-v-567f87f6=""
                            src="https://image.treasurenft.xyz/PC/img/stake_card_img_free_01_1.png"
                            alt="discount img 1"
                            width="614"
                            height="200"
                            class="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-v-15fe7f40=""
                      class="ivu-row-flex ivu-row-flex-middle margin-bottom-10"
                      data-v-567f87f6=""
                    >
                      <div
                        data-v-15fe7f40=""
                        class="ivu-col"
                        data-v-567f87f6=""
                        style={{ flex: "1 1 0px" }}
                      >
                        <div
                          data-v-15fe7f40=""
                          class="ivu-row-flex ivu-row-flex-middle
    ivu-row-flex-space-between margin-bottom-10"
                          data-v-567f87f6=""
                        >
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <p
                              data-v-567f87f6=""
                              class="exclusive-card-sub-head"
                            >
                              Status:
                            </p>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <p
                              data-v-567f87f6=""
                              class="title-white-PR-12 status-label status-label--enable"
                            >
                              {" "}
                              Open{" "}
                            </p>
                          </div>
                        </div>
                        <div
                          data-v-15fe7f40=""
                          class="ivu-row-flex ivu-row-flex-middle
      ivu-row-flex-space-between margin-bottom-10"
                          data-v-567f87f6=""
                        >
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <p
                              data-v-567f87f6=""
                              class="exclusive-card-sub-head"
                            >
                              Price Range:
                            </p>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-row-flex ivu-row-flex-middle"
                              data-v-567f87f6=""
                              style={{
                                marginleft: "-4px",
                                marginRight: "-4px",
                              }}
                            >
                              <div
                                data-v-15fe7f40=""
                                class="ivu-col"
                                data-v-567f87f6=""
                                style={{
                                  paddingLeft: "4px",
                                  paddingRight: "4px",
                                }}
                              >
                                <img
                                  data-v-567f87f6=""
                                  src={TUsdt}
                                  alt="icon coin"
                                  width="14"
                                  height="14"
                                  style={{ display: "block" }}
                                />
                              </div>
                              <div
                                data-v-15fe7f40=""
                                class="ivu-col"
                                data-v-567f87f6=""
                                style={{
                                  paddingLeft: "4px",
                                  paddingRight: "4px",
                                }}
                              >
                                <p data-v-567f87f6="" class="title-black-PR-14">
                                  200~499
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-15fe7f40=""
                          class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                          data-v-567f87f6=""
                        >
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <p
                              data-v-567f87f6=""
                              class="exclusive-card-sub-head"
                            >
                              Income:
                            </p>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <p data-v-567f87f6="" class="title-black-PR-14">
                              1.2%
                            </p>
                          </div>
                        </div>
                        <div
                          data-v-15fe7f40=""
                          class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                          data-v-567f87f6=""
                        >
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <p
                              data-v-567f87f6=""
                              class="exclusive-card-sub-head"
                            >
                              Number of days to stake:
                            </p>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <p data-v-567f87f6="" class="title-black-PR-14">
                              3~30 day
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      data-v-15fe7f40=""
                      type="button"
                      class="ivu-btn ivu-btn-primary ivu-btn-long button-stake"
                      data-v-567f87f6=""
                    >
                      {" "}
                      <span> Go to stake </span>
                    </button>
                  </div>
                </div>
                <div
                  data-v-15fe7f40=""
                  class="ivu-col margin-bottom-15 ivu-col-span-xs-24 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
                  style={{ paddingLeft: "8px", paddingRight: "8px" }}
                >
                  <div data-v-567f87f6="" class="stake-spec-card">
                    <div
                      data-v-15fe7f40=""
                      class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                      data-v-567f87f6=""
                      style={{ marginLeft: "-2.5px", marginRight: "-2.5px" }}
                    >
                      <div
                        data-v-15fe7f40=""
                        class="ivu-col"
                        data-v-567f87f6=""
                        style={{
                          marginLeft: "2.5px",
                          marginRight: "2.5px",
                        }}
                      >
                        <p data-v-567f87f6="" class="title-black-PR-16">
                          Free Zone2
                        </p>
                      </div>
                      <div
                        data-v-15fe7f40=""
                        class="ivu-col"
                        data-v-567f87f6=""
                        style={{
                          marginright: "auto",
                          paddingLeft: "2.5px",
                          paddingRight: "2.5px",
                        }}
                      >
                        <div
                          data-v-64cde390=""
                          data-v-15fe7f40=""
                          class="d-flex"
                          data-v-567f87f6=""
                        >
                          <img
                            data-v-64cde390=""
                            src="https://image.treasurenft.xyz/icon/icon_question-mark_01.svg"
                            alt="question-mark"
                            loading="lazy"
                            width="24"
                            height="24"
                            class="questionIcon"
                          />
                        </div>
                      </div>
                      <div
                        data-v-15fe7f40=""
                        class="ivu-col"
                        data-v-567f87f6=""
                        style={{
                          marginLeft: "2.5px",
                          marginRight: "2.5px",
                        }}
                      >
                        <p data-v-567f87f6="" class="title-green-PR-14">
                          LV1~LV6
                        </p>
                      </div>
                    </div>
                    <div
                      data-v-15fe7f40=""
                      class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                      data-v-567f87f6=""
                    >
                      <div
                        data-v-15fe7f40=""
                        class="ivu-col"
                        data-v-567f87f6=""
                      >
                        <div data-v-567f87f6="" class="img-box">
                          <img
                            data-v-567f87f6=""
                            src="https://image.treasurenft.xyz/PC/img/stake_card_img_free_02_1.png"
                            alt="discount img 2"
                            width="614"
                            height="200"
                            class="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-v-15fe7f40=""
                      class="ivu-row-flex ivu-row-flex-middle margin-bottom-10"
                      data-v-567f87f6=""
                    >
                      <div
                        data-v-15fe7f40=""
                        class="ivu-col"
                        data-v-567f87f6=""
                        style={{ flex: "1 1 0px" }}
                      >
                        <div
                          data-v-15fe7f40=""
                          class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                          data-v-567f87f6=""
                        >
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <p
                              data-v-567f87f6=""
                              class="exclusive-card-sub-head"
                            >
                              Status:
                            </p>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <p
                              data-v-567f87f6=""
                              class="title-white-PR-12 status-label status-label--enable"
                            >
                              {" "}
                              Open{" "}
                            </p>
                          </div>
                        </div>
                        <div
                          data-v-15fe7f40=""
                          class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                          data-v-567f87f6=""
                        >
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <p
                              data-v-567f87f6=""
                              class="exclusive-card-sub-head"
                            >
                              Price Range:
                            </p>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-row-flex ivu-row-flex-middle"
                              data-v-567f87f6=""
                              style={{
                                marginleft: "-4px",
                                marginRight: "-4px",
                              }}
                            >
                              <div
                                data-v-15fe7f40=""
                                class="ivu-col"
                                data-v-567f87f6=""
                                style={{
                                  paddingLeft: "4px",
                                  paddingRight: "4px",
                                }}
                              >
                                <img
                                  data-v-567f87f6=""
                                  src={TUsdt}
                                  alt="icon coin"
                                  width="14"
                                  height="14"
                                  style={{ display: "block" }}
                                />
                              </div>
                              <div
                                data-v-15fe7f40=""
                                class="ivu-col"
                                data-v-567f87f6=""
                                style={{
                                  paddingLeft: "4px",
                                  paddingRight: "4px",
                                }}
                              >
                                <p data-v-567f87f6="" class="title-black-PR-14">
                                  500~799
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-15fe7f40=""
                          class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                          data-v-567f87f6=""
                        >
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <p
                              data-v-567f87f6=""
                              class="exclusive-card-sub-head"
                            >
                              Income:
                            </p>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <p data-v-567f87f6="" class="title-black-PR-14">
                              1.5%
                            </p>
                          </div>
                        </div>
                        <div
                          data-v-15fe7f40=""
                          class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                          data-v-567f87f6=""
                        >
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <p
                              data-v-567f87f6=""
                              class="exclusive-card-sub-head"
                            >
                              Number of days to stake:
                            </p>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <p data-v-567f87f6="" class="title-black-PR-14">
                              3~30 day
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      data-v-15fe7f40=""
                      type="button"
                      class="ivu-btn ivu-btn-primary ivu-btn-long button-stake"
                      data-v-567f87f6=""
                    >
                      {" "}
                      <span> Go to stake </span>
                    </button>
                  </div>
                </div>
                <div
                  data-v-15fe7f40=""
                  class="ivu-col margin-bottom-15 ivu-col-span-xs-24 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
                  style={{ paddingLeft: "8px", paddingRight: "8px" }}
                >
                  <div data-v-567f87f6="" class="stake-spec-card">
                    <div
                      data-v-15fe7f40=""
                      class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                      data-v-567f87f6=""
                      style={{ marginLeft: "-2.5px", marginRight: "-2.5px" }}
                    >
                      <div
                        data-v-15fe7f40=""
                        class="ivu-col"
                        data-v-567f87f6=""
                        style={{
                          marginLeft: "2.5px",
                          marginRight: "2.5px",
                        }}
                      >
                        <p data-v-567f87f6="" class="title-black-PR-16">
                          Free Zone3
                        </p>
                      </div>
                      <div
                        data-v-15fe7f40=""
                        class="ivu-col"
                        data-v-567f87f6=""
                        style={{
                          marginright: "auto",
                          paddingLeft: "2.5px",
                          paddingRight: "2.5px",
                        }}
                      >
                        <div
                          data-v-64cde390=""
                          data-v-15fe7f40=""
                          class="d-flex"
                          data-v-567f87f6=""
                        >
                          <img
                            data-v-64cde390=""
                            src="https://image.treasurenft.xyz/icon/icon_question-mark_01.svg"
                            alt="question-mark"
                            loading="lazy"
                            width="24"
                            height="24"
                            class="questionIcon"
                          />
                        </div>
                      </div>
                      <div
                        data-v-15fe7f40=""
                        class="ivu-col"
                        data-v-567f87f6=""
                        style={{
                          marginLeft: "2.5px",
                          marginRight: "2.5px",
                        }}
                      >
                        <p data-v-567f87f6="" class="title-green-PR-14">
                          LV1~LV6
                        </p>
                      </div>
                    </div>
                    <div
                      data-v-15fe7f40=""
                      class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                      data-v-567f87f6=""
                    >
                      <div
                        data-v-15fe7f40=""
                        class="ivu-col"
                        data-v-567f87f6=""
                      >
                        <div data-v-567f87f6="" class="img-box">
                          <img
                            data-v-567f87f6=""
                            src="https://image.treasurenft.xyz/PC/img/stake_card_img_free_03_1.png"
                            alt="discount img 3"
                            width="614"
                            height="200"
                            class="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-v-15fe7f40=""
                      class="ivu-row-flex ivu-row-flex-middle margin-bottom-10"
                      data-v-567f87f6=""
                    >
                      <div
                        data-v-15fe7f40=""
                        class="ivu-col"
                        data-v-567f87f6=""
                        style={{ flex: "1 1 0px" }}
                      >
                        <div
                          data-v-15fe7f40=""
                          class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                          data-v-567f87f6=""
                        >
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <p
                              data-v-567f87f6=""
                              class="exclusive-card-sub-head"
                            >
                              Status:
                            </p>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <p
                              data-v-567f87f6=""
                              class="title-white-PR-12 status-label status-label--enable"
                            >
                              Open{" "}
                            </p>
                          </div>
                        </div>
                        <div
                          data-v-15fe7f40=""
                          class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                          data-v-567f87f6=""
                        >
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <p
                              data-v-567f87f6=""
                              class="exclusive-card-sub-head"
                            >
                              Price Range:
                            </p>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <div
                              data-v-15fe7f40=""
                              class="ivu-row-flex ivu-row-flex-middle"
                              data-v-567f87f6=""
                              style={{
                                marginleft: "-4px",
                                marginRight: "-4px",
                              }}
                            >
                              <div
                                data-v-15fe7f40=""
                                class="ivu-col"
                                data-v-567f87f6=""
                                style={{
                                  paddingLeft: "4px",
                                  paddingRight: "4px",
                                }}
                              >
                                <img
                                  data-v-567f87f6=""
                                  src={TUsdt}
                                  alt="icon coin"
                                  width="14"
                                  height="14"
                                  style={{ display: "block" }}
                                />
                              </div>
                              <div
                                data-v-15fe7f40=""
                                class="ivu-col"
                                data-v-567f87f6=""
                                style={{
                                  paddingLeft: "4px",
                                  paddingRight: "4px",
                                }}
                              >
                                <p data-v-567f87f6="" class="title-black-PR-14">
                                  800~1200
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-15fe7f40=""
                          class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                          data-v-567f87f6=""
                        >
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <p
                              data-v-567f87f6=""
                              class="exclusive-card-sub-head"
                            >
                              Income:
                            </p>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <p data-v-567f87f6="" class="title-black-PR-14">
                              1.7%
                            </p>
                          </div>
                        </div>
                        <div
                          data-v-15fe7f40=""
                          class="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                          data-v-567f87f6=""
                        >
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <p
                              data-v-567f87f6=""
                              class="exclusive-card-sub-head"
                            >
                              Number of days to stake:
                            </p>
                          </div>
                          <div
                            data-v-15fe7f40=""
                            class="ivu-col"
                            data-v-567f87f6=""
                          >
                            <p data-v-567f87f6="" class="title-black-PR-14">
                              3~30 day
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      data-v-15fe7f40=""
                      type="button"
                      class="ivu-btn ivu-btn-primary ivu-btn-long button-stake"
                      data-v-567f87f6=""
                    >
                      <span> Go to stake </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const ExclusiveZoneStake = () => {
    return (
      <>
        <div className="stake-tabs-tab-content">
          <div className="stake-tabs-tab-content-box">
            <div className="stake-area">
              <div className="commodity">
                <div data-v-090235b6="" class="search-block">
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
                        />{" "}
                        <span class="ivu-input-prefix">
                          <img
                            data-v-090235b6=""
                            src="https://image.treasurenft.xyz/icon/icon_search_03.png"
                            alt="search"
                            loading="lazy"
                            class="iconSearch"
                          />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Header></Header>
      <div className="content-wrap">
        <div data-v-b49386ae="" data-v-014c2687="">
          <div className="headerCommon">
            {" "}
            <div
              data-v-b49386ae=""
              class="headerImg headerimg-custom"
              style={{ height: "354px" }}
            >
              <img
                data-v-b49386ae=""
                src="https://image.treasurenft.xyz/PC/img/header_bg_L.png"
                alt="headerImg"
                loading="lazy"
              />
              <h2 data-v-b49386ae="" class="headerImg-text title-black-PR-30">
                Explore
              </h2>
            </div>
          </div>
          <div className="explore">
            {" "}
            <div className="explore-main">
              <div className="tab-area tab-area-outer ivu-tabs ivu-tabs-no-animation">
                <div className="ivu-tabs-bar">
                  <div className="ivu-tabs-nav-container">
                    <div
                      className="ivu-tabs-nav-wrap"
                      style={{ position: "relative" }}
                    >
                      <div className="ivu-tabs-nav-scroll overflow-nav-scroll">
                        <div class="ivu-tabs-nav">
                          <div
                            class="ivu-tabs-ink-bar"
                            style={getInkBarStyle()}
                          ></div>
                          <div
                            draggable="false"
                            class="ivu-tabs-tab ivu-tabs-tab-active ivu-tabs-tab-focused"
                            onClick={() => {
                              setActiveTab(1);
                            }}
                          >
                            Stake
                          </div>
                          <div
                            draggable="false"
                            className={`ivu-tabs-tab ${
                              activeTab === 2
                                ? "ivu-tabs-tab-active ivu-tabs-tab-focused"
                                : ""
                            }`}
                            onClick={() => {
                              setActiveTab(2);
                            }}
                          >
                            Polygon NFT
                          </div>
                          <div
                            draggable="false"
                            className={`ivu-tabs-tab ${
                              activeTab === 3
                                ? "ivu-tabs-tab-active ivu-tabs-tab-focused"
                                : ""
                            }`}
                            onClick={() => {
                              setActiveTab(3);
                            }}
                          >
                            Art
                          </div>
                          <div
                            draggable="false"
                            className={`ivu-tabs-tab ${
                              activeTab === 4
                                ? "ivu-tabs-tab-active ivu-tabs-tab-focused"
                                : ""
                            }`}
                            onClick={() => {
                              setActiveTab(4);
                            }}
                          >
                            Collectibles
                          </div>
                        </div>
                      </div>
                      {activeTab == 1 && <Stake />}
                      {activeTab == 2 && <PolygonNFT />}
                      {activeTab == 3 && <Art />}
                      {activeTab == 4 && <Collectibles />}
                      {/* {activeTab == 5 && <Exclusive />} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
