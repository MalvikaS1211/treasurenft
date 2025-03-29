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
import { getIdToAddress, getUserInfo } from "../Helper/API_Functions";
import { useBalance } from "wagmi";
import { fetchBalance } from "@wagmi/core";
import {
  approveToken,
  getAvailaibleBalance,
  upgradePackageFn,
  usersFn,
} from "../Helper/Web3";
import toast from "react-hot-toast";
import { getBalance } from "@wagmi/core";
import { opBNBTestnet, polygon } from "wagmi/chains";
import { createConfig, http } from "wagmi";
import { base_url } from "../Helper/Config";
export default function Dashboard() {
  const { address } = useAccount();
  const [dashboardData, setDashboardData] = useState([]);
  const [allUsers, setAllUsers] = useState({});
  const [isFetch, setIsFetch] = useState(false);
  const [availableBal, setAvailableBal] = useState(0);
  const data = new URLSearchParams(window.location.search);
  const refLink = data.get("ref");
  const uniqueId = allUsers?.userInfo?.[0]?.uniqueRandomId || "defaultId";
  const referralLink = `${base_url}/signup?ref=${uniqueId}`;
  const config = createConfig({
    chains: [opBNBTestnet],
    transports: {
      [opBNBTestnet.id]: http(),
    },
  });
  const [balanceData, setBalanceData] = useState([]);
  async function fetchUserTokenBalance() {
    try {
      const balance = await getBalance(config, {
        address: address,
        token: "0x8c5884b8B8281151abe5E381E252514b47FBCD05",
      });
      setBalanceData(parseFloat(balance.formatted).toFixed(4));
      // console.log(balance, "tokenBalance");
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
      range: "$50-$100",
    },
    {
      name: "Seeker",
      color: "rgb(212, 139, 55)",
      subscription: "30",
      range: "$101-$200 ",
    },
    {
      name: "Innovator",
      color: "rgb(209, 212, 55)",
      subscription: "55",
      range: "$201-$350 ",
    },
    {
      name: "Tycoon",
      color: "rgb(55, 212, 133)",
      subscription: "90",
      range: "$351-$550",
    },
    {
      name: "Elite",
      color: "rgb(55, 212, 204)",
      subscription: "135",
      range: "$551-$800 ",
    },
    {
      name: "Visionary",
      color: "rgb(55, 149, 212)",
      subscription: "190",
      range: "$801-$1100",
    },
    {
      name: "Commander",
      color: "rgb(162, 55, 212)",
      subscription: "255",
      range: "$1101-$1450 ",
    },
    {
      name: "Legend",
      color: "rgb(212, 55, 102)",
      subscription: "330",
      range: "$1451-$1850",
    },
    {
      name: "Titan",
      color: "rgb(162, 55, 212)",
      subscription: "415",
      range: "$1851-$2300 ",
    },
    {
      name: "Pioneer",
      color: "rgb(147, 99, 43)",
      subscription: "510",
      range: "$2301-$2800 ",
    },
    {
      name: "Architect",
      color: "rgb(113, 114, 19)",
      subscription: "615",
      range: "$2801-$3350 ",
    },
    {
      name: "Emperor",
      color: "rgb(230, 10, 76)",
      subscription: "725",
      range: "$3351-$3900 ",
    },
    {
      name: "Master",
      color: "rgb(212, 55, 102)",
      subscription: "845",
      range: "$3901-$4550",
    },
    {
      name: "King",
      color: "rgb(160, 212, 54)",
      subscription: "980",
      range: "$4551-$5250 ",
    },
    {
      name: "Grandmaster",
      color: "rgb(147, 99, 43)",
      subscription: "1125",
      range: "$5251-$6750 ",
    },
  ];

  const UserInfo = async () => {
    try {
      const res = await getUserInfo(address);
      setAllUsers(res);
      console.log("UserInfo", res);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(userInfo, "userInfo::::");

  const getUserInFoFromContract = async () => {
    try {
      const resUser = await usersFn(address);
      setDashboardData(resUser);
      console.log("getUserInFoFromContract", resUser);
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
      const appRes = await tokenApp(pkg.subscription);
      console.log("pkg.subscription", pkg.subscription);
      console.log("appRes", appRes);
      if (appRes) {
        await upgradePackageFn(0);
        setTimeout(() => {
          setIsFetch(!isFetch);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const AvailableBalance = async () => {
  //   try {
  //     // console.log("Fetching balance..."); // Debugging log
  //     const resBal = await getAvailaibleBalance(address);
  //     // console.log("resBal", resBal); // Check if it logs the balance
  //     setAvailableBal(resBal);
  //   } catch (error) {
  //     console.log("Error fetching balance:", error);
  //   }
  // };

  const getIdFromUser = async () => {
    try {
      console.log("adhakhd");
      const uniqueId = allUsers?.userInfo[0]?.uniqueRandomId;
      console.log("123456", allUsers);
      console.log("uniqueId", uniqueId);
      console.log(uniqueId, "::::");
      const res = await getIdToAddress(uniqueId);
      console.log("uniqueId", uniqueId);
      console.log(res, "getIdToAddress");
    } catch (error) {
      console.error("Error in getIdFromUser:", error);
    }
  };

  useEffect(() => {
    if (address) {
      getUserInFoFromContract();
      UserInfo();
      fetchUserTokenBalance();

      getIdFromUser();
    }
  }, [address, isFetch]);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      toast.success("Referral link copied!");
    } catch (error) {
      console.error("Copy failed:", error);
      toast.error("Failed to copy the link.");
    }
  };

  return (
    <>
      <div className="p-4 ">
        <Navbar></Navbar>
        <main
          class="content-dashboard "
          style={{
            marginLeft:
              window.innerWidth > 768 && window.innerWidth < 1200
                ? "0px"
                : "290px",
          }}
        >
          <HeaderDashboard title="Dashboard"></HeaderDashboard>
          <div>
            <div class="">
              <div class="user-grid">
                <div class="user-card wallet-card">
                  <h6>User ID</h6>
                  <p>
                    {allUsers?.userInfo?.[0]?.uniqueRandomId || "No user found"}
                  </p>
                  <h6>Rank</h6>
                  <p>{allUsers?.rank || 0}</p>
                </div>
                <div class="user-card wallet-card">
                  <h6>My Wallet Fund</h6>
                  <p className="">{balanceData}</p>
                  <h6>My Trading Profit</h6>
                  <p className=" p-2">
                    {(allUsers.tradingProfit > 0 &&
                      allUsers?.tradingProfit[0]?.profitOrLoss) ||
                      0}
                  </p>
                  {/* <h6>My Wallet Address</h6>
                  <p className="text-white p-2">{address}</p> */}
                </div>
                <div class="user-card wallet-card">
                  <h6>Referral Link</h6>
                  <p onClick={copyToClipboard} className="copytheRefferal">
                    {referralLink}
                  </p>
                  <h6>Referred By</h6>
                  <p>
                    {typeof dashboardData?.[2] === "string"
                      ? ` ${dashboardData?.[2].slice(
                          0,
                          4
                        )}...${dashboardData?.[2].slice(-6)}`
                      : "No data available"}
                  </p>
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
                        <span style={{ fontSize: "15px" }}>Range</span>
                        <span style={{ color: "#830499" }}>{pkg.range}</span>
                      </div>

                      {index < Number(dashboardData[6]) ? (
                        <button
                          className="btn-upgrade"
                          type="button"
                          // onClick={() => handlePackage(pkg)}
                          style={{ cursor: "default" }}
                        >
                          Active
                        </button>
                      ) : (
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
                      <h6>Total Income</h6>
                    </div>
                    <p>
                      {(
                        (Number(dashboardData?.[8] ?? 0) +
                          Number(dashboardData?.[9] ?? 0) +
                          Number(dashboardData?.[10] ?? 0)) /
                        1e18
                      ).toFixed(4)}
                      <span> USDT</span>
                    </p>
                  </div>
                  <div class="total-card">
                    <div class="sub-total">
                      <h6>Referral Income</h6>
                    </div>
                    <p>
                      {(Number(dashboardData?.[8]) / 1e18).toFixed(4) ?? "0"}
                      <span> USDT</span>
                    </p>
                  </div>
                  <div class="total-card">
                    <div class="sub-total">
                      <h6>Level Income</h6>
                    </div>
                    <p>
                      {(Number(dashboardData?.[9]) / 1e18).toFixed(4) ?? "0"}
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
                      {(Number(dashboardData?.[10]) / 1e18).toFixed(4) ?? "0"}
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

                {/* <table
                  class="responsive-table"
                  style={{ width: "70%", margin: "2rem auto" }}
                >
                  <thead>
                    <tr className="text-white">
                      <th className="rank-table-row-head">Rank</th>
                      <th className="rank-table-row-head">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="text-white" style={{ fontSize: "14px" }}>
                    <tr>
                      <td className="rank-table-row">Beginner</td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td className="rank-table-row">Seeker</td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td className="rank-table-row">Innovator</td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td className="rank-table-row">Tycoon</td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td className="rank-table-row">Elite</td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td className="rank-table-row">Visionary</td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td className="rank-table-row">Commander</td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td className="rank-table-row">Legend</td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td className="rank-table-row">Titan</td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td className="rank-table-row">Pioneer</td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td className="rank-table-row">Architect</td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td className="rank-table-row">Emperor</td>
                      <td>0 USDT</td>
                    </tr>

                    <tr>
                      <td className="rank-table-row">Master</td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td className="rank-table-row">King</td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td className="rank-table-row">Grandmaster</td>
                      <td>0 USDT</td>
                    </tr>
                  </tbody>
                </table> */}
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
