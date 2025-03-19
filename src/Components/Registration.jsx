import React from "react";
import Logo from "../assets/LogoBlue.png";
import HeaderNew from "./HeaderNew";
import FooterNew from "./FooterNew";
import ConnectWallet from "./ConnectWallet";

export default function Registration() {
  return (
    <>
      <HeaderNew />
      <section className="tf-login tf-section">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <h2 className="tf-title-heading ct style-1">Sign Up To NFTs</h2>

              {/* Email Login Section */}
              <div className="flat-form box-login-email">
                {/* <div className="box-title-login">
                  <h5>Or login with email</h5>
                </div> */}

                <div className="form-inner">
                  <form action="#" id="contactform">
                    <input
                      id="Wallet Address"
                      name="Wallet Address"
                      type="text"
                      placeholder="Wallet Address"
                      required
                    />
                    <input
                      id="Refferal Address"
                      name="Refferal Address"
                      type="email"
                      placeholder="Refferal Address"
                      required
                    />

                    {/* <button className="submit">Connect Wallet</button> */}
                    <ConnectWallet></ConnectWallet>
                    <div class="info Already-container">
                      <span style={{ fontSize: "small" }}>
                        Alreaady have an account?
                      </span>
                      <h6>
                        <a href="">SignIn</a>
                      </h6>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterNew />
    </>
  );
}
