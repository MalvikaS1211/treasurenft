import React, { useEffect, useState } from "react";
import AdminIcon from "../assets/BlakeBanks.jpg";
import UserIcon from "../assets/creativeArt.jpg";
import Navbar from "./Navbar";
import { createMessageFn, getAllTicket } from "../Helper/API_Functions";
import moment from "moment";
import toast from "react-hot-toast";

export default function ChatConversation() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [ticketId, setTicketId] = useState("");
  const [address, setAddress] = useState("");

  const getMessage = async () => {
    try {
      const res = new URLSearchParams(window.location.search);
      const ticketID = res.get("msgId");
      const userAdd = res.get("userAddress");
      setTicketId(ticketID);
      setAddress(userAdd);
      console.log(ticketID, userAdd, "in getMessage");
      if (ticketID && userAdd) {
        const res = await getAllTicket(ticketID, userAdd);
        setMessages(res.data);
        console.log(res, "from getAll");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMessage();
  }, [window.location.search]);

  const handleSendMsg = async () => {
    try {
      const res = await createMessageFn(address, "Admin", message, ticketId);
      if (res.success == true) {
        toast.success("Message Created Successfully!");
        setMessage("");
        setTimeout(() => {
          getMessage();
        }, 2000);
      }
    } catch (err) {
      console.error("Message sending failed:", err);
    }
  };

  return (
    <div className="p-4 dashboardbg" style={{ height: "100%" }}>
      <main className="content-dashboard">
        <Navbar title="Chat " />
        <div className="col-xxl-11">
          <ul className="notification  px-3">
            {messages.map((msg, index) => (
              <li key={index}>
                <div
                  className={`row ${
                    msg.sender === "Admin" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="col-lg-12">
                    <div
                      className={`d-flex gap-3  ${
                        msg?.UserAddress == address || msg?.Receiver == "Admin"
                          ? "admin"
                          : ""
                      }`}
                    >
                      <img
                        src={msg?.Sender != "Admin" ? UserIcon : AdminIcon}
                        alt={`${msg.Sender} avatar`}
                        className="circular-img"
                      />
                      <div className="notification-body border border-primary border-opacity-50">
                        <div className="d-flex align-items-start gap-3 flex-wrap message-box">
                          <div className="flex-fill">
                            {/* <h5 className="mb-1 fs-4 fw-medium">
                              {msg.Sender}
                            </h5> */}
                            <p className="mb-0 text-muted msg-text">
                              {msg.Message}
                            </p>
                          </div>
                          <div className="msg-date-div">
                            <span className="badge bg-primary-transparent">
                              {moment(msg.Time).format("DD-MM-YYYY h:mm:ss A")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="col-lg-12">
            <div className="p-4 border rounded-md w-full max-w-4xl mx-auto mt-10 msg-container">
              <div class="mb-3 ">
                <div className="d-flex">
                  <label className="form-label msg-label" for="form1">
                    Message
                  </label>
                </div>

                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1 textAreaBox"
                  rows="6"
                  value={message}
                  placeholder="Enter your Message"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="d-flex justify-content-end pt-4 gap-3">
                <button
                  type="button"
                  className="button"
                  onClick={handleSendMsg}
                  style={{ padding: "10px 19px" }}
                >
                  Send
                </button>

                <button
                  type="button"
                  className="button"
                  onClick={getMessage}
                  style={{ padding: "10px 19px" }}
                >
                  Refresh
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
