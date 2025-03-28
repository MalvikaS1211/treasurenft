import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { FaHome, FaRedditAlien } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
import { FaLevelUpAlt } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsMedium } from "react-icons/bs";

export default function Navbar({ isSidebarOpen }) {
  const location = useLocation();
  return (
    <>
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
              <FaCrown />
              NFT Royality
            </li>
          </Link>
          <Link to="/direct">
            <li
              className={
                location.pathname === "/direct" ? "active" : "inactive"
              }
            >
              <RiMoneyDollarCircleFill />
              Direct
            </li>
          </Link>
          <Link to="/level">
            <li
              className={location.pathname === "/level" ? "active" : "inactive"}
            >
              <FaLevelUpAlt />
              Level
            </li>
          </Link>
        </ul>

        <h3 className="follow-us">Follow Us On</h3>

        <div className="social-icons">
          <a href="https://t.me/magicverse_6669" target="_blank">
            <i className="fab fa-telegram-plane" style={{ color: "black" }}></i>
          </a>
          <a
            href="https://x.com/i/flow/login?redirect_after_login=%2Fmagic_verse_666"
            target="_blank"
          >
            <i className="fab fa-x-twitter" style={{ color: "black" }}></i>
          </a>
          <a href="http://medium.com/@magicverse666" target="_blank">
            <BsMedium style={{ color: "black" }} />
          </a>
          <a
            href="https://www.instagram.com/magic_verse_666?igsh=ZDZrcWV0ZWdycGw4"
            target="_blank"
          >
            <i className="fab fa-instagram" style={{ color: "black" }}></i>
          </a>
          <a
            href="https://www.reddit.com/user/magicverse666/?share_id=dfg-TAP1_q9B4IkwOGI9U&utm_content=1&utm_medium=android_app&utm_name=androidcss&utm_source=share&utm_term=1/"
            target="_blank"
          >
            <FaRedditAlien style={{ color: "black" }} />
          </a>
        </div>
      </aside>
      {/* for mobile devices */}
      <header className="header-new-container d-block d-md-none">
        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabIndex="-1"
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
              <img
                src={Logo}
                alt=""
                className="header-logo"
                style={{ width: "50%" }}
              />
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            {/* Main Navigation */}

            {/* Sidebar Menu */}
            <aside className="dashboard-sidebar" id="sidebar">
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
                  <li
                    className={
                      location.pathname === "/" ? "active" : "inactive"
                    }
                  >
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
              </ul>

              <h3 className="follow-us">Follow Us On</h3>
              <div className="social-icons">
                <a href="" target="_blank">
                  <i
                    className="fab fa-telegram-plane"
                    style={{ color: "black" }}
                  ></i>
                </a>
                <a href="https://x.com/Etherforce_Defi/" target="_blank">
                  <i
                    className="fab fa-x-twitter"
                    style={{ color: "black" }}
                  ></i>
                </a>
                <a href="" target="_blank">
                  <i
                    className="fab fa-facebook-f"
                    style={{ color: "black" }}
                  ></i>
                </a>
                <a href="" target="_blank">
                  <i
                    className="fab fa-instagram"
                    style={{ color: "black" }}
                  ></i>
                </a>
                <a href="" target="_blank">
                  <i className="fab fa-youtube" style={{ color: "black" }}></i>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </header>
      {/* for mobile devices */}
    </>
  );
}
