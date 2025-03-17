import React, { useState } from "react";
import LogoBlue from "../assets/LogoBlue.png";
import { FaBars, FaGlobe, FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import VideoIcon from "../assets/videoicon.webp";
import telegram from "../assets/telegram.webp";
import icon_header_wallet from "../assets/icon_header_wallet.webp";
import services_icon from "../assets/services_icon.webp";
import icon_stationMessage from "../assets/icon_stationMessage.svg";
import security_icon from "../assets/security_icon.webp";
import account from "../assets/account.webp";
import Trade from "../assets/Trade.png";
import NFTCreationIcon from "../assets/NFTCreationIcon.png";
import home from "../assets/home.webp";

export default function PhoneHeader({ Logo }) {
  const [show, setShow] = useState(false);

  const toggleDropdown = () => {
    setShow(!show);
  };

  return (
    <>
      <div className=" headerimg-custom d-flex align-items-center  header-contain">
        <div className="logo d-flex align-items-center logo-container">
          <img
            src={Logo}
            alt="LogoBlue"
            className="logo-img"
            style={{ width: "65%" }}
          />
        </div>

        <div
          className="header-right d-flex align-items-center gap-3"
          style={{ gap: "10px" }}
        >
          <FaRegBell size={35} />
          <Link to="/Airdrop">
            <span
              className=""
              style={{
                fontWeight: "700",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Airdrop
            </span>
          </Link>

          <img src={VideoIcon} alt="App" className="app-icon" />
          <img src={telegram} alt="telegram" width={40} />
          <FaGlobe size={35} />
          <div className="dropdown-wrapper">
            <FaBars size={35} className="menu-icon" onClick={toggleDropdown} />

            <div className={`dropdown-menu ${show ? "show" : ""}`}>
              {/* <Link
                to="/collection"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="dropdown-item d-flex gap-3">
                  <img className="dropdown-icon" src={services_icon} />
                  Explore
                </div>
              </Link> */}
              <Link to="/">
                <div className="dropdown-item d-flex gap-3">
                  <img className="dropdown-icon" src={home} width={40} />
                  Home
                </div>
              </Link>
              <Link to="/buyNft">
                <div className="dropdown-item d-flex gap-3">
                  <img className="dropdown-icon" src={Trade} width={40} />
                  Trade
                </div>
              </Link>
              <Link to="/NFTcreation">
                <div className="dropdown-item d-flex gap-3">
                  <img
                    className="dropdown-icon"
                    src={NFTCreationIcon}
                    width={40}
                  />
                  NFT Creation
                </div>
              </Link>

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
    </>
  );
}
