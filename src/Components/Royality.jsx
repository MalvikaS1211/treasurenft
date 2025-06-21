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
      <div
        className="p-4 dashboardbg"
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <main className="content-dashboard">
          <Navbar title="NFT Royalty" />
          {/* <HeaderDashboard title="NFT Royalty" /> */}
          <div>
            <div>
              <div className="rank-income">
                <div
                  style={{
                    maxHeight: "70vh",
                    overflowY: "auto",
                    overflowX: "auto",

                    borderRadius: "8px",
                    padding: "10px",
                  }}
                >
                  <table className="table-responsiveness">
                    <thead>
                      <tr>
                        <th>Sr.No</th>
                        <th>Token Id</th>
                        <th>Address</th>
                        <th>Activation Date</th>
                        <th>Sales Count</th>
                        <th>Received Amount</th>
                        <th>Nft Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData?.length > 0 ? (
                        tableData?.map((data, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data?.tokenId}</td>
                            <td>
                              {data?.fromUser.slice(0, 4)}...
                              {data?.fromUser.slice(-7)}
                            </td>
                            <td>
                              {data?.createdAt
                                ? moment(data.createdAt).format(
                                    "DD-MM-YYYY HH:mm:ss A"
                                  )
                                : "N/A"}
                            </td>
                            <td>{data?.salesCount}</td>
                            <td>{(data?.amount / 1e18).toFixed(4)}</td>
                            <td>{(data?.ofAmount / 1e18).toFixed(4)}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="7" style={{ textAlign: "center" }}>
                            No data available
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
