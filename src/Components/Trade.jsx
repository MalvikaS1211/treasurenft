import React, { useEffect, useRef, useState } from "react";

import creativeArt from "../assets/creativeArt.jpg";
import io from "socket.io-client";
import FooterNew from "./FooterNew";
import HeaderNew from "./HeaderNew";
import {
  getOwnedNFTs,
  getPendingMaturedNFT,
  getReadyForBuyFn,
  getTradeUserFn,
  getUserCreatedNftsFn,
  getUserInfo,
  SOCKET_SERVER_URL,
  getUserLimits,
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
  const [balance, getBalance] = useState(0);
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
    // console.log(tokenId, isTradeAvailable, "isTradeAvailable : ");
    setIsAvailable(isTradeAvailable);
  };
  const handleTradeOngoing = (payload) => {
    // console.log(payload, "payload");
    const { tokenId } = payload;
    // console.log(tokenId, "TradeOngoing  ");
  };
  useEffect(() => {
    socket.on("connect", () => {
      // console.log("Connected to server");
    });

    socket.on("UpdateMarket", (payload) => {
      getTrade();
      // console.log(payload, "payload");
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
          // console.log(resTokenId, isTradeAvailable, "isTradeAvailable : ");
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
          // reject(new Error("Timeout waiting for trade availability"));
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
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong. Please try again.";
      console.log("Error in Buy:", error);
      toast.error(message);
      return true;
    }
  };
  const getTrade = async () => {
    try {
      if (!address) {
        return;
      }
      setApiLoading(true);

      const { userTrades } = await getTradeUserFn(address);
      console.log(userTrades, "userTrades");
      const fetchedTrades = await Promise.all(
        userTrades.map(async (trade) => {
          try {
            const res = await getNfts(trade.tokenId);

            // Extract the IPFS hash from the metadata URI
            const ipfsHash = res[2].replace("ipfs://", "");

            // Define multiple gateways
            const gateways = [
              "https://ipfs.io/ipfs/",
              "https://gateway.pinata.cloud/ipfs/",
              "https://cloudflare-ipfs.com/ipfs/",
            ];

            let metadata, metadataUrl;

            // Try each gateway until one works
            for (const gateway of gateways) {
              try {
                metadataUrl = `${gateway}${ipfsHash}`;
                const response = await axios.get(metadataUrl, {
                  timeout: 5000,
                }); // 5 sec timeout
                metadata = response.data;
                break; // If successful, exit loop
              } catch (error) {
                console.warn(`Failed to fetch from ${gateway}, trying next...`);
              }
            }

            if (!metadata) throw new Error("All IPFS gateways failed");

            // Fix image URL
            const imageUrl = metadata.image
              ? metadata.image.replace("ipfs://", "https://ipfs.io/ipfs/")
              : "https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31";

            return {
              ...trade,
              title: metadata.name || "",
              description: metadata.description || "",
              img: imageUrl,
              price: res[4],
              owner: res[6],
              metadataURI: res[2],
              creator: res[3],
            };
          } catch (err) {
            console.error(
              `Error fetching metadata for Token ID ${trade.tokenId}:`,
              err.message
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
      // console.log(
      //   fetchedTrades.length,
      //   "fetchedTrades length",
      //   userTrades.length
      // );
      setAllTrade(fetchedTrades);
      return;
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

  const BuyNft = async (
    initialPrice,
    title,
    description,
    metadataURI,
    tokenId,
    totalAmount
  ) => {
    // console.log("totalAmount", totalAmount);

    try {
      setIsLoading(true);

      const userBalance = await fetchUserTokenBalance(address);

      // console.log(userBalance, totalAmount, "::::");
      if (Number(userBalance) < Number(totalAmount) / 1e18) {
        setIsLoading(false);
        return toast.error(
          `You need at least ${(Number(totalAmount) / 1e18).toFixed(
            4
          )} USDT to Buy`
        );
      }
      console.log("123");
      // const status = await ReadyForBuy(tokenId);
      // console.log(status, "status");
      // if (!status) {
      //   setTimeout(() => {
      //     setIsLoading(false);
      //   }, 2000);
      //   return;
      // }
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

      setIsLoading(false);
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(message);
      setIsLoading(false);
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsFetch(!isfetch);
        // console.log("time :");
      }, 5000);
      socket.emit("TradeDone", tokenId);
      setIsLoading(false);
    }
  };
  const UserInfo = async () => {
    try {
      const res = await getUserLimits(address);
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

      // console.log(totalAssetValue, "Total Asset Value");
      setAssetValue(totalAssetValue);
    } catch (error) {
      console.error("Error calculating total assets:", error);
    }
  };

  const getWalletFund = async () => {
    const res = await fetchUserTokenBalance(address);
    // console.log(res, "getWalletFund");
    getBalance(res);
  };

  const [pendingNft, setPendingNFT] = useState(0);

  const handlependingNft = async () => {
    try {
      const res = await getPendingMaturedNFT(address);
      // console.log(res?.totalCount, "handlependingNft");
      setPendingNFT(res?.totalCount);
    } catch (error) {
      console.log(error, "eror in handlependingNft");
    }
  };
  useEffect(() => {
    if (address) {
      UserInfo();
      getTrade();
      totalAssets();
      getWalletFund();
      handlependingNft();
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
            <h1 class="heading mb-style" style={{ textAlign: "center" }}>
              <span class="tf-text s1">Buy Item</span>
            </h1>
          </div>
        </div>
        <div className="p-4" style={{ background: "var(--primary-bg-color)" }}>
          <div class="total-grid" style={{ marginTop: "3%" }}>
            <div class="total-card">
              <div class="sub-total">
                <h6>Available Fund</h6>
              </div>
              <p>
                {parseFloat(balance).toFixed(4)}

                <span> USDT</span>
              </p>
            </div>
            <div class="total-card">
              <div class="sub-total">
                <h6>Assets Value</h6>
              </div>
              <p>
                {assetValue.toFixed(4)}
                <span> USDT</span>
              </p>
            </div>
            <div class="total-card">
              <div class="sub-total">
                {/* <h6>Total Limit</h6> */}

                <h6>Daily Limit</h6>
              </div>
              <p>
                {allUsers?.status == true
                  ? ((Number(allUsers?.userUpperLimit) || 0) / 1e18).toFixed(4)
                  : 0}
                <span> USDT</span>
              </p>
            </div>
          </div>
          <div>
            <p
              class=""
              style={{
                textAlign: "justify",
                color: "#fff",
                fontSize: "16px",
                margin: "0px",
              }}
            >
              <b>Note : You have {pendingNft ?? 0} matured pending nfts</b>
            </p>
          </div>
        </div>

        <div className="p-4" style={{ background: "var(--primary-bg-color)" }}>
          <div class="total-grid" style={{ marginBottom: "3%" }}>
            {/* <div class="total-card">
              <div class="sub-total">
                <h6>Bonus Limit</h6>
              </div>
              <p>
                {allUsers?.status == true
                  ? ((Number(allUsers?.userUpperLimit) || 0) / 1e18).toFixed(4)
                  : 0}
                <span> USDT</span>
              </p>
            </div> */}
            {/* <div class="total-card">
              <div class="sub-total">
                <h6>Max Limit </h6>
              </div>
              <p>
                {allUsers?.status == true
                  ? (
                      (Number(allUsers?.userUpperLimit) * 90 || 0) / 1e18
                    ).toFixed(4)
                  : 0}
                <span> USDT</span>
              </p>
            </div> */}
            <div class="total-card">
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
            <div class="total-card">
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
                    if (Number(nft.price) > 0) {
                      // console.log(
                      //   // nft.owner,
                      //   Number(nft.price),
                      //   nft.tokenId,
                      //   "nft.owner"
                      // );
                      return (
                        <div
                          key={index}
                          className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6"
                        >
                          <div className="sc-card-product explode style2 mg-bt">
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
                                      Number(nft.price)
                                    );
                                  }}
                                >
                                  {!isLoading && (
                                    <button
                                      className="sc-button style-place-bid style bag fl-button pri-3"
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
                              <div className="tags">{nft.tokenId}</div>
                            </div>
                            <div className="card-bottom style-explode">
                              <div className="price">
                                <span>Current Price</span>
                                <div className="price-details">
                                  <h5>
                                    {(Number(nft?.price) / 1e18).toFixed(4)}
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
      <div className="">
        <FooterNew />
      </div>
    </>
  );
}
