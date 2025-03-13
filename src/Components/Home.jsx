import React from "react";
import Header from "./header";
import FrontPage from "./FrontPage";
import Footer from "./Footer";
import LogoBlue from "../assets/LogoBlue.png";

export default function Home() {
  return (
    <div>
      <Header style={{ height: "250px" }} Logo={LogoBlue} />
      <FrontPage />
      <Footer></Footer>
    </div>
  );
}
