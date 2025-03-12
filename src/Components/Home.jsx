import React from "react";
import Header from "./header";
import Dashboard from "./dashboard";
import Footer from "./Footer";
import LogoBlue from "../assets/LogoBlue.png";

export default function Home() {
  return (
    <div>
      <Header style={{ height: "250px" }} Logo={LogoBlue} />
      <Dashboard />
      <Footer></Footer>
    </div>
  );
}
