import React from "react";
import "../MalvikaCss/Custom2.css";
import { AiOutlineSearch } from "react-icons/ai";
import { WalletButton } from "@rainbow-me/rainbowkit";
import ConnectWallet from "./ConnectWallet";
import Logo from "../assets/Logo.png";
import { FaWallet } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header-new-container d-none d-md-block">
        <div className="header-new">
          <img
            src={Logo}
            alt=""
            className="haeder-logo"
            style={{ width: "12%" }}
          />

          <nav className="nav-head">
            <Link to="/">
              <a href="/home">Home</a>
            </Link>
            <Link to="/explore">
              <a href="">Explore</a>
            </Link>
            <Link to="/buyNft">
              <a>Trade</a>
            </Link>
            <Link to="/NFTcreation">
              <a>Create NFT</a>
            </Link>
            <Link to="/dashboard">
              <a>Dashboard</a>
            </Link>
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
          {/* <div>
            <button className="connect-wallet-container">
              <div className="connect-wallet-btn">
                <FaWallet />
                Connect Wallet
              </div>
            </button>
          </div> */}
          <GiHamburgerMenu
            class="text-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
            className="hamburger-icon"
          />
        </div>
        <div
          class="offcanvas offcanvas-start"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabindex="-1"
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
              <img
                src={Logo}
                alt=""
                className="haeder-logo"
                style={{ width: "50%" }}
              />
            </h5>
            <button
              type="button"
              class="btn-close "
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <nav className="nav-head">
              <Link to="/">
                <a href="/home">Home</a>
              </Link>
              <Link to="/explore">
                <a href="">Explore</a>
              </Link>

              <Link to="/buyNft">
                <a>Trade</a>
              </Link>

              <Link to="/NFTcreation">
                <a>Create NFT</a>
              </Link>
              <Link to="/dashboard">
                <a>Dashboard</a>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* <header id="header_main" class="header_1 js-header">
        <div class="themesflat-container">
          <div class="row">
            <div class="col-md-12">
              <div id="site-header-inner">
                <div class="wrap-box flex">
                  <div id="site-logo" class="clearfix">
                    <div id="site-logo-inner">
                      <a rel="home" class="main-logo" href="/">
                        <img
                          class="logo-dark"
                          id="logo_header"
                          src={Logo}
                          alt="nft-gaming"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="mobile-button">
                    <span></span>
                  </div>
                  <nav id="main-nav" class="main-nav">
                    <ul id="menu-primary-menu" class="menu">
                      <li class="menu-item menu-item-has-children  ">
                        <a href="/home-02">Home</a>
                      </li>
                      <li class="menu-item menu-item-has-children  ">
                        <a href="/home-02">Explore</a>
                      </li>
                      <li class="menu-item menu-item-has-children  ">
                        <a href="/home-02">Trade</a>
                      </li>
                      <li class="menu-item menu-item-has-children  ">
                        <a href="/home-02">Create NFT</a>
                      </li>
                    </ul>
                  </nav>
                  <div class="flat-search-btn flex">
                    <ConnectWallet />
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      </header> */}
    </>
  );
};

export default Header;
