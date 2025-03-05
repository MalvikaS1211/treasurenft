import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
export default function Footer() {
  return (
    <footer className="container" style={{ background: "white" }}>
      <div
        className="ivu-row-flex ivu-row-flex-space-between"
        style={{ width: "100%" }}
      >
        <div className="ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-6 ivu-col-span-lg-6 ivu-col-span-xl-6">
          <img
            src="https://image.treasurenft.xyz/PC/img/img_logo_footer_01.png"
            loading="lazy"
            alt="logo"
            className="logo-footer"
          />
          <p className="title-grey666-PR-16 font-weight-500">
            TreasureNFT is a Web3 revenue platform based on NFT collections
          </p>
        </div>

        <div className="ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-16">
          <div className="link-wrap ivu-row">
            <div className="resources-wrap ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-6">
              <h3 className="title-black-PR-20">Resources</h3>
              <a
                href="https://treasurenft.gitbook.io/treasurenft-1/"
                target="_blank"
                rel="nofollow"
              >
                <span className="title-grey666-PR-16 font-weight-500">
                  Docs
                </span>
              </a>
              <a
                href="https://treasurenft-metaverse.gitbook.io/how-to-use/earn/how-to-share-invitations"
                target="_blank"
                rel="nofollow"
              >
                <span className="title-grey666-PR-16 font-weight-500">
                  Invite friends
                </span>
              </a>
              <a
                href="https://treasurenft-metaverse.gitbook.io/how-to-use/earn/how-to-trade"
                target="_blank"
                rel="nofollow"
              >
                <span className="title-grey666-PR-16 font-weight-500">
                  How to buy
                </span>
              </a>

              <a href="#/uc/noviceTeaching" target="" rel="nofollow">
                <span class="title-grey666-PR-16 font-weight-500">
                  Tutorials
                </span>
              </a>

              <a
                href="https://forms.gle/78WE4Vd6qh3NTAkW7"
                target="_blank"
                rel="nofollow"
              >
                <span class="title-grey666-PR-16 font-weight-500">
                  Artist Application Form
                </span>
              </a>
            </div>
            <div class="news-wrap ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-6 ivu-col-span-lg-6 ivu-col-span-xl-5">
              <h3 class="title-black-PR-20">News</h3>
              <a
                href="https://medium.com/@Treasurenft_xyz"
                target="_blank"
                rel="nofollow"
              >
                <span class="title-grey666-PR-16 font-weight-500">Blog</span>
              </a>
            </div>
            <div class="company-wrap ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-12 ivu-col-span-lg-12 ivu-col-span-xl-12">
              <h3 class="title-black-PR-20">Company</h3>
              <p class="title-grey666-PR-16 font-weight-500">
                Join our mailing list to stay in the loop with our newest
                feature releases, NFT listing, tips and tricks for navigating
                Treasure webpage.
              </p>
              <div class="email-block">
                <input placeholder="Enter your email address" />
                <div class="email-block-btn">Submit</div>
              </div>
            </div>
            <div class="ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-12 ivu-col-md-offset-12 ivu-col-span-lg-12 ivu-col-lg-offset-12 ivu-col-span-xl-12 ivu-col-xl-offset-10">
              <h3 class="title-black-PR-20">Download</h3>
              <div class="ivu-row-flex mx-n2">
                <div class="download-wrap ivu-col ivu-col-span-xs-8 ivu-col-span-sm-8 ivu-col-span-md-7 ivu-col-span-lg-7 ivu-col-span-xl-7 px-2">
                  <a
                    href="javascript:void();"
                    target=""
                    class="download-btn"
                    style={{ backgroundColor: "rgb(92, 191, 254)" }}
                  >
                    <img
                      src="https://image.treasurenft.xyz/NewVer2212/icon/icon_download_apple_01.png"
                      alt="icon"
                      loading="lazy"
                    />
                    <span class="title-white-PR-16 custom-title-white-PR-16 ">
                      APP Store
                    </span>
                    <IoChevronForwardOutline />
                  </a>
                </div>
                <div class="download-wrap ivu-col ivu-col-span-xs-8 ivu-col-span-sm-8 ivu-col-span-md-7 ivu-col-span-lg-7 ivu-col-span-xl-7 px-2">
                  <a
                    href="javascript:void();"
                    target=""
                    class="download-btn"
                    style={{ backgroundColor: "rgb(160, 245, 208)" }}
                  >
                    <img
                      src="https://image.treasurenft.xyz/NewVer2212/icon/icon_download_android_01.png"
                      alt="icon"
                      loading="lazy"
                    />
                    <span class="title-white-PR-16 custom-title-white-PR-16">
                      Google Play
                    </span>
                    <IoChevronForwardOutline />
                  </a>
                </div>
                <div class="download-wrap ivu-col ivu-col-span-xs-8 ivu-col-span-sm-8 ivu-col-span-md-7 ivu-col-span-lg-7 ivu-col-span-xl-7 px-2">
                  <a
                    href="javascript:void();"
                    target=""
                    class="download-btn"
                    style={{ backgroundColor: "rgb(255, 215, 200)" }}
                  >
                    <img
                      src="https://image.treasurenft.xyz/NewVer2212/icon/icon_download_apk_01.png"
                      alt="icon"
                      loading="lazy"
                    />
                    <span class="title-white-PR-16 custom-title-white-PR-16">
                      APK
                    </span>
                    <IoChevronForwardOutline />
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="company-wrap ivu-col ivu-col-span-xs-24">
              <h3 className="title-black-PR-20">Company</h3>
              <p className="title-grey666-PR-16 font-weight-500">
                Join our mailing list to stay in the loop with our newest
                feature releases, NFT listing, and tips.
              </p>
              <div className="email-block">
                <input placeholder="Enter your email address" />
                <div className="email-block-btn">Submit</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="copyright ivu-row">
        <div className="title-grey999-SB-12 ivu-col ivu-col-span-24">
          © 2023 - TreasureMeta Technology, Inc
        </div>
        <div className="ivu-col ivu-col-span-24">
          <span className="title-grey999-SB-12 margin-right-10">
            Privacy Policy
          </span>
          <span className="title-grey999-SB-12">Terms of service</span>
        </div>
      </div>
    </footer>
  );
}
