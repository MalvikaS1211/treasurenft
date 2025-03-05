import React from "react";
import Header from "./header";
import TUsdt from "../assets/TUsdt.png";
export default function Explore() {
  return (
    <>
      <Header></Header>
      <div className="content-wrap">
        <div data-v-b49386ae="" data-v-014c2687="" className="explore">
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
                          Polygon NFT
                        </div>
                        <div draggable="false" class="ivu-tabs-tab">
                          Art
                        </div>
                        <div draggable="false" class="ivu-tabs-tab">
                          Collectibles
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
                  <div
                    className="ivu-tabs-nav-wrap"
                    style={{ position: "relative" }}
                  >
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
                          Exclusive Zone
                        </div>
                        <div draggable="false" class="ivu-tabs-tab">
                          Free Zone
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stake-tabs-tab-content">
                <div className="stake-tabs-tab-content-box">
                  <div className="stake-area">
                    <div className="discount-category-area"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
