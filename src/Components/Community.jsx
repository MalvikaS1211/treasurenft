import React from "react";
import Navbar from "./Navbar";
import Favicon from "../assets/Favicon.png";
import ConnectWallet from "./ConnectWallet";
import HeaderDashboard from "./HeaderDashboard";
export default function Community() {
  return (
    <>
      <Navbar></Navbar>
      <main className="content">
        <HeaderDashboard title="Community" />
        <div
          className="flex flex-col"
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
                className="ComunitySearch placeholder-white"
                placeholder="Enter User ID"
                defaultValue="0"
                style={{
                  backgroundColor: "rgb(34, 34, 34)",
                  borderRadius: "30px",
                  cursor: "pointer",
                  color: "rgb(255, 255, 255)",
                  outline: "none",
                  border: "1px solid rgb(46, 46, 46)",
                  paddingLeft: "15px",
                }}
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
              <button
                disabled
                style={{
                  borderRadius: "20px",
                  width: "150px",
                  backgroundColor: "rgb(26, 26, 26)",
                  height: "40px",
                  color: "rgb(255, 255, 255)",
                  cursor: "not-allowed",
                  fontSize: "16px",
                  borderColor: "rgb(26, 26, 26)",
                  fontFamily: "Geist Mono",
                }}
              >
                PREV
              </button>
              <button
                disabled
                style={{
                  borderRadius: "20px",
                  width: "120px",
                  height: "40px",
                  backgroundColor: "rgb(26, 26, 26)",
                  color: "rgb(255, 255, 255)",
                  cursor: "not-allowed",
                  fontSize: "16px",
                  borderColor: "rgb(26, 26, 26)",
                  fontFamily: "Geist Mono",
                }}
              >
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
    </>
  );
}
