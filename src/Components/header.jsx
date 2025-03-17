import React from "react";
import { FaBell, FaGlobe, FaBars, FaTelegramPlane } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import "../css/header.css"; // Optional for custom styles
import Logo from "../assets/Logo.webp";
import Logo2 from "../assets/Logo2.webp";
import magicverseLogo from "../assets/magicverse.jpg";
import LogoMagicVerse from "../assets/LogoMagicVerse.png";
import LogoBlue from "../assets/LogoBlue.png";
import LogoModal from "../assets/LogoModal.png";

import icon_header_wallet from "../assets/icon_header_wallet.webp";
import services_icon from "../assets/services_icon.webp";
import VideoIcon from "../assets/videoicon.webp";
import telegram from "../assets/telegram.webp";
import wallet from "../assets/wallet.webp";
import icon_stationMessage from "../assets/icon_stationMessage.svg";
import security_icon from "../assets/security_icon.webp";
import account from "../assets/account.webp";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaRegBell } from "react-icons/fa6";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaWallet, FaEye, FaEyeSlash } from "react-icons/fa";

import { FaHeadphones, FaEnvelope, FaShieldAlt } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import ConnectWallet from "./ConnectWallet";
import { Link } from "react-router-dom";
import Account from "./Account";
export default function Header({ style, Logo }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [show, setShow] = useState(false);

  const toggleDropdown = () => {
    setShow(!show);
  };

  return (
    <>
      <div
        className="headerimg-custom d-flex align-items-center header-contain justify-content-around"
        style={{ ...style }}
      >
        <div className="logo d-flex align-items-center logo-container">
          <img
            src={Logo}
            alt="Treasure NFT"
            className="logo-img"
            style={{ width: "65%" }}
          />
        </div>

        <div className="menu d-flex gap-4">
          {/* <Link to="/explore">
            <span
              style={{ cursor: "pointer" }}
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Explore
            </span>
          </Link> */}

          <Link
            to="/buyNft"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span style={{ cursor: "pointer" }}>Trade</span>
          </Link>
          <Link
            to="/NFTcreation"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span style={{ cursor: "pointer" }} className="fw-bold">
              NFT Creation
            </span>
          </Link>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Select" className="search-input" />
          <AiOutlineSearch className="search-icon" />
        </div>

        <div
          className="header-right d-flex align-items-center gap-3"
          style={{ gap: "10px" }}
        >
          <FaRegBell size={35} />
          <Link to="/Airdrop">
            <span className="menu"> Airdrop</span>
          </Link>

          <img src={VideoIcon} alt="App" className="app-icon" />
          <img src={telegram} alt="telegram" width={40} />
          <FaGlobe size={35} />
          <div className="dropdown-wrapper">
            <FaBars size={35} className="menu-icon" onClick={toggleDropdown} />

            <div className={`dropdown-menu ${show ? "show" : ""}`}>
              <div className="dropdown-item d-flex gap-3">
                <img className="dropdown-icon" src={services_icon} />
                Service
              </div>
              <Link to="/account">
                <div className="dropdown-item d-flex gap-3">
                  <img src={account} className="dropdown-icon" width={40} />
                  Account
                </div>
              </Link>

              <div className="dropdown-item d-flex gap-3">
                <img src={icon_header_wallet} className="dropdown-icon" />
                Wallet
              </div>
              <div className="dropdown-item d-flex gap-3">
                <img src={icon_stationMessage} className="dropdown-icon" />
                Message
              </div>
              <div className="dropdown-item d-flex gap-3">
                <img src={security_icon} className="dropdown-icon" width={40} />
                Security TAP
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="ivu-layout-header">
        <div className="header header-container  d-flex align-items-center justify-content-between px-4 py-2">
          <div className="logo d-flex align-items-center">
            <img
              src={Logo}
              alt="Treasure NFT"
              className="logo-img"
              style={{ width: "65%" }}
            />
          </div>

          <div className="menu d-flex gap-4">
            <span
              style={{ cursor: "pointer" }}
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Explore
            </span>
            <span style={{ cursor: "pointer" }}>Earn</span>
            <span style={{ cursor: "pointer" }} className="fw-bold">
              Reserve
            </span>
          </div>

          <div className="search-box">
            <input type="text" placeholder="Select" className="search-input" />
            <AiOutlineSearch className="search-icon" />
          </div>

          <div
            className="header-right d-flex align-items-center gap-3"
            style={{ gap: "10px" }}
          >
            <FaRegBell size={35} />
            <span className="menu"> Airdrop</span>
            <img src={VideoIcon} alt="App" className="app-icon" />
            <img src={telegram} alt="telegram" width={40} />
            <FaGlobe size={35} />
            <div className="dropdown-wrapper">
              <FaBars
                size={35}
                className="menu-icon"
                onClick={toggleDropdown}
              />

              <div className={`dropdown-menu ${show ? "show" : ""}`}>
                <div className="dropdown-item d-flex gap-3">
                  <img className="dropdown-icon" src={services_icon} />
                  Service
                </div>
                <div className="dropdown-item d-flex gap-3">
                  <img src={account} className="dropdown-icon" width={40} />
                  Account
                </div>
                <div className="dropdown-item d-flex gap-3">
                  <img src={icon_header_wallet} className="dropdown-icon" />
                  Wallet
                </div>
                <div className="dropdown-item d-flex gap-3">
                  <img src={icon_stationMessage} className="dropdown-icon" />
                  Message
                </div>
                <div className="dropdown-item d-flex gap-3">
                  <img
                    src={security_icon}
                    className="dropdown-icon"
                    width={40}
                  />
                  Security TAP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* modal */}
      <div
        class="modal fade"
        id="loginModal"
        tabindex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered custom-modal-width">
          <div class="modal-content modal-content-custom">
            <div
              class="modal-header p-0 d-flex justify-content-center align-items-center"
              style={{
                borderTopLeftRadius: "30px",
                borderTopRightRadius: "30px",
                backgroundImage:
                  " linear-gradient(to right, #2152af 0%, #6ba7e7 51%, #2152af 100%)",
              }}
            >
              <div>
                <img src={Logo2} alt="Treasure NFT" class="mb-3" />
              </div>
            </div>
            <div class="modal-body">
              <h4 class="login-heading mt-3">Log in</h4>

              {/* <button class="wallet-btn">
                <img src={wallet} alt="" />
                Wallet Connect
              </button> */}
              <ConnectWallet></ConnectWallet>

              <form>
                <div class="mb-3 text-start">
                  <label class="form-label">
                    User name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control input-field"
                    placeholder="User name"
                  />
                </div>

                <div class="mb-3 text-start position-relative">
                  <label class="form-label">
                    Password <span style={{ color: "red" }}>*</span>
                  </label>
                  <div>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="passwordInput"
                      className="form-control"
                      placeholder="Password"
                    />
                    <span
                      onClick={togglePassword}
                      className="password-eye"
                      style={{ cursor: "pointer" }}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>

                <div class="text-end mb-3">
                  <a href="#" class="forgot-password">
                    Forgot Password?
                  </a>
                </div>

                <div class="d-flex justify-content-between gap-4">
                  <button
                    type="button"
                    class="  cancel-btn"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="btn gradient-btn-modal w-50 submit-btn"
                  >
                    Confirm
                  </button>
                </div>
              </form>

              <div class="mt-3 fw-bold">
                Don't have an account?{" "}
                <a href="#" class="sign-up">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
    </>
  );
}
