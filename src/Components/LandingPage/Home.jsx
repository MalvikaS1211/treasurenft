import React from "react";
import HeaderNew from "../Common/Header";
import LandingPage from "./LandingPage";
import FooterNew from "../Common/Footer";

export default function Home() {
  return (
    <div>
      <div className="">
        <HeaderNew />
        <LandingPage />
        <FooterNew />
      </div>
    </div>
  );
}
