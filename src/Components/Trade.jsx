import React, { useEffect, useState } from "react";

import creativeArt from "../assets/creativeArt.jpg";

import FooterNew from "./FooterNew";
import HeaderNew from "./HeaderNew";
import {
  getOwnedNFTs,
  getReadyForBuyFn,
  getTradeUserFn,
  getUserCreatedNftsFn,
  getUserInfo,
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
export default function Trade() {
  const { address } = useAccount();
  const [allTrade, setAllTrade] = useState([]);
  const [isfetch, setIsFetch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [allUsers, setAllUsers] = useState(null);

  const [assetValue, setAssetValue] = useState(0);
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
    } catch (error) {
      console.log("Error in Buy:", error);
    }
  };
  const getTrade = async () => {
    try {
      const { userTrades } = await getTradeUserFn(address);

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

      const smallValue = fetchedTrades.find((t) => t.price <= 20e18);
      const midValue = fetchedTrades.find(
        (t) => t.price > 20e18 && t.price <= 30e18
      );

      const largeValue = fetchedTrades.find((t) => t.price > 30e18);
      // const check = fetchedTrades.find(
      //   (t) => t.price >= 30e18 && t.price >= 50e18
      // );
      // console.log(check, ":::check");

      const finalData = [smallValue, midValue, largeValue].filter(Boolean); // avoid pushing undefined
      console.log(fetchedTrades);
      setAllTrade(finalData);
    } catch (error) {
      console.error("Error fetching user-created NFTs:", error);
    }
  };

  // const getTrade = async () => {
  //   try {
  //     const resNFT = await getTradeUserFn(address);
  //     const data = await Promise.all(
  //       resNFT.userTrades.map(async (it) => {
  //         try {
  //           const res = await getNfts(it.tokenId);
  //           const metadataUrl = res[2].replace(
  //             "ipfs://",
  //             "https://ipfs.io/ipfs/"
  //           );
  //           const metadataRes = await axios.get(metadataUrl);
  //           const metadata = metadataRes.data;
  //           const imageUrl = metadata.image.replace(
  //             "ipfs://",
  //             "https://ipfs.io/ipfs/"
  //           );
  //           return {
  //             ...it,
  //             title: metadata.name,
  //             description: metadata.description,
  //             img: imageUrl,
  //             price: res[4],
  //             owner: res[6],
  //             metadataURI: res[2],
  //             creator: res[3],
  //           };
  //         } catch (err) {
  //           console.log(
  //             `Error fetching metadata for Token ID ${it.tokenId}:`,
  //             err
  //           );
  //           return {
  //             ...it,
  //             title: "",
  //             description: "Error loading",
  //             img: "",
  //           };
  //         }
  //       })
  //     );
  //     console.log(data, "data");
  //     const smallValue = data.filter((it) => {
  //       return it.price >= 27 * 1e18 && it.price <= 54 * 1e18;
  //     });
  //     console.log(smallValue, "smallValue");
  //     const midValue = data.filter((it) => {
  //       return it.price >= 54 * 1e18;
  //     });
  //     console.log(midValue, "midValue");
  //     const finalData = [smallValue[0], midValue[0]];
  //     console.log(finalData);
  //     setAllTrade(finalData);
  //   } catch (error) {
  //     console.log("Error fetching user-created NFTs:", error);
  //   }
  // };
  const [balance, getBalance] = useState(0);
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
    }
  };
  const UserInfo = async () => {
    try {
      const res = await getUserInfo(address);
      setAllUsers(res.userLimits);
      console.log("UserInfo in SingleNFT", res.userLimits);
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
                                {!isLoading && (
                                  <button
                                    className="sc-button style-place-bid style bag fl-button pri-3"
                                    onClick={() => ReadyForBuy(nft.tokenId)}
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
                                  {(Number(nft?.price) / 1e18).toFixed(4)} USDT
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
      </div>
      <div className="mt-4">
        <FooterNew />
      </div>
    </>
  );
}
