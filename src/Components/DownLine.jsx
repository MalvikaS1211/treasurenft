import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HeaderDashboard from "./HeaderDashboard";
import { useAccount } from "wagmi";
import toast from "react-hot-toast";
import { getTotalTeam } from "../Helper/API_Functions";

export default function DownLine() {
  const { address } = useAccount();
  const [tableData, setTableData] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState(1);

  const handleTableData = async () => {
    try {
      const res = await getTotalTeam(address, 1, 70, selectedLevel);
      setTableData(res.userTeam);
      console.log("Downline", res);
    } catch (error) {
      console.log("Error", error);
    }
  };
  console.log(selectedLevel, "::::");
  useEffect(() => {
    if (address) {
      handleTableData();
    } else toast.error("Please connect your wallet");
  }, [address, selectedLevel]);

  const Level = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  // Filter data based on selected level
  const filteredData = selectedLevel
    ? tableData.filter((data) => data.level === selectedLevel)
    : tableData;

  return (
    <>
      <div className="p-4 dashboardbg">
        <main className="content-dashboard">
          <Navbar title="DownLine" />
          {/* <HeaderDashboard title="DownLine" /> */}
          <div>
            <div style={{ minHeight: "100vh" }}>
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
                      {Level.map((lev, index) => (
                        <li key={index + 1}>
                          <button
                            className={`MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-text MuiPaginationItem-rounded MuiPaginationItem-page css-ksll4a ${
                              selectedLevel === lev ? "active-level" : ""
                            }`}
                            type="button"
                            style={{ fontSize: "15px" }}
                            onClick={() => setSelectedLevel(lev)}
                          >
                            {lev}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>

              {/* Table Section */}
              <div className="rank-income">
                <table className="table-responsiveness">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th>Id</th>
                      <th>Address</th>
                      {/* <th>Activation Date</th> */}
                      <th>Level</th>
                      <th>Direct Team</th>
                      <th>Package</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData?.length > 0 ? (
                      filteredData?.map((data, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{data?.uniqueRandomId}</td>
                          <td>
                            {data?.user.slice(0, 4)}...
                            {data?.user.slice(-7)}
                          </td>
                          {/* <td>{data.activationDate}</td> */}
                          <td>{data?.level}</td>
                          <td>{data?.totalDirectCount}</td>
                          <td>{data?.packages}</td>
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
