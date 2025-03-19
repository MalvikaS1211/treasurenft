import React from "react";
import { BiSolidSend } from "react-icons/bi";
import Logo from "../assets/LogoBlue.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
export default function FooterNew() {
  return (
    <div>
      <footer id="footer" class="footer-light-style clearfix bg-style">
        <div class="themesflat-container">
          <div class="row">
            <div class="col-lg-3 col-md-12 col-12">
              <div class="widget widget-logo">
                <div class="logo-footer" id="logo-footer">
                  <a href="/">
                    <img
                      class="logo-dark"
                      id="logo_footer"
                      src={Logo}
                      alt="nft-Logo"
                    />
                  </a>
                </div>
                <p class="sub-widget-logo">
                  MagicVerse is a Web3 revenue platform based on NFT collections
                </p>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-5 col-5">
              <div class="widget widget-menu style-1">
                <h5 class="title-widget">My Account</h5>
                <ul style={{ color: "white" }}>
                  <li>
                    <a href="">Authors</a>
                  </li>
                  <li>
                    <a href="">Collection</a>
                  </li>
                  <li>
                    <a href="">Author Profile</a>
                  </li>
                  <li>
                    <a href="">Create Item</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-7 col-7">
              <div class="widget widget-menu style-2">
                <h5 class="title-widget">Resources</h5>
                <ul style={{ color: "white" }}>
                  <li>
                    <a href="">Help &amp; Support</a>
                  </li>
                  <li>
                    <a href="">Live Auctions</a>
                  </li>
                  <li>
                    <a href="">Item Details</a>
                  </li>
                  <li>
                    <a href="">Activity</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-5 col-5">
              <div class="widget widget-menu fl-st-3">
                <h5 class="title-widget">Company</h5>
                <ul style={{ color: "white" }}>
                  <li>
                    <a href="">Explore</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="">Our Blog</a>
                  </li>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-7 col-12">
              <div class="widget widget-subcribe">
                <h5 class="title-widget">Subscribe Us</h5>
                <div class="form-subcribe">
                  <form
                    id="subscribe-form"
                    action="#"
                    method="GET"
                    accept-charset="utf-8"
                    class="form-submit"
                  >
                    <input
                      name="email"
                      class="email"
                      type="email"
                      //   placeholder="info@yourgmail.com"
                      required=""
                    />
                    <button id="submit" name="submit" type="submit">
                      <BiSolidSend color="white" />
                    </button>
                  </form>
                </div>
                <div class="widget-social style-1 mg-t32">
                  <ul>
                    <li>
                      <a href="/home-02">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/home-02">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/home-02">
                        <i class="fab fa-telegram-plane"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/home-02">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/home-02">
                        <FaWhatsapp />
                      </a>
                    </li>
                    <li>
                      <a href="/home-02">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a id="scroll-top" href="">
        <IoIosArrowUp size={30} color="#4b50e6 " />
      </a>
    </div>
  );
}
