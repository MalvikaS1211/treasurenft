import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/LogoNew.png";
import {
  FaHome,
  FaRedditAlien,
  FaCrown,
  FaLevelUpAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsMedium } from "react-icons/bs";
import { GiHamburgerMenu, GiReceiveMoney } from "react-icons/gi";
import ConnectWallet from "./ConnectWallet";
import { FaFacebook } from "react-icons/fa";
import {
  MdAttachMoney,
  MdOutlineSupportAgent,
  MdTrendingUp,
} from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { getStakingDetail } from "../Helper/API_Functions";
import { useAccount } from "wagmi";
export default function Navbar({ title }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    window.innerWidth > 500 ? true : false
  );
  const [btnShow, setBtnShow] = useState();
  const location = useLocation();
  const { address } = useAccount();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleStakingBtn = async () => {
    try {
      const res = await getStakingDetail(address);
      // console.log(address, "address in navbar");
      setBtnShow(res?.data);
    } catch (error) {}
  };
  useEffect(() => {
    if (address) {
      handleStakingBtn();
    }
  }, [address]);

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
              color="#fff"
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
              <MdAttachMoney /> Direct
            </li>
          </Link>
          <Link to="/level">
            <li
              className={location.pathname === "/level" ? "active" : "inactive"}
            >
              <FaLevelUpAlt /> Level
            </li>
          </Link>
          <Link to="/Trading-Income">
            <li
              className={
                location.pathname === "/Trading-Income" ? "active" : "inactive"
              }
            >
              <MdTrendingUp /> Trading Income
            </li>
          </Link>
          {btnShow?.length > 0 && (
            <Link to="/staking">
              <li
                className={
                  location.pathname === "/staking" ? "active" : "inactive"
                }
              >
                <GiReceiveMoney /> Staking
              </li>
            </Link>
          )}
        </ul>

        <h3 className="follow-us">Follow Us On</h3>
        <div className="social-icons">
          <a href="" target="_blank">
            <i className="fab fa-telegram-plane text-white"></i>
          </a>
          <a href="" target="_blank">
            <i className="fab fa-x-twitter text-white"></i>
          </a>
          <a href="" target="_blank">
            <BsMedium className="text-white" />
          </a>
          <a href="" target="_blank">
            <i className="fab fa-instagram text-white"></i>
          </a>
          <a href="" target="_blank">
            <FaRedditAlien className="text-white" />
          </a>
          <a href="" target="_blank">
            <FaFacebook className="text-white" />
          </a>
          <a href="" target="_blank">
            <FaYoutube className="text-white" />
          </a>
        </div>

        <h3 className="support-container">Support</h3>
        <div className="support-icon relative">
          <Link to="/support">
            <MdOutlineSupportAgent
              style={{ fontSize: "30px", color: "white" }}
            />
          </Link>
        </div>
      </aside>
    </>
  );
}
