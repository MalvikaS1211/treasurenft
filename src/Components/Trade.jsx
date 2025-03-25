import React, { useEffect, useState } from "react";

import { FaGripfire } from "react-icons/fa";

import hemlet from "../assets/hemlet.jpg";

import LivingVase from "../assets/LivingVase.jpg";
import FlameDress from "../assets/FlameDress.jpg";

import creativeArt from "../assets/creativeArt.jpg";

import RenaiXance from "../assets/RenaiXance.jpg";
import space from "../assets/space.jpg";
import cryptoegg from "../assets/cryptoegg.jpg";
import cyberprimal from "../assets/cyberprimal.jpg";
import CyberDoberman from "../assets/CyberDoberman.jpg";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import FooterNew from "./FooterNew";
import HeaderNew from "./HeaderNew";
import {
  getReadyForBuyFn,
  getTradeUserFn,
  getUserCreatedNftsFn,
} from "../Helper/API_Functions";
import { useAccount } from "wagmi";
import { approveToken, buyNFTFn, getNfts } from "../Helper/Web3";
import axios from "axios";
import toast from "react-hot-toast";
export default function Trade() {
  const { address } = useAccount();
  // const address = "0x32d76106003aE43ece50504d610C073Ca52074f1";
  const [allTrade, setAllTrade] = useState([]);
  const [isfetch, setIsFetch] = useState(false);
  const tokenApp1 = async (amt) => {
    try {
      const appres = approveToken(amt);
      await toast.promise(appres, {
        loading: "Approval in process",
        success: "Successfully Approved",
        error: "Approval failed",
      });
      return appres;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const ReadyForBuy = async (tokenId) => {
    try {
      await getReadyForBuyFn(address, tokenId);
      setTimeout(() => {
        setIsFetch(!isfetch);
      }, 2000);
    } catch (error) {
      console.error("Error in Buy:", error);
    }
  };

  const getTrade = async () => {
    try {
      const resNFT = await getTradeUserFn(address);
      const data = await Promise.all(
        resNFT.userTrades.map(async (it) => {
          try {
            // const resSale = await getReadyForsaleFn(address, it.tokenId);
            // console.log("resSale", resSale);
            const res = await getNfts(it.tokenId);
            const metadataUrl = res[2].replace(
              "ipfs://",
              "https://ipfs.io/ipfs/"
            );
            const metadataRes = await axios.get(metadataUrl);
            const metadata = metadataRes.data;
            const imageUrl = metadata.image.replace(
              "ipfs://",
              "https://ipfs.io/ipfs/"
            );
            return {
              ...it,
              title: metadata.name,
              description: metadata.description,
              img: imageUrl,
              price: res[4],
              owner: res[6],
              metadataURI: res[2],
              creator: res[3],
            };
          } catch (err) {
            console.error(
              `Error fetching metadata for Token ID ${it.tokenId}:`,
              err
            );
            return {
              ...it,
              title: "",
              description: "Error loading",
              img: "",
            };
          }
        })
      );

      setAllTrade(data);
      console.log("Fetched NFTs:", data);
    } catch (error) {
      console.error("Error fetching user-created NFTs:", error);
    }
  };
  const BuyNft = async (
    initialPrice,
    title,
    description,
    metadataURI,
    tokenId,
    totalAmount
  ) => {
    try {
      console.log(
        address,
        Number(initialPrice),
        title,
        description,
        metadataURI,
        tokenId,
        Number(totalAmount),
        ":::change"
      );

      const res = await getReadyForBuyFn(
        address,
        Number(initialPrice) / 1e18,
        title,
        description,
        metadataURI,
        tokenId,
        Number(totalAmount) / 1e18
      );

      if (res) {
        const tokenApp = await tokenApp1(Number(totalAmount) / 1e18);
        if (tokenApp) {
          const nft = buyNFTFn(
            tokenId,
            res.vrs.initialPrice,
            res.vrs.signature.v,
            res.vrs.signature.r,
            res.vrs.signature.s,
            res.vrs.title,
            res.vrs.description,
            res.vrs.metadataURI
          );
          await toast.promise(nft, {
            pending: "Processing buy...",
            success: "NFT Buy successfully!",
            error: "Nft Buy failed!",
          });
          console.log(nft, "ASFDDDDDDDDDD");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (address) {
      getTrade();
    }
  }, [address, isfetch]);

  return (
    <>
      <HeaderNew />
      <div className="tf-create-item tf-section p-0">
        <div className="dashboardbg">
          {" "}
          <div
            class="col-md-12 "
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <div
              class="page-title-heading mg-bt-40"
              style={{ marginTop: "40px" }}
            >
              <h1 class="heading text-center mt-0" style={{ color: "black" }}>
                Buy Item
              </h1>
            </div>
          </div>
        </div>
        <section className="tf-section today-pick">
          <div className="themesflat-container">
            <div className="row">
              {allTrade &&
                allTrade.map((nft, index) => {
                  if (nft.price > 0) {
                    return (
                      <div
                        key={index}
                        className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6"
                      >
                        <div
                          className="sc-card-product explode style2 mg-bt"
                          style={{ border: "1px solid rgb(81, 66, 252)" }}
                        >
                          <div className="card-media">
                            <a
                              href="#"
                              style={{
                                height: "288px",
                                width: "288px",
                                display: "flex",
                              }}
                            >
                              <img
                                src={
                                  nft.img.startsWith("ipfs://")
                                    ? nft.img.replace(
                                        "ipfs://",
                                        "https://ipfs.io/ipfs/"
                                      )
                                    : nft.img
                                }
                                alt="NFT"
                                style={{ height: "100%", width: "100%" }}
                              />
                            </a>
                            {nft.owner != address && (
                              <div
                                class="button-place-bid"
                                onClick={() => {
                                  BuyNft(
                                    nft.price,
                                    nft.title,
                                    nft.description,
                                    nft.metadataURI,
                                    nft.tokenId,
                                    nft.price
                                  );
                                }}
                              >
                                <button
                                  className="sc-button style-place-bid style bag fl-button pri-3"
                                  onClick={() => ReadyForBuy(nft.tokenId)}
                                  type="button"
                                >
                                  <FaShoppingBag color="black" />
                                  <span>Buy</span>
                                </button>
                              </div>
                            )}
                          </div>
                          <div className="card-title">
                            <h5>
                              <a href="#">{nft.title}</a>
                            </h5>
                          </div>
                          <div className="meta-info">
                            <div className="author">
                              <div className="avatar">
                                <img src={creativeArt} alt="Creator Avatar" />
                              </div>
                              <div className="info">
                                <span>Creator</span>
                                <h6>
                                  <a href="#">{nft.creator?.slice(-9)}</a>
                                </h6>
                              </div>
                            </div>
                            <div className="tags">bsc</div>
                          </div>
                          <div className="card-bottom style-explode">
                            <div className="price">
                              <span>Current Price</span>
                              <div className="price-details">
                                <h5>
                                  {(Number(nft?.price) / 1e18).toFixed(4)} USDT
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
            </div>
          </div>
        </section>
      </div>
      <div className="mt-4">
        <FooterNew />
      </div>
    </>
  );
}
