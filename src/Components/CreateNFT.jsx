import React, { useState } from "react";

import FooterNew from "./FooterNew";
import HeaderNew from "./HeaderNew";
import SingleNFT from "./SingleNFT";
import BulkNFT from "./BulkNFT";

export default function CreateNFT() {
  const [activeTab, setActiveTab] = useState("single");

  return (
    <>
      <HeaderNew />
      <div className="tf-create-item tf-section p-0">
        <div className="dashboardbg">
          {" "}
          <div
            class="col-md-12 "
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <div
              class="page-title-heading mg-bt-40"
              style={{ marginTop: "40px" }}
            >
              <h1 class="heading text-center mt-0" style={{ color: "black" }}>
                Create Item
              </h1>
            </div>

            <div className="container justify-content-center mg-bt-50">
              <ul className="nav nav-pills w-100" style={{ cursor: "pointer" }}>
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
        </div>
        <div className="themesflat-container">
          <div className="row">
            {activeTab === "single" ? <SingleNFT /> : <BulkNFT />}
          </div>
        </div>
      </div>
      <div className="Footerbg">
        <FooterNew />
      </div>
    </>
  );
}
