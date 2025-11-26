import React from "react";
import Header from "../Common/Header";
import LandingPage from "./LandingPage";
import Footer from "../Common/Footer";

export default function Home() {
  return (
    <div>
      <div className="">
        <Header />
        <LandingPage />
        <Footer />
      </div>
    </div>
  );
}
