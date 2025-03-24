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
import { getUserInfo } from "../Helper/API_Functions";
import { useBalance } from "wagmi";
import { fetchBalance } from "@wagmi/core";
import { approveToken, upgradePackageFn, usersFn } from "../Helper/Web3";
import toast from "react-hot-toast";

export default function Dashboard() {
  const { address } = useAccount();
  const [dashboardData, setDashboardData] = useState([]);

  // const balance = fetchBalance({
  //   address: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  // });

  const packages = [
    { name: "Beginner", color: "rgb(212, 55, 55)", subscription: "15" },
    { name: "Seeker", color: "rgb(212, 139, 55)", subscription: "30" },
    { name: "Innovator", color: "rgb(209, 212, 55)", subscription: "55" },
    { name: "Tycoon", color: "rgb(55, 212, 133)", subscription: "90" },
    { name: "Elite", color: "rgb(55, 212, 204)", subscription: "135" },
    { name: "Visionary", color: "rgb(55, 149, 212)", subscription: "190" },
    { name: "Commander", color: "rgb(162, 55, 212)", subscription: "255" },
    { name: "Legend", color: "rgb(212, 55, 102)", subscription: "330" },
    { name: "Titan", color: "rgb(162, 55, 212)", subscription: "415" },
    { name: "Pioneer", color: "rgb(147, 99, 43)", subscription: "510" },
    { name: "Architect", color: "rgb(113, 114, 19)", subscription: "615" },
    { name: "Emperor", color: "rgb(230, 10, 76)", subscription: "725" },
    { name: "Master", color: "rgb(212, 55, 102)", subscription: "845" },
    { name: "King", color: "rgb(160, 212, 54)", subscription: "980" },
    { name: "Grandmaster", color: "rgb(147, 99, 43)", subscription: "1125" },
  ];
  const [allUsers, setAllUsers] = useState({});
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
    } catch (error) {
      console.log(error);
    }
  };

  const tokenApp = async (amt) => {
    try {
      const appres = approveToken(amt);
      await toast.promise(appres, {
        loading: "Approval in process",
        success: "Approved",
        error: "Error",
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
        await upgradePackageFn();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (address) {
      UserInfo();
      getUserInFoFromContract();
    }
  }, [address]);

  return (
    <>
      <div className="p-4 dashboardbg">
        <Navbar></Navbar>
        <main class="content-dashboard">
          <HeaderDashboard title="Dashboard"></HeaderDashboard>
          <div>
            <div class="">
              <div class="user-grid">
                <div
                  class="user-card"
                  style={{
                    background: "transparent",
                    border: "1px solid rgb(33, 82, 175)",
                  }}
                >
                  <h6>User ID</h6>
                  <p>
                    {allUsers?.userInfo?.[0]?.uniqueRandomId || "No user found"}
                  </p>
                  <h6>Rank</h6>
                  <p>-</p>
                </div>
                <div
                  class="user-card"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgb(33, 82, 175) 0%, rgb(107, 167, 231) 51%, rgb(33, 82, 175) 100%)",
                    padding: "1px",
                  }}
                >
                  <h6>My Wallet Fund</h6>
                  <p>
                    {/* {isLoading
                      ? "Loading..."
                      : isError
                      ? "Error fetching balance"
                      : `${data?.formatted} ${data?.symbol}`} */}
                  </p>
                  <h6>My Wallet Address</h6>
                  <p className="text-white p-2">{address}</p>
                </div>
                <div
                  class="user-card"
                  style={{
                    background: "transparent",
                    border: "1px solid rgb(33, 82, 175)",
                  }}
                >
                  <h6>Referral Link</h6>
                  <p>-</p>
                  <h6>Referred By</h6>
                  <p>{dashboardData[2]}</p>
                </div>
              </div>
              <section class="dashboard">
                <h3 className="dashboard-heading">Packages</h3>
                <div class="package-grid">
                  {packages.map((pkg, index) => (
                    <div className="package-card" key={index}>
                      <span>${pkg.subscription}</span>
                      <p style={{ color: pkg.color }}>{pkg.name}</p>

                      {index < Number(dashboardData[7]) ? (
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
                      0<span> USDT</span>
                    </p>
                  </div>
                  <div class="total-card">
                    <div class="sub-total">
                      <h6>Referral Income</h6>
                    </div>
                    <p>
                      0<span> USDT</span>
                    </p>
                  </div>
                  <div class="total-card">
                    <div class="sub-total">
                      <h6>Level Income</h6>
                    </div>
                    <p>
                      0<span> USDT</span>
                    </p>
                  </div>
                </div>
                <div class="total-grid" style={{ marginTop: "0px" }}>
                  <div class="total-card">
                    <div class="sub-total">
                      <h6>Royalty Income</h6>
                    </div>
                    <p>
                      0<span> USDT</span>
                    </p>
                  </div>
                  <div class="total-card">
                    <div class="sub-total">
                      <h6>My Community Size</h6>
                    </div>
                    <p>0</p>
                  </div>
                  <div class="total-card">
                    <div class="sub-total">
                      <h6>Direct Referrals</h6>
                    </div>
                    <p>0</p>
                  </div>
                </div>
                <table
                  class="responsive-table"
                  style={{ width: "70%", margin: "2rem auto" }}
                >
                  <thead>
                    <tr className="text-white">
                      <th style={{ fontWeight: "600", fontSize: "18px" }}>
                        Rank
                      </th>
                      <th style={{ fontWeight: "600", fontSize: "18px" }}>
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-white" style={{ fontSize: "14px" }}>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        Frontline
                      </td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        Homestead
                      </td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        Metropolis
                      </td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        Serenity
                      </td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        Powerup
                      </td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        Superb
                      </td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        Mentor
                      </td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        ICON
                      </td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        DUPLEX
                      </td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        ALPHA
                      </td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        HELIX
                      </td>
                      <td>0 USDT</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        Ambassador
                      </td>
                      <td>0 USDT</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
