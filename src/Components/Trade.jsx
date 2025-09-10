import React, { useEffect, useRef, useState } from "react";

import creativeArt from "../assets/creativeArt.jpg";
import io from "socket.io-client";
import FooterNew from "./FooterNew";
import HeaderNew from "./HeaderNew";
import {
  getAllTradeForUser,
  getOwnedNFTs,
  getPendingMaturedNFT,
  getReadyForBuyFn,
  getTradeUserFn,
  getUserCreatedNftsFn,
  getUserInfo,
  isFirstTrade,
  SOCKET_SERVER_URL,
} from "../Helper/API_Functions";
import { useAccount } from "wagmi";
import {
  approveToken,
  buyNFTFn,
  fetchUserTokenBalance,
  getNfts,
  isLeveragePaid,
  payLeverage,
} from "../Helper/Web3";
import axios from "axios";
import toast from "react-hot-toast";
import socket from "./Socket";

export default function Trade() {
  const { address } = useAccount();
  const [allTrade, setAllTrade] = useState([]);
  const [isfetch, setIsFetch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiLoading, setApiLoading] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [allUsers, setAllUsers] = useState(null);
  const [balance, getBalance] = useState(0);
  const [assetValue, setAssetValue] = useState(0);
  const [pendingNft, setPendingNFT] = useState(0);
  const [newData, setNewData] = useState([]);
  const [isNew, setIsNew] = useState();
  const [open, setOpen] = useState(true);

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
        handleGetAllTradeForUser();

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
      // console.log(userTrades, "userTrades");
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
              initialPrice: Number(res[7]),
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
      // console.log(fetchedTrades)
      setAllTrade(fetchedTrades);
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

      console.log(userBalance, totalAmount, initialPrice, "::::");
      let amtToCheck = totalAmount - initialPrice;
      console.log(amtToCheck / 1e18, "amt to cjeck");
      if (Number(userBalance) < Number(amtToCheck) / 1e18) {
        setIsLoading(false);
        return toast.error(
          `You need at least ${(Number(amtToCheck) / 1e18).toFixed(
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
        (Number(totalAmount) - Number(initialPrice)) / 1e18,
        title,
        description,
        metadataURI,
        tokenId,
        (Number(totalAmount) - Number(initialPrice)) / 1e18
      );

      if (res) {
        const tokenApp = await tokenApp1(
          (Number(totalAmount) - Number(initialPrice)) / 1e18 + 0.1
        );
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

  const handlependingNft = async () => {
    try {
      const res = await getPendingMaturedNFT(address);
      // console.log(res?.totalCount, "handlependingNft");
      setPendingNFT(res?.totalCount);
    } catch (error) {
      console.log(error, "eror in handlependingNft");
    }
  };

  const isNewUser = async () => {
    try {
      if (!address) {
        return;
      }
      const resp = await isFirstTrade(address.toLowerCase());
      if (resp.success && resp?.isNew) {
        const isLevPaid = await isLeveragePaid(address);
        const isNew = isLevPaid;
        setIsNew(!isLevPaid);
      }

      console.log(resp.isNew, resp.success, "resp in is");
    } catch (error) {
      console.log(error, "Errorn in isNewUser");
      // setIsNew(true);
    }
  };

  // const handleGetAllTradeForUser = async () => {
  //   try {
  //     const tradeRes = await getAllTradeForUser(address);
  //     if (!tradeRes.success || !tradeRes.newData?.length) return;

  //     const data = tradeRes.newData[0];
  //     const nftRes = await getNfts(data.tokenId);

  //     const ipfsHash = nftRes[2].replace("ipfs://", "");
  //     const gateways = [
  //       "https://ipfs.io/ipfs/",
  //       "https://gateway.pinata.cloud/ipfs/",
  //       "https://cloudflare-ipfs.com/ipfs/",
  //     ];

  //     console.log(data, "handleGetAllTradeForUser 1");

  //     let metadata, metadataUrl;
  //     for (const gateway of gateways) {
  //       try {
  //         metadataUrl = `${gateway}${ipfsHash}`;
  //         const response = await axios.get(metadataUrl, { timeout: 5000 });
  //         metadata = response.data;
  //         break; // Exit if successful
  //       } catch (error) {
  //         console.warn(`Failed to fetch from ${gateway}, trying next...`);
  //       }
  //     }

  //     if (!metadata) throw new Error("All IPFS gateways failed");

  //     const imageUrl = metadata.image
  //       ? metadata.image.replace("ipfs://", "https://ipfs.io/ipfs/")
  //       : "https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31";

  //     const formattedData = {
  //       ...data,
  //       title: metadata.name || "",
  //       description: metadata.description || "",
  //       img: imageUrl,
  //       price: nftRes[4],
  //       owner: nftRes[6],
  //       metadataURI: nftRes[2],
  //       creator: nftRes[3],
  //     };
  //     console.log(formattedData, "handleGetAllTradeForUser 2");
  //     setNewData(formattedData);
  //   } catch (error) {
  //     console.log("Error in handleGetAllTradeForUser:", error);
  //   }
  // };

  const payFees = async () => {
    try {
      if (!address) {
        return toast.error("Please connect your wallet to pay Lev");
      }
      const isApprove = await tokenApp1(50);
      if (!isApprove) {
        return;
      }
      const resp = payLeverage();
      await toast.promise(resp, {
        loading: "Transaction in process",
        success: "Transaction done Successfully",
        error: "Transaction failed",
      });

      setTimeout(async () => {
        const isLevPaid = await isLeveragePaid(address);
        if (isLevPaid) {
          setIsNew(false);
        }
      }, 4000);
    } catch (error) {
      console.log(error, "error in payFees");
    }
  };

  useEffect(() => {
    if (address) {
      UserInfo();
      getTrade();
      totalAssets();
      getWalletFund();
      handlependingNft();
      isNewUser();
      // handleGetAllTradeForUser();
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
          <div class="total-grid" style={{ marginTop: "3%" }}>
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
            <div class="total-card" style={{ background: "#c2e8ff" }}>
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
                color: "black",
                fontSize: "16px",
                margin: "0px",
              }}
            >
              <b>Note : You have {pendingNft ?? 0} matured pending nfts</b>
            </p>
          </div>
        </div>

        <div className="p-4">
          <div class="total-grid" style={{ marginBottom: "3%" }}>
            {/* <div class="total-card" style={{ background: "#c2e8ff" }}>
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
            <div class="total-card" style={{ background: "#c2e8ff" }}>
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
                                    console.log(
                                      nft.price,
                                      nft.title,
                                      nft.description,
                                      nft.metadataURI,
                                      nft.tokenId,
                                      Number(nft.price)
                                    );
                                    BuyNft(
                                      nft.initialPrice,
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
                {newData.price > 0 && (
                  <div
                    // key={index}
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
                              newData?.img?.startsWith("ipfs://")
                                ? newData?.img?.replace(
                                    "ipfs://",
                                    "https://ipfs.io/ipfs/"
                                  )
                                : newData.img
                            }
                            alt="newData"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </a>
                        {newData.owner != address && (
                          <div
                            class="button-place-bid"
                            onClick={() => {
                              BuyNft(
                                newData.price,
                                newData.title,
                                newData.description,
                                newData.metadataURI,
                                newData.tokenId,
                                Number(newData.price)
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
                          <a href="#">{newData.title}</a>
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
                              <a href="#">{newData.creator?.slice(-9)}</a>
                            </h6>
                          </div>
                        </div>
                        <div className="tags">{newData.tokenId}</div>
                      </div>
                      <div className="card-bottom style-explode">
                        <div className="price">
                          <span>Current Price</span>
                          <div className="price-details">
                            <h5>
                              {(Number(newData?.price) / 1e18).toFixed(4)}
                              USDT
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
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
      <div>
        {isNew && (
          <div className="new-modal-overlay" onClick={() => setOpen(false)}>
            <div
              className="new-modal"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              <div className="new-modal-header mb-3">
                <h2 className="new-modal-title" style={{ fontSize: "20px" }}>
                  Payment Required
                </h2>
              </div>
              <div style={{ color: "black", fontSize: "14px" }}>
                Pay 50 USDT leverage fee and get 80%–90% Leverage on NFT Trading
                & Creation. ⚡ Trade more, create more, earn more!
              </div>

              <div
                className="new-modal-body"
                style={{ color: "black", fontSize: "14px" }}
              >
                Please confirm your payment to continue.
              </div>

              <div className="new-modal-footer">
                <button
                  className=""
                  onClick={payFees}
                  style={{
                    padding: "0px",
                    height: "30px",
                    width: "90px",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-4">
        <FooterNew />
      </div>
    </>
  );
}
