import React, { useEffect, useRef, useState } from "react";

import creativeArt from "../assets/creativeArt.jpg";
import io from "socket.io-client";
import FooterNew from "./FooterNew";
import HeaderNew from "./HeaderNew";
import {
  getOwnedNFTs,
  getReadyForBuyFn,
  getTradeUserFn,
  getUserCreatedNftsFn,
  getUserInfo,
  SOCKET_SERVER_URL,
} from "../Helper/API_Functions";
import { useAccount } from "wagmi";
import {
  approveToken,
  buyNFTFn,
  fetchUserTokenBalance,
  getNfts,
} from "../Helper/Web3";
import axios from "axios";
import toast from "react-hot-toast";
import socket from "./Socket";

export default function Trade() {
  const { address } = useAccount();
  // const socket = io(SOCKET_SERVER_URL, {
  //   transports: ["websocket"],
  // });
  const [allTrade, setAllTrade] = useState([]);
  const [isfetch, setIsFetch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiLoading, setApiLoading] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [allUsers, setAllUsers] = useState(null);

  const [assetValue, setAssetValue] = useState(0);
  const tokenApp1 = async (amt) => {
    try {
      const appres = await toast.promise(approveToken(amt), {
        loading: "Approval in process",
        success: "Successfully Approved",
        error: "Approval failed",
      });

      return appres;
    } catch (error) {
      console.error("Approval error:", error);
      return false;
    }
  };

  const handleIsTradeAvailable = (payload) => {
    const { tokenId, isTradeAvailable } = payload;
    console.log(tokenId, isTradeAvailable, "isTradeAvailable : ");
    setIsAvailable(isTradeAvailable);
  };
  const handleTradeOngoing = (payload) => {
    console.log(payload, "payload");
    const { tokenId } = payload;
    console.log(tokenId, "TradeOngoing  ");
  };
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("UpdateMarket", (payload) => {
      getTrade();
      console.log(payload, "payload");
    });
    socket.emit("join");
    socket.on("joined", () => {
      console.log("joined");
    });
    socket.on("isTradeAvailable", handleIsTradeAvailable);
    socket.on("TradeOngoing", handleTradeOngoing);
    // Cleanup on unmount
    return () => {
      socket.off("connect");
      socket.off("UpdateMarket", (payload) => {
        getTrade();
        console.log(payload, "payload");
      });
      socket.off("joined");
      socket.off("isTradeAvailable", handleIsTradeAvailable);
      socket.off("TradeOngoing", handleTradeOngoing);

      socket.disconnect();
    };
  }, []);
  const ReadyForBuy = async (tokenId) => {
    try {
      const isTradeAvailable = await new Promise((resolve, reject) => {
        const handleResponse = (payload) => {
          const { tokenId: resTokenId, isTradeAvailable } = payload;
          console.log(resTokenId, isTradeAvailable, "isTradeAvailable : ");
          if (resTokenId === tokenId) {
            socket.off("isTradeAvailable", handleResponse); // Clean up listener
            resolve(isTradeAvailable);
          }
        };

        socket.on("isTradeAvailable", handleResponse);
        socket.emit("isNftAvailable", tokenId);

        // Optional timeout to avoid hanging forever
        setTimeout(() => {
          socket.off("isTradeAvailable", handleResponse);
          reject(new Error("Timeout waiting for trade availability"));
        }, 5000);
      });
      if (isTradeAvailable) {
        socket.emit("StartedTrade", tokenId);
      } else {
        console.log("trade not available");
        toast.error("Sorry, this trade is not available!");
        setApiLoading(false);

        return false;
      }
      // const res = await getReadyForBuyFn(address, tokenId);
      // return res;

      return true;
    } catch (error) {
      console.log("Error in Buy:", error);

      return true;
    }
  };
  const getTrade = async () => {
    try {
      setApiLoading(true);

      const { userTrades } = await getTradeUserFn(address);
      console.log(userTrades, "userTrades");
      const fetchedTrades = await Promise.all(
        userTrades.map(async (trade) => {
          try {
            const res = await getNfts(trade.tokenId);
            const metadataUrl = res[2].replace(
              "ipfs://",
              "https://ipfs.io/ipfs/"
            );
            const { data: metadata } = await axios.get(metadataUrl);
            const imageUrl = metadata.image.replace(
              "ipfs://",
              "https://ipfs.io/ipfs/"
            );

            return {
              ...trade,
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
              `Error fetching metadata for Token ID ${trade.tokenId}:`,
              err
            );
            return {
              ...trade,
              title: "",
              description: "Error loading",
              img: "",
            };
          }
        })
      );
      console.log(fetchedTrades);
      // setAllTrade(fetchedTrades);
      const newList = fetchedTrades.filter(Boolean);
      // setAllTrade((prevTrades) => {
      //   const updatedTrades = fetchedTrades.map((newTrade) => {
      //     const existing = prevTrades.find(
      //       (t) => t.tokenId === newTrade.tokenId
      //     );

      //     // If price/owner changed, update
      //     if (
      //       !existing ||
      //       existing.price !== newTrade.price ||
      //       existing.owner !== newTrade.owner
      //     ) {
      //       return newTrade;
      //     }

      //     // Otherwise, keep the old one to avoid re-render
      //     return existing;
      //   });

      //   return updatedTrades;
      // });
      setAllTrade((prevList) => {
        // Only include NFTs that are still present
        const updatedList = prevList.filter((nft) =>
          newList.some((newNft) => newNft.tokenId === nft.tokenId)
        );

        // Add any new NFTs that weren't in the old list
        newList.forEach((newNft) => {
          const exists = updatedList.find((n) => n.tokenId === newNft.tokenId);
          // console.log("NFT Exist", exists);
          if (!exists) {
            updatedList.push(newNft);
          }
        });

        return updatedList;
      });
      setApiLoading(false);
    } catch (error) {
      setApiLoading(false);
      console.error("Error fetching user-created NFTs:", error);
    }
  };

  const [balance, getBalance] = useState(0);
  const BuyNft = async (
    initialPrice,
    title,
    description,
    metadataURI,
    tokenId,
    totalAmount
  ) => {
    console.log("totalAmount", totalAmount);

    try {
      setIsLoading(true);

      const userBalance = await fetchUserTokenBalance(address);

      console.log(userBalance, totalAmount, "::::");
      if (Number(userBalance) < Number(totalAmount) / 1e18) {
        setIsLoading(false);
        return toast.error(
          `You need at least ${(Number(totalAmount) / 1e18).toFixed(
            4
          )} USDT to Buy`
        );
      }
      const status = await ReadyForBuy(tokenId);
      if (!status) {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        return;
      }
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
        const tokenApp = await tokenApp1(Number(totalAmount) / 1e18 + 0.1);
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
            loading: "Processing buy...",
            success: "NFT Buy successfully!",
            error: "Nft Buy failed!",
          });
          setIsLoading(false);
        }
        setIsLoading(false);
      }
      setTimeout(() => {
        setIsFetch(!isfetch);
      }, 2000);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      setTimeout(() => {
        setIsFetch(!isfetch);
      }, 2000);
    } finally {
      socket.emit("TradeDone", tokenId);
      setIsLoading(false);
    }
  };
  const UserInfo = async () => {
    try {
      const res = await getUserInfo(address);
      setAllUsers(res.userLimits);
      // console.log("UserInfo in SingleNFT", res.userLimits);
    } catch (error) {
      console.log(error);
    }
  };
  const totalAssets = async () => {
    try {
      const res = await getOwnedNFTs(address);
      const ownedNFTs = res.usercurrOwnedNfts || [];

      const filteredNFTs = ownedNFTs.filter((item) => item?.newPrice);

      const totalNftPrice = filteredNFTs.reduce(
        (acc, item) => acc + BigInt(item.newPrice),
        BigInt(0)
      );

      const totalAssetValue = Number(totalNftPrice) / 1e18;

      console.log(totalAssetValue, "Total Asset Value");
      setAssetValue(totalAssetValue);
    } catch (error) {
      console.error("Error calculating total assets:", error);
    }
  };

  const getWalletFund = async () => {
    const res = await fetchUserTokenBalance(address);
    console.log(res, "getWalletFund");
    getBalance(res);
  };
  useEffect(() => {
    if (address) {
      UserInfo();
      getTrade();
      totalAssets();
      getWalletFund();
    }
  }, [address, isfetch]);
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
                Buy Item
              </h1>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div
            class="total-grid"
            style={{ marginBottom: "3%", marginTop: "3%" }}
          >
            <div class="total-card" style={{ background: "#c2e8ff" }}>
              <div class="sub-total">
                <h6>Available Fund</h6>
              </div>
              <p>
                {parseFloat(balance).toFixed(4)}

                <span> USDT</span>
              </p>
            </div>
            <div class="total-card" style={{ background: "#c2e8ff" }}>
              <div class="sub-total">
                <h6>Assets Value</h6>
              </div>
              <p>
                {assetValue.toFixed(4)}
                <span> USDT</span>
              </p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div
            class="total-grid"
            style={{ marginBottom: "3%", marginTop: "3%" }}
          >
            <div class="total-card" style={{ background: "#c2e8ff" }}>
              <div class="sub-total">
                <h6>Total Limit</h6>
              </div>
              <p>
                {allUsers?.status == true
                  ? ((Number(allUsers?.userUpperLimit) || 0) / 1e18).toFixed(4)
                  : 0}
                <span> USDT</span>
              </p>
            </div>
            <div class="total-card" style={{ background: "#c2e8ff" }}>
              <div class="sub-total">
                <h6>Total Limit Remaining</h6>
              </div>
              <p>
                {allUsers?.status == true
                  ? (
                      (Number(allUsers?.userRemainingLimit) || 0) / 1e18
                    ).toFixed(4)
                  : 0}
                <span> USDT</span>
              </p>
            </div>
            <div class="total-card" style={{ background: "#c2e8ff" }}>
              <div class="sub-total">
                <h6>Total Limit Utilised</h6>
              </div>
              <p>
                {allUsers?.status == true
                  ? (
                      (Number(allUsers?.userTodayUtilisedLimit) || 0) / 1e18
                    ).toFixed(4)
                  : 0}
                <span> USDT</span>
              </p>
            </div>
          </div>
        </div>
        {allTrade.length !== 0 ? (
          <section className="tf-section today-pick">
            <div className="themesflat-container">
              <div className="row">
                {allTrade.length > 0 ? (
                  allTrade?.map((nft, index) => {
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
                                  onClick={() => {}}
                                >
                                  {!isLoading && (
                                    <button
                                      className="sc-button style-place-bid style bag fl-button pri-3"
                                      onClick={() =>
                                        BuyNft(
                                          nft.price,
                                          nft.title,
                                          nft.description,
                                          nft.metadataURI,
                                          nft.tokenId,
                                          Number(nft.price)
                                        )
                                      }
                                      type="button"
                                    >
                                      {/* <FaShoppingBag color="black" /> */}
                                      Buy
                                    </button>
                                  )}
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
                                    {(Number(nft?.price) / 1e18).toFixed(4)}{" "}
                                    USDT
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })
                ) : (
                  <div className="no-data-container">
                    <div className="no-data-available">No data available</div>
                  </div>
                )}
              </div>
            </div>
          </section>
        ) : (
          <>
            <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <p className=" w-100" style={{ textAlign: "center" }}>
              Please wait We are loading data
            </p>
          </>
        )}
      </div>
      <div className="mt-4">
        <FooterNew />
      </div>
    </>
  );
}
