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
  // const { address } = useAccount();
  const address = "0x32d76106003aE43ece50504d610C073Ca52074f1";
  const [allTrade, setAllTrade] = useState([]);

  const tokenApp1 = async (amt) => {
    try {
      const appres = approveToken(amt);
      await toast.promise(appres, {
        loading: "Approval in process",
        success: "Approved",
        error: "Error",
      });
      return appres;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const ReadyForBuy = async (tokenId) => {
    try {
      await toast.promise(getReadyForBuyFn(address, tokenId), {
        pending: "Processing buy...",
        success: "NFT Buy successfully!",
        error: "Nft Buy failed!",
      });
      console.log("NFT is now ready for sale.");
    } catch (error) {
      console.error("Error in Sell:", error);
      toast.error("An error occurred while listing the NFT.");
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
            loading: "Nft creation in process",
            success: "Nft created successfully",
            error: "error in nft creation",
          });
          console.log(nft, "ASFDDDDDDDDDD");
        }
      }
      console.log(apiRes, "apiRes");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (address) {
      getTrade();
    }
  }, [address]);

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
              {/* <div class="col-md-12">
                <div class="heading-live-auctions mg-bt-21">
                  <h2 class="tf-title pb-18">Today's Picks</h2>
                  <a class="exp style2" href="/explore-03">
                      EXPLORE MORE
                    </a>
                </div>
              </div> */}
              {allTrade &&
                allTrade?.map((nft, index) => (
                  <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div class="sc-card-product explode style2 mg-bt  ">
                      <div class="card-media">
                        <a href="">
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
                              class="sc-button style-place-bid style bag fl-button pri-3"
                              onClick={() => {
                                ReadyForBuy(nft.tokenId);
                              }}
                              type="button"
                            >
                              <FaShoppingBag color="black" />
                              <span>Buy</span>
                            </button>
                          </div>
                        )}
                        {/* <div class="wishlist-button heart">
                          <IoIosHeartEmpty size={18} />
                          <span class="number-like">100</span>
                        </div> */}
                        <div class="coming-soon"></div>
                      </div>
                      <div class="card-title">
                        <h5>
                          <a href="">"{nft.title}"</a>
                        </h5>
                      </div>
                      <div class="meta-info">
                        <div class="author">
                          <div class="avatar">
                            <img src={creativeArt} alt="Axies" />
                          </div>
                          <div class="info">
                            <span>Creator</span>
                            <h6>
                              <a href="">{nft.creator?.slice(-9)}</a>
                            </h6>
                          </div>
                        </div>
                        <div class="tags">bsc</div>
                      </div>
                      <div
                        class="card-bottom
                                 style-explode"
                      >
                        <div class="price">
                          <span>Current Price</span>
                          <div class="price-details">
                            <h5>{Number(nft?.price) / 1e18} USDT</h5>
                            {/* <span>= $12.246</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              {/* <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div class="sc-card-product explode style2 mg-bt  ">
                  <div class="card-media">
                    <a href="">
                      <img src={RenaiXance} alt="Axies" />
                    </a>
                    <div class="button-place-bid">
                      <button class="sc-button style-place-bid style bag fl-button pri-3">
                        <FaShoppingBag color="black" />
                        <span>Buy</span>
                      </button>
                    </div>
                    <div class="wishlist-button heart">
                      <IoIosHeartEmpty size={18} />
                      <span class="number-like">100</span>
                    </div>
                    <div class="coming-soon"></div>
                  </div>
                  <div class="card-title">
                    <h5>
                      <a href="">"The RenaiXance Rising the sun "</a>
                    </h5>
                  </div>
                  <div class="meta-info">
                    <div class="author">
                      <div class="avatar">
                        <img src={creativeArt} alt="Axies" />
                      </div>
                      <div class="info">
                        <span>Creator</span>
                        <h6>
                          <a href="">SalvadorDali</a>
                        </h6>
                      </div>
                    </div>
                    <div class="tags">bsc</div>
                  </div>
                  <div
                    class="card-bottom
                            style-explode"
                  >
                    <div class="price">
                      <span>Current Bid</span>
                      <div class="price-details">
                        <h5>4.89 ETH</h5>
                        <span>= $12.246</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div class="sc-card-product explode style2 mg-bt  ">
                  <div class="card-media">
                    <a href="">
                      <img src={cyberprimal} alt="Axies" />
                    </a>
                    <div class="button-place-bid">
                      <button class="sc-button style-place-bid style bag fl-button pri-3">
                        <FaShoppingBag color="black" />
                        <span>Buy</span>
                      </button>
                    </div>
                    <div class="wishlist-button heart">
                      <IoIosHeartEmpty size={18} />
                      <span class="number-like">100</span>
                    </div>
                    <div class="coming-soon"></div>
                  </div>
                  <div class="card-title">
                    <h5>
                      <a href="">"The RenaiXance Rising the sun "</a>
                    </h5>
                  </div>
                  <div class="meta-info">
                    <div class="author">
                      <div class="avatar">
                        <img src={creativeArt} alt="Axies" />
                      </div>
                      <div class="info">
                        <span>Creator</span>
                        <h6>
                          <a href="">SalvadorDali</a>
                        </h6>
                      </div>
                    </div>
                    <div class="tags">bsc</div>
                  </div>
                  <div
                    class="card-bottom
                            style-explode"
                  >
                    <div class="price">
                      <span>Current Bid</span>
                      <div class="price-details">
                        <h5>4.89 ETH</h5>
                        <span>= $12.246</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div class="sc-card-product explode style2 mg-bt  ">
                  <div class="card-media">
                    <a href="">
                      <img src={cryptoegg} alt="Axies" />
                    </a>
                    <div class="button-place-bid">
                      <button class="sc-button style-place-bid style bag fl-button pri-3">
                        <FaShoppingBag color="black" />
                        <span>Buy</span>
                      </button>
                    </div>
                    <div class="wishlist-button heart">
                      <IoIosHeartEmpty size={18} />
                      <span class="number-like">100</span>
                    </div>
                    <div class="coming-soon"></div>
                  </div>
                  <div class="card-title">
                    <h5>
                      <a href="">"The RenaiXance Rising the sun "</a>
                    </h5>
                  </div>
                  <div class="meta-info">
                    <div class="author">
                      <div class="avatar">
                        <img src={creativeArt} alt="Axies" />
                      </div>
                      <div class="info">
                        <span>Creator</span>
                        <h6>
                          <a href="">SalvadorDali</a>
                        </h6>
                      </div>
                    </div>
                    <div class="tags">bsc</div>
                  </div>
                  <div
                    class="card-bottom
                            style-explode"
                  >
                    <div class="price">
                      <span>Current Bid</span>
                      <div class="price-details">
                        <h5>4.89 ETH</h5>
                        <span>= $12.246</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div class="sc-card-product explode style2 mg-bt  ">
                  <div class="card-media">
                    <a href="">
                      <img src={space} alt="Axies" />
                    </a>
                    <div class="button-place-bid">
                      <button class="sc-button style-place-bid style bag fl-button pri-3">
                        <FaShoppingBag color="black" />
                        <span>Buy</span>
                      </button>
                    </div>
                    <div class="wishlist-button heart">
                      <IoIosHeartEmpty size={18} />
                      <span class="number-like">100</span>
                    </div>
                    <div class="coming-soon"></div>
                  </div>
                  <div class="card-title">
                    <h5>
                      <a href="">"The RenaiXance Rising the sun "</a>
                    </h5>
                  </div>
                  <div class="meta-info">
                    <div class="author">
                      <div class="avatar">
                        <img src={creativeArt} alt="Axies" />
                      </div>
                      <div class="info">
                        <span>Creator</span>
                        <h6>
                          <a href="">SalvadorDali</a>
                        </h6>
                      </div>
                    </div>
                    <div class="tags">bsc</div>
                  </div>
                  <div
                    class="card-bottom
                            style-explode"
                  >
                    <div class="price">
                      <span>Current Bid</span>
                      <div class="price-details">
                        <h5>4.89 ETH</h5>
                        <span>= $12.246</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div class="sc-card-product explode style2 mg-bt  ">
                  <div class="card-media">
                    <a href="">
                      <img src={FlameDress} alt="Axies" />
                    </a>
                    <div class="button-place-bid">
                      <button class="sc-button style-place-bid style bag fl-button pri-3">
                        <FaShoppingBag color="black" />
                        <span>Buy</span>
                      </button>
                    </div>
                    <div class="wishlist-button heart">
                      <IoIosHeartEmpty size={18} />
                      <span class="number-like">100</span>
                    </div>
                    <div class="coming-soon"></div>
                  </div>
                  <div class="card-title">
                    <h5>
                      <a href="">"The RenaiXance Rising the sun "</a>
                    </h5>
                  </div>
                  <div class="meta-info">
                    <div class="author">
                      <div class="avatar">
                        <img src={creativeArt} alt="Axies" />
                      </div>
                      <div class="info">
                        <span>Creator</span>
                        <h6>
                          <a href="">SalvadorDali</a>
                        </h6>
                      </div>
                    </div>
                    <div class="tags">bsc</div>
                  </div>
                  <div
                    class="card-bottom
                            style-explode"
                  >
                    <div class="price">
                      <span>Current Bid</span>
                      <div class="price-details">
                        <h5>4.89 ETH</h5>
                        <span>= $12.246</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div class="sc-card-product explode style2 mg-bt  ">
                  <div class="card-media">
                    <a href="">
                      <img src={LivingVase} alt="Axies" />
                    </a>
                    <div class="button-place-bid">
                      <button class="sc-button style-place-bid style bag fl-button pri-3">
                        <FaShoppingBag color="black" />
                        <span>Buy</span>
                      </button>
                    </div>
                    <div class="wishlist-button heart">
                      <IoIosHeartEmpty size={18} />
                      <span class="number-like">100</span>
                    </div>
                    <div class="coming-soon"></div>
                  </div>
                  <div class="card-title">
                    <h5>
                      <a href="">"The RenaiXance Rising the sun "</a>
                    </h5>
                  </div>
                  <div class="meta-info">
                    <div class="author">
                      <div class="avatar">
                        <img src={creativeArt} alt="Axies" />
                      </div>
                      <div class="info">
                        <span>Creator</span>
                        <h6>
                          <a href="">SalvadorDali</a>
                        </h6>
                      </div>
                    </div>
                    <div class="tags">bsc</div>
                  </div>
                  <div
                    class="card-bottom
                            style-explode"
                  >
                    <div class="price">
                      <span>Current Bid</span>
                      <div class="price-details">
                        <h5>4.89 ETH</h5>
                        <span>= $12.246</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div class="sc-card-product explode style2 mg-bt  ">
                  <div class="card-media">
                    <a href="">
                      <img src={CyberDoberman} alt="Axies" />
                    </a>
                    <div class="button-place-bid">
                      <button class="sc-button style-place-bid style bag fl-button pri-3">
                        <FaShoppingBag color="black" />
                        <span>Buy</span>
                      </button>
                    </div>
                    <div class="wishlist-button heart">
                      <IoIosHeartEmpty size={18} />
                      <span class="number-like">100</span>
                    </div>
                    <div class="coming-soon"></div>
                  </div>
                  <div class="card-title">
                    <h5>
                      <a href="">"The RenaiXance Rising the sun "</a>
                    </h5>
                  </div>
                  <div class="meta-info">
                    <div class="author">
                      <div class="avatar">
                        <img src={creativeArt} alt="Axies" />
                      </div>
                      <div class="info">
                        <span>Creator</span>
                        <h6>
                          <a href="">SalvadorDali</a>
                        </h6>
                      </div>
                    </div>
                    <div class="tags">bsc</div>
                  </div>
                  <div
                    class="card-bottom
                            style-explode"
                  >
                    <div class="price">
                      <span>Current Bid</span>
                      <div class="price-details">
                        <h5>4.89 ETH</h5>
                        <span>= $12.246</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div class="sc-card-product explode style2 mg-bt  ">
                  <div class="card-media">
                    <a href="">
                      <img src={hemlet} alt="Axies" />
                    </a>
                    <div class="button-place-bid">
                      <button class="sc-button style-place-bid style bag fl-button pri-3">
                        <FaShoppingBag color="black" />
                        <span>Buy</span>
                      </button>
                    </div>
                    <div class="wishlist-button heart">
                      <IoIosHeartEmpty size={18} />
                      <span class="number-like">100</span>
                    </div>
                    <div class="coming-soon"></div>
                  </div>
                  <div class="card-title">
                    <h5>
                      <a href="">"The RenaiXance Rising the sun "</a>
                    </h5>
                  </div>
                  <div class="meta-info">
                    <div class="author">
                      <div class="avatar">
                        <img src={creativeArt} alt="Axies" />
                      </div>
                      <div class="info">
                        <span>Creator</span>
                        <h6>
                          <a href="">SalvadorDali</a>
                        </h6>
                      </div>
                    </div>
                    <div class="tags">bsc</div>
                  </div>
                  <div
                    class="card-bottom
                            style-explode"
                  >
                    <div class="price">
                      <span>Current Bid</span>
                      <div class="price-details">
                        <h5>4.89 ETH</h5>
                        <span>= $12.246</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
      <div className="Footerbg">
        <FooterNew />
      </div>
    </>
  );
}
