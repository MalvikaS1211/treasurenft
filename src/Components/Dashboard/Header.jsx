import React, { useState } from "react";
import ConnectWallet from "../Common/ConnectWallet";
import Navbar from "./Navbar"; // Import the Navbar
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header({ title }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="header-dashboard">
        <h1>{title}</h1>
        <div className="header-right">
          <ConnectWallet />
          <div className="d-md-block d-lg-none ">
            <GiHamburgerMenu
              onClick={toggleSidebar}
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbardashboard"
              aria-controls="offcanvasNavbar"
              size={25}
              color="black"
            />
          </div>
        </div>
      </header>

      {/* Render Navbar and pass the state */}
      <Navbar isSidebarOpen={!isSidebarOpen} />
    </>
  );
}
