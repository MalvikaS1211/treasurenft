import React from "react";
import Navbar from "./Navbar";
import ConnectWallet from "./ConnectWallet";
import HeaderDashboard from "./HeaderDashboard";

export default function Refferal() {
  return (
    <>
      <Navbar></Navbar>
      <main class="content">
        <HeaderDashboard title="Refferal" />
        <div>
          <div class="flex flex-col" style={{ height: "100vh" }}>
            <div class="rank-income" style={{ overflowX: "auto" }}>
              <table>
                <tr>
                  <th>Sr.No</th>
                  <th>Id</th>
                  <th>Address</th>
                  <th>Activation Date</th>
                  <th>Level</th>
                  <th>Direct Team</th>
                </tr>
                <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>0...</td>
                  <td>dd-mm-yyyy</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
