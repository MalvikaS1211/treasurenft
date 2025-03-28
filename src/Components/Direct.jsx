import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ConnectWallet from "./ConnectWallet";
import HeaderDashboard from "./HeaderDashboard";
import { getDirectIncome } from "../Helper/API_Functions";
import { useAccount } from "wagmi";
import moment from "moment";
export default function Direct() {
  const { address } = useAccount();
  const [tabledata, setTableData] = useState([]);

  const handleTableData = async () => {
    const res = await getDirectIncome(address);
    setTableData(res.data);
    console.log("GetDirects", res);
  };
  console.log("tabledata:::", tabledata);
  useEffect(() => {
    handleTableData();
  }, [address]);

  return (
    <>
      <div className="p-4 dashboardbg">
        <Navbar />
        <main className="content-dashboard">
          <HeaderDashboard title="Direct" />
          <div>
            <div style={{ height: "100vh" }}>
              <div className="rank-income">
                <table className="table-responsiveness">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      {/* <th>Id</th> */}
                      <th>Address</th>
                      <th>Activation Date</th>
                      <th>Level</th>
                      {/* <th>Direct Team</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {tabledata?.length > 0 ? (
                      tabledata?.map((data, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          {/* <td>{data?.uniqueRandomId}</td> */}
                          <td>
                            {data.toUser.slice(0, 4)}...{data.toUser.slice(-7)}
                          </td>
                          <td>
                            {data?.timestamp
                              ? moment(data.timestamp).format(
                                  "DD-MM-YYYY HH:mm:ss"
                                )
                              : "N/A"}
                          </td>
                          <td>{(data?.amount / 1e18).toFixed(4)}</td>
                          {/* <td>{data?.directTeam}</td> */}
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
