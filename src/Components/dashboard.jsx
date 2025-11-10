import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
import ConnectWallet from "./ConnectWallet";
import HeaderDashboard from "./HeaderDashboard";
import "../css/navbar.css";
import "../css/dashboard.css";
import { FaMedal } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa6";
import { TfiCup } from "react-icons/tfi";
import { PiFlowerTulipDuotone } from "react-icons/pi";
import { FaRegCopy } from "react-icons/fa6";
import { useAccount } from "wagmi";
import {
  getIdToAddress,
  getUserInfo,
  getUserStats,
} from "../Helper/API_Functions";
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
} from "../Helper/Web3";
import toast from "react-hot-toast";
import { getBalance } from "@wagmi/core";
import { opBNB, opBNBTestnet, polygon } from "wagmi/chains";
import { createConfig, http } from "wagmi";
import { base_url, USDT_TOKEN } from "../Helper/Config";
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
      range: "$160 ",
    },
    {
      name: "Platinum",
      color: "rgb(209, 212, 55)",
      subscription: "30",
      range: "$460",
    },
    {
      name: "Diamond",
      color: "rgb(55, 212, 133)",
      subscription: "50",
      range: "$1160",
    },
    {
      name: "Crown",
      color: "rgb(55, 212, 204)",
      subscription: "100",
      range: "$2660",
    },
    {
      name: "Kohinoor",
      color: "rgba(76, 147, 194, 1)",
      subscription: "150",
      range: "$5660",
    },
    {
      name: "King",
      color: "rgb(162, 55, 212)",
      subscription: "200",
      range: "$10660",
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

  const handlePackage = async (pkg) => {
    try {
      if (!address) {
        return toast.error("Please connect your wallet");
      }
      console.log(timeLeft, "appRes", timeLeft == "Expired" ? 1 : 0);
      const appRes = await tokenApp(pkg.subscription);
      console.log("pkg.subscription", pkg.subscription);
      console.log("appRes", appRes, timeLeft);
      if (appRes) {
        await upgradePackageFn(timeLeft == "Expired" ? 1 : 0);
        setTimeout(() => {
          setIsFetch(!isFetch);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getIdFromUser = async () => {
    try {
      const uniqueId = allUsers?.userInfo[0]?.uniqueRandomId;
      const res = await getIdToAddress(uniqueId);
    } catch (error) {
      console.error("Error in getIdFromUser:", error);
    }
  };
  const [timeParts, setTimeParts] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (
      !address ||
      !allUsers?.userPackageInfo?.[0]?.time ||
      !allUsers?.expiryTime
    ) {
      setTimeParts({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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
        setTimeParts({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const duration = moment.duration(remainingSeconds, "seconds");
        const days = Math.floor(duration.asDays());
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();

        setTimeParts({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [address, allUsers]);

  useEffect(() => {
    if (address) {
      getUserInFoFromContract();
      UserInfo();

      UserProfits();
      // getIdFromUser();
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
      // console.log(res, address, nftIncomes?.[0], "nftIncomes");
      setNftIncomes(res);
    } catch (error) {
      console.log("Error in nftIncomes:", error);
    }
  };

  const fetchTokenBal = async () => {
    try {
      const res = await fetchIFTTtokenBalance();
      console.log("Fetched result:", res);
      setTokenBalance(res);
    } catch (error) {
      console.error("fetchbalance error:", error);
    }
  };

  const fetchUserBalance = async () => {
    try {
      const res = await fetchWalletBalance(address);
      console.log("fetchUserBalance", res);
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
  return (
    <>
      <div className="p-4 dashboard-container">
        <main
          class="content-dashboard "
          style={{
            marginLeft:
              window.innerWidth > 300 && window.innerWidth < 1200
                ? "0px"
                : "290px",
          }}
        >
          <Navbar title="Dashboard"></Navbar>
          {/* <HeaderDashboard title="Dashboard"></HeaderDashboard> */}
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap flex-md-nowrap  flex-sm-nowrap gap-3">
            <div className="button-balance-group ">
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
                  <h6>Value in USDT</h6>
                  <p>{valueInUSDT} USDT</p>
                </div>
              </div>
            </div>

            <div
              className="d-flex justify-content-center align-items-center text-white p-4"
              style={{
                backgroundColor: "#000",
                borderRadius: "12px",
              }}
            >
              <div className="d-flex align-items-center justify-content-center">
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
                    {index < 3 && (
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
          </div>

          {/* <h3 class="time-heading" id="timeDisplay">
            {timeLeft || "00 DD:00 HH:00 MM:00 SS"}
          </h3> */}
          <div>
            <div class="">
              <div class="user-grid">
                <div class="user-card wallet-card">
                  <h6>User ID</h6>
                  <p>
                    {allUsers?.userInfo[0]?.uniqueRandomId || "No user found"}
                  </p>
                  <h6>Rank</h6>
                  <p>{allUsers?.rank || 0}</p>
                </div>
                <div class="user-card wallet-card">
                  {/* <h6>My Wallet Fund</h6>
                  <p className="">{balanceData}</p> */}

                  <h6>My Total Income</h6>
                  <p className=" p-2">
                    {(
                      (userProfitData?.tradingProfit?.length > 0
                        ? Number(
                            userProfitData.tradingProfit[0]?.profitOrLoss || 0
                          )
                        : 0) +
                      (Number(dashboardData?.[8] || 0) +
                        Number(dashboardData?.[9] || 0) +
                        Number(dashboardData?.[10] || 0)) /
                        1e18
                    ).toFixed(4)}
                  </p>
                </div>
                <div class="user-card wallet-card">
                  <h6>Referral Link</h6>
                  <div className="d-flex gap-1 align-items-center ">
                    {" "}
                    <p onClick={copyToClipboard} className="copytheRefferal">
                      {referralLink}
                    </p>
                    <FaRegCopy
                      onClick={copyToClipboard}
                      color="white"
                      className="fs-4 cursor-pointer"
                    />
                  </div>

                  <h6>Referred By</h6>
                  <p>{allUsers?.referrerInfo?.uniqueRandomId || 0}</p>
                </div>
              </div>
              <section class="dashboard">
                <h3 className="dashboard-heading">Packages</h3>
                <div class="package-grid">
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

                      {(timeLeft == "Expired"
                        ? index < Number(dashboardData[6]) - 1
                        : index < Number(dashboardData[6])) && (
                        <button
                          className="btn-upgrade"
                          type="button"
                          // onClick={() => handlePackage(pkg)}
                          style={{ cursor: "default" }}
                        >
                          Active
                        </button>
                      )}

                      {(timeLeft == "Expired"
                        ? index >= Number(dashboardData[6]) - 1
                        : index >= Number(dashboardData[6])) && (
                        <button
                          className="btn-upgrade"
                          type="button"
                          onClick={() => handlePackage(pkg)}
                        >
                          Upgrade
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <div
                  class="total-grid"
                  style={{ marginTop: "center", marginBottom: "3%" }}
                >
                  <div class="total-card">
                    <div class="sub-total">
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
                  </div>
                  <div class="total-card">
                    <div class="sub-total">
                      <h6>Referral Income</h6>
                    </div>
                    <p>
                      {Number(dashboardData?.[8])
                        ? (Number(dashboardData?.[8]) / 1e18).toFixed(4)
                        : "0"}
                      <span> USDT</span>
                    </p>
                  </div>
                  <div class="total-card">
                    <div class="sub-total">
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
                <div class="total-grid" style={{ marginTop: "0px" }}>
                  <div class="total-card">
                    <div class="sub-total">
                      <h6>Royalty Income</h6>
                    </div>
                    <p>
                      {Number(dashboardData?.[10])
                        ? (Number(dashboardData[10]) / 1e18).toFixed(4)
                        : "0"}

                      <span> USDT</span>
                    </p>
                  </div>
                  <div class="total-card">
                    <div class="sub-total">
                      <h6>My Community Size</h6>
                    </div>
                    <p>{allUsers?.userInfo?.[0]?.totalTeamCount ?? "0"}</p>
                  </div>
                  <div class="total-card">
                    <div class="sub-total">
                      <h6>Direct Referrals</h6>
                    </div>
                    <p>{allUsers?.userInfo?.[0]?.totalDirectCount ?? "0"}</p>
                  </div>
                </div>
                <h3 className="dashboard-heading">NFT Incomes</h3>
                <div
                  class="total-grid"
                  style={{ marginTop: "center", marginBottom: "3%" }}
                >
                  {/* <div class="total-card">
                    <div class="sub-total">
                      <h6>Team Trading Income</h6>
                    </div>
                    <p>
                      {allUsers?.totalRewardInEth ?? 0}
                      <span> USDT</span>
                    </p>
                  </div> */}
                  <div class="total-card">
                    <div class="sub-total">
                      <h6>Trading Income</h6>
                    </div>
                    <p>
                      {nftIncomes?.[0]
                        ? (Number(nftIncomes?.[0]) / 1e18).toFixed(4)
                        : "0"}

                      <span> USDT</span>
                    </p>
                  </div>
                  <div class="total-card">
                    <div class="sub-total">
                      <h6>Level Income</h6>
                    </div>
                    <p>
                      {nftIncomes?.[1]
                        ? (Number(nftIncomes?.[1]) / 1e18).toFixed(4)
                        : "0"}
                      <span> USDT</span>
                    </p>
                  </div>
                  <div class="total-card">
                    <div class="sub-total">
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
