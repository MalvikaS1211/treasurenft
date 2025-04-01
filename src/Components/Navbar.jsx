import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { FaHome, FaRedditAlien, FaCrown, FaLevelUpAlt } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsMedium } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import ConnectWallet from "./ConnectWallet";

export default function ({ title }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    window.innerWidth > 500 ? true : false
  );
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Header Section */}
      <header className="header-dashboard">
        <h1>{title}</h1>
        <div className="header-right">
          <ConnectWallet />
          <div className="d-md-block d-lg-none">
            <GiHamburgerMenu
              onClick={toggleSidebar}
              size={25}
              color="black"
              className=""
            />
          </div>
        </div>
      </header>

      {/* Sidebar Section */}
      <aside className={`dashboard-sidebar  ${isSidebarOpen ? "active" : ""}`}>
        <div className="logo">
          <img src={Logo} alt="logo" style={{ width: "160px" }} />
        </div>
        <ul className="menu menu-list">
          <Link to="/">
            <li className={location.pathname === "/" ? "active" : "inactive"}>
              <FaHome /> Home
            </li>
          </Link>
          <Link to="/dashboard">
            <li
              className={
                location.pathname === "/dashboard" ? "active" : "inactive"
              }
            >
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </li>
          </Link>
          <Link to="/refferal">
            <li
              className={
                location.pathname === "/refferal" ? "active" : "inactive"
              }
            >
              <i className="fas fa-users"></i> Referral
            </li>
          </Link>
          <Link to="/community">
            <li
              className={
                location.pathname === "/community" ? "active" : "inactive"
              }
            >
              <i className="fas fa-users-cog"></i> Community
            </li>
          </Link>
          <Link to="/downline">
            <li
              className={
                location.pathname === "/downline" ? "active" : "inactive"
              }
            >
              <i className="fas fa-sitemap"></i> Downline
            </li>
          </Link>
          <Link to="/royality">
            <li
              className={
                location.pathname === "/royality" ? "active" : "inactive"
              }
            >
              <FaCrown /> NFT Royality
            </li>
          </Link>
          <Link to="/direct">
            <li
              className={
                location.pathname === "/direct" ? "active" : "inactive"
              }
            >
              <RiMoneyDollarCircleFill /> Direct
            </li>
          </Link>
          <Link to="/level">
            <li
              className={location.pathname === "/level" ? "active" : "inactive"}
            >
              <FaLevelUpAlt /> Level
            </li>
          </Link>
        </ul>

        <h3 className="follow-us">Follow Us On</h3>
        <div className="social-icons">
          <a href="https://t.me/magicverse_6669" target="_blank">
            <i className="fab fa-telegram-plane" style={{ color: "black" }}></i>
          </a>
          <a href="https://x.com/magic_verse_666" target="_blank">
            <i className="fab fa-x-twitter" style={{ color: "black" }}></i>
          </a>
          <a href="http://medium.com/@magicverse666" target="_blank">
            <BsMedium style={{ color: "black" }} />
          </a>
          <a href="https://www.instagram.com/magic_verse_666" target="_blank">
            <i className="fab fa-instagram" style={{ color: "black" }}></i>
          </a>
          <a href="https://www.reddit.com/user/magicverse666" target="_blank">
            <FaRedditAlien style={{ color: "black" }} />
          </a>
        </div>
      </aside>
    </>
  );
}
