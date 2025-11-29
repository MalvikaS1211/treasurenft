import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import {
  FaHome,
  FaRedditAlien,
  FaCrown,
  FaLevelUpAlt,
  FaHistory,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { GiHamburgerMenu, GiReceiveMoney } from "react-icons/gi";
import ConnectWallet from "../Common/ConnectWallet";
import {
  MdAttachMoney,
  MdOutlineSupportAgent,
  MdTrendingUp,
} from "react-icons/md";
import { useAccount } from "wagmi";
import { getStakingDetail } from "../../Helper/API_Functions";
import telegram from "../../assets/Icons/telegram.png";
import instagram from "../../assets/Icons/instagram.png";
import twitter from "../../assets/Icons/twitter.png";
import facebook from "../../assets/Icons/facebook.png";
import youtube from "../../assets/Icons/youtube.png";

export default function Navbar({ title }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 500);
  const [btnShow, setBtnShow] = useState(true);
  const location = useLocation();
  const { address } = useAccount();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleStakingBtn = async () => {
    try {
      const res = await getStakingDetail(address);
      // setBtnShow(res?.data);
    } catch (error) {}
  };

  useEffect(() => {
    if (address) handleStakingBtn();
  }, [address]);

  return (
    <>
      {/* Header */}
      <header className="header-dashboard">
        <h1>{title}</h1>
        <div className="header-right">
          <ConnectWallet />
          <div className="d-block d-lg-none  hamburger-icon">
            <GiHamburgerMenu onClick={toggleSidebar} size={25} color="#fff" />
          </div>
        </div>
      </header>

      {/* Sidebar Container */}
      <div className={`sidebar-container ${isSidebarOpen ? "active" : ""}`}>
        {/* Menu Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="logo">
            <img src={Logo} alt="logo" style={{ width: "120px" }} />
          </div>
          <ul className="menu-list">
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
                className={
                  location.pathname === "/level" ? "active" : "inactive"
                }
              >
                <FaLevelUpAlt /> Level
              </li>
            </Link>
            <Link to="/Trading-Income">
              <li
                className={
                  location.pathname === "/Trading-Income"
                    ? "active"
                    : "inactive"
                }
              >
                <MdTrendingUp /> Trading Income
              </li>
            </Link>
          </ul>
        </aside>

        {/* Social + Support Sidebar */}
        <aside className="sidebar-social-media">
          <ul>
            <li className="mb-3 text-white">
              Follow Us On
              <div className="d-flex gap-3 pt-4 ">
                <a href="" target="_blank" rel="noreferrer">
                  <img src={telegram} alt="" />
                </a>
                <a href="" target="_blank" rel="noreferrer">
                <img src={twitter} alt="" />
                </a>
              
                <a href="" target="_blank" rel="noreferrer">
                 <img src={instagram} alt="" />
                </a>
            
                <a href="" target="_blank" rel="noreferrer">
                <img src={facebook} alt="" />
                </a>
                <a
                  href="https://youtube.com/@magicverse-c4o?si=IkOqSaJgKGxw2-7S"
                  target="_blank"
                  rel="noreferrer"
                >
                 <img src={youtube} alt="" />
                </a>
              </div>
            </li>

            <li className="text-white">
              Support
              <div>
                <Link to="/support">
                  <MdOutlineSupportAgent
                    className="icons-color"
                    style={{
                      fontSize: "40px",
                      paddingTop: "10px",
                    }}
                  />
                </Link>
              </div>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
}
