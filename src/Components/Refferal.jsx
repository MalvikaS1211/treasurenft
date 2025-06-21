import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ConnectWallet from "./ConnectWallet";
import HeaderDashboard from "./HeaderDashboard";
import { getUserDirects } from "../Helper/API_Functions";
import { useAccount } from "wagmi";
import moment from "moment";
export default function Refferal() {
  const { address } = useAccount();
  const [tabledata, setTableData] = useState([]);

  const handleTableData = async () => {
    try {
      const res = await getUserDirects(address);
      setTableData(res.userDirects);
      console.log("GetDirects", res);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("tabledata:::", tabledata);
  useEffect(() => {
    handleTableData();
  }, [address]);

  return (
    <>
      <div className="p-4 dashboardbg">
        <main className="content-dashboard">
          <Navbar title="Refferal" />
          {/* Fixed className */}
          {/* <HeaderDashboard title="Refferal" /> */}
          <div>
            <div style={{ height: "100vh" }}>
              <div className="rank-income">
                <table className="table-responsiveness">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th>Id</th>
                      <th>Address</th>
                      <th>Activation Date</th>
                      {/* <th>Level</th>
                      <th>Direct Team</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {tabledata?.length > 0 ? (
                      tabledata?.map((data, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{data?.uniqueRandomId}</td>
                          <td>
                            {data.user.slice(0, 4)}...{data.user.slice(-7)}
                          </td>
                          <td>
                            {data?.createdAt
                              ? moment(data.createdAt).format(
                                  "DD-MM-YYYY HH:mm:ss A"
                                )
                              : "N/A"}
                          </td>
                          {/* <td>{data?.level}</td>
                          <td>{data?.directTeam}</td> */}
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
