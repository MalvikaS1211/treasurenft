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
  getReadyForsaleFn,
  getUserCreatedNftsFn,
} from "../Helper/API_Functions";
import { useAccount } from "wagmi";
import { getNfts } from "../Helper/Web3";
import axios from "axios";
import toast from "react-hot-toast";

export default function Expore() {
  // const { address } = useAccount();
  const address = "0x32d76106003aE43ece50504d610C073Ca52074f1";
  const [createdNFTs, setCreateNft] = useState([]);
  const readyForSale = async (tokenId) => {
    try {
      await toast.promise(getReadyForsaleFn(address, tokenId), {
        pending: "Processing sale...",
        success: "NFT sell successfully!",
        error: "Failed to list NFT for sale.",
      });
      console.log("NFT is now ready for sale.");
    } catch (error) {
      console.error("Error in Sell:", error);
      toast.error("An error occurred while listing the NFT.");
    }
  };

  const ShowNFTs = async () => {
    try {
      const resNFT = await getUserCreatedNftsFn(address);
      const data = await Promise.all(
        resNFT.results.map(async (it) => {
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

      setCreateNft(data);
      console.log("Fetched NFTs:", data);
    } catch (error) {
      console.error("Error fetching user-created NFTs:", error);
    }
  };

  useEffect(() => {
    ShowNFTs();
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
                Sell Item
              </h1>
            </div>
          </div>
        </div>
        <section className="tf-section today-pick">
          <div className="themesflat-container">
            <div className="row">
              {createdNFTs.map((nft, index) => (
                <div
                  key={index}
                  className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6"
                >
                  <div
                    className="sc-card-product explode style2 mg-bt "
                    style={{ border: "1px solid #5142fc" }}
                  >
                    <div className="card-media">
                      <a href="#">
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
                      {nft.isReadyForSale == false && (
                        <div className="button-place-bid">
                          <button
                            className="sc-button style-place-bid style bag fl-button pri-3"
                            onClick={() => {
                              readyForSale(nft.tokenId);
                            }}
                          >
                            <FaShoppingBag color="black" />

                            <span>
                              {createdNFTs.isReadyForSale
                                ? "Not for Sell"
                                : "Sell"}
                            </span>
                          </button>
                        </div>
                      )}
                      {/* <div className="wishlist-button heart">
                        <IoIosHeartEmpty size={18} />
                        <span className="number-like">{nft.likes}</span>
                      </div> */}
                      <div className="coming-soon"></div>
                    </div>
                    <div className="card-title">
                      <h5>
                        <a href="">{nft.title}</a>
                      </h5>
                    </div>
                    <div className="meta-info">
                      <div className="author">
                        {/* <div className="avatar">
                          <img src={nft.creatorImg} alt="Creator" />
                        </div> */}
                        <div className="info">
                          <span>Creator</span>
                          <h6>
                            {nft.creator
                              ? `${nft.creator.slice(
                                  0,
                                  6
                                )}...${nft.creator.slice(-8)}`
                              : "Unknown"}
                          </h6>
                        </div>
                      </div>
                      {/* <div className="tags">{nft.chain}</div> */}
                    </div>
                    <div className="card-bottom style-explode">
                      <div className="price">
                        <span>Buy Price</span>
                        <div className="price-details">
                          <h5>{Number(nft.price) / 1e18} $</h5>
                          {/* <span>= ${nft.usdValue}</span> */}
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
                        <span>Sell</span>
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
              {/* <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div class="sc-card-product explode style2 mg-bt  ">
                  <div class="card-media">
                    <a href="">
                      <img src={cyberprimal} alt="Axies" />
                    </a>
                    <div class="button-place-bid">
                      <button class="sc-button style-place-bid style bag fl-button pri-3">
                        <FaShoppingBag color="black" />
                        <span>Sell</span>
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
                        <span>Sell</span>
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
                        <span>Sell</span>
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
                        <span>Sell</span>
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
                        <span>Sell</span>
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
                        <span>Sell</span>
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
                        <span>Sell</span>
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
