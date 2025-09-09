import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

import {
  claimRoi,
  getROI,
  getROIDetails,
  getStakingDetail,
  stakeNft,
} from "../Helper/API_Functions";
import { useAccount } from "wagmi";
import moment from "moment";
import toast from "react-hot-toast";
import { step } from "viem/chains";
export default function Staking() {
  const { address } = useAccount();
  const [stakeData, setstakeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemPerpage = 15;
  const [totals, setTotals] = useState();
  const [roi, setROI] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [tabledata, setTableData] = useState([]);

  const handleGetDetals = async () => {
    const res = await getStakingDetail(address, currentPage, itemPerpage);
    if (res.success) {
      console.log(
        res.data || { totalAmountStaked: 0 },
        "res in getStakingDetail"
      );
      setstakeData(res.data || { totalAmountStaked: 0 });
    }
  };

  const handleGetROI = async () => {
    try {
      const res = await getROI(address);
      console.log("getROI", res.roi);
      if (res.success) {
        setROI(res?.roi);
      }
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
      getRoiHistory();
    }
  }, [address, currentPage]);

  const stake = async () => {
    try {
      setIsLoading(true);

      if (!address) {
        return toast.error("Please connect your wallet");
      }
      const isStake = await stakeNft(address);
      if (isStake.success) {
        setIsLoading(false);
        handleGetDetals();
        handleGetROI();
        toast.success(isStake?.message);
      } else {
        setIsLoading(false);
        toast.error(isStake?.message);
      }

      console.log(isStake);
    } catch (error) {
      console.log(error, "erron in stake");
      setIsLoading(false);
      toast.error(error.response.data.message);
    }
  };

  const getRoiHistory = async () => {
    try {
      if (!address) {
        setTableData([]);
        return;
      }
      const res = await getROIDetails(address);
      console.log(res);
      if (res.success) {
        setTableData(res?.data);
        setTotals(res?.total);
        setTotalPages(Math.ceil(res?.total / itemPerpage));
      }
    } catch (error) {
      console.log(error);
      setTableData([]);
    }
  };

  const claimRoiF = async () => {
    try {
      setIsLoading(true);
      if (!address) {
        setIsLoading(false);
        return toast.error("Please connect your wallet");
      }
      console.log("step 1");
      const isClaim = await claimRoi(address);
      console.log("step 2", isClaim);
      if (isClaim.success) {
        setIsLoading(false);
        handleGetDetals();
        handleGetROI();
        toast.success(isClaim?.message);
      } else {
        setIsLoading(false);
        toast.error(isClaim?.message);
      }
    } catch (error) {
      console.log(error, "error in claimRoi");
      toast.error(error.response.data.message);
      setIsLoading(false);
    }
  };

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
                {Number(stakeData?.totalAmountStaked || 0).toFixed(4)}

                <span> USDT</span>
              </p>
            </div>
            <div class="total-card" style={{ border: "1px solid white" }}>
              <div class="sub-total">
                <h6>Total NFT</h6>
              </div>
              <p> {stakeData?.totalNft ?? 0}</p>
            </div>
            <div class="total-card" style={{ border: "1px solid white" }}>
              <div class="sub-total">
                <h6>ROI</h6>
              </div>
              <p>
                {(roi ?? 0).toFixed(4)}
                <span> USDT</span>
              </p>
            </div>
          </div>
          <div className="d-flex mb-4">
            {Number(stakeData.totalAmountStaked) <= 0 && (
              <div
                className=" col-lg-2 d-flex justify-content-center align-items-center "
                style={{ padding: "0px" }}
              >
                <button
                  className=" w-100 stake-btn  m-2"
                  disabled={isLoading}
                  onClick={stake}
                >
                  Stake NFT
                </button>
              </div>
            )}

            <div
              className="  col-lg-2 d-flex justify-content-center align-items-center "
              style={{ padding: "0px" }}
            >
              <button
                className=" w-100 stake-btn  m-2"
                onClick={claimRoiF}
                disabled={isLoading}
              >
                Claim ROI
              </button>
            </div>
          </div>

          <div>
            <div style={{ minHeight: "100vh" }}>
              <div className="rank-income">
                <table className="table-responsiveness">
                  <thead>
                    <tr>
                      <th>Sr.No</th>

                      <th>Amount Claimed</th>
                      <th>Status</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tabledata?.length > 0 ? (
                      tabledata?.map((data, index) => (
                        <tr key={index}>
                          <td>{(currentPage - 1) * itemPerpage + index + 1}</td>

                          <td>{data?.amount?.toFixed(2)}</td>
                          <td>{data?.status}</td>
                          <td>
                            {moment(data?.createdAt).format(
                              "DD-MM-YYYY HH:mm:ss A"
                            )}
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
                      {/* Page {currentPage} of {totalPages} */}
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
