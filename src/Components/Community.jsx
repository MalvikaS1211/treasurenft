import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Favicon from "../assets/Favicon.png";
import ConnectWallet from "./ConnectWallet";
import HeaderDashboard from "./HeaderDashboard";
import { useAccount } from "wagmi";
import { getFetchTree } from "../Helper/API_Functions";
import toast from "react-hot-toast";
export default function Community() {
  const { address } = useAccount();
  const [tree, setTree] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredValue, setFilteredValue] = useState(null);

  const handleSearch = () => {
    const validValues = ["730518", "386138"];
    if (validValues.includes(searchValue)) {
      setFilteredValue(searchValue);
    } else {
      setFilteredValue(null);
      alert("User ID not found");
    }
  };

  // const owner = "0x9ccf0cd809843c239a6b6332985328a8b65dac7f";
  const [owner, setOwner] = useState(
    "0x9ccf0cd809843c239a6b6332985328a8b65dac7f"
  );
  const handleTree = async (address) => {
    const res = await getFetchTree(address);
    if (res.success) {
      console.log(res.obj, res, "tree");
      const data = res?.obj?.sort((a, b) => {
        return a.timestamp - b.timestamp;
      });
      setTree(data?.slice(0, 6));
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
                  onChange={(e) => {
                    handleTree(e.target.value);
                    setSearchValue(e.target.value);
                  }}
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
            {/* <div className="tree">
              <img
                src={Favicon}
                alt="Tree Logo"
                className="community-branch-icon"
              />
              <div className="logo" style={{ color: "black" }}>
                {owner}
              </div>
              <div className="branch-connector">
                <div className="line vertical"></div>
                <div className="line horizontal"></div>
                <div className="line diagonal-left"></div>
                <div className="line diagonal-right"></div>
              </div>
              <div className="branches">
                {[...tree].map((item, index) => (
                  <div className="branch-item" key={index}>
                    <img
                      src={Favicon}
                      alt="Branch Logo"
                      className="community-branch-icon"
                    />
                    <p>{item.uniqueRandomId}</p>
                    <button style={{ cursor: "pointer" }}>Vacant</button>
                    <div className="branch-connector2">
                      <div className="line vertical"></div>
                      <div className="line horizontal"></div>
                      <div className="line diagonal-left">
                        <div className="status-container">
                          <img
                            src={Favicon}
                            alt="Status Logo"
                            className="community-branch-icon"
                          />
                          <p>{tree[index]?.uniqueRandomId}</p>
                          <button style={{ cursor: "pointer" }}>Vacant</button>
                        </div>
                      </div>
                      <div className="line diagonal-right">
                        <div className="status-container2">
                          <img
                            src={Favicon}
                            alt="Status Logo"
                            className="community-branch-icon"
                          />
                          <p>0</p>
                          <button style={{ cursor: "pointer" }}>Vacant</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="tree">
              <img
                alt="Tree Logo"
                className="community-branch-icon"
                src={Favicon}
              />
              <div className="logo Level-owner">
                0x9ccf0cd809843c239a6b6332985328a8b65dac7f
              </div>
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
                  <button style={{ cursor: "pointer" }}>Vacant</button>
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
                        <button style={{ cursor: "pointer" }}>Vacant</button>
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
                        <button style={{ cursor: "pointer" }}>Vacant</button>
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
                  <button style={{ cursor: "pointer" }}>Vacant</button>
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
                        <button style={{ cursor: "pointer" }}>Vacant</button>
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
                        <button style={{ cursor: "pointer" }}>Vacant</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* )} */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
