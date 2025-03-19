import React from "react";
import Header from "./header";
import FrontPage from "./FrontPage";
import Footer from "./Footer";
import LogoBlue from "../assets/LogoBlue.png";
import PhoneHeader from "./PhoneHeader";
import HeaderNew from "./HeaderNew";
import DashboardNew from "./DashboardNew";
import FooterNew from "./FooterNew";

export default function Home() {
  return (
    <div>
      <div className="">
        {" "}
        <HeaderNew />
        <DashboardNew />
        <FooterNew />
      </div>

      {/* <div className="d-none d-md-block">
        <Header Logo={LogoBlue} />
      </div>

      <div className="d-block d-md-none">
        <PhoneHeader Logo={LogoBlue} />
      </div> */}
      {/* <FrontPage /> */}
      {/* <Footer></Footer> */}
    </div>
  );
}
