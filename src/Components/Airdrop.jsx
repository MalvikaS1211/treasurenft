import React from "react";
import "../css/Airdrop.css";
import Header from "./header";
import LogoBlue from "../assets/LogoBlue.png";
import Footer from "./Footer";
import PhoneHeader from "./PhoneHeader";

const Airdrop = () => {
  return (
    <>
      <div className="d-none d-md-block">
        <Header Logo={LogoBlue} />
      </div>

      {/* Show Phoneheader only on small (sm) screens */}
      <div className="d-block d-md-none">
        <PhoneHeader Logo={LogoBlue} />
      </div>
      <div className="container-fluid level-up-container ">
        <div className="row ">
          {/* Sidebar */}
          <div className="col-md-4 col-sm-12 col-lg-4 level-container">
            <div className="level-item locked">
              <img
                src="https://image.treasurenft.xyz/img/img_lv1_locked.avif"
                alt="LV1"
                className="level-icon"
              />
              <span>LV1</span>
            </div>
            <div className="level-item locked">
              <img
                src="https://image.treasurenft.xyz/img/img_lv1_locked.avif"
                alt="LV2"
                className="level-icon"
              />
              <span>LV2</span>
              <i className="fa fa-lock"></i>
            </div>
            <div className="level-item locked">
              <img
                src="https://image.treasurenft.xyz/img/img_lv1_locked.avif"
                alt="LV3"
                className="level-icon"
              />
              <span>LV3</span>
              <i className="fa fa-lock"></i>
            </div>
            <div className="level-item locked">
              <img
                src="https://image.treasurenft.xyz/img/img_lv1_locked.avif"
                alt="LV4"
                className="level-icon"
              />
              <span>LV4</span>
              <i className="fa fa-lock"></i>
            </div>
            <div className="level-item locked">
              <img
                src="https://image.treasurenft.xyz/img/img_lv1_locked.avif"
                alt="LV5"
                className="level-icon"
              />
              <span>LV5</span>
              <i className="fa fa-lock"></i>
            </div>
            <div className="level-item locked">
              <img
                src="https://image.treasurenft.xyz/img/img_lv1_locked.avif"
                alt="LV6"
                className="level-icon"
              />
              <span>LV6</span>
              <i className="fa fa-lock"></i>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-4 col-sm-12 col-lg-4 main-content">
            <div className="chest-container">
              <img
                src="https://image.treasurenft.xyz/img/img_lv1_unlocked.png"
                alt="Reward Chest"
                className="reward-chest"
              />
            </div>
          </div>
          <div
            class="col-md-4 col-sm-12 col-lg-4"
            style={{ paddingTop: "55px" }}
          >
            <div class="card text-white bg-dark mb-3 shadow-lg level-reward-card">
              <div class="card-body text-center">
                <h5 class="card-title">🎉 Level-up Reward 🎉</h5>
                <p class="card-text">
                  Every time you level up, you unlock{" "}
                  <strong>extra rewards</strong> with a higher chance of
                  receiving valuable items! Work hard to improve your level and{" "}
                  <span class="text-warning">earn bigger prizes.</span>
                </p>

                <button
                  type="button"
                  class="btn btn-outline-warning btn-lg mt-3"
                  disabled
                >
                  🚀 Open Reward
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <Footer />
      </div>
    </>
  );
};

export default Airdrop;
