import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import Banner from "../assets/Banner.jpeg";

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
          <div className="modal-image-wrapper">
            <img src={Banner} alt="Welcome Banner" className="modal-image" />
          </div>
        </div>
      </div>
    )
  );
}
