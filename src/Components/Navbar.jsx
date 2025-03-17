import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";

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
      <ul className="menu" style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/">
          <li
            className={
              location.pathname === "/signup/dashboard" ? "active" : "inactive"
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
      </ul>

      <h3 className="follow-us">Follow Us On</h3>

      <div className="social-icons">
        <a href="" target="_blank">
          <i className="fab fa-telegram-plane"></i>
        </a>
        <a href="https://x.com/Etherforce_Defi/" target="_blank">
          <i className="fab fa-x-twitter"></i>
        </a>
        <a href="" target="_blank">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="" target="_blank">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </aside>
  );
}
