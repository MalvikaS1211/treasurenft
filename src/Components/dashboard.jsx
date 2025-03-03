import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Penguin_Pals_4089 from "../assets/Penguin_Pals_4089.avif";
import Penguin_Pals_2349 from "../assets/Penguin_Pals_2349.avif";
import Penguin_Pals_8421 from "../assets/Penguin_Pals_8421.avif";
import AOS from "aos";
import "aos/dist/aos.css";
import DiscoverNFTs from "./discoverNfts";

const Dashboard = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div className="explanationArea">
        <div className="row justify-content-center text-center">
          <div className="col-lg-4 col-md-6 col-12 text-area mb-4">
            <div className="title line-height-1 text-algin-center margin-right-10">
              Explore, Discover and Earn Big with one of the top Web3 NFT
              Marketplaces in the world
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 text-area mb-4">
            <div class="d-flex gap-2">
              <img
                src="https://image.treasurenft.xyz/icon/icon_cardTick_01.png"
                alt="icon"
                className="icon"
                loading="lazy"
                width={32}
              />
              <h5 className="title-sub">Multi-Reward</h5>
            </div>

            <div className="col-lg-12" style={{ paddingLeft: "41px" }}>
              <h6 className="description">
                TreasureNFT leverages a proprietary AI-powered algorithmic
                trading model, and provides a dual earnings mechanism with
                trading rewards as well as referral rewards.
              </h6>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 text-area mb-4">
            <div class="d-flex  gap-2">
              <img
                src="https://image.treasurenft.xyz/icon/icon_histogram_01.png"
                alt="icon"
                className="icon"
                loading="lazy"
                width={32}
              />
              <h5 className="title-sub">Earn Future Value</h5>
            </div>

            <div className="col-lg-12" style={{ paddingLeft: "41px" }}>
              <h6 className="description">
                TreasureNFT reduces the entry hurdles of the NFT market and
                expands the boundaries of the NFT collection & trading through
                its innovative AI algorithmic trading process and rewarding
                financial model.
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* creators block */}
      <div className="creators-block">
        <div className="creators-block-outer ivu-row-flex ivu-row-flex-space-between">
          <div className="ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-12 ivu-col-span-lg-17 ivu-col-span-xl-17">
            <div className="random-creator-area ivu-row">
              <div className="big-box ivu-col ivu-col-span-sm-8 ivu-col-span-md-12 ivu-col-span-lg-12 ivu-col-span-xl-12">
                <div className="big-product-img-wrap">
                  <picture>
                    <source type="image/avif" srcset={Penguin_Pals_4089} />
                    <img
                      alt="imgItem"
                      loading="lazy"
                      src="../Penguin_Pals_549781.webp"
                    />
                  </picture>
                </div>
                <div className="ivu-row-flex ivu-row-flex-space-between">
                  <div className="avatar-wrap ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-13 ivu-col-span-xl-13">
                    <picture>
                      <source
                        type="image/avif"
                        srcset="https://treasurenft.xyz/userdata/img/20230615122301_Frame%2017.avif"
                      />
                      <img
                        alt="imgAvatar"
                        loading="lazy"
                        src="https://treasurenft.xyz/userdata/img/20230615122301_Frame 17_compre.png"
                      />
                    </picture>
                    <span className="title-black-PR-18 font-weight-700">
                      Penguin_Pals_549781
                    </span>
                  </div>
                  <div className="price-wrap ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-7 ivu-col-span-xl-7">
                    <p className="title-grey666-PR-12">Highest Bid</p>
                    <div className="price-coin-text">
                      <img
                        src="data:image/png;base64,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"
                        alt="coinIcon"
                        loading="lazy"
                        class="coinIcon"
                      ></img>
                      <span className="title-grey666-PR-16">251.14 USDT</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="small-box-area ivu-col ivu-col-span-xs-24 ivu-col-span-sm-8 ivu-col-span-md-12 ivu-col-span-lg-12 ivu-col-span-xl-12">
                <div class="small-box">
                  <div class="small-product-img-wrap">
                    <picture>
                      <source type="image/avif" srcset={Penguin_Pals_4089} />
                      <img
                        alt="smaImg"
                        loading="lazy"
                        src="../Penguin_Pals_549781.webp"
                      />
                    </picture>
                  </div>
                  <div class="small-product-info-wrap">
                    <p class="title-black-PR-16 font-weight-700 text-algin-center">
                      Penguin_Pals_549781
                    </p>
                    <div class="price-wrap">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="https://treasurenft.xyz/userdata/img/20230615122301_Frame%2017.avif"
                        />
                        <img
                          alt="imgPrice"
                          loading="lazy"
                          class="avatar-img"
                          src="https://treasurenft.xyz/userdata/img/20230615122301_Frame 17_compre.png"
                        />
                      </picture>
                      <div class="price-coin-text">
                        <img
                          src="data:image/png;base64,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"
                          alt="usdt"
                          loading="lazy"
                          class="coinIcon"
                        />
                        <span class="title-green-PR-12">251.14</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="small-box">
                  <div class="small-product-img-wrap">
                    <picture>
                      <source type="image/avif" srcset={Penguin_Pals_2349} />
                      <img
                        alt="smaImg"
                        loading="lazy"
                        src="../Penguin_Pals_4089.webp"
                      />
                    </picture>
                  </div>
                  <div class="small-product-info-wrap">
                    <p class="title-black-PR-16 font-weight-700 text-algin-center">
                      Penguin_Pals_2349
                    </p>
                    <div class="price-wrap">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="https://treasurenft.xyz/userdata/img/20230615122301_Frame%2017.avif"
                        />
                        <img
                          alt="imgPrice"
                          loading="lazy"
                          class="avatar-img"
                          src="https://treasurenft.xyz/userdata/img/20230615122301_Frame 17_compre.png"
                        />
                      </picture>
                      <div class="price-coin-text">
                        <img
                          src="data:image/png;base64,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"
                          alt="usdt"
                          loading="lazy"
                          class="coinIcon"
                        />
                        <span class="title-green-PR-12">251.14</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="small-box">
                  <div class="small-product-img-wrap">
                    <picture>
                      <source type="image/avif" srcset={Penguin_Pals_8421} />
                      <img
                        alt="smaImg"
                        loading="lazy"
                        src="https://prodimage-dan.treasurenft.xyz/Penguin_Pals/Penguin_Pals_4089_compre.png"
                      />
                    </picture>
                  </div>
                  <div class="small-product-info-wrap">
                    <p class="title-black-PR-16 font-weight-700 text-algin-center">
                      Penguin_Pals_549781
                    </p>
                    <div class="price-wrap">
                      <picture>
                        <source
                          type="image/avif"
                          srcset="https://treasurenft.xyz/userdata/img/20230615122301_Frame%2017.avif"
                        />
                        <img
                          alt="imgPrice"
                          loading="lazy"
                          class="avatar-img"
                          src="https://treasurenft.xyz/userdata/img/20230615122301_Frame 17_compre.png"
                        />
                      </picture>
                      <div class="price-coin-text">
                        <img
                          src="data:image/png;base64,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"
                          alt="usdt"
                          loading="lazy"
                          class="coinIcon"
                        />
                        <span class="title-green-PR-12">251.14</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-24 ivu-col-span-lg-7 ivu-col-span-xl-7">
                <div class="creator-title-area">
                  <h4 class="title-black-1927B-18">TOP COLLECTIONS OVER</h4>
                  <div class="creator-subtitle-area">
                    <span class="title-grey999-SB-16 font-weight-500">
                      Last 24 Hours
                    </span>
                    <div class="more-btn-wrap">
                      <div class="more-btn">
                        <p>More</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="creators-wrap">
                  <div
                    data-aos="flip-up"
                    data-aos-duration="600"
                    data-aos-delay="0"
                    class="creators-row aos-init aos-animate"
                  >
                    <div class="creator-card-wrap">
                      <div class="creator-card">
                        <h2 class="title-black-1927B-20">1</h2>
                        <div class="creator-img">
                          <picture>
                            <source
                              type="image/avif"
                              srcset="https://treasurenft.xyz/userdata/img/20230217145424_YoungLady_logo.avif"
                            />
                            <img
                              alt="avatarImg"
                              loading="lazy"
                              class="avatar-img"
                              src="https://treasurenft.xyz/userdata/img/20230217145424_YoungLady_logo_compre.jpg"
                            />
                          </picture>
                        </div>
                        <div class="creator-info">
                          <div class="creator-info-top">
                            <p class="creator-name title-black-PR-14">
                              YoungLady
                            </p>
                          </div>
                          <div class="creator-amount-wrap img-block">
                            <img
                              src="data:image/png;base64,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"
                              alt="usdt"
                              loading="lazy"
                              class="coinIcon"
                            />
                            <span class="title-grey666-PR-14">4110.03M</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="growth-rate">
                      <span class="title-turquoiseGreen-PR-20">+1.91%</span>
                    </div>
                  </div>
                  <div
                    data-aos="flip-up"
                    data-aos-duration="600"
                    data-aos-delay="80"
                    class="creators-row aos-init aos-animate"
                  >
                    <div class="creator-card-wrap">
                      <div class="creator-card">
                        <h2 class="title-black-1927B-20">2</h2>
                        <div class="creator-img">
                          <picture>
                            <source
                              type="image/avif"
                              srcset="https://treasurenft.xyz/userdata/img/20230217145535_GiffgaffApeClub_logo.avif"
                            />
                            <img
                              alt="avatarImg"
                              loading="lazy"
                              class="avatar-img"
                              src="https://treasurenft.xyz/userdata/img/20230217145535_GiffgaffApeClub_logo_compre.png"
                            />
                          </picture>
                        </div>
                        <div class="creator-info">
                          <div class="creator-info-top">
                            <p class="creator-name title-black-PR-14">
                              Giffgaff Ape Club
                            </p>
                          </div>
                          <div class="creator-amount-wrap img-block">
                            <img
                              src="data:image/png;base64,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"
                              alt="usdt"
                              loading="lazy"
                              class="coinIcon"
                            />
                            <span class="title-grey666-PR-14">4184.55M</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="growth-rate">
                      <span class="title-turquoiseGreen-PR-20">+1.86%</span>
                    </div>
                  </div>
                  <div
                    data-aos="flip-up"
                    data-aos-duration="600"
                    data-aos-delay="160"
                    class="creators-row aos-init aos-animate"
                  >
                    <div class="creator-card-wrap">
                      <div class="creator-card">
                        <h2 class="title-black-1927B-20">3</h2>
                        <div class="creator-img">
                          <picture>
                            <source
                              type="image/avif"
                              srcset="https://treasurenft.xyz/userdata/img/20230615122301_Frame%2017.avif"
                            />
                            <img
                              alt="avatarImg"
                              loading="lazy"
                              class="avatar-img"
                              src="https://treasurenft.xyz/userdata/img/20230615122301_Frame 17_compre.png"
                            />
                          </picture>
                        </div>
                        <div class="creator-info">
                          <div class="creator-info-top">
                            <p class="creator-name title-black-PR-14">
                              Penguin Pals
                            </p>
                          </div>
                          <div class="creator-amount-wrap img-block">
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAANxElEQVR4nO2ceZDcxXXHP69/v5md2Znd1R5a3egCB6EDFMu4AB8QKocTO6GQYw7HIbgqFbCNU/kjdowrYFM2LnCVU9gm4Q/bCIixcQFxUYWt4COE2ECMEEggiUMICYlFrLTSas85fr9+qe6ZWa2EVruzM7s6yFfVGmmmf6+7v939+vXr1z85e90/MxZEIFbF/QltgrhhCBvEmEIDWAGBIDBYq8RYRAVT+hrrf1cEwUrpN9TMQeKVKOcicg6wEJgFNANpICxXJQKGgT6gG9gJsk0l3iRqXgDpwlgkEtRYXKHW4ssQEWIiAjEIpiRNLaquLeC+DX2dLdbVz7jfZEwOwjF/qR9Wo3wEuBTRNSDNjF2fY+GccisR9Q3uA30WlV8BPwOem8rKTxVBbQhXAVcreqGMMKL1kO1G2yUol6jha2CewnI/6P3AgXoUMBqmzvIWqHKbVbaBfhe4sM7yj4ULgO8Y5CURbgddUE/htRNUGhwpo3KT4IjhC0BnHepWLWYC/wi8JMjNrk71EFozQdbqWlV9EfgqkKlHpWpEo8F8BZUtoGur1HfvQC0EuVVnnVp9EFg6NW2tCUtUeVCVdeW6TgrVEyTW/XW+iGwCrjlZ2BgTqq6Om1ydJ/N4lQQpEodXYOVpVT2rhmpPKxQ5S0T+V4Qrq11IJ0yQmhiJkjdIMfljr5prnNvTDWfsGpEfieEGrYKkKgjSLynybb9sSV3smRMDw7cV/dJEyx6XICmNlM+D3loy9E5hcihXX/RWdW2awCw4LkFuKAp8Qgx3VDMsT3b4tgh3GOEKtw+rdPuxUmgDe8zm+JETyyqr+sAppm4mDmt+jOi2iHhzZaocjTA45shQt8NtsOjPx3juNIHbAPPzQMwSG2n+mASJLR7xhfjHDJbgByrMrYYf52pw7gQ9QXrKu1Z8506s/HKuuYGVH4SGTxoj5fXuMELnxzmyEL8g/okVuVqqaGjCBOzqP8BAYXhkgzb9UNrTWeZkZlCIowmXrsrVYcLcFyZkvT1K44RFkzyKIAlCK3dXQ47DwfwQa8/8fRZk24j12HptquGcZC/27OHpvTtoSaYn3AIxEEd6dz4XzLfWxDLKjAkDe1RvCzep6Oxq2uLG3L6hfj676mLeN2vxCSGngru3/pafbt/IjPbGCU81StNttjHxTcZEN49mxHijr5xEtM3AlydTsdAY3h7qm8yjdUVvfghjgkmJFKM3mkDbcCtXOZlAhUoC+Sf39Qlv5YlDqMoX3cpdSSYIQ4JEAhMEWVGuf7cycxjyGVHJihVcMgUiClqkqPGnVMieLNU8YVCyseqnIrG4ZNQqLqFcV2udTpvdiHCdGIOYAOOHkso5AqtqkRnZmFmNzfWr5CQxo6ERa+PJC/DnerLKRCwzRUsYNxQIovByiQO0BjdGczLNL97YxkAhx2CxcPw6CAwWcqyYuYDlbXOPm/d3b7/O673dZJIpxlu1M4kkG7t30ZzK1DaarcFK4XIbFL8uy773VWxYfEJFP1iLTLfM7x3qJxcVxrU/jAiDPV184ZK/4rYPrD1u3o8/ehcPbXyMTPsc7Dhy3VbHdVR7KkOxhlHkjGRL8EQcZT4c2oahdo2T7/O+5uMcwY6HyFraU844axx3o+EIermYp6Vh/JOZ9nQGmtuZn20dlyAtj85ayPFy3PJuOd+awfYQKa5BEqlayKnAbRYnsvt3Pe3TBPZsLo8ZyT9e3jpB3aY3TiVSrAm1mDnX0TUVGE2Y63zrirXqP7UwzHBUHLfUoWIBW8iRjyNPlBFTIoyK3KnxHbgO0aKsCjHxOfXgXspC3TRwjRkolpS1Veu/bwyTZBMNZBMpv9I0zQpZ1Nw+rtyzWjtZPnMB2XSG3tywlztQzJfJVUITkHFywwaSYViKLKmT+1NVzwlBatpdBsZQiGP2DffRlx9mZrqZM5rb+MDcM5mXbSUVhHQ2NvvPfBz73k+HCXLDg6zqmDeu/ItmL2VWooGGVIahqOAVTTIIGIwKdPtFocjOvv282tvNG/0H6M0P0pbO0pHK+t19jZ6FJWH5TLtqOP9PXyHH7v79noi/WLqaNZ2L/EhRtRStZTgq8NbgIbb0dNEzPMC+3ACH3NQqFtjWvZObLlrLmnF2//e89BT3vvgEyzsX0phI0pJsZGY66/0+mTDJgqZWPxI/ungVQ1HRl+ncHY+9sYX+fI4lM2bSYEKiyRHVEZbDSapCMgjZcWgf6SDkaxdczppZi9jdt5/dA738575d7OjtZvfAQXJx5Il0KRUmfEWdOeCmBWGSVJAYt9hUmIQgQT4u+qnVNdDLc3HkR06kMbG1footbGpjSUsn7521kMuWrOb6lRfzyI7n+bcXHvfTem62OidaGS1htVEQbop0DfayrG0O6/7wWt/g63/97zzVtZ2CtcxsbKIpmWJBU9vIM0cr0sqqNBFIOX/ozX5DQxB6Qio6r4L+Yp7/6XqVn7620ZO6dul5/MuHr+KPFy7nM//1Qw7kBmlyi3V1Kj1lqg2iysVF33uP/vnnWdE+j7/75b08/ux6FszoZHnHPNpSGT/3naKspKlYZbSsjCvJjVI39VZ2zPc674e/vJfbN6znI4tWcucln6Srb/9kigmrjjArxf4J63e9yDXLLuShj36Wv01l/P9zxTzJRIrWVKPXRQnf62Xn7SiivGvcRrQ2jB8t40aL21uNHm/+3+Wl3pFT8Ktm3rt942KBTCrD9X92Hd/84F/6/E90vUpDoqHapnqE5YDJiT9gAjrSWa779X1s2f8mt1x4Gf/xsc/RM9zPj155ht90beeF/Xt4a+iQr3TRzXsRPzWSZR3kPpNhA7/YvdUrXreqNQQJ/5sj0emVgo0YLOZ5tnsnyTBBT26Qgo39ptitmoW4ZEO55/yUzrbyscWr+IMFy7jq9873Hbmrv4cbf/swD27fyOLmjsmctkTynnu+vAcYf709giTjDbidh7pZ1NLJZUtX89fLLmD1zDNG8rje3Lx/D68efNtX9PW+HrqH++j3m9m83w7s6T/IwHD/KEeJvMNp0pZtZVZji1/a3WhqTqT8qcXilg7OaGpjWesclrfP8xvVCh5/82Xu2fYkj+7YzL7hft7TOtuP5EnYR3scQVsOR5JOHG6AB0Y4kBti72AvgQk4q6WTFR3zuGjOmf7z3I75zEw3jSnTjYrd/Qe8XnN7OdeAivJ19lU6SLC0ZaYfIWO2YOAgz+/b7Uftb97aztaeLnb29XgL3p2wZJMpP+qqh++srY6g/wY+NAkJIygpZettHOc0zxULBEFIc7JkNc9KNzO/qZXOdJPXO23pDBkJ+KMlq/zQPx6e2/cGT+55mSFrOZAf5KDrkKFDnhh3kuLKdPaYakyj03/OSveEiq9TjXjC6aDXayWoYq06V4Mz5FzvuaXd6Qy37Xil92029ezxytQFcLsTzHj/m/zDpdfwrQ994riyv/L0IzyyYT2mY66XGfilPuHtKmdHtaeyzM60lPq7vBCUplJd1s4doYhuOV6kebXwcfnlulWMxOxRdovTBy4ctjM9vgt8bqYV0zGPs1tnjeiQo+2qqdqwuikWYmSzxlN/WKzlhhz+YmKN8rlG2TvTBVdUmDCbTZRLbhAkd0pHjU0BRMgVi2wwiulBeUbqOM1OdXhfEPo7Gxd7jKQGULGP1VMPneooWf48FjgHXVBscBGaD///FBuFkj32sPdeqnFbAbtVYfNJU8ETiZK9sFnQbe7fpnJKL3DXu5eVI6HIXdY57t0FvFBcHJ67Och9CAMnU0VPCJQBE+h9JnTkgPFGlvrz+QEs//oupOQIiHKnsTpgrFJKsVBJwG3Vuj9OL0ikwu2RBlSScRdbRxJ6QJVb35XUlLTz163YA+5eSiUZd2v4iCT2FlT2ngR1nl4Ie6UY3WJyESYfj6Qw1TDa6you4jOO83ptFHGaB5EfhtGAvMldm0/mrDnqdobxYdIjqXS5XIyuN4b7pzIiSuPI+4rGg/MU2uqPayZeD/wlwfuTlvWNJElLgjSHU5jPH4OFkufz0wYuFphbb56cvJZ0Exu6d/HQ9o1jevycV/G1Q/uYkW6asr4S6LISfTpQ40fS0QXJou+PHfWbCFhlhE1TUTl3+OiOjg/kBkphK8fMJczONPuRNolDv/HhX1Rgz1UpbtYxahCGieMVrJuR4Aps8EC9IxALfoqlfRqz9DJxU0KO9+DZK2zMZnTs069QjhP64kLybRz8RFRmi7F3TPeOf6pK8y5hy98j/KSkTsyYLlrjA6fGSkgl6sxdxbyxJOg0WNpUbhTXphFOxp4dE7/1bM03ROwNXtgp7DsSf72Ub0w0/4QJcm9e0bD4XQ2LV77jUtWpAH/SIleq5TtShe+runvz7n6niR5QE78f5JVTiJ5XUX2/Kg9U+2D1b14oXYJ9BsN5IOuqfn4aUVYE94hwrgu5nkzJtby7YxjkWhuLC3R+rbxunlBCRkPhNYv9OPA35bdZTQp1ePsLD6tlBRLfjNjBk0A3DaJys6IrFPtQrcJqJkhKdxtyKtEtYM8Gub383rHphivzm8AyhVtcrFc9RnQd30DlbaY9IvJFI3I28DngyfrJHxNPKdwgKsvKL3faXU/hU/MOM+GgWO60oneCnGdE/lRVLwXe6/apNUp39z6fRfVXiPwM4bmpnNbT8Ra85xGeF+VWVeYgrAS/qkz8NYHCLpStIJsQfQG0a1p0HfB/297i0ZAnUcgAAAAASUVORK5CYII="
                              alt="usdt"
                              loading="lazy"
                              class="coinIcon"
                            />
                            <span class="title-grey666-PR-14">4222.68M</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="growth-rate">
                      <span class="title-turquoiseGreen-PR-20">+1.84%</span>
                    </div>
                  </div>
                  <div
                    data-aos="flip-up"
                    data-aos-duration="600"
                    data-aos-delay="240"
                    class="creators-row aos-init aos-animate"
                  >
                    <div class="creator-card-wrap">
                      <div class="creator-card">
                        <h2 class="title-black-1927B-20">4</h2>
                        <div class="creator-img">
                          <picture>
                            <source
                              type="image/avif"
                              srcset="https://treasurenft.xyz/userdata/img/20230217145616_NoxiousAudience_logo.avif"
                            />
                            <img
                              alt="avatarImg"
                              loading="lazy"
                              class="avatar-img"
                              src="https://treasurenft.xyz/userdata/img/20230217145616_NoxiousAudience_logo_compre.jpg"
                            />
                          </picture>
                        </div>
                        <div class="creator-info">
                          <div class="creator-info-top">
                            <p class="creator-name title-black-PR-14">
                              Noxious Audience
                            </p>
                          </div>
                          <div class="creator-amount-wrap img-block">
                            <img
                              src="data:image/png;base64,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"
                              alt="usdt"
                              loading="lazy"
                              class="coinIcon"
                            />
                            <span class="title-grey666-PR-14">4160.45M</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="growth-rate">
                      <span class="title-turquoiseGreen-PR-20">+1.85%</span>
                    </div>
                  </div>
                  <div
                    data-aos="flip-up"
                    data-aos-duration="600"
                    data-aos-delay="320"
                    class="creators-row aos-init aos-animate"
                  >
                    <div class="creator-card-wrap">
                      <div class="creator-card">
                        <h2 class="title-black-1927B-20">5</h2>
                        <div class="creator-img">
                          <picture>
                            <source
                              type="image/avif"
                              srcset="https://treasurenft.xyz/userdata/img/20230217145453_TheCryptoLuckyGirl_logo.avif"
                            />
                            <img
                              alt="avatarImg"
                              loading="lazy"
                              class="avatar-img"
                              src="https://treasurenft.xyz/userdata/img/20230217145453_TheCryptoLuckyGirl_logo_compre.jpg"
                            />
                          </picture>
                        </div>
                        <div class="creator-info">
                          <div class="creator-info-top">
                            <p class="creator-name title-black-PR-14">
                              The Crypto Lucky Girl
                            </p>
                          </div>
                          <div class="creator-amount-wrap img-block">
                            <img
                              src="data:image/png;base64,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"
                              alt="usdt"
                              loading="lazy"
                              class="coinIcon"
                            />
                            <span class="title-grey666-PR-14">4083.13M</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="growth-rate">
                      <span class="title-turquoiseGreen-PR-20">+1.88%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end of  creators block */}
      {/* featured nfts */}
      <div data-v-7183eb8c="" class="fetured-nfts">
        <h2 class="fetured-title title-black-1927B-30">
          FEATURED NFT COLLECTIBLES
        </h2>
        <div
          class="collection-outer ivu-row-flex"
          style={{ marginLeft: "-11px", marginright: "-11px" }}
        >
          <div
            class="img-wrap ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-24 ivu-col-span-lg-8 ivu-col-span-xl-8"
            style={{ paddingLeft: "11px", paddingRight: "11px" }}
          >
            <div class="top-img">
              <picture>
                <source
                  type="image/avif"
                  srcset="https://prodimage-dan.treasurenft.xyz/Stake/Stake_07123.avif"
                />
                <img
                  alt="nftImg"
                  loading="lazy"
                  class="img-0"
                  src="https://prodimage-dan.treasurenft.xyz/Stake/Stake_07123_compre.png"
                />
              </picture>
              <div class="small-img-box">
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://prodimage-dan.treasurenft.xyz/Stake/Stake_00753.avif"
                    />
                    <img
                      alt="smallImg"
                      loading="lazy"
                      class="img-1"
                      src="https://prodimage-dan.treasurenft.xyz/Stake/Stake_00753_compre.png"
                    />
                  </picture>
                </div>
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://prodimage-dan.treasurenft.xyz/Stake/Stake_01741.avif"
                    />
                    <img
                      alt="smallImg"
                      loading="lazy"
                      class="img-2"
                      src="https://prodimage-dan.treasurenft.xyz/Stake/Stake_01741_compre.png"
                    />
                  </picture>
                </div>
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://prodimage-dan.treasurenft.xyz/Stake/Stake_02784.avif"
                    />
                    <img
                      alt="smallImg"
                      loading="lazy"
                      class="img-3"
                      src="https://prodimage-dan.treasurenft.xyz/Stake/Stake_02784_compre.png"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div class="bottom-info">
              <span class="title-black-PR-20 font-weight-500">Stake</span>
              <div class="creator-box-outer">
                <div class="creator-wrap">
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://treasurenft.xyz/userdata/img/20240425212105_20240402171501_%E4%B8%8B%E8%BC%89%20(2).avif"
                    />
                    <img
                      alt="creatorImg"
                      loading="lazy"
                      src="https://treasurenft.xyz/userdata/img/20240425212105_20240402171501_下載 (2)_compre.png"
                    />
                  </picture>
                  <span class="title-black-PR-12 font-weight-300">
                    by Stake
                  </span>
                </div>
                <div class="total">
                  <p class="title-white-PR-10 font-weight-100">Total 4 Items</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="img-wrap ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-24 ivu-col-span-lg-8 ivu-col-span-xl-8"
            style={{ paddingLeft: "11px", paddingRight: "11px" }}
          >
            <div class="top-img">
              <picture>
                <source
                  type="image/avif"
                  srcset="https://prodimage-dan.treasurenft.xyz/TheCryptoLuckyGirl/TheCryptoLuckyGirl_1218.avif"
                />
                <img
                  alt="nftImg"
                  loading="lazy"
                  class="img-0"
                  src="https://prodimage-dan.treasurenft.xyz/TheCryptoLuckyGirl/TheCryptoLuckyGirl_1218_compre.png"
                />
              </picture>
              <div class="small-img-box">
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://prodimage-dan.treasurenft.xyz/TheCryptoLuckyGirl/TheCryptoLuckyGirl_3949.avif"
                    />
                    <img
                      alt="smallImg"
                      loading="lazy"
                      class="img-1"
                      src="https://prodimage-dan.treasurenft.xyz/TheCryptoLuckyGirl/TheCryptoLuckyGirl_3949_compre.png"
                    />
                  </picture>
                </div>
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://prodimage-dan.treasurenft.xyz/TheCryptoLuckyGirl/TheCryptoLuckyGirl_1121.avif"
                    />
                    <img
                      alt="smallImg"
                      loading="lazy"
                      class="img-2"
                      src="https://prodimage-dan.treasurenft.xyz/TheCryptoLuckyGirl/TheCryptoLuckyGirl_1121_compre.png"
                    />
                  </picture>
                </div>
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://prodimage-dan.treasurenft.xyz/TheCryptoLuckyGirl/TheCryptoLuckyGirl_1187.avif"
                    />
                    <img
                      alt="smallImg"
                      loading="lazy"
                      class="img-3"
                      src="https://prodimage-dan.treasurenft.xyz/TheCryptoLuckyGirl/TheCryptoLuckyGirl_1187_compre.png"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div class="bottom-info">
              <span class="title-black-PR-20 font-weight-500">
                The Crypto Lucky Girl
              </span>
              <div class="creator-box-outer">
                <div class="creator-wrap">
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://treasurenft.xyz/userdata/img/20230217145453_TheCryptoLuckyGirl_logo.avif"
                    />
                    <img
                      alt="creatorImg"
                      loading="lazy"
                      src="https://treasurenft.xyz/userdata/img/20230217145453_TheCryptoLuckyGirl_logo_compre.jpg"
                    />
                  </picture>
                  <span class="title-black-PR-12 font-weight-300">
                    by CHRISTABEL
                  </span>
                </div>
                <div class="total">
                  <p class="title-white-PR-10 font-weight-100">Total 4 Items</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="img-wrap ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-24 ivu-col-span-lg-8 ivu-col-span-xl-8"
            style={{ paddingLeft: "11px", paddingRight: "11px" }}
          >
            <div class="top-img">
              <picture>
                <source
                  type="image/avif"
                  srcset="https://prodimage-dan.treasurenft.xyz/WildGirl/WildGirl_0160.avif"
                />
                <img
                  alt="nftImg"
                  loading="lazy"
                  class="img-0"
                  src="https://prodimage-dan.treasurenft.xyz/WildGirl/WildGirl_0160_compre.png"
                />
              </picture>
              <div class="small-img-box">
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://prodimage-dan.treasurenft.xyz/WildGirl/WildGirl_0102.avif"
                    />
                    <img
                      alt="smallImg"
                      loading="lazy"
                      class="img-1"
                      src="https://prodimage-dan.treasurenft.xyz/WildGirl/WildGirl_0102_compre.png"
                    />
                  </picture>
                </div>
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://prodimage-dan.treasurenft.xyz/WildGirl/WildGirl_0144.avif"
                    />
                    <img
                      alt="smallImg"
                      loading="lazy"
                      class="img-2"
                      src="https://prodimage-dan.treasurenft.xyz/WildGirl/WildGirl_0144_compre.png"
                    />
                  </picture>
                </div>
                <div>
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://prodimage-dan.treasurenft.xyz/WildGirl/WildGirl_0032.avif"
                    />
                    <img
                      alt="smallImg"
                      loading="lazy"
                      class="img-3"
                      src="https://prodimage-dan.treasurenft.xyz/WildGirl/WildGirl_0032_compre.png"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div class="bottom-info">
              <span class="title-black-PR-20 font-weight-500">Wild Girl</span>
              <div class="creator-box-outer">
                <div class="creator-wrap">
                  <picture>
                    <source
                      type="image/avif"
                      srcset="https://treasurenft.xyz/userdata/img/20230217145514_WildGirl_logo.avif"
                    />
                    <img
                      alt="creatorImg"
                      loading="lazy"
                      src="https://treasurenft.xyz/userdata/img/20230217145514_WildGirl_logo_compre.jpg"
                    />
                  </picture>
                  <span class="title-black-PR-12 font-weight-300">
                    by BERNADETTE
                  </span>
                </div>
                <div class="total">
                  <p class="title-white-PR-10 font-weight-100">Total 4 Items</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end of featured nfts */}
      {/* <div data-v-7183eb8c="" class="fetured-nfts">
        <h2 class="fetured-title title-black-1927B-30">
          FEATURED NFT COLLECTIBLES
        </h2>
        <div
          class="collection-outer ivu-row-flex"
          style={{ marginLeft: "-11px", marginright: "-11px" }}
        ></div>
      </div> */}
      {/* RESERVE AND SELL YOUR NFT EASILY */}
      <div data-v-7183eb8c="" class="create-sell-area">
        <div
          class="create-sell-row ivu-row-flex ivu-row-flex-space-between"
          style={{ marginLeft: "-8px", marginright: "-8px" }}
        >
          <div
            class="img-wrap ivu-col ivu-col-span-sm-24 ivu-col-span-md-24 ivu-col-span-lg-12 ivu-col-span-xl-12"
            style={{ paddingLeft: "8px", paddingRight: "8px" }}
          >
            <picture>
              <source
                type="image/avif"
                srcset="https://image.treasurenft.xyz/NewVer2212/img/pc_img_login_photo_01.avif"
              />
              <img
                alt="img"
                loading="lazy"
                src="https://image.treasurenft.xyz/NewVer2212/img/pc_img_login_photo_01_compre.png"
              />
            </picture>
          </div>
          <div
            class="text-wrap ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-24 ivu-col-span-lg-10 ivu-col-span-xl-10"
            style={{ paddingLeft: "8px", paddingRight: "8px" }}
          >
            <h3 class="text-transform-uppercase title-black-1927B-30 line-height-1">
              RESERVE AND SELL YOUR NFT EASILY
            </h3>
            <p class="title-grey999-PR-18 font-weight-300">
              Earning income in TreasureNFT is simple: just RESERVE and then
              TRADE to EARN
            </p>
            <div class="sign-up-wrap">
              <p class="title-white-PR-16 text-transform-uppercase">
                Sign Up Now
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*END OF RESERVE AND SELL YOUR NFT EASILY */}

      {/* discover more nfts */}
      <DiscoverNFTs></DiscoverNFTs>
      {/* end of discover more nfts */}
      {/* video */}
      <div data-v-7183eb8c="" className="video-block px-5">
        <div data-v-7183eb8c="" className="index-video-wrapper">
          <div
            data-v-7183eb8c=""
            data-aos="zoom-out"
            data-aos-duration="1000"
            className="index-video-mv aos-init aos-animate"
          >
            <video
              data-v-7183eb8c=""
              src="https://treasurenft.xyz/userdata/film/073f4bc8-1258-4696-9f32-5179ca15ed87.mov"
              poster="https://treasurenft.xyz/userdata/img/20250224123728_IMG_6954.avif"
              loop="loop"
              controls="controls"
              webkit-playsinline="true"
              playsinline="true"
              preload="none"
              class="index-video"
              style={{ width: "90%" }}
            ></video>
          </div>
        </div>
      </div>
      {/* video */}
    </>
  );
};

export default Dashboard;
