import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { FaHome } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
export default function Navbar({ isSidebarOpen }) {
  const location = useLocation();
  return (
    <aside
      className={`dashboard-sidebar ${isSidebarOpen ? "active" : ""}`}
      id="sidebar"
    >
      <div className="logo">
        <img
          src={Logo}
          alt="logo"
          className="logo"
          style={{ width: "160px" }}
        />
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
        {/* <Link to="/community">
          <li
            className={
              location.pathname === "/community" ? "active" : "inactive"
            }
          >
            <i className="fas fa-users-cog"></i> Community
          </li>
        </Link> */}
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
            <FaCrown />
            NFT Royality
          </li>
        </Link>
      </ul>

      <h3 className="follow-us">Follow Us On</h3>

      <div className="social-icons">
        <a href="" target="_blank">
          <i className="fab fa-telegram-plane" style={{ color: "black" }}></i>
        </a>
        <a href="https://x.com/Etherforce_Defi/" target="_blank">
          <i className="fab fa-x-twitter" style={{ color: "black" }}></i>
        </a>
        <a href="" target="_blank">
          <i className="fab fa-facebook-f" style={{ color: "black" }}></i>
        </a>
        <a href="" target="_blank">
          <i className="fab fa-instagram" style={{ color: "black" }}></i>
        </a>
        <a href="" target="_blank">
          <i className="fab fa-youtube" style={{ color: "black" }}></i>
        </a>
      </div>
    </aside>
  );
}
