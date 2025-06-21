import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

import { getTradingIncome } from "../Helper/API_Functions";
import { useAccount } from "wagmi";
import moment from "moment";
export default function TradingIncome() {
  const { address } = useAccount();
  const [tabledata, setTableData] = useState([]);

  const handleTableData = async () => {
    const res = await getTradingIncome(address);
    setTableData(res.data);
    console.log("GetTradingIncome", res);
  };
  console.log("tabledata:::", tabledata);
  useEffect(() => {
    handleTableData();
  }, [address]);

  return (
    <>
      <div className="p-4 dashboardbg">
        <main className="content-dashboard">
          <Navbar title="Traading Income " />
          {/* <HeaderDashboard title="Direct" /> */}
          <div>
            <div style={{ height: "100vh" }}>
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
                          <td>{index + 1}</td>

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
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
