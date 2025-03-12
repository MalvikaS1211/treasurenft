import React from "react";
import Header from "./header";
import commingsoon from "../assets/commingsoon.webp";
import { Link } from "react-router-dom";
import LogoWhite from "../assets/LogoWhite.png";

export default function Collection() {
  return (
    <>
      <div data-v-082a2291="" class="content-wrap" style={{ paddingTop: "9%" }}>
        <div data-v-49807727="" data-v-082a2291="" class="collection">
          <div data-v-49807727="" class="userMaterial">
            <div
              class="headerBanner"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #2152af 0%, #6ba7e7 51%, #2152af 100%)",
              }}
            >
              <Header Logo={LogoWhite}></Header>
              <div class="headerBanner-row ivu-row">
                <div class="headerBanner-row-colLeft ivu-col ivu-col-span-xs-12 ivu-col-span-md-6 ivu-col-span-lg-4">
                  <div class="user-div">
                    <img
                      src="https://image.treasurenft.xyz/NewVer2212/img/img_avatar_01_defult.png"
                      alt="imgAvatar"
                      loading="lazy"
                      class="user-img"
                    />
                  </div>
                </div>
                <div class="headerBanner-row-colRight ivu-col ivu-col-span-xs-12 ivu-col-span-md-18 ivu-col-span-lg-20">
                  <div class="headerBanner-row-colRight-div">
                    <span class="title-black-PR-30">a1166d9a1a09</span>
                    <img
                      src="https://image.treasurenft.xyz/NewVer2212/img/badges_lv0.png"
                      alt="iconMedal"
                      loading="lazy"
                      class="medalIcon"
                    />
                  </div>
                  <div class="margin-top-5">
                    <span class="title-grey666-PR-14">0 Points</span>
                    <span class="title-grey666-PR-14 margin-left-20">
                      Level Information
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-v-49807727="" class="recharge-btn">
            <div data-v-49807727="" class="width-140px">
              <Link to="/depositNFT">
                <button id="Gradient" class="grayHoverColor">
                  <div class="GradientBtn-div">
                    <p class="GradientBtn-div-p">Deposit NFT</p>
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div data-v-49807727="" class="btn-recharge margin-bottom-10"></div>
          <div data-v-49807727="" class="comingSoon">
            <img
              data-v-49807727=""
              src={commingsoon}
              alt="comingSoon"
              class="comingSoon__Img"
            />
            <p data-v-49807727="" class="title-black-PR-24 font-weight-700">
              Coming Soon
            </p>
            <p data-v-49807727="" class="title-grey666-PR-12 margin-top-10">
              More profit opportunities are on the way, please stay tuned.
            </p>
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
