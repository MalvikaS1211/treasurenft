import React, { useState } from "react";

import FooterNew from "../Common/Footer";
import HeaderNew from "../Common/Header";
import SingleNFT from "./SingleNFT";
import BulkNFT from "./BulkNFT";

export default function CreateNFT() {
  const [activeTab, setActiveTab] = useState("single");

  return (
    <>
      <HeaderNew />
      <div className="tf-create-item tf-section p-0">
        <div className="dashboardbg">
          <div
            className="col-md-12 pt-40px pb-"
            style={{ paddingTop: "100px", paddingBottom: "40px" }}
          >
            <h1 className="heading mb-style" style={{ textAlign: "center" }}>
              <span className="tf-text s1">Create Item</span>
            </h1>
          </div>
        </div>
        <div style={{ background: "var(--primary-bg-color)" }}>
          <div className="container justify-content-center ">
            <ul
              className="nav nav-pills w-100 text-white"
              style={{ cursor: "pointer" }}
            >
              <li
                className={activeTab === "single" ? "active" : ""}
                onClick={() => setActiveTab("single")}
              >
                <a>Single NFT Creation</a>
              </li>
              <li
                className={activeTab === "bulk" ? "active" : ""}
                onClick={() => setActiveTab("bulk")}
              >
                <a>Bulk NFT Creation</a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ background: "var(--primary-bg-color)" }}>
          {" "}
          <div className="themesflat-container">
            <div className="row">
              {activeTab === "single" ? <SingleNFT /> : <BulkNFT />}
              {/* <SingleNFT /> */}
            </div>
          </div>
        </div>
      </div>

      <FooterNew />
    </>
  );
}
