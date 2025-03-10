import React from "react";
import Header from "./header";

export default function DepositNFT() {
  return (
    <>
      <Header></Header>
      <div className="content-wrap">
        <div data-v-b49386ae="" data-v-014c2687="" className="depositNFT">
          <div className="headerCommon">
            <div
              data-v-b49386ae=""
              class="headerImg headerimg-custom"
              style={{
                height: "354px",
                backgroundImage:
                  "linear-gradient(to right, #2152af 0%, #6ba7e7 51%, #2152af 100%)",
              }}
            >
              {/* <img
                data-v-b49386ae=""
                src="https://image.treasurenft.xyz/PC/img/header_bg_L.png"
                alt="headerImg"
                loading="lazy"
              /> */}
              <h2 data-v-b49386ae="" class="headerImg-text title-black-PR-30">
                Explore
              </h2>
            </div>
          </div>
          <div data-v-618a15fa="" class="ivu-row">
            <div
              data-v-618a15fa=""
              class="left-side ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-12"
            >
              <div data-v-618a15fa="" class="left-inside">
                <p data-v-618a15fa="" class="title-black-PR-26 font-weight-700">
                  Choose Chain
                </p>
                <p data-v-618a15fa="" class="title-grey999-PR-16">
                  Currently Support Polygon
                </p>
                <label data-v-618a15fa="" for="Polygon" class="radioDiv">
                  <div data-v-618a15fa="" class="innerLayerDiv">
                    <div data-v-618a15fa="" class="setMiddle">
                      <img
                        data-v-618a15fa=""
                        src="https://image.treasurenft.xyz/icon/icon_polygon_01.png"
                        alt="icon"
                        loading="lazy"
                        class="polygonIcon"
                      />
                      <span data-v-618a15fa="" class="title-black-PR-18">
                        Polygon
                      </span>
                    </div>
                    <img
                      data-v-618a15fa=""
                      src="https://image.treasurenft.xyz/icon/icon_check_03.png"
                      alt="icon"
                      loading="lazy"
                      class="icon"
                    />
                  </div>
                  <input
                    data-v-618a15fa=""
                    type="radio"
                    id="Polygon"
                    value="Polygon"
                    style={{ display: "none" }}
                  />
                </label>
                <label data-v-618a15fa="" for="BSC" class="radioDiv">
                  <div data-v-618a15fa="" class="innerLayerDiv">
                    <div data-v-618a15fa="" class="setMiddle">
                      <img
                        data-v-618a15fa=""
                        src="https://image.treasurenft.xyz/icon/icon_binance_01.png"
                        alt="icon"
                        loading="lazy"
                        class="polygonIcon"
                      />
                      <span data-v-618a15fa="" class="title-black-PR-18">
                        BSC
                      </span>
                    </div>
                    <img
                      data-v-618a15fa=""
                      src="https://image.treasurenft.xyz/icon/icon_check_03.png"
                      alt="icon"
                      loading="lazy"
                      class="icon"
                    />
                  </div>
                  <input
                    data-v-618a15fa=""
                    type="radio"
                    id="BSC"
                    value="BSC"
                    style={{ display: "none" }}
                  />
                </label>
                <label data-v-618a15fa="" for="OKC" class="radioDiv">
                  <div data-v-618a15fa="" class="innerLayerDiv">
                    <div data-v-618a15fa="" class="setMiddle">
                      <img
                        data-v-618a15fa=""
                        src="https://image.treasurenft.xyz/icon/icon_OKX.png"
                        alt="icon"
                        loading="lazy"
                        class="polygonIcon"
                      />
                      <span data-v-618a15fa="" class="title-black-PR-18">
                        OKC
                      </span>
                    </div>
                    <img
                      data-v-618a15fa=""
                      src="https://image.treasurenft.xyz/icon/icon_check_03.png"
                      alt="icon"
                      loading="lazy"
                      class="icon"
                    />
                  </div>
                  <input
                    data-v-618a15fa=""
                    type="radio"
                    id="OKC"
                    value="OKC"
                    style={{ display: "none" }}
                  />
                </label>
                <button
                  data-v-618a15fa=""
                  disabled="disabled"
                  type="button"
                  class="margin-top-20 ivu-btn ivu-btn-primary ivu-btn-long"
                  style={{ height: "50px" }}
                >
                  {" "}
                  <span>Next</span>
                </button>
              </div>
            </div>
            <div
              data-v-618a15fa=""
              class="right-side ivu-col ivu-col-span-xs-0 ivu-col-span-sm-0 ivu-col-span-md-12"
            >
              <img
                data-v-618a15fa=""
                src="https://image.treasurenft.xyz/PC/img/pc_singImg_01.png"
                alt="img"
                loading="lazy"
                class="bg-img"
              />
            </div>
          </div>
        </div>
        {/* <img
          data-v-082a2291=""
          src="https://image.treasurenft.xyz/btn/btn_help_01.png"
          alt="helpIcon"
          loading="lazy"
          class="helpIconStyle"
        /> */}
      </div>
    </>
  );
}
