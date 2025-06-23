import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

import { getTradingIncome } from "../Helper/API_Functions";
import { useAccount } from "wagmi";
import moment from "moment";
export default function TradingIncome() {
  const { address } = useAccount();
  const [tabledata, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const itemPerpage = 15;
  const handleTableData = async () => {
    const res = await getTradingIncome(address, currentPage, itemPerpage);
    setTableData(res.data);
    setTotalPages(res?.pagination?.totalPages);
    console.log("GetTradingIncome", res);
  };
  console.log("tabledata:::", tabledata);
  useEffect(() => {
    handleTableData();
  }, [address, currentPage]);
  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <>
      <div className="p-4 dashboardbg">
        <main className="content-dashboard">
          <Navbar title="Trading Income " />
          {/* <HeaderDashboard title="Direct" /> */}
          <div>
            <div style={{ minHeight: "100vh" }}>
              <div className="rank-income">
                <table className="table-responsiveness">
                  <thead>
                    <tr>
                      <th>Sr.No</th>

                      <th>From</th>
                      <th>Reward</th>
                      <th>Token Id</th>

                      <th>Level</th>
                      <th> Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tabledata?.length > 0 ? (
                      tabledata?.map((data, index) => (
                        <tr key={index}>
                          <td>{(currentPage - 1) * itemPerpage + index + 1}</td>

                          <td>
                            {data.fromUser.slice(0, 4)}...
                            {data.fromUser.slice(-7)}
                          </td>
                          <td>{(data?.reward / 1e18).toFixed(4)}</td>
                          <td>{data?.tokenId}</td>
                          <td>{data?.level}</td>
                          <td>
                            {data?.createdAt
                              ? moment(data.createdAt).format(
                                  "DD-MM-YYYY HH:mm:ss A"
                                )
                              : "N/A"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" style={{ textAlign: "center" }}>
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <div
                  className="text-center mb-3 col-lg-6"
                  style={{ margin: "auto" }}
                >
                  <div className=" filter-pagination mt-3 ">
                    <button
                      className="custom-pagination-btn m-2"
                      onClick={handlePreviousPage}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>

                    <button
                      type="button"
                      className="custom-pagination-btn m-2"
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>

                    <span style={{ fontSize: "13px" }}>
                      Page {currentPage} of {totalPages}
                    </span>
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
