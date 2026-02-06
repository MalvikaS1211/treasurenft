import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getDepostList, getSalaryHist } from "../../Helper/API_Functions";
import { useAccount } from "wagmi";
import moment from "moment";
export default function SalaryHistory() {
  const { address } = useAccount();
  const [tabledata, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemPerpage = 15;
  const [expireTime, setExpireTime] = useState(0);

  const handleTableData = async () => {
    const res = await getSalaryHist(address, currentPage, itemPerpage);
    setExpireTime(res.expiryTime);
    setTableData(res?.data);
    setTotalPages(res?.pagination?.totalPages);
  };

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
          <Navbar title="Salary History" />
          {/* <Header title="Direct" /> */}
          <div>
            <div style={{ minHeight: "100vh" }}>
              <div className="rank-income">
                <table className="table-responsiveness">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th>User</th>
                      <th>Amount</th>
                      <th>status</th>

                      <th>Request Time</th>
                      <th>TxHash</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tabledata?.length > 0 ? (
                      tabledata?.map((data, index) => (
                        <tr key={index}>
                          <td>{(currentPage - 1) * itemPerpage + index + 1}</td>
                          <td>
                            {data?.user.slice(0, 4)}...
                            {data?.user.slice(-7)}
                          </td>
                          <td>{data?.income?.toFixed(2)}</td>

                          <td>{data.status}</td>
                          <td>
                            {moment(data.timestamp * 1000).format(
                              "DD-MM-YYYY HH:mm:ss A"
                            )}
                          </td>
                          <td>{data?.txHash}</td>
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
