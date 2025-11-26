import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import Banner from "../../assets/Banner.jpeg";

export default function WelcomeModal() {
  const [openModal, setOpenModal] = useState(true);

  return (
    openModal && (
      <div className="modal-overlay">
        <div className="modal-container">
          <div
            onClick={() => setOpenModal(false)}
            className="modal-close"
            aria-label="Close modal"
          >
            <MdOutlineClose />
          </div>
          <div className="fs-4 text-center  mb-3">
            We’re currently undergoing scheduled maintenance. Our app will be
            back online shortly. Buy, Sell, and Trade of NFTs will be
            unavailable for the next 10 minutes. Thank you for your patience!
          </div>
          {/* <div className="modal-image-wrapper">
            <img src={Banner} alt="Welcome Banner" className="modal-image" />
  
          </div> */}
        </div>
      </div>
    )
  );
}
