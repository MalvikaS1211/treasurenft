import React, { useEffect, useState } from "react";

import { FaShoppingBag } from "react-icons/fa";
import FooterNew from "./FooterNew";
import HeaderNew from "./HeaderNew";
import {
  getOwnedNFTs,
  getPurchasedNFTs,
  getReadyForsaleFn,
  getUserCreatedNftsFn,
} from "../Helper/API_Functions";
import { useAccount } from "wagmi";
import { getNfts } from "../Helper/Web3";
import axios from "axios";
import toast from "react-hot-toast";

export default function Expore() {
  const [isFetch, setIsFetch] = useState(false);
  const { address } = useAccount();
  const [createdNFTs, setCreateNft] = useState([]);
  const [purchasedNFTs, setPurchasedNFTs] = useState([]);
  const [ownedNFTs, setOwnedNFTs] = useState([]);

  const readyForSale = async (tokenId) => {
    try {
      await toast.promise(getReadyForsaleFn(address, tokenId), {
        pending: "Processing sale...",
        success: "Nft is ready to sell !",
        error: "Failed to list NFT for sale.",
      });
      setTimeout(() => {
        setIsFetch(!isFetch);
      }, 2000);
    } catch (error) {
      console.error("Error in Sell:", error);
      toast.error("An error occurred while listing the NFT.");
    }
  };

  const ShowCreatedNFTs = async () => {
    try {
      const resNFT = await getUserCreatedNftsFn(address);
      const data = await Promise.all(
        resNFT.results.map(async (it) => {
          try {
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

  const ShowPurchasedNfts = async () => {
    try {
      const resNFT = await getPurchasedNFTs(address);
      const data = await Promise.all(
        resNFT.data.map(async (it) => {
          try {
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

      setPurchasedNFTs(data);
      console.log("Fetched purchased NFTs:", data);
    } catch (error) {
      console.error("Error fetching purchased NFTs:", error);
    }
  };

  const ShowOwnedNFTs = async () => {
    try {
      const resNFT = await getOwnedNFTs(address);
      const data = await Promise.all(
        resNFT.usercurrOwnedNfts.map(async (it) => {
          try {
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

      setOwnedNFTs(data);
      console.log("Fetched Owned NFTs:", data);
    } catch (error) {
      console.error("Error fetching Owned NFTs:", error);
    }
  };
  useEffect(() => {
    if (address) {
      ShowCreatedNFTs();
      ShowPurchasedNfts();
      ShowOwnedNFTs();
    } else toast.error("Please connect your wallet");
  }, [address, isFetch]);

  return (
    <>
      <HeaderNew />
      <div className="tf-create-item tf-section p-0">
        <div className="dashboardbg">
          <div
            class="col-md-12 "
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <div
              class="page-title-heading mg-bt-40"
              style={{ marginTop: "40px" }}
            >
              <h1 class="heading text-center mt-0" style={{ color: "black" }}>
                NFT History
              </h1>
            </div>
          </div>
        </div>
        <section className="tf-section today-pick">
          <div className="themesflat-container">
            <div className="row  available-packages">
              <div className="row" style={{ paddingLeft: "34px" }}>
                <h4
                  className="title-create-item mt-4 col-lg-12"
                  style={{ textAlign: "left" }}
                >
                  Your Created NFTs
                </h4>
              </div>
            </div>

            <div className="row">
              {createdNFTs.length > 0 ? (
                createdNFTs.map((nft, index) => (
                  <div
                    key={index}
                    className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  >
                    <div
                      className="sc-card-product explode style2 mg-bt"
                      style={{ border: "1px solid #5142fc" }}
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
                            style={{ width: "100%", height: "100%" }}
                          />
                        </a>
                        {nft.isReadyForSale === true && (
                          <div className="button-place-bid">
                            <button
                              className="sc-button style-place-bid style bag fl-button pri-3"
                              onClick={() => readyForSale(nft.tokenId)}
                            >
                              <FaShoppingBag color="black" />
                              <span>
                                {nft.isReadyForSale ? "Not for Sell" : "Sell"}
                              </span>
                            </button>
                          </div>
                        )}
                        <div className="coming-soon"></div>
                      </div>
                      <div className="card-title">
                        <h5>
                          <a href="">{nft.title}</a>
                        </h5>
                      </div>
                      <div className="meta-info">
                        <div className="author">
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
                      </div>
                      <div className="card-bottom style-explode">
                        <div className="price">
                          <span>Buy Price</span>
                          <div className="price-details">
                            <h5>{(Number(nft.price) / 1e18).toFixed(4)} $</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-data-container">
                  <div className="no-data-available">No data available</div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* your owned nft  section*/}
      <section className="tf-section today-pick">
        <div className="themesflat-container">
          <div className="row  available-packages">
            <div className="row" style={{ paddingLeft: "34px" }}>
              <h4
                className="title-create-item mt-4 col-lg-12"
                style={{ textAlign: "left" }}
              >
                Your Owned NFTs
              </h4>
            </div>
          </div>

          <div className="row">
            {ownedNFTs.length > 0 ? (
              ownedNFTs.map((nft, index) => (
                <div
                  key={index}
                  className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6"
                >
                  <div
                    className="sc-card-product explode style2 mg-bt"
                    style={{ border: "1px solid #5142fc" }}
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
                          style={{ width: "100%", height: "100%" }}
                        />
                      </a>
                      {/* {nft.isReadyForSale === true && (
                        <div className="button-place-bid">
                          <button
                            className="sc-button style-place-bid style bag fl-button pri-3"
                            onClick={() => readyForSale(nft.tokenId)}
                          >
                            <FaShoppingBag color="black" />
                            <span>
                              {nft.isReadyForSale ? "Not for Sell" : "Sell"}
                            </span>
                          </button>
                        </div>
                      )} */}
                      <div className="coming-soon"></div>
                    </div>
                    <div className="card-title">
                      <h5>
                        <a href="">{nft.title}</a>
                      </h5>
                    </div>
                    <div className="meta-info">
                      <div className="author">
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
                    </div>
                    <div className="card-bottom style-explode">
                      <div className="price">
                        <span>Buy Price</span>
                        <div className="price-details">
                          <h5>{(Number(nft.price) / 1e18).toFixed(4)} $</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-data-container">
                <div className="no-data-available">No data available</div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/*end of  your owned nft  section*/}

      {/* your purchased nft  section*/}
      <section className="tf-section today-pick">
        <div className="themesflat-container">
          <div className="row  available-packages">
            <div className="row" style={{ paddingLeft: "34px" }}>
              <h4
                className="title-create-item mt-4 col-lg-12"
                style={{ textAlign: "left" }}
              >
                Your Purchased NFTs
              </h4>
            </div>
          </div>

          <div className="row">
            {purchasedNFTs.length > 0 ? (
              purchasedNFTs.map((nft, index) => (
                <div
                  key={index}
                  className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6"
                >
                  <div
                    className="sc-card-product explode style2 mg-bt"
                    style={{ border: "1px solid #5142fc" }}
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
                          style={{ width: "100%", height: "100%" }}
                        />
                      </a>
                      {/* {nft.isReadyForSale === true && (
                        <div className="button-place-bid">
                          <button
                            className="sc-button style-place-bid style bag fl-button pri-3"
                            onClick={() => readyForSale(nft.tokenId)}
                          >
                            <FaShoppingBag color="black" />
                            <span>
                              {nft.isReadyForSale ? "Not for Sell" : "Sell"}
                            </span>
                          </button>
                        </div>
                      )} */}
                      <div className="coming-soon"></div>
                    </div>
                    <div className="card-title">
                      <h5>
                        <a href="">{nft.title}</a>
                      </h5>
                    </div>
                    <div className="meta-info">
                      <div className="author">
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
                    </div>
                    <div className="card-bottom style-explode">
                      <div className="price">
                        <span>Buy Price</span>
                        <div className="price-details">
                          <h5>{(Number(nft.price) / 1e18).toFixed(4)} $</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-data-container">
                <div className="no-data-available">No data available</div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/*end of  your purchased  nft  section*/}
      <div className="mt-4">
        <FooterNew />
      </div>
    </>
  );
}
