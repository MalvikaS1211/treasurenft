import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HeaderDashboard from "./HeaderDashboard";
import { getRoyalty } from "../Helper/API_Functions";
import { useAccount } from "wagmi";
import moment from "moment";

export default function Royality() {
  const { address } = useAccount();
  const [tableData, setTableData] = useState([]);

  const handleRoyalty = async () => {
    try {
      const res = await getRoyalty(address);
      setTableData(res.history);
      console.log("resRoyalty", res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (address) {
      handleRoyalty();
    }
  }, [address]);

  return (
    <>
      <div className="p-4 dashboardbg">
        <Navbar />
        <main className="content-dashboard">
          <HeaderDashboard title="Royalty" />
          <div>
            <div style={{ height: "100vh" }}>
              {/* Pagination Section */}
              <div
                className="pagination"
                style={{ marginTop: "2%", marginBottom: "2%" }}
              >
                <div className="MuiStack-root css-1ov46kg">
                  <nav
                    aria-label="pagination navigation"
                    className="MuiPagination-root MuiPagination-text css-1xdhyk6"
                  >
                    <ul className="MuiPagination-ul css-51eq8m">
                      <li>
                        <FaArrowLeft color="#6c6c6c" />
                      </li>
                      {[1, 2, 3, 4, 5, "...", 12].map((page, index) => (
                        <li key={index}>
                          {page === "..." ? (
                            <div className="MuiPaginationItem-root MuiPaginationItem-ellipsis css-15hk4e3">
                              …
                            </div>
                          ) : (
                            <button
                              className="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-text MuiPaginationItem-rounded MuiPaginationItem-page css-ksll4a"
                              type="button"
                            >
                              {page}
                            </button>
                          )}
                        </li>
                      ))}
                      <li>
                        <FaArrowRight color="#6c6c6c" />
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="rank-income">
                <table className="table-responsiveness">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th>Token Id</th>
                      <th>Address</th>
                      <th>Activation Date</th>
                      <th>Sales Count</th>
                      {/* <th>Direct Team</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {tableData?.length > 0 ? (
                      tableData?.map((data, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{data.tokenId}</td>
                          <td>
                            {" "}
                            {data.fromUser.slice(0, 4)}...
                            {data.fromUser.slice(-7)}
                          </td>
                          <td>
                            {data?.createdAt
                              ? moment(data.createdAt).format(
                                  "DD-MM-YYYY HH:mm:ss"
                                )
                              : "N/A"}
                          </td>
                          <td>{data.salesCount}</td>
                          {/* <td>{data.directTeam}</td> */}
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
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
