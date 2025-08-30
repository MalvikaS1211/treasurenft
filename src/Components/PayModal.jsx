import React from "react";
import { IoClose } from "react-icons/io5";
import Payment from "../assets/PaymentDebit.png";
import AppStore from "../assets/Appstore.png";
import PlayStore from "../assets/Playstore.png";

function PayModal({ isOpen, setIsOpen }) {
  return (
    <>
      {isOpen && (
        <div
          className="modal-custom-container"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="modal-custom-dialog"
            role="document"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <div className="modal-custom-content">
              <div className="modal-custom-header">
                <h5 className="modal-title">App Download Link</h5>
                <IoClose
                  onClick={() => setIsOpen(false)}
                  style={{ fontSize: "25px", cursor: "pointer" }}
                />
              </div>
              <div className="modal-custom-body">
                <div>
                  <img src={Payment} alt="Payment Options" />
                </div>
                <div className="flex flex-col gap-3 mt-4">
                  <img
                    src={AppStore}
                    alt="App Store"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      window.open(
                        "https://apps.apple.com/in/app/inrx-app/id6747970493",
                        "_blank"
                      )
                    }
                  />

                  <img
                    src={PlayStore}
                    alt="Play Store"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.inrx.utility",
                        "_blank"
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PayModal;
