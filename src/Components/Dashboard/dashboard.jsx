import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
import ConnectWallet from "../Common/ConnectWallet";
import Header from "./Header";
import "../../css/navbar.css";
import "../../css/dashboard.css";

import { FaRegCopy } from "react-icons/fa6";
import { useAccount } from "wagmi";
import {
  getIdToAddress,
  getPackageDetails,
  getUserInfo,
  getUserStats,
} from "../../Helper/API_Functions";
import { useBalance } from "wagmi";
import { fetchBalance } from "@wagmi/core";
import {
  approveToken,
  fetchIFTTtokenBalance,
  fetchNftIncome,
  fetchWalletBalance,
  getAvailaibleBalance,
  upgradePackageFn,
  usersFn,
} from "../../Helper/Web3";
import toast from "react-hot-toast";
import { getBalance } from "@wagmi/core";
import { opBNB, opBNBTestnet, polygon } from "wagmi/chains";
import { createConfig, http } from "wagmi";
import { base_url, USDT_TOKEN } from "../../Helper/Config";
import moment from "moment";
import { BsClock } from "react-icons/bs";
export default function Dashboard() {
  const { address } = useAccount();
  // const address = "0x3deCa2f62B20D6360e0948286D659dE2e19782Be";
  const [dashboardData, setDashboardData] = useState([]);
  const [allUsers, setAllUsers] = useState(null);
  const [isFetch, setIsFetch] = useState(false);
  const [availableBal, setAvailableBal] = useState(0);
  const [timeLeft, setTimeLeft] = useState(null);
  const [balanceData, setBalanceData] = useState(0);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [userBalINF, setUserBalINF] = useState(0);
  const [userProfitData, setUserProfitData] = useState();
  const data = new URLSearchParams(window.location.search);
  const refLink = data.get("ref");
  const uniqueId = allUsers?.userInfo?.[0]?.uniqueRandomId || "defaultId";
  const referralLink = `${base_url}/signup?ref=${uniqueId}`;
  const [packageData, setPackageData] = useState([]);
  const [timeParts, setTimeParts] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);
  const config = createConfig({
    chains: [opBNB],
    transports: {
      [opBNB.id]: http(),
    },
  });

  const UserProfits = async () => {
    try {
      const res = await getUserStats(address);
      setUserProfitData(res);
    } catch (error) {
      console.log(error);
    }
  };

  const packages = [
    {
      name: "Silver",
      color: "rgba(221, 84, 84, 1)",
      subscription: "5",
      range: "$60",
    },
    {
      name: "Gold",
      color: "rgb(212, 139, 55)",
      subscription: "15",
      range: "$100 ",
    },
    {
      name: "Platinum",
      color: "rgb(209, 212, 55)",
      subscription: "30",
      range: "$300",
    },
    {
      name: "Diamond",
      color: "rgb(55, 212, 133)",
      subscription: "50",
      range: "$700",
    },
    {
      name: "Crown",
      color: "rgb(55, 212, 204)",
      subscription: "100",
      range: "$1500",
    },
    {
      name: "Kohinoor",
      color: "rgba(76, 147, 194, 1)",
      subscription: "150",
      range: "$3000",
    },
    {
      name: "King",
      color: "rgb(162, 55, 212)",
      subscription: "200",
      range: "$5000",
    },
  ];

  const UserInfo = async () => {
    try {
      const res = await getUserInfo(address);
      setAllUsers(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserInFoFromContract = async () => {
    try {
      const resUser = await usersFn(address);
      setDashboardData(resUser);
    } catch (error) {
      console.log(error);
    }
  };

  const tokenApp = async (amt) => {
    try {
      const appres = approveToken(amt);
      await toast.promise(appres, {
        loading: "Approval in process",
        success: "Approved Successfully",
        error: "Approval Failed",
      });
      return appres;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const handlePackage = async (pkg, index, details) => {
    try {
      if (!address) {
        return toast.error("Please connect your wallet");
      }
      const appRes = await tokenApp(pkg.subscription);

      if (appRes) {
        await upgradePackageFn(details, index);
        setTimeout(() => {
          setIsFetch(!isFetch);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (
      !address ||
      !allUsers?.userPackageInfo?.[0]?.time ||
      !allUsers?.expiryTime
    ) {
      setTimeParts({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setIsExpired(false);
      return;
    }

    const time = allUsers.userPackageInfo[0].time;
    const expiryDuration = allUsers.expiryTime;

    const interval = setInterval(() => {
      const expiryTime = time + expiryDuration;
      const now = moment().unix();
      const remainingSeconds = expiryTime - now;

      if (remainingSeconds <= 0) {
        clearInterval(interval);
        setIsExpired(true);
        setTimeParts({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const duration = moment.duration(remainingSeconds, "seconds");
        const days = Math.floor(duration.asDays());
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();

        setIsExpired(false);
        setTimeParts({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [address, allUsers]);

  const packageDetails = async () => {
    try {
      const res = await getPackageDetails(address);
      console.log(res, "packageDetails");
      setPackageData(res);
    } catch (error) {
      console.log("Error in package", error);
    }
  };

  useEffect(() => {
    if (address) {
      getUserInFoFromContract();
      UserInfo();

      UserProfits();
      packageDetails();
    }
  }, [address, isFetch]);
  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        // Modern API (works only in https or localhost)
        await navigator.clipboard.writeText(referralLink);
      } else {
        // Fallback for http (non-secure context)
        const textarea = document.createElement("textarea");
        textarea.value = referralLink;
        textarea.style.position = "fixed"; // avoid scrolling
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      toast.success("Referral link copied!");
    } catch (error) {
      console.error("Copy failed:", error);
      toast.error("Failed to copy the link.");
    }
  };
  const [nftIncomes, setNftIncomes] = useState([]);
  const nftIncomesFn = async () => {
    try {
      const res = await fetchNftIncome(address);

      setNftIncomes(res);
    } catch (error) {
      console.log("Error in nftIncomes:", error);
    }
  };

  const fetchTokenBal = async () => {
    try {
      const res = await fetchIFTTtokenBalance();

      setTokenBalance(res);
    } catch (error) {
      console.error("fetchbalance error:", error);
    }
  };

  const fetchUserBalance = async () => {
    try {
      const res = await fetchWalletBalance(address);

      setUserBalINF(res);
    } catch (error) {
      console.error("fetchUserBalance error:", error);
    }
  };

  useEffect(() => {
    nftIncomesFn();
    fetchTokenBal();
    fetchUserBalance();
  }, [address]);
  const inf = isNaN(Number(userBalINF)) ? 0 : Number(userBalINF);
  const token = isNaN(Number(tokenBalance)) ? 0 : Number(tokenBalance) / 1e18;
  const valueInUSDT = (inf * token).toFixed(4);
  const tradingProfit =
    userProfitData?.tradingProfit?.length > 0
      ? Number(userProfitData.tradingProfit[0]?.profitOrLoss || 0)
      : 0;

  const referralIncome = Number(dashboardData?.[8] || 0) / 1e18;
  const levelIncome = Number(dashboardData?.[9] || 0) / 1e18;
  const royaltyIncome = Number(dashboardData?.[10] || 0) / 1e18;

  const nftTradingIncome = Number(nftIncomes?.[0] || 0) / 1e18;
  const nftLevelIncome = Number(nftIncomes?.[1] || 0) / 1e18;
  const nftDirectIncome = Number(nftIncomes?.[2] || 0) / 1e18;

  const totalIncome =
    referralIncome +
    levelIncome +
    royaltyIncome +
    nftTradingIncome +
    nftLevelIncome +
    nftDirectIncome;

  const initialPrice = 0.1;
  const currentPrice = token;
  const percentageGrowth = ((currentPrice - initialPrice) / initialPrice) * 100;

  return (
    <>
      <div className="p-4 dashboard-container">
        <main
          className="content-dashboard "
          style={{
            marginLeft:
              window.innerWidth > 300 && window.innerWidth < 1200
                ? "0px"
                : "290px",
          }}
        >
          <Navbar title="Dashboard"></Navbar>
          {/* <Header title="Dashboard"></Header> */}
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap flex-lg-nowrap gap-3">
            <div className="button-balance-group">
              <button
                className="btn-upgrade"
                type="button"
                style={{
                  borderRadius: "5px",
                  padding: "13px",
                }}
                onClick={() => {
                  window.open("https://swap.iftglobal.org/", "_blank");
                }}
              >
                IFT Token Wallet
              </button>
            </div>
            {isExpired ? (
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
              <div className="d-flex justify-content-center align-items-center text-white p-4 timer-container">
                <div className="d-flex align-items-center justify-content-center flex-wrap">
                  {[
                    { label: "Day(s)", value: timeParts.days },
                    { label: "Hour(s)", value: timeParts.hours },
                    { label: "Minute(s)", value: timeParts.minutes },
                    { label: "Second(s)", value: timeParts.seconds },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="text-center mx-3 position-relative"
                    >
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

                      {/* Divider line between items */}
                      {index < 3 && index !== 1 && (
                        <div
                          className="position-absolute"
                          style={{
                            right: "-13px",
                            top: "14%",
                            height: "50%",
                            width: "1px",
                            backgroundColor: "#444",
                          }}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="pb-4">
            <div className="balance-container">
              <div className="balance-card">
                <h6>IFT Token</h6>
                <p>{inf.toFixed(4)}</p>
              </div>

              <div className="balance-card">
                <h6>1 IFT</h6>
                <p>{token.toFixed(4)} USDT</p>
              </div>
              <div className="balance-card">
                <h6>Token Growth Percentage</h6>
                <p>{percentageGrowth.toFixed(2)}%</p>
              </div>
              <div className="balance-card">
                <h6>Value in USDT</h6>
                <p>{valueInUSDT} USDT</p>
              </div>
            </div>
          </div>
          {/* <h3 className="time-heading" id="timeDisplay">
            {timeLeft || "00 DD:00 HH:00 MM:00 SS"}
          </h3> */}
          <div>
            <div className="">
              <div className="user-grid">
                <div className="user-card wallet-card">
                  <h6>User ID</h6>
                  <p>
                    {allUsers?.userInfo[0]?.uniqueRandomId || "No user found"}
                  </p>
                  <h6>Rank</h6>
                  <p>{allUsers?.rank || 0}</p>
                </div>
                <div className="user-card wallet-card">
                  {/* <h6>My Wallet Fund</h6>
                  <p className="">{balanceData}</p> */}

                  <h6>My Total Income</h6>
                  <p className=" p-2">{totalIncome.toFixed(4)} USDT</p>
                </div>
                <div className="user-card wallet-card">
                  <h6>Referral Link</h6>
                  <div className="d-flex gap-1 align-items-center ">
                    <div className="gap-2">
                      {" "}
                      <p onClick={copyToClipboard} className="copytheRefferal">
                        {referralLink}
                      </p>
                      <FaRegCopy
                        onClick={copyToClipboard}
                        color="#fff"
                        className="fs-4 cursor-pointer"
                      />
                    </div>
                  </div>

                  <h6>Referred By</h6>
                  <p>{allUsers?.referrerInfo?.uniqueRandomId || 0}</p>
                </div>
              </div>
              <section className="dashboard">
                <h3 className="dashboard-heading">Packages</h3>
                <div className="package-grid">
                  {packages.map((pkg, index) => (
                    <div className="package-card" key={index}>
                      <span>${pkg.subscription}</span>
                      <p style={{ color: pkg.color }}>{pkg.name}</p>
                      <div className="range-container">
                        <span style={{ fontSize: "15px" }}>Trade Limit</span>
                        <span style={{ color: "rgb(221 148 233)" }}>
                          {pkg.range}
                        </span>
                      </div>

                      {packageData?.activePackages?.includes(index + 1) && (
                        <button
                          className="btn-upgrade"
                          type="button"
                          // onClick={() => handlePackage(pkg, index + 1)}
                        >
                          Active
                        </button>
                      )}

                      {!packageData?.activePackages?.includes(index + 1) &&
                        !packageData?.expiredPackages?.includes(index + 1) && (
                          <button
                            className="btn-upgrade"
                            type="button"
                            onClick={() => handlePackage(pkg, index + 1, 0)}
                          >
                            Upgrade
                          </button>
                        )}

                      {packageData?.expiredPackages?.includes(index + 1) &&
                        !packageData?.activePackages?.includes(index + 1) && (
                          <button
                            className="btn-upgrade"
                            type="button"
                            onClick={() => handlePackage(pkg, index + 1, 1)}
                          >
                            Renew
                          </button>
                        )}
                    </div>
                  ))}
                </div>
                <div
                  className="total-grid"
                  style={{ marginTop: "center", marginBottom: "3%" }}
                >
                  {/* <div className="total-card">
                    <div className="sub-total">
                      <h6>Trade Income</h6>
                    </div>
                    <p>
                      {userProfitData?.tradingProfit?.length > 0
                        ? Number(
                            userProfitData.tradingProfit[0]?.profitOrLoss
                          ).toFixed(4)
                        : "0"}

                      <span> USDT</span>
                    </p>
                  </div> */}
                  <div className="total-card">
                    <div className="sub-total">
                      <h6>Referral Income</h6>
                    </div>
                    <p>
                      {Number(dashboardData?.[8])
                        ? (Number(dashboardData?.[8]) / 1e18).toFixed(4)
                        : "0"}
                      <span> USDT</span>
                    </p>
                  </div>
                  <div className="total-card">
                    <div className="sub-total">
                      <h6>Level Income</h6>
                    </div>
                    <p>
                      {Number(dashboardData?.[9])
                        ? (Number(dashboardData?.[9]) / 1e18).toFixed(4)
                        : "0"}
                      <span> USDT</span>
                    </p>
                  </div>
                </div>
                <div className="total-grid" style={{ marginTop: "0px" }}>
                  <div className="total-card">
                    <div className="sub-total">
                      <h6>Royalty Income</h6>
                    </div>
                    <p>
                      {Number(dashboardData?.[10])
                        ? (Number(dashboardData[10]) / 1e18).toFixed(4)
                        : "0"}

                      <span> USDT</span>
                    </p>
                  </div>
                  <div className="total-card">
                    <div className="sub-total">
                      <h6>My Community Size</h6>
                    </div>
                    <p>{allUsers?.userInfo?.[0]?.totalTeamCount ?? "0"}</p>
                  </div>
                  <div className="total-card">
                    <div className="sub-total">
                      <h6>Direct Referrals</h6>
                    </div>
                    <p>{allUsers?.userInfo?.[0]?.totalDirectCount ?? "0"}</p>
                  </div>
                </div>
                <h3 className="dashboard-heading">NFT Incomes</h3>
                <div
                  className="total-grid"
                  style={{ marginTop: "center", marginBottom: "3%" }}
                >
                  {/* <div className="total-card">
                    <div className="sub-total">
                      <h6>Team Trading Income</h6>
                    </div>
                    <p>
                      {allUsers?.totalRewardInEth ?? 0}
                      <span> USDT</span>
                    </p>
                  </div> */}
                  <div className="total-card">
                    <div className="sub-total">
                      <h6>Trading Income</h6>
                    </div>
                    <p>
                      {nftIncomes?.[0]
                        ? (Number(nftIncomes?.[0]) / 1e18).toFixed(4)
                        : "0"}

                      <span> USDT</span>
                    </p>
                  </div>
                  <div className="total-card">
                    <div className="sub-total">
                      <h6>Level Income</h6>
                    </div>
                    <p>
                      {nftIncomes?.[1]
                        ? (Number(nftIncomes?.[1]) / 1e18).toFixed(4)
                        : "0"}
                      <span> USDT</span>
                    </p>
                  </div>
                  <div className="total-card">
                    <div className="sub-total">
                      <h6>Direct Income</h6>
                    </div>
                    <p>
                      {nftIncomes?.[2]
                        ? (Number(nftIncomes?.[2]) / 1e18).toFixed(4)
                        : "0"}
                      <span> USDT</span>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
