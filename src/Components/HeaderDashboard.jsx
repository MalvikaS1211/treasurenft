import React, { useState } from "react";
import ConnectWallet from "./ConnectWallet";
import Navbar from "./Navbar"; // Import the Navbar

export default function Header({ title }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="header">
        <h1>{title}</h1>
        <div className="header-right">
          <ConnectWallet />
          <button className="menu-btn" id="menu-btn" onClick={toggleSidebar}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              color="#fff"
              fontSize="20"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(255, 255, 255)" }}
            >
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Render Navbar and pass the state */}
      <Navbar isSidebarOpen={isSidebarOpen} />
    </>
  );
}
