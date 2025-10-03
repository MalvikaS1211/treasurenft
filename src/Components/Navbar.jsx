import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
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
import ConnectWallet from "./ConnectWallet";
import {
  MdAttachMoney,
  MdOutlineSupportAgent,
  MdTrendingUp,
} from "react-icons/md";
import { useAccount } from "wagmi";
import { getStakingDetail } from "../Helper/API_Functions";

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
          <div className="d-md-block d-lg-none">
            <GiHamburgerMenu onClick={toggleSidebar} size={25} color="black" />
          </div>
        </div>
      </header>

      {/* Sidebar Container */}
      <div className={`sidebar-container ${isSidebarOpen ? "active" : ""}`}>
        {/* Menu Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="logo">
            <img src={Logo} alt="logo" style={{ width: "160px" }} />
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

            {btnShow && (
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
            <Link to="/Create-History">
              <li
                className={
                  location.pathname === "/Create-History"
                    ? "active"
                    : "inactive"
                }
              >
                <FaHistory /> Create History
              </li>
            </Link>
            <Link to="/Trade-History">
              <li
                className={
                  location.pathname === "/Trade-History" ? "active" : "inactive"
                }
              >
                <FaHistory /> Trade History (72 hours)
              </li>
            </Link>
          </ul>
        </aside>

        {/* Social + Support Sidebar */}
        <aside className="sidebar-social-media">
          <ul>
            <li className="mb-3">
              Follow Us On
              <div className="d-flex gap-3 pt-2">
                <a
                  href="https://t.me/magicverse_6669"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-telegram-plane text-black"></i>
                </a>
                <a
                  href="https://x.com/magic_verse_666"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-x-twitter text-black"></i>
                </a>
                <a
                  href="http://medium.com/@magicverse666"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsMedium className="text-black" />
                </a>
                <a
                  href="https://www.instagram.com/magicverse_official?igsh=M2l3enZ4NGpyN2pl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram text-black"></i>
                </a>
                <a
                  href="https://www.reddit.com/user/magicverse666"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaRedditAlien className="text-black" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61576285054414"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="text-black" />
                </a>
                <a
                  href="https://youtube.com/@magicverse-c4o?si=IkOqSaJgKGxw2-7S"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube className="text-black" />
                </a>
              </div>
            </li>

            <li>
              Support
              <div>
                <Link to="/support">
                  <MdOutlineSupportAgent
                    style={{
                      fontSize: "30px",
                      color: "black",
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
