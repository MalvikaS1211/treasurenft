import React from "react";
import Navbar from "./Navbar";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import ConnectWallet from "./ConnectWallet";
import HeaderDashboard from "./HeaderDashboard";
export default function DownLine() {
  return (
    <>
      <Navbar></Navbar>
      <main class="content">
        <HeaderDashboard title="DownLine"></HeaderDashboard>
        <div>
          <div class="flex flex-col" style={{ height: "100vh" }}>
            <div
              class="pagination"
              style={{ marginTop: "2%", marginBottom: "2%" }}
            >
              <div class="MuiStack-root css-1ov46kg">
                <nav
                  aria-label="pagination navigation"
                  class="MuiPagination-root MuiPagination-text css-1xdhyk6"
                >
                  <ul class="MuiPagination-ul css-51eq8m">
                    <li>
                      <FaArrowLeft color="#6c6c6c" />
                    </li>
                    <li>
                      <button
                        class="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-text MuiPaginationItem-rounded Mui-selected MuiPaginationItem-page css-ksll4a"
                        tabindex="0"
                        type="button"
                        aria-current="true"
                        aria-label="page 1"
                      >
                        1<span class="MuiTouchRipple-root css-4mb1j7"></span>
                      </button>
                    </li>
                    <li>
                      <button
                        class="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-text MuiPaginationItem-rounded MuiPaginationItem-page css-ksll4a"
                        tabindex="0"
                        type="button"
                        aria-label="Go to page 2"
                      >
                        2<span class="MuiTouchRipple-root css-4mb1j7"></span>
                      </button>
                    </li>
                    <li>
                      <button
                        class="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-text MuiPaginationItem-rounded MuiPaginationItem-page css-ksll4a"
                        tabindex="0"
                        type="button"
                        aria-label="Go to page 3"
                      >
                        3<span class="MuiTouchRipple-root css-4mb1j7"></span>
                      </button>
                    </li>
                    <li>
                      <button
                        class="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-text MuiPaginationItem-rounded MuiPaginationItem-page css-ksll4a"
                        tabindex="0"
                        type="button"
                        aria-label="Go to page 4"
                      >
                        4<span class="MuiTouchRipple-root css-4mb1j7"></span>
                      </button>
                    </li>
                    <li>
                      <button
                        class="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-text MuiPaginationItem-rounded MuiPaginationItem-page css-ksll4a"
                        tabindex="0"
                        type="button"
                        aria-label="Go to page 5"
                      >
                        5<span class="MuiTouchRipple-root css-4mb1j7"></span>
                      </button>
                    </li>
                    <li>
                      <div class="MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-text MuiPaginationItem-rounded MuiPaginationItem-ellipsis css-15hk4e3">
                        …
                      </div>
                    </li>
                    <li>
                      <button
                        class="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-text MuiPaginationItem-rounded MuiPaginationItem-page css-ksll4a"
                        tabindex="0"
                        type="button"
                        aria-label="Go to page 12"
                      >
                        12<span class="MuiTouchRipple-root css-4mb1j7"></span>
                      </button>
                    </li>
                    <li>
                      <FaArrowRight color="#6c6c6c" />
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
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
