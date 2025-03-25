import React from "react";
import Navbar from "./Navbar";
import Favicon from "../assets/Favicon.png";
import ConnectWallet from "./ConnectWallet";
import HeaderDashboard from "./HeaderDashboard";
export default function Community() {
  return (
    <>
      <div className="p-4 dashboardbg">
        {" "}
        <Navbar></Navbar>
        <main className="content-dashboard">
          <HeaderDashboard title="Community" />
          <div
            className=""
            style={{
              height: "auto",
              minHeight: "100vh",
              overflow: "hidden",
              marginBottom: "5%",
            }}
          >
            <div className="community_div">
              <div className="button_container">
                <input
                  type="text"
                  className="ComunitySearch placeholder-white community-search"
                  placeholder="Enter User ID"
                  defaultValue="0"
                />
                <button
                  className="btn"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgb(33, 82, 175) 0%, rgb(107, 167, 231) 51%, rgb(33, 82, 175) 100%);",
                    borderRadius: "30px",
                  }}
                >
                  Search
                </button>
              </div>
              <div className="button_container" style={{ marginTop: "5%" }}>
                <button disabled className="prev-next-btn">
                  PREV
                </button>
                <button disabled className="prev-next-btn">
                  NEXT
                </button>
              </div>
            </div>
            <div className="tree">
              <img
                src={Favicon}
                alt="Tree Logo"
                className="community-branch-icon"
              />
              <div className="logo">0</div>
              <div className="branch-connector">
                <div className="line vertical"></div>
                <div className="line horizontal"></div>
                <div className="line diagonal-left"></div>
                <div className="line diagonal-right"></div>
              </div>
              <div className="branches">
                {[...Array(2)].map((_, index) => (
                  <div className="branch-item" key={index}>
                    <img
                      src={Favicon}
                      alt="Branch Logo"
                      className="community-branch-icon"
                    />
                    <p>0</p>
                    <button style={{ cursor: "pointer" }}>Vacant</button>
                    <div className="branch-connector2">
                      <div className="line vertical"></div>
                      <div className="line horizontal"></div>
                      <div className="line diagonal-left">
                        <div className="status-container">
                          <img
                            src={Favicon}
                            alt="Status Logo"
                            className="community-branch-icon"
                          />
                          <p>0</p>
                          <button style={{ cursor: "pointer" }}>Vacant</button>
                        </div>
                      </div>
                      <div className="line diagonal-right">
                        <div className="status-container2">
                          <img
                            src={Favicon}
                            alt="Status Logo"
                            className="community-branch-icon"
                          />
                          <p>0</p>
                          <button style={{ cursor: "pointer" }}>Vacant</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
