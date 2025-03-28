import React from "react";
import { BiSolidSend } from "react-icons/bi";
import Logo from "../assets/Logo.png";

import { FaRedditAlien, FaWhatsapp } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsMedium } from "react-icons/bs";
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
                      // class="logo-dark"
                      // id="logo_footer"
                      src={Logo}
                      style={{ width: "50%" }}
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
                <ul>
                  <li>
                    <a>Authors</a>
                  </li>
                  <li>
                    <a>Collection</a>
                  </li>
                  <li>
                    <a>Author Profile</a>
                  </li>
                  <li>
                    <Link to="/NFTcreation">
                      <a>Create Item</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-7 col-7">
              <div class="widget widget-menu style-2">
                <h5 class="title-widget">Resources</h5>
                <ul>
                  <li>
                    <a>Help &amp; Support</a>
                  </li>
                  <li>
                    <a>Live Auctions</a>
                  </li>
                  <li>
                    <a>Item Details</a>
                  </li>
                  <li>
                    <a>Activity</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-5 col-5">
              <div class="widget widget-menu fl-st-3">
                <h5 class="title-widget">Company</h5>
                <ul>
                  <li>
                    <Link to="/explore">
                      <a>Explore</a>
                    </Link>
                  </li>
                  <li>
                    <a>Contact Us</a>
                  </li>
                  <li>
                    <a>Our Blog</a>
                  </li>
                  <li>
                    <a>FAQ</a>
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
                      <a
                        href="https://x.com/i/flow/login?redirect_after_login=%2Fmagic_verse_666"
                        target="_blank"
                      >
                        <FaXTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://medium.com/@magicverse666"
                        target="_blank"
                      >
                        <BsMedium />
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/magicverse_6669" target="_blank">
                        <i class="fab fa-telegram-plane"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.reddit.com/user/magicverse666/?share_id=dfg-TAP1_q9B4IkwOGI9U&utm_content=1&utm_medium=android_app&utm_name=androidcss&utm_source=share&utm_term=1/"
                        target="_blank"
                      >
                        <FaRedditAlien />
                      </a>
                    </li>
                    {/* <li>
                      <a>
                        <FaWhatsapp />
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.instagram.com/magic_verse_666/?igsh=ZDZrcWV0ZWdycGw4#"
                        target="_blank"
                      >
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

      {/* <a id="scroll-top">
        <IoIosArrowUp size={30} color="#4b50e6 " />
      </a> */}
    </div>
  );
}
