import React from "react";
import Header from "./header";
import FrontPage from "./FrontPage";

import LogoBlue from "../assets/LogoBlue.png";
import PhoneHeader from "./PhoneHeader";
import HeaderNew from "./HeaderNew";
import LandingPage from "./LandingPage";
import FooterNew from "./FooterNew";

export default function Home() {
  return (
    <div>
      <div className="">
        {" "}
        <HeaderNew />
        <LandingPage />
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
