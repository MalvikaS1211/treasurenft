import React, { useEffect, useState } from "react";
import Navbar from "../Dashboard/Navbar";

import {
  generateTicketFn,
  getTicketByUserAddressFn,
} from "../../Helper/API_Functions";
import { useAccount } from "wagmi";
import moment from "moment";
import { IoMdClose } from "react-icons/io";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function ChatSupport() {
  const { address } = useAccount();

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [dataByTicket, setDataByTicket] = useState([]);

  const navigate = useNavigate();

  const generateTicket = async () => {
    const res = await generateTicketFn(address, name, subject, message);

    console.log(res, address, name, subject, message, "generateticket");
  };

  const getTicketByUserAddress = async () => {
    const res = await getTicketByUserAddressFn(address);
    console.log("getTicket", res);
    setDataByTicket(res.data);
  };

  useEffect(() => {
    getTicketByUserAddress();
  }, [address]);

  return (
    <>
      <div className="p-4 dashboardbg" style={{ minHeight: "100vh" }}>
        <main className="content-dashboard">
          <Navbar title="Support " />

          <div className="d-flex justify-content-end pb-4 ticket-btn">
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
            >
              New Ticket
            </button>

            <div
              class="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content" style={{ background: "#303031" }}>
                  <div class="modal-header" style={{ height: "80px" }}>
                    <h5
                      class="modal-title text-white "
                      id="exampleModalLongTitle"
                    >
                      New Ticket
                    </h5>
                    <IoMdClose
                      className="close text-white"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      style={{ fontSize: "large" }}
                    />
                  </div>
                  <div className="p-5 ">
                    <div className="mb-4">
                      <label className="modal-label text-white">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:ring-emerald-500 chat-inputs"
                        placeholder="Enter Your Name"
                      />
                      <p className="text-xs text-gray-500 text-right"></p>
                    </div>

                    <div className="mb-4">
                      <label className="modal-label text-white">Subject</label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:ring-emerald-500 chat-inputs"
                        placeholder="Enter subject"
                      />
                      <p className="text-xs text-gray-500 text-right"></p>
                    </div>

                    <div>
                      <label className="modal-label text-white">Message</label>
                      <textarea
                        rows="4"
                        maxLength={500}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:ring-emerald-500 chat-inputs"
                        placeholder="Enter your message"
                      />
                      <p className="text-xs text-gray-500 text-right"></p>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      onClick={() => {
                        generateTicket();
                        toast.success("Ticket Generated!");
                        getTicketByUserAddress();
                      }}
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="accordion-wrapper">
              <div className="accordion-item">
                <div className="accordion-header">
                  <div className="accordion-body rank-income">
                    <table className="table-responsiveness">
                      <thead>
                        <tr>
                          <th>Ticket Id</th>
                          <th>User</th>
                          <th>Subject of the query</th>
                          <th>Ticket Generated Date</th>
                          <th>Status of the request</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataByTicket.map((data, index) => (
                          <tr
                            key={data._id}
                            style={{ cursor: "pointer" }}
                            onClick={(e) => {
                              if (data?.Status === true) {
                                navigate(
                                  `/support-chat?msgId=${data._id}&userAddress=${data.UserAddress}`
                                );
                              } else {
                                e.stopPropagation();
                                toast.error("Window is Closed!");
                              }
                            }}
                          >
                            <td>{index + 1}</td>
                            <td>{`${data.UserAddress.slice(
                              0,
                              5
                            )}...${data.UserAddress.slice(-6)}`}</td>

                            <td>{data.Subject}</td>
                            <td>
                              {moment(data.createdAt).format("M/D/YYYY h:mm A")}
                            </td>
                            <td>{data?.Status == true ? "Open" : "Close"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
