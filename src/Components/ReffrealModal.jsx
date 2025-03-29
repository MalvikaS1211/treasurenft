import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const ReferralModal = ({ isOpen, onClose }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [referralId, setReferralId] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-gray-600 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Profile Icon */}
        <div className="flex justify-center mb-4">
          <FaUserCircle className="text-6xl text-gray-600" />
        </div>

        {/* Modal Title */}
        <h2 className="text-xl font-semibold text-center text-gray-800">
          Add a New User to Your Referral Network or Others.
        </h2>

        {/* Input Fields */}
        <div className="mt-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder="Enter wallet address"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder="Enter referral ID"
            value={referralId}
            onChange={(e) => setReferralId(e.target.value)}
          />
        </div>

        {/* Register Button */}
        <button className="w-full bg-purple-500 text-white p-2 mt-4 rounded hover:bg-purple-600">
          Register now
        </button>
      </div>
    </div>
  );
};

export default ReferralModal;
