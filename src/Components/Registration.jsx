import React, { useState } from "react";
import Logo from "../assets/LogoBlue.png";
import HeaderNew from "./HeaderNew";
import FooterNew from "./FooterNew";
import ConnectWallet from "./ConnectWallet";
import { useAccount } from "wagmi";
import { approveToken, registerfn } from "../Helper/Web3";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Registration() {
  const [ref, setRef] = useState();
  const { address } = useAccount();

  const tokenApp = async (amt) => {
    try {
      const appres = approveToken(amt);
      await toast.promise(appres, {
        loading: "Approval in process",
        success: "Approved",
        error: "Error",
      });
      return appres;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const userReg = async () => {
    try {
      const appRes = await tokenApp(15);
      if (appRes) {
        const reg = await registerfn(ref, 15);
        console.log(reg, ":::::");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                      value={address}
                    />
                    <input
                      id="Refferal Address"
                      name="Refferal Address"
                      type="text"
                      placeholder="Refferal Address"
                      required
                      onChange={(e) => {
                        setRef(e.target.value);
                      }}
                    />

                    {address ? (
                      <button
                        className="submit"
                        onClick={userReg}
                        type="button"
                      >
                        Register
                      </button>
                    ) : (
                      <ConnectWallet></ConnectWallet>
                    )}
                    <div class="info Already-container">
                      <span style={{ fontSize: "small" }}>
                        Alreaady have an account?
                      </span>
                      <h6>
                        <Link to="/signin">
                          <a href="">SignIn</a>
                        </Link>
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
