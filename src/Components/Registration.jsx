import React, { useEffect, useState } from "react";
import Logo from "../assets/LogoBlue.png";
import HeaderNew from "./HeaderNew";
import FooterNew from "./FooterNew";
import ConnectWallet from "./ConnectWallet";
import { useAccount } from "wagmi";
import {
  approveToken,
  fetchUserTokenBalance,
  isUserExist,
  registerfn,
} from "../Helper/Web3";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { base_url } from "../Helper/Config";

export default function Registration() {
  const navigate = useNavigate();
  const [ref, setRef] = useState("");
  const { address } = useAccount();
  const [userExist, setUserExist] = useState(false);

  const userExistFn = async () => {
    try {
      if (address) {
        const resUserExist = await isUserExist(address);
        // console.log(resUserExist, "resUserExist");
        setUserExist(resUserExist);
      }
    } catch (error) {
      console.error("Error checking user existence:", error);
    }
  };
  useEffect(() => {
    if (address) {
      userExistFn();
    } else {
      toast.error("Please connect your wallet");
    }
  }, [address, userExist]);

  useEffect(() => {
    if (userExist) {
      toast.success("You are already registered");
    }
  }, [userExist]);

  const getIdFromUser = async () => {
    const res = await getIdToAddress(address);
    console.log(res, "getIdToAddress");
  };

  useEffect(() => {
    const data = new URLSearchParams(window.location.search);
    const refLink = data.get("ref");
    console.log(refLink, "refLink");
    const referralLink = `${base_url}/?ref=${refLink}`;
    console.log(referralLink, "referralLink");
    setRef(refLink);
  }, [window.location.search]);

  const tokenApp = async (amt) => {
    try {
      const appres = approveToken(amt);
      await toast.promise(appres, {
        loading: "Approval in process",
        success: "Successfully approved",
        error: "Approve Failed",
      });
      return appres;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const userReg = async () => {
    try {
      if (!address) {
        toast.error("Wallet address is required!");
        return;
      }
      if (userExist) {
        toast.error("You are already registered");
        return;
      }
      const userBal = await fetchUserTokenBalance(address);
      if (userBal < 15) {
        return toast.error("You need to have at least 15 USDT to register");
      }
      const appRes = await tokenApp(15);
      if (appRes) {
        const reg = await registerfn(ref, 15);
        if (reg) {
          toast.success("You are navigating to the website!");
          setTimeout(() => {
            setRef("");
            navigate("/");
          }, 2000);
        } else {
          toast.error("Registration failed. Please try again.");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred during registration.");
    }
  };

  return (
    <>
      <HeaderNew />
      <section className="tf-login tf-section dashboardbg">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <h2 className="tf-title-heading ct style-1">Sign Up To NFTs</h2>

              <div className="flat-form box-login-email">
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
                      value={ref}
                    />

                    {address && !userExist ? (
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
