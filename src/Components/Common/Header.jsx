import React, { useEffect, useState } from "react";
import "../../MalvikaCss/Custom2.css";
import { AiOutlineSearch } from "react-icons/ai";
import { WalletButton } from "@rainbow-me/rainbowkit";
import ConnectWallet from "./ConnectWallet";
import Logo from "../../assets/LogoNew.png";

import { FaWallet } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import { isUserExist } from "../../Helper/Web3";
import toast from "react-hot-toast";
import News from "./News";
import { IoClose } from "react-icons/io5";
const Header = () => {
  const { address } = useAccount();

  const [userExist, setUserExist] = useState(false);

  const userExistFn = async () => {
    try {
      if (address) {
        const resUserExist = await isUserExist(address);
      
        setUserExist(resUserExist);
      }
    } catch (error) {
      console.error("Error checking user existence:", error);
    }
  };
  useEffect(() => {
    if (address) {
      userExistFn();
    } else toast.error("Please connect your wallet");
  }, [address, userExist]);
  
  console.log(userExist, address, "userExist");
  return (
    <>
      {/* <News /> */}
      <header className="header-new-container d-none d-md-block">
        <div className="header-new">
          <img
            src={Logo}
            alt=""
            className="haeder-logo"
            style={{ width: "12%" }}
          />

          <nav className="nav-head">
            {address && userExist ? (
              <>
                <Link to="/">Home</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/buyNft">Trade</Link>
                <Link to="/NFTcreation">Create NFT</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="https://swap.iftglobal.org/" target="_blank">
                  IFT Token
                </Link>
              </>
            ) : (
              <>
                <Link to="/">Home</Link>
                <Link to="/signup">SignUp</Link>
              </>
            )}
          </nav>
          {/* <div className="search-box">
            <input type="text" placeholder="Select" className="search-input" />
            <AiOutlineSearch className="search-icon" />
          </div> */}
          {/* <div>
            <button className="connect-wallet-container">
              <div className="connect-wallet-btn">
                <FaWallet />
                Connect Wallet
              </div>
            </button>
          </div> */}
          <ConnectWallet />
        </div>
      </header>

      <header className="header-new-container d-block d-md-none">
        <div className="header-new">
          <img
            src={Logo}
            alt=""
            className="haeder-logo"
            style={{ width: "30%" }}
          />
          <ConnectWallet />

          <GiHamburgerMenu
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
            className="hamburger-icon text-white"
            color="#fff"
          />
        </div>
        <div
          className="offcanvas offcanvas-start bg-black text-white"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabIndex="-1"
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
        >
          <div className="offcanvas-header pt-4">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
              <img
                src={Logo}
                alt=""
                className="haeder-logo"
                style={{ width: "70%" }}
              />
            </h5>

            <button
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              className="bg-transparent border-0 text-white"
            >
              <IoClose size={28} color="#fff" />
            </button>
          </div>
          <div className="offcanvas-body">
            <nav className="nav-head">
              {address && userExist ? (
                <>
                  <Link to="/">Home</Link>
                  <Link to="/explore">Explore</Link>
                  <Link to="/buyNft">Trade</Link>
                  <Link to="/NFTcreation">Create NFT</Link>
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="https://swap.iftglobal.org/" target="_blank">
                    IFT Token
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/">Home</Link>
                  <Link to="/signup">SignUp</Link>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
