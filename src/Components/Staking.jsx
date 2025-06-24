import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

import { getROI, getStakingDetail } from "../Helper/API_Functions";
import { useAccount } from "wagmi";
import moment from "moment";
export default function Staking() {
  const { address } = useAccount();
  const [tabledata, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemPerpage = 15;
  const [totals, setTotals] = useState();
  const [roi, setROI] = useState();

  const handleGetDetals = async () => {
    const res = await getStakingDetail(address, currentPage, itemPerpage);
    setTableData(res.data);
    setTotals(res.stakingDetais);
    setTotalPages(res?.pagination?.totalPages);
    // console.log("getStakingDetail", res);
  };

  const handleGetROI = async () => {
    try {
      const res = await getROI(address);
      console.log("getROI", res);
      setROI(res?.roi);
    } catch (error) {
      console.log("error in getROI", error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  useEffect(() => {
    if (address) {
      handleGetROI();
      handleGetDetals();
    }
  }, [address, currentPage]);

  return (
    <>
      <div className="p-4 dashboardbg">
        <main className="content-dashboard">
          <Navbar title="Staking" />

          <div class="total-grid" style={{ marginTop: "0px" }}>
            <div class="total-card" style={{ border: "1px solid white" }}>
              <div class="sub-total">
                <h6>Total Amount</h6>
              </div>
              <p>
                {((totals?.totalPaid ?? 0) / 1e18).toFixed(4)}

                <span> USDT</span>
              </p>
            </div>
            <div class="total-card" style={{ border: "1px solid white" }}>
              <div class="sub-total">
                <h6>Total NFT</h6>
              </div>
              <p> {totals?.totalHold ?? 0}</p>
            </div>
            <div class="total-card" style={{ border: "1px solid white" }}>
              <div class="sub-total">
                <h6>ROI</h6>
              </div>
              <p>
                {((roi ?? 0) / 1e18).toFixed(4)}
                <span> USDT</span>
              </p>
            </div>
            {/* <div className="d-flex justify-content-center align-items-center ">
              <button className="stake-btn  m-2">Claim ROI</button>
            </div> */}
          </div>
          <div>
            <div style={{ minHeight: "100vh" }}>
              <div className="rank-income">
                <table className="table-responsiveness">
                  <thead>
                    <tr>
                      <th>Sr.No</th>

                      <th>Token Id</th>
                      <th>Sales Count</th>
                      <th>Buyer Paid</th>

                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tabledata?.length > 0 ? (
                      tabledata?.map((data, index) => (
                        <tr key={index}>
                          <td>{(currentPage - 1) * itemPerpage + index + 1}</td>

                          <td>{data?.tokenId}</td>
                          <td>{data?.salesCount}</td>

                          <td>{(data?.buyerPaid / 1e18).toFixed(4)}</td>
                          <td>
                            {moment
                              .unix(data?.time)
                              .format("DD-MM-YYYY HH:mm:ss A")}
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
