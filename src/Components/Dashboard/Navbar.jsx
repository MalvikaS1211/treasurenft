import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/LogoNew.png";
import {
  FaHome,
  FaRedditAlien,
  FaCrown,
  FaLevelUpAlt,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import ConnectWallet from "../Common/ConnectWallet";
import {
  MdAttachMoney,
  MdOutlineSupportAgent,
  MdTrendingUp,
} from "react-icons/md";
import { useAccount } from "wagmi";
import { getStakingDetail } from "../../Helper/API_Functions";
import { isUserExist } from "../../Helper/Web3";
import { toast } from "react-hot-toast";
import { GrTransaction } from "react-icons/gr";
export default function Navbar({ title }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 500);
  const location = useLocation();
  const navigate = useNavigate();
  const { address } = useAccount();
  const [userExist, setUserExist] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleStakingBtn = async () => {
    try {
      if (address) {
        await getStakingDetail(address);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (address) handleStakingBtn();
  }, [address]);

  const userExistFn = async () => {
    try {
      if (address) {
        const res = await isUserExist(address);
        setUserExist(res);
      }
    } catch (error) {
      console.error("User exist check failed:", error);
    }
  };

  useEffect(() => {
    if (address) {
      userExistFn();
    } else {
      toast.error("Please connect your wallet");
      setUserExist(true);
    }
  }, [address]);

  // REDIRECT logic (Only if address connected AND user is not registered)
  useEffect(() => {
    if (address && userExist === false) {
      if (location.pathname !== "/") {
        navigate("/", { replace: true });
      }
    }
  }, [userExist, address, location.pathname]);

  return (
    <>
      <header className="header-dashboard">
        <h1>{title}</h1>
        <div className="header-right">
          <ConnectWallet />
          <div className="block lg:hidden hamburger-icon">
            <GiHamburgerMenu onClick={toggleSidebar} size={25} color="#fff" />
          </div>
        </div>
      </header>

      <div className={`sidebar-container ${isSidebarOpen ? "active" : ""}`}>
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
            <Link to="/get-tx-hash">
              <li
                className={
                  location.pathname === "/get-tx-hash" ? "active" : "inactive"
                }
              >
                <GrTransaction  /> Get Tx Hash
              </li>
            </Link>
            <Link to="/deposit">
              <li
                className={
                  location.pathname === "/deposit" ? "active" : "inactive"
                }
              >
                <MdTrendingUp /> Deposits
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
          </ul>
        </aside>

        {/* Social */}
        <aside className="sidebar-social-media">
          <ul>
            <li className="mb-3 text-white">
              Follow Us On
              <div className="d-flex gap-3 pt-4">
                <i className="fab fa-telegram-plane icons-color"></i>
                <i className="fab fa-x-twitter icons-color"></i>
                <BsMedium className="icons-color" />
                <i className="fab fa-instagram icons-color"></i>
                <FaRedditAlien className="icons-color" />
                <FaFacebook className="icons-color" />
                <FaYoutube className="icons-color" />
              </div>
            </li>

            <li className="text-white">
              Support
              <Link to="/support">
                <MdOutlineSupportAgent
                  className="icons-color"
                  style={{ fontSize: "40px", paddingTop: "10px" }}
                />
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
}
