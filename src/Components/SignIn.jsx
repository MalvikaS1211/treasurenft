import React, { useEffect, useState } from "react";
import Logo from "../assets/LogoBlue.png";
import HeaderNew from "./HeaderNew";
import FooterNew from "./FooterNew";
import ConnectWallet from "./ConnectWallet";
import { useAccount } from "wagmi";
import { isUserExist } from "../Helper/Web3";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const { address } = useAccount();
  const [userExist, setUserExist] = useState(false);
  const navigate = useNavigate();

  const userExistFn = async () => {
    try {
      if (address) {
        const resUserExist = await isUserExist(address);
        console.log(resUserExist, "resUserExist");
        setUserExist(resUserExist);
      }
    } catch (error) {
      console.error("Error checking user existence:", error);
    }
  };

  useEffect(() => {
    userExistFn(); // Call the function properly
  }, [address]);

  const handleSignIn = () => {
    if (userExist) {
      navigate("/dashboard");
    } else {
      toast.error("Please register first!");
    }
  };

  return (
    <>
      <HeaderNew />
      <section className="tf-login tf-section dashboardbg">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <h2 className="tf-title-heading ct style-1">Sign In To NFTs</h2>

              {/* Email Login Section */}
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
                      readOnly
                    />

                    {address && userExist ? (
                      <button
                        className="submit"
                        type="button"
                        onClick={handleSignIn}
                      >
                        Sign In
                      </button>
                    ) : (
                      <ConnectWallet />
                    )}
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
