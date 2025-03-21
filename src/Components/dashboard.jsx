import React, { useEffect } from "react";
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

export default function Dashboard() {
  const { address } = useAccount();

  const balance = fetchBalance({
    address: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  });

  const packages = [
    { name: "Beginner", color: "rgb(212, 55, 55)", subscription: "$15" },
    { name: "Seeker", color: "rgb(212, 139, 55)", subscription: "$30" },
    { name: "Innovator", color: "rgb(209, 212, 55)", subscription: "$55" },
    { name: "Tycoon", color: "rgb(55, 212, 133)", subscription: "$90" },
    { name: "Elite", color: "rgb(55, 212, 204)", subscription: "$135" },
    { name: "Visionary", color: "rgb(55, 149, 212)", subscription: "$190" },
    { name: "Commander", color: "rgb(162, 55, 212)", subscription: "$255" },
    { name: "Legend", color: "rgb(212, 55, 102)", subscription: "$330" },
    { name: "Titan", color: "rgb(160, 212, 54)", subscription: "$415" },
    { name: "Pioneer", color: "rgb(147, 99, 43)", subscription: "$510" },
    { name: "Architect", color: "rgb(113, 114, 19)", subscription: "$615" },
    { name: "Emperor", color: "rgb(230, 10, 76)", subscription: "$725" },
    { name: "Master", color: "rgb(212, 55, 102)", subscription: "$845" },
    { name: "King", color: "rgb(160, 212, 54)", subscription: "$980" },
    { name: "Grandmaster", color: "rgb(147, 99, 43)", subscription: "$1125" },
  ];

  const UserInfo = async () => {
    const res = await getUserInfo(address);
    console.log("UserInfo", res);
  };

  useEffect(() => {
    // WalletBalance(address);
    UserInfo();
  }, []);

  return (
    <>
      <div className="p-4 dashboardbgcolor">
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
                  <p>-</p>
                  <h6>Rank</h6>
                  <p>-</p>
                </div>
                <div
                  class="user-card"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgb(33, 82, 175) 0%, rgb(107, 167, 231) 51%, rgb(33, 82, 175) 100%)",
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
                  <p className="text-white">{address}</p>
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
                  <p>-</p>
                </div>
              </div>
              <section class="dashboard">
                <h3 className="dashboard-heading">Packages</h3>
                <div class="package-grid">
                  {packages.map((pkg, index) => (
                    <div className="package-card" key={index}>
                      <span>{pkg.subscription}</span>
                      <p style={{ color: pkg.color }}>{pkg.name}</p>

                      <button className=" btn-upgrade">Upgrade</button>
                    </div>
                  ))}
                </div>
                {/* <h3 className="dashboard-heading">Daily Royalty Countdown</h3>
                <div class="countdown-grid">
                  <div class="countdown-card">
                    <div class="icon-container">
                      <FaMedal color="white" />
                    </div>
                    <h6 style={{ color: "rgb(108, 151, 207)" }}>DUPLEX</h6>
                    <p> 0.00 USDT</p>
                    <p
                      style={{ fontSize: "14px", color: "rgb(108, 151, 207)" }}
                    >
                      250
                    </p>
                  </div>
                  <div class="countdown-card">
                    <div class="icon-container">
                      <PiFlowerTulipDuotone color="white" />
                    </div>
                    <h6 style={{ color: "rgb(108, 207, 166)" }}>ALPHA</h6>
                    <p> 0.00 USDT</p>
                    <p
                      style={{ fontSize: "14px", color: "rgb(108, 207, 166)" }}
                    >
                      42
                    </p>
                  </div>
                  <div class="countdown-card">
                    <div class="icon-container">
                      <TfiCup color="white" />
                    </div>
                    <h6 style={{ color: "rgb(207, 205, 108)" }}>HELIX</h6>
                    <p> 0.00 USDT</p>
                    <p
                      style={{ fontSize: "14px", color: "rgb(207, 205, 108)" }}
                    >
                      28
                    </p>
                  </div>
                  <div class="countdown-card">
                    <div class="icon-container">
                      <FaCrown color="white" />
                    </div>
                    <h6 style={{ color: "rgb(207, 161, 108)" }}>Ambassador</h6>
                    <p> 0.00 USDT</p>
                    <p
                      style={{ fontSize: "14px", color: "rgb(207, 161, 108)" }}
                    >
                      37
                    </p>
                  </div>
                </div>
                <h2
                  class="royalty_heading"
                  style={{ textAlign: "center", marginTop: "3%" }}
                  className="dashboard-heading"
                >
                  00 HH : 00 mm : 00 ss
                </h2> */}
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
              {/* <h3 className="dashboard-heading">Rank Income</h3>
              <div className="rank-income" style={{ overflowX: "auto" }}>
                <table>
                  <tr className="text-white">
                    <th>From</th>
                    <th>Amount (USDT)</th>
                    <th>Rank Level</th>
                    <th>Time</th>
                  </tr>
                  <tr></tr>
                </table>
              </div>
              <div style={{ marginTop: "2%" }}>
                <div class="MuiStack-root css-1ov46kg">
                  <nav
                    aria-label="pagination navigation"
                    class="MuiPagination-root MuiPagination-text css-1xdhyk6"
                  >
                    <ul class="MuiPagination-ul css-51eq8m">
                      <li>
                        <FaArrowLeft color="#6c6c6c" />
                      </li>
                      <li>
                        <button
                          class="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-text MuiPaginationItem-rounded Mui-selected MuiPaginationItem-page css-yv5wb4"
                          tabindex="0"
                          type="button"
                          aria-current="true"
                          aria-label="page 1"
                        >
                          1
                        </button>
                      </li>
                      <li>
                        <FaArrowRight color="#6c6c6c" />
                      </li>
                    </ul>
                  </nav>
                </div>
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
