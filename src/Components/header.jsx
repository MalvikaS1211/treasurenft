import React from "react";
import { FaBell, FaGlobe, FaBars, FaTelegramPlane } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import "../css/header.css"; // Optional for custom styles
import Logo from "../assets/Logo.webp";
import VideoIcon from "../assets/videoicon.webp";
import telegram from "../assets/telegram.webp";

import { FaRegBell } from "react-icons/fa6";
export default function Header() {
  return (
    <div className="header-container  d-flex align-items-center justify-content-between px-4 py-2">
      {/* Logo */}
      <div className="logo d-flex align-items-center">
        <img src={Logo} alt="Treasure NFT" className="logo-img" />
      </div>

      {/* Menu */}
      <div className="menu d-flex gap-4">
        <span>Explore</span>
        <span>Earn</span>
        <span className="fw-bold">Reserve</span>
      </div>

      {/* Search Box */}
      <div className="search-box">
        <input type="text" placeholder="Select" className="search-input" />
        <AiOutlineSearch className="search-icon" />
      </div>

      {/* Right Side Icons */}
      <div
        className="header-right d-flex align-items-center gap-3"
        style={{ gap: "10px" }}
      >
        <FaRegBell size={35} />
        <span className="menu"> Airdrop</span>
        <img src={VideoIcon} alt="App" className="app-icon" />
        <img src={telegram} alt="telegram" width={50} />
        <FaGlobe size={35} />
        <FaBars size={35} />
      </div>
    </div>
  );
}
