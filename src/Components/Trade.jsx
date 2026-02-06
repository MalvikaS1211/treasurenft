import React, { useEffect, useRef, useState } from "react";

import creativeArt from "../assets/creativeArt.jpg";
import io from "socket.io-client";
import FooterNew from "./Common/Footer";
import HeaderNew from "./Common/Header";
import {
  getOwnedNFTs,
  getPendingMaturedNFT,
  getReadyForBuyFn,
  getTradeUserFn,
  getUserCreatedNftsFn,
  getUserInfo,
  SOCKET_SERVER_URL,
  getUserLimits,
  isInSale,
  insertInSale,
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
  const [timeParts, setTimeParts] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);
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

    setIsAvailable(isTradeAvailable);
  };
  const handleTradeOngoing = (payload) => {
    const { tokenId } = payload;
  };
  useEffect(() => {
    socket.on("connect", () => {});

    socket.on("UpdateMarket", (payload) => {
      getTrade();
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

      setAllTrade(fetchedTrades);

      setApiLoading(false);
    } catch (error) {
      setApiLoading(false);
      console.error("Error fetching user-created NFTs:", error);
    }
  };

  const isTokenAvailaible = async (tokenId) => {
    try {
      const resp = await isInSale(tokenId);
      console.log(resp, !resp.isInSale, "Fasfssiuhfiahs");
      if (!resp.isInSale) {
        const create = await insertInSale(tokenId);
        if (create.success) {
          return true;
        }
      } else {
        return false;
      }
    } catch (error) {
      console.log(error, "error in");
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
      setIsLoading(true);
      // const resp = await isTokenAvailaible(tokenId);
      // console.log(resp, "Fasfssiuhfiahs ");
      // if (!resp) {
      //   setIsLoading(false);
      //   return toast.error("Trade not available, please Try again later");
      // }
      const userBalance = await fetchUserTokenBalance(address);

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
      console.log("Filtered NFTs:", filteredNFTs);
      const totalNftPrice = filteredNFTs.reduce(
        (acc, item) => acc + BigInt(item.newPrice),
        BigInt(0)
      );

      const totalAssetValue = Number(totalNftPrice) / 1e18;

      setAssetValue(totalAssetValue);
    } catch (error) {
      console.error("Error calculating total assets:", error);
    }
  };

  const getWalletFund = async () => {
    const res = await fetchUserTokenBalance(address);

    getBalance(res);
  };

  const [pendingNft, setPendingNFT] = useState(0);

  const handlependingNft = async () => {
    try {
      const res = await getPendingMaturedNFT(address);

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
            className="col-md-12 "
            style={{ paddingTop: "100px", paddingBottom: "20px" }}
          >
            <h1 className="heading mb-style" style={{ textAlign: "center" }}>
              <span className="tf-text s1">Buy Item</span>
            </h1>
          </div>
        </div>
        {/* {isExpired ? (
          <h1
            className=""
            style={{
              fontSize: "40px",
              marginBottom: "8px",
              fontWeight: "100",
              color: "#fff",
            }}
          >
            Expired
          </h1>
        ) : (
          <div
            className="d-flex justify-content-center align-items-center text-white p-4 timer-container "
            style={{ background: "#18181a" }}
          >
            <div className="d-flex align-items-center justify-content-center flex-wrap">
              {[
                { label: "Day(s)", value: timeParts.days },
                { label: "Hour(s)", value: timeParts.hours },
                { label: "Minute(s)", value: timeParts.minutes },
                { label: "Second(s)", value: timeParts.seconds },
              ].map((item, index) => (
                <div key={index} className="text-center mx-3 position-relative">
                  <h1
                    className=""
                    style={{
                      fontSize: "40px",
                      marginBottom: "8px",
                      fontWeight: "500",
                    }}
                  >
                    {item.value.toString().padStart(2, "0")}
                  </h1>
                  <div
                    className="text-secondary"
                    style={{
                      fontSize: "14px",
                      color: "#b4b4b4ff",
                      fontWeight: "500",
                    }}
                  >
                    {item.label}
                  </div>

                  {index < 3 && index !== 1 && (
                    <div
                      className="position-absolute"
                      style={{
                        right: "-13px",
                        top: "14%",
                        height: "50%",
                        width: "1px",
                      }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )} */}
        <div className="p-4" style={{ background: "var(--primary-bg-color)" }}>
          <div className="total-grid" style={{ marginTop: "3%" }}>
            <div className="total-card">
              <div className="sub-total">
                <h6>Available Fund</h6>
              </div>
              <p>
                {parseFloat(balance).toFixed(4)}

                <span> USDT</span>
              </p>
            </div>
            <div className="total-card">
              <div className="sub-total">
                <h6>Assets Value</h6>
              </div>
              <p>
                {assetValue.toFixed(4)}
                <span> USDT</span>
              </p>
            </div>
            <div className="total-card">
              <div className="sub-total">
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
              className=""
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
          <div className="total-grid" style={{ marginBottom: "3%" }}>
            {/* <div className="total-card">
              <div className="sub-total">
                <h6>Bonus Limit</h6>
              </div>
              <p>
                {allUsers?.status == true
                  ? ((Number(allUsers?.userUpperLimit) || 0) / 1e18).toFixed(4)
                  : 0}
                <span> USDT</span>
              </p>
            </div> */}
            {/* <div className="total-card">
              <div className="sub-total">
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
            <div className="total-card">
              <div className="sub-total">
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
            <div className="total-card">
              <div className="sub-total">
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
            <div className="total-card">
              <div className="sub-total">
                <h6>NFT Created Value</h6>
              </div>
              <p>
                {allUsers?.status == true
                  ? ((allUsers?.createdValue || 0) / 1e18).toFixed(4)
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
                    if (Number(nft.price) / 1e18 < 34) {
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
                                  className="button-place-bid"
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
            <div
              className="no-data-container"
              style={{ background: "#18181a" }}
            >
              <div className="spinner-border text-white" role="status">
                <span className="sr-only ">Loading...</span>
              </div>
              <div className="no-data-available text-white">
                {" "}
                Please wait We are loading data
              </div>
            </div>
          </>
        )}
      </div>
      <div className="">
        <FooterNew />
      </div>
    </>
  );
}
