import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ConnectWallet from "./ConnectWallet";
import { createNewTicketFn, getDirectIncome } from "../Helper/API_Functions";
import { useAccount } from "wagmi";
import moment from "moment";
import { IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AdminIcon from "../assets/MattRamos.jpg";
import UserIcon from "../assets/creativeArt.jpg";

export default function ChatSupport() {
  const { address } = useAccount();
  const [tabledata, setTableData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleTableData = async () => {
    const res = await getDirectIncome(address);
    setTableData(res.data);
    console.log("GetDirects", res);
  };

  useEffect(() => {
    if (address) {
      handleTableData();
    }
  }, [address]);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleNewTicket = async () => {
    const res = await createNewTicketFn();
    console.log("handleNewTicket", res);
  };

  const tableArray = [
    { uniqueId: 1, Subject: "NFT", UpdateDate: "24/4/25", Status: "Success" },
    { uniqueId: 2, Subject: "NFT2", UpdateDate: "29/4/25", Status: "Success" },
  ];
  return (
    <>
      <div className="p-4 dashboardbg">
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

            {/* Bootstrap Modal */}
            <div
              class="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header" style={{ height: "80px" }}>
                    <h5 class="modal-title" id="exampleModalLongTitle">
                      New Ticket
                    </h5>
                    <IoMdClose
                      class="close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      style={{ fontSize: "large" }}
                    />
                  </div>
                  <div className="p-5 ">
                    <div>
                      <label className="modal-label ">Your Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:ring-emerald-500"
                        placeholder="Enter Your Name"
                      />
                      <p className="text-xs text-gray-500 text-right"></p>
                    </div>

                    <div>
                      <label className="modal-label">Subject</label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:ring-emerald-500"
                        placeholder="Enter subject"
                      />
                      <p className="text-xs text-gray-500 text-right"></p>
                    </div>

                    <div>
                      <label className="modal-label">Message</label>
                      <textarea
                        rows="4"
                        maxLength={500}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:ring-emerald-500"
                        placeholder="Enter your message"
                      />
                      <p className="text-xs text-gray-500 text-right"></p>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button">Send</button>
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
                          <th>Unique Id</th>
                          <th>Subject of the query</th>
                          <th>Last Update</th>
                          <th>Status of the request</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableArray.map((data, index) => (
                          <tr>
                            <td>{data.uniqueId}</td>
                            <td>{data.Subject}</td>
                            <td>{data.UpdateDate}</td>
                            <td>{data.Status}</td>
                            <td>
                              {activeIndex === index ? "Hide" : "Show"}
                              <MdOutlineKeyboardArrowRight
                                onClick={() => toggleAccordion(0)}
                                style={{ fontSize: "20px", cursor: "pointer" }}
                                className={`accordian-icon ${
                                  activeIndex === 0 ? "rotate" : ""
                                }`}
                              />
                            </td>
                          </tr>
                        ))}

                        {/* {tabledata?.length > 0 ? (
                          tabledata.map((data, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>
                                {data.toUser.slice(0, 4)}...
                                {data.toUser.slice(-7)}
                              </td>
                              <td>
                                {data?.timestamp
                                  ? moment(data.timestamp * 1000).format(
                                      "DD-MM-YYYY HH:mm:ss"
                                    )
                                  : "N/A"}
                              </td>
                              <td>{(data?.amount / 1e18).toFixed(4)}</td>
                              <td>
                                {" "}
                                <MdOutlineKeyboardArrowRight />
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="4" style={{ textAlign: "center" }}>
                              No data available
                            </td>
                          </tr>
                        )} */}
                      </tbody>
                    </table>
                  </div>
                </div>
                {activeIndex === 0 && (
                  <div className="accordion-body col-xxl-11">
                    <ul className="notification container px-3">
                      <li>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="d-flex gap-3">
                              <img
                                src={AdminIcon}
                                alt=""
                                className="circular-img"
                              />
                              <div className="notification-body border border-primary border-opacity-50">
                                <div className="d-flex align-items-start gap-3 flex-wrap">
                                  <div>
                                    <span className="avatar avatar-lg online"></span>
                                  </div>
                                  <div className="flex-fill ">
                                    <h5 className="mb-1 fs-4 fw-medium">
                                      Admin
                                    </h5>
                                    <p className="mb-0 text-muted msg-text">
                                      How may I help you?
                                    </p>
                                  </div>
                                  <div>
                                    <span className="badge bg-primary-transparent">
                                      April 23 2025
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row flex-row-reverse">
                          <div className="col-lg-6">
                            <div className="d-flex gap-3">
                              <img
                                src={UserIcon}
                                alt=""
                                className="circular-img"
                              />
                              <div className="notification-body border border-primary border-opacity-50">
                                <div className="d-flex align-items-start gap-3 flex-wrap">
                                  <div>
                                    <span className="avatar avatar-lg online"></span>
                                  </div>
                                  <div className="flex-fill ">
                                    <h5 className="mb-1  fw-medium  fs-4">
                                      User
                                    </h5>
                                    <p className="mb-0 text-muted msg-text">
                                      Suggest me to buy NFTs.
                                    </p>
                                  </div>
                                  <div>
                                    <span className="badge bg-primary-transparent">
                                      April 23 2025
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div
              className="p-4 border rounded-md w-full max-w-4xl mx-auto mt-10 msg-container"
              style={{ borderColor: "black" }}
            >
              <label
                className="block mb-4"
                style={{ fontSize: "16px", color: "gray" }}
              >
                Message
              </label>
              <div className="flex gap-2 items-start ">
                <textarea
                  rows="3"
                  placeholder="Enter your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="d-flex justify-content-end pt-4">
                <button onClick={() => console.log("Message Sent:", message)}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
