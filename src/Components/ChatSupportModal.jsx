import React, { useState } from "react";

const ChatSupportModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-emerald-500 px-5 py-3 flex justify-between items-center rounded-t-lg">
          <h2 className="text-white font-semibold">New Ticket</h2>
          <button onClick={onClose} className="text-white text-lg font-bold">
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              maxLength={30}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:ring-emerald-500"
              placeholder="Enter Your Name"
            />
            <p className="text-xs text-gray-500 text-right">{name.length}/30</p>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              maxLength={30}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:ring-emerald-500"
              placeholder="Enter subject"
            />
            <p className="text-xs text-gray-500 text-right">
              {subject.length}/30
            </p>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows="4"
              maxLength={500}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:ring-emerald-500"
              placeholder="Enter your message"
            />
            <p className="text-xs text-gray-500 text-right">
              {message.length}/500
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 flex justify-end border-t">
          <button
            onClick={() => alert("Ticket sent!")}
            className="bg-gradient-to-r from-emerald-800 to-emerald-500 text-white px-6 py-2 rounded-md hover:from-emerald-900 hover:to-emerald-600"
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSupportModal;
