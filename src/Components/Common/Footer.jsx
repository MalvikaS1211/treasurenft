import React, { useEffect, useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import Logo from "../../assets/Logo.png";

import {
  FaFacebook,
  FaRedditAlien,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { BsMedium } from "react-icons/bs";
import { useAccount } from "wagmi";
import { isUserExist } from "../../Helper/Web3";
import toast from "react-hot-toast";

import telegram from "../../assets/Icons/telegram.png";
import instagram from "../../assets/Icons/instagram.png";
import twitter from "../../assets/Icons/twitterwithoutBG.png";
import facebook from "../../assets/Icons/facebook.png";
import youtube from "../../assets/Icons/youtube.png";

export default function Footer() {
  const { address } = useAccount();
  const [userExist, setUserExist] = useState(false);
  const userExistFn = async () => {
    try {
      if (address) {
        const resUserExist = await isUserExist(address);
        // console.log(resUserExist, "resUserExist");
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

  const navigate = useNavigate();

  const handleCollection = () => {
    navigate("/", { state: { scrollTo: "collections" } });
  };
  const handleLiveAuction = () => {
    navigate("/", { state: { scrollTo: "liveAuctionMenu" } });
  };
  return (
    <div>
      <footer id="footer" className="footer-light-style clearfix bg-style">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-12">
              <div className="widget widget-logo">
                <div className="logo-footer" id="logo-footer">
                  <a href="/">
                    <img
                  
                      src={Logo}
                      alt="nft-Logo"
                      width={150}
                    />
                  </a>
                </div>
                <p className="sub-widget-logo">
                  Virtual Mine is a Web3 revenue platform based on NFT
                  collections
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-5 col-5">
              <div className="widget widget-menu style-1">
                <h5 className="title-widget">My Account</h5>
                <ul>
              
                  <li>
                    <a href="#collections" onClick={handleCollection}>
                      Collection
                    </a>
                  </li>
                 

                  <li>
                    {address && userExist ? (
                      <Link to="/NFTcreation">Create Item</Link>
                    ) : (
                      <></>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-7 col-7">
              <div className="widget widget-menu style-2">
                <h5 className="title-widget">Resources</h5>
                <ul>
                  <li>
                    {address && userExist ? (
                      <Link to="/support">Help &amp; Support</Link>
                    ) : (
                      <></>
                    )}
                  </li>
                  <li id="liveAuctionMenu">
                    <a href="#liveAuctionMenu" onClick={handleLiveAuction}>
                      Live Auctions
                    </a>
                  </li>
                  {address && userExist ? (
                    <li>
                      <Link to="/buyNft">Buy Item</Link>
                    </li>
                  ) : (
                    <></>
                  )}

                
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-5 col-5">
              <div className="widget widget-menu fl-st-3">
                <h5 className="title-widget">Company</h5>
                <ul>
                  <li>
                    {address && userExist ? (
                      <Link to="/explore">Explore</Link>
                    ) : (
                      <></>
                    )}
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-7 col-12">
              <div className="widget widget-subcribe">
                <h5 className="title-widget">Subscribe Us</h5>
                <div className="form-subcribe">
                  <form
                    id="subscribe-form"
                    action="#"
                    method="GET"
                    acceptCharset="utf-8"
                    className="form-submit"
                  >
                    <input
                      name="email"
                      className="email"
                      type="email"
                      required=""
                    />
                    <button id="submit" name="submit" type="submit">
                      <BiSolidSend color="white" />
                    </button>
                  </form>
                </div>
                <div className="widget-social style-1 mg-t32">
                  <ul>
                    <li>
                      <a href="" target="_blank">
                      <img src={twitter} alt="twitter" width={20} />
                      </a>
                    </li>
                
                    <li>
                      <a href="" target="_blank">
                      <img src={telegram} alt="telegram" width={20} />
                      </a>
                    </li>
                  
                  
                    <li>
                      <a href="" target="_blank">
                       <img src={instagram} alt="instagram" width={20} />
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank">
                       <img src={facebook} alt="facebook" width={20} />
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank">
                     <img src={youtube} alt="youtube" width={20} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
