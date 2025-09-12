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
  getAvailaibleBalance,
  getPackagePrice,
  upgradePackageFn,
  usersFn,
} from "../Helper/Web3";
import toast from "react-hot-toast";
import { getBalance } from "@wagmi/core";
import { opBNB, opBNBTestnet, polygon } from "wagmi/chains";
import { createConfig, http } from "wagmi";
import { base_url, USDT_TOKEN } from "../Helper/Config";
import moment from "moment";
export default function Dashboard() {
  const { address } = useAccount();
  const [dashboardData, setDashboardData] = useState([]);
  const [allUsers, setAllUsers] = useState(null);
  const [isFetch, setIsFetch] = useState(false);
  const [availableBal, setAvailableBal] = useState(0);
  const [timeLeft, setTimeLeft] = useState(null);
  const [balanceData, setBalanceData] = useState(0);
  const [latestPackage, setLatestPackage] = useState(0);
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
  async function fetchUserTokenBalance() {
    try {
      const balance = await getBalance(config, {
        address: address,
        token: USDT_TOKEN,
      });
      setBalanceData(parseFloat(balance.formatted).toFixed(4));
    } catch (error) {
      console.error("Error fetching token balance:", error);
    }
  }

  const userBalance = fetchUserTokenBalance(address);

  const packages = [
    {
      name: "Beginner",
      color: "rgb(212, 55, 55)",
      subscription: "15",
      range: "$100",
    },
    {
      name: "Seeker",
      color: "rgb(212, 139, 55)",
      subscription: "30",
      range: "$300 ",
    },
    {
      name: "Innovator",
      color: "rgb(209, 212, 55)",
      subscription: "55",
      range: "$700 ",
    },
    {
      name: "Tycoon",
      color: "rgb(55, 212, 133)",
      subscription: "90",
      range: "$1300",
    },
    {
      name: "Elite",
      color: "rgb(55, 212, 204)",
      subscription: "135",
      range: "$2200 ",
    },
    {
      name: "Visionary",
      color: "rgb(55, 149, 212)",
      subscription: "190",
      range: "$3500",
    },
    {
      name: "Commander",
      color: "rgb(162, 55, 212)",
      subscription: "255",
      range: "$5200 ",
    },
    // {
    //   name: "Legend",
    //   color: "rgb(212, 55, 102)",
    //   subscription: "330",
    //   range: "$7400",
    // },
    // {
    //   name: "Titan",
    //   color: "rgb(162, 55, 212)",
    //   subscription: "415",
    //   range: "$10100",
    // },
    // {
    //   name: "Pioneer",
    //   color: "rgb(147, 99, 43)",
    //   subscription: "510",
    //   range: "$13500",
    // },
    // {
    //   name: "Architect",
    //   color: "rgb(113, 114, 19)",
    //   subscription: "615",
    //   range: "$17600",
    // },
    // {
    //   name: "Emperor",
    //   color: "rgb(230, 10, 76)",
    //   subscription: "725",
    //   range: "$22500",
    // },
    // {
    //   name: "Master",
    //   color: "rgb(212, 55, 102)",
    //   subscription: "845",
    //   range: "$28100",
    // },
    // {
    //   name: "King",
    //   color: "rgb(160, 212, 54)",
    //   subscription: "990",
    //   range: "$34700",
    // },
    // {
    //   name: "Grandmaster",
    //   color: "rgb(147, 99, 43)",
    //   subscription: "1125",
    //   range: "$42200",
    // },
  ];

  const UserInfo = async () => {
    try {
      const res = await getUserInfo(address);
      setAllUsers(res);
    } catch (error) {
      console.log(error);
    }
  };

  const UserProfits = async () => {
    try {
      const res = await getUserStats(address);
      setUserProfitData(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserInFoFromContract = async () => {
    try {
      const resUser = await usersFn(address);
      setDashboardData(resUser);
      getPackagePrice(resUser[6])
        .then((res) => {
          console.log(res, "in 123");
          setLatestPackage(res);
        })
        .catch((e) => {
          console.log(e);
        });
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
      // console.log(timeLeft, "appRes", timeLeft == "Expired" ? 1 : 0);
      const appRes = await tokenApp(pkg.subscription);
      // console.log("pkg.subscription", pkg.subscription);
      // console.log("appRes", appRes, timeLeft);
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

  const countdown = () => {
    if (
      !address ||
      !allUsers?.userPackageInfo?.[0]?.time ||
      !allUsers?.expiryTime
    )
      return;

    const interval = setInterval(() => {
      const time = allUsers?.userPackageInfo[0]?.time; // assumed to be Unix timestamp in seconds
      const expiryDuration = allUsers?.expiryTime; // assumed to be in seconds

      if (!time || !expiryDuration) {
        console.log("Missing time or expiry duration");
        return;
      }

      const expiryTime = time + expiryDuration;
      const now = moment().unix(); // Current Unix timestamp in seconds
      const remainingSeconds = expiryTime - now;
      // console.log(remainingSeconds, time, expiryDuration, now, "count:::");
      if (remainingSeconds <= 0) {
        clearInterval(interval);
        setTimeLeft("Expired");
        console.log("Package expired");
      } else {
        const duration = moment.duration(remainingSeconds, "seconds");
        const days = Math.floor(duration.asDays());
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();
        setTimeLeft(`${days}DD ${hours}HH ${minutes}MM ${seconds}SS`);
      }
    }, 1000);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    countdown();
  }, [address, allUsers]);

  useEffect(() => {
    if (address) {
      getUserInFoFromContract();
      UserInfo();
      fetchUserTokenBalance();
      UserProfits();
      // getIdFromUser();
    }
  }, [address, isFetch]);
  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(referralLink);
        toast.success("Referral link copied!");
      } else {
        // Fallback for insecure contexts (HTTP)
        const textArea = document.createElement("textarea");
        textArea.value = referralLink;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        toast.success("Referral link copied!");
      }
    } catch (error) {
      console.error("Copy failed:", error);
      toast.error("Failed to copy the link.");
    }
  };

  return (
    <>
      <div className="p-4 ">
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
          <h3 class="time-heading" id="timeDisplay">
            {timeLeft || "00 DD:00 HH:00 MM:00 SS"}
          </h3>
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
                  <h6>My Wallet Fund</h6>
                  <p className="">{balanceData}</p>
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
                  <p onClick={copyToClipboard} className="copytheRefferal">
                    {referralLink}
                  </p>
                  <h6>Referred By</h6>
                  <p>{allUsers?.referrerInfo?.uniqueRandomId || 0}</p>
                </div>
              </div>

              {timeLeft == "Expired" && (
                <>
                  <div className="text-dark mb-3" style={{ fontSize: "20px" }}>
                    Note: Your Previous package is Expired of {latestPackage}{" "}
                    USDT Please Renew OR Upgrade your Package.
                  </div>
                  <div
                    className="renew-btn mb-5"
                    onClick={() => {
                      handlePackage({ subscription: latestPackage });
                    }}
                  >
                    Renew
                  </div>
                </>
              )}

              <section class="dashboard">
                <h3 className="dashboard-heading">Packages</h3>
                <div class="package-grid">
                  {packages.map((pkg, index) => (
                    <div className="package-card" key={index}>
                      <span>${pkg.subscription}</span>
                      <p style={{ color: pkg.color }}>{pkg.name}</p>
                      <div className="range-container">
                        <span style={{ fontSize: "15px" }}>Trade Limit</span>
                        <span style={{ color: "#830499" }}>{pkg.range}</span>
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
                  <div class="total-card">
                    <div class="sub-total">
                      <h6>Group Trading Income</h6>
                    </div>
                    <p>
                      <p>{allUsers?.totalRewardInEth ?? 0}</p>

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
