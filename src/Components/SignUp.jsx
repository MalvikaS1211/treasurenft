import React, { useState } from "react";
import Header from "./header";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ConnectWallet from "./ConnectWallet";
import Footer from "./Footer";
import { FaEye } from "react-icons/fa";
import LogoWhite from "../assets/LogoWhite.png";

const countries = [
  "+1(Canada)",
  "+966(Saudi Arabia)",
  "+962(Jordan)",
  "+34(Spain)",
  "+55(Brazil)",
  "+65(Singapore)",
];
export default function SignUp() {
  const [selected, setSelected] = useState("Select");
  return (
    <>
      <div className="content-wrap">
        <div data-v-b49386ae="" data-v-014c2687="">
          <div className="headerCommon">
            <div
              data-v-b49386ae=""
              class="headerImg headerimg-custom header-banner"
            >
              <Header Logo={LogoWhite}></Header>
              <h2 data-v-b49386ae="" class="headerImg-text title-black-PR-30">
                Sign Up
              </h2>
            </div>
          </div>
          <div className="ivu-row" style={{ padding: "0% 5%" }}>
            <div className="ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-12">
              <div className="register-area  register-area-custom">
                <div data-v-014c2687="" class="wallet-btn-wrap">
                  <ConnectWallet></ConnectWallet>
                </div>
                <div className="register-form-box">
                  <div className="width-100">
                    <form action="" className="ivu-form ivu-form-label-top">
                      <div
                        data-v-014c2687=""
                        class="ivu-form-item ivu-form-item-required"
                      >
                        <label class="ivu-form-item-label custom-label">
                          User name
                        </label>
                        <div class="ivu-form-item-content">
                          <div
                            data-v-014c2687=""
                            class="ivu-input-wrapper ivu-input-wrapper-default ivu-input-type-text"
                          >
                            <i class="ivu-icon ivu-icon-ios-loading ivu-load-loop ivu-input-icon ivu-input-icon-validate"></i>
                            <input
                              autocomplete="off"
                              spellcheck="false"
                              type="text"
                              placeholder="Please enter user name"
                              class="ivu-input ivu-input-default customize-input "
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-014c2687=""
                        class="ivu-form-item ivu-form-item-required"
                      >
                        <label class="ivu-form-item-label custom-label">
                          Password
                        </label>
                        <div class="ivu-form-item-content">
                          <div
                            data-v-014c2687=""
                            class="ivu-input-wrapper ivu-input-wrapper-default ivu-input-type-password"
                          >
                            <span class="ivu-input-suffix">
                              <FaEye />
                            </span>
                            <i class="ivu-icon ivu-icon-ios-loading ivu-load-loop ivu-input-icon ivu-input-icon-validate"></i>
                            <input
                              autocomplete="off"
                              spellcheck="false"
                              type="password"
                              placeholder="Please enter your password"
                              class="ivu-input ivu-input-default customize-input "
                            />
                          </div>{" "}
                        </div>
                      </div>
                      <div
                        data-v-014c2687=""
                        class="ivu-form-item ivu-form-item-required"
                      >
                        <label class="ivu-form-item-label custom-label">
                          Confirm password
                        </label>{" "}
                        <div class="ivu-form-item-content">
                          <div
                            data-v-014c2687=""
                            class="ivu-input-wrapper ivu-input-wrapper-default ivu-input-type-password"
                          >
                            {" "}
                            <span class="ivu-input-suffix">
                              <FaEye />
                            </span>{" "}
                            <i class="ivu-icon ivu-icon-ios-loading ivu-load-loop ivu-input-icon ivu-input-icon-validate"></i>{" "}
                            <input
                              autocomplete="off"
                              spellcheck="false"
                              type="password"
                              placeholder="Please re-enter your password"
                              class="ivu-input ivu-input-default customize-input "
                            />{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div className="ivu-form-item">
                        <label class="ivu-form-item-label custom-label">
                          Mobile no.
                        </label>
                        <div className="ivu-form-item-content">
                          <div
                            className="ivu-row-flex"
                            style={{ marginLeft: "-4px", marginRight: "-4px" }}
                          >
                            <div className="dropdown">
                              <button
                                className="btn btn-outline-secondary dropdown-toggle w-100"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                {selected}
                              </button>
                              <ul
                                className="dropdown-menu w-100"
                                style={{
                                  maxHeight: "200px",
                                  overflowY: "scroll",
                                }}
                              >
                                {countries.map((country, index) => (
                                  <li key={index}>
                                    <button
                                      className="dropdown-item"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        setSelected(country);
                                        console.log(
                                          "Selected Country:",
                                          country
                                        );
                                      }}
                                    >
                                      {country}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div
                              data-v-014c2687=""
                              class="ivu-col ivu-col-span-14"
                              style={{
                                paddingLeft: "4px",
                                paddingRight: "4px",
                              }}
                            >
                              <div data-v-014c2687="" class="ivu-form-item">
                                {" "}
                                <div class="ivu-form-item-content">
                                  <div
                                    data-v-014c2687=""
                                    class="input-phone ivu-input-wrapper ivu-input-wrapper-default ivu-input-type-text"
                                  >
                                    <i class="ivu-icon ivu-icon-ios-loading ivu-load-loop ivu-input-icon ivu-input-icon-validate"></i>
                                    <input
                                      autocomplete="off"
                                      spellcheck="false"
                                      type="text"
                                      placeholder="Enter Mobile No."
                                      class="ivu-input ivu-input-default customize-input "
                                    />{" "}
                                  </div>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ivu-form-item ivu-form-item-required">
                        <label class="ivu-form-item-label custom-label">
                          Email
                        </label>
                        <div class="ivu-form-item-content">
                          <div data-v-014c2687="" class="ivu-row-flex">
                            <div
                              data-v-014c2687=""
                              class="ivu-col ivu-col-span-24"
                            >
                              <div
                                data-v-014c2687=""
                                class="ivu-input-wrapper ivu-input-wrapper-default ivu-input-type-text"
                              >
                                <i class="ivu-icon ivu-icon-ios-loading ivu-load-loop ivu-input-icon ivu-input-icon-validate"></i>
                                <input
                                  autocomplete="off"
                                  spellcheck="false"
                                  type="text"
                                  placeholder="Please enter your email"
                                  class="ivu-input ivu-input-default customize-input "
                                />
                              </div>
                            </div>
                            <div
                              data-v-014c2687=""
                              class="ivu-col ivu-col-span-18"
                            >
                              <div
                                data-v-014c2687=""
                                class="ivu-form-item ivu-form-item-required"
                              >
                                <div class="ivu-form-item-content">
                                  <div
                                    data-v-014c2687=""
                                    class="verify-input margin-top-15 ivu-input-wrapper
                              ivu-input-wrapper-default ivu-input-type-text"
                                  >
                                    {" "}
                                    <i class="ivu-icon ivu-icon-ios-loading ivu-load-loop ivu-input-icon ivu-input-icon-validate"></i>
                                    <input
                                      autocomplete="off"
                                      spellcheck="false"
                                      type="text"
                                      placeholder="Email verification code"
                                      class="ivu-input ivu-input-default customize-input "
                                    />
                                  </div>{" "}
                                </div>
                              </div>
                            </div>
                            <div
                              data-v-014c2687=""
                              class="ivu-col ivu-col-span-6"
                            >
                              <div
                                data-v-014c2687=""
                                class="setMiddle margin-top-15"
                              >
                                <div
                                  data-v-014c2687=""
                                  class="margin-left-10 width-100"
                                >
                                  <button id="Gradient" class="GradientBtn">
                                    <div class="GradientBtn-div">
                                      <p class="GradientBtn-div-p">Get</p>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                        </div>
                      </div>
                      <div className="ivu-form-item ivu-form-item-required">
                        <label class="ivu-form-item-label custom-label">
                          Referral code
                        </label>
                        <div class="ivu-form-item-content">
                          <div
                            data-v-014c2687=""
                            class="ivu-input-wrapper ivu-input-wrapper-default ivu-input-type-text"
                          >
                            <i class="ivu-icon ivu-icon-ios-loading ivu-load-loop ivu-input-icon ivu-input-icon-validate"></i>
                            <input
                              autocomplete="off"
                              spellcheck="false"
                              type="text"
                              placeholder="Please enter your Referral Code"
                              class="ivu-input ivu-input-default customize-input "
                            />{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div data-v-014c2687="" class="ivu-form-item">
                        {" "}
                        <div class="ivu-form-item-content">
                          <div data-v-014c2687="" class="ivu-row-flex mx-n1">
                            <div
                              data-v-014c2687=""
                              class="ivu-col ivu-col-span-24 p-1"
                            >
                              <button
                                data-v-014c2687=""
                                disabled="disabled"
                                type="button"
                                class="ivu-btn ivu-btn-success ivu-btn-long"
                              >
                                {" "}
                                <span>Sign up</span>
                              </button>
                            </div>
                          </div>{" "}
                        </div>
                      </div>
                      <div data-v-014c2687="" class="ivu-form-item">
                        {" "}
                        <div class="ivu-form-item-content">
                          <p
                            data-v-014c2687=""
                            class="title-black-PR-16 text-align-center font-weight-700 d-flex justify-content-center"
                          >
                            Have an account?
                            <a
                              data-v-014c2687=""
                              class="specialText-PR-16 font-weight-700"
                            >
                              {" "}
                              Log in
                            </a>
                          </p>{" "}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-v-014c2687=""
              class="right-side ivu-col ivu-col-span-xs-0 ivu-col-span-sm-0 ivu-col-span-md-12"
            >
              <img
                data-v-014c2687=""
                src="https://image.treasurenft.xyz/PC/img/pc_singImg_01.png"
                alt="img"
                loading="lazy"
                class="bg-img"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
