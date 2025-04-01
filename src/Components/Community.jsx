import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Favicon from "../assets/Favicon.png";
import ConnectWallet from "./ConnectWallet";
import HeaderDashboard from "./HeaderDashboard";
import { useAccount } from "wagmi";
import { getFetchTree } from "../Helper/API_Functions";
import toast from "react-hot-toast";
import ReferralModal from "./ReffrealModal";
export default function Community() {
  const { address } = useAccount();
  // const address = "0xf5da7d4bf240de446ca2f772e1f8cf6975b22f5e";
  const [tree, setTree] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredValue, setFilteredValue] = useState(null);

  const handleSearch = () => {
    try {
      if (searchValue.trim() === "") {
        toast.error("Please enter a User ID");
        return;
      }
      handleTree(searchValue);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTree = async (address) => {
    try {
      const res = await getFetchTree(address);
      if (res.success) {
        console.log(res.obj, res, "tree");
        const data = res?.obj?.sort((a, b) => {
          return a.timestamp - b.timestamp;
        });
        setTree(data?.slice(0, 6));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (address) {
      handleTree(address);
    } else toast.error("Please connect your wallet");
  }, [address]);
  return (
    <>
      <div className="p-4 dashboardbg">
        <Navbar></Navbar>
        <main className="content-dashboard">
          <HeaderDashboard title="Community" />
          <div
            className=""
            style={{
              height: "auto",
              minHeight: "100vh",
              overflow: "hidden",
              marginBottom: "5%",
            }}
          >
            <div className="community_div">
              <div className="button_container">
                <input
                  type="text"
                  className="ComunitySearch placeholder-white community-search"
                  placeholder="Enter User ID"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button
                  className="btn"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgb(33, 82, 175) 0%, rgb(107, 167, 231) 51%, rgb(33, 82, 175) 100%);",
                    borderRadius: "30px",
                  }}
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
              <div className="button_container" style={{ marginTop: "5%" }}>
                <button disabled className="prev-next-btn">
                  PREV
                </button>
                <button disabled className="prev-next-btn">
                  NEXT
                </button>
              </div>
            </div>

            <div className="tree">
              <img
                alt="Tree Logo"
                className="community-branch-icon"
                src={Favicon}
              />
              <div className="logo Level-owner">{address}</div>
              <div className="branch-connector">
                <div className="line vertical"></div>
                <div className="line horizontal"></div>
                <div className="line diagonal-left"></div>
                <div className="line diagonal-right"></div>
              </div>
              {/* {tree && tree?.length > 0 && ( */}
              <div className="branches">
                <div className="branch-item">
                  <img
                    alt="Branch Logo"
                    className="community-branch-icon"
                    src={Favicon}
                  />
                  <p>{(tree && tree[0]?.uniqueRandomId) || "N/A"}</p>
                  <button type="button" style={{ cursor: "pointer" }}>
                    {tree && tree[0]?.uniqueRandomId ? "User" : "Vacant"}
                  </button>

                  <div className="branch-connector2">
                    <div className="line vertical"></div>
                    <div className="line horizontal"></div>
                    <div className="line diagonal-left">
                      <div className="status-container">
                        <img
                          alt="Status Logo"
                          className="community-branch-icon"
                          src={Favicon}
                        />
                        <p>{(tree && tree[2]?.uniqueRandomId) || "N/A"}</p>
                        <button style={{ cursor: "pointer" }}>
                          {tree && tree[2]?.uniqueRandomId ? "User" : "Vacant"}
                        </button>
                      </div>
                    </div>
                    <div className="line diagonal-right">
                      <div className="status-container2">
                        <img
                          alt="Status Logo"
                          className="community-branch-icon"
                          src={Favicon}
                        />
                        <p>{(tree && tree[3]?.uniqueRandomId) || "N/A"}</p>
                        <button style={{ cursor: "pointer" }}>
                          {tree && tree[3]?.uniqueRandomId ? "User" : "Vacant"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="branch-item">
                  <img
                    alt="Branch Logo"
                    className="community-branch-icon"
                    src={Favicon}
                  />
                  <p>{(tree && tree[1]?.uniqueRandomId) || "N/A"}</p>
                  <button style={{ cursor: "pointer" }}>
                    {" "}
                    {tree && tree[1]?.uniqueRandomId ? "User" : "Vacant"}
                  </button>
                  <div className="branch-connector2">
                    <div className="line vertical"></div>
                    <div className="line horizontal"></div>
                    <div className="line diagonal-left">
                      <div className="status-container">
                        <img
                          alt="Status Logo"
                          className="community-branch-icon"
                          src={Favicon}
                        />
                        <p>{(tree && tree[4]?.uniqueRandomId) || "N/A"}</p>
                        <button style={{ cursor: "pointer" }}>
                          {" "}
                          {tree && tree[4]?.uniqueRandomId ? "User" : "Vacant"}
                        </button>
                      </div>
                    </div>
                    <div className="line diagonal-right">
                      <div className="status-container2">
                        <img
                          alt="Status Logo"
                          className="community-branch-icon"
                          src={Favicon}
                        />
                        <p>{(tree && tree[5]?.uniqueRandomId) || "N/A"}</p>
                        <button style={{ cursor: "pointer" }}>
                          {" "}
                          {tree && tree[5]?.uniqueRandomId ? "User" : "Vacant"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* )} */}
            </div>
          </div>
          {/* <ReferralModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(true)}
          /> */}
        </main>
      </div>
    </>
  );
}
