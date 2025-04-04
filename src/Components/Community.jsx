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
  // const address = "0x6Fd4fB35dda502bdB88Ef66c8777c345F1a5BF0e";
  const [tree, setTree] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredValue, setFilteredValue] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [rootUser, setRootUser] = useState(null);
  const [prevStack, setPrevNext] = useState([]);
  const [nextStack, setNextStack] = useState([]);

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

  const handleTree = async (address, isNavigation = false) => {
    try {
      const res = await getFetchTree(address);
      if (res.success) {
        console.log(res.rootUserUniqueId, "tree");
        if (!isNavigation) {
          setPrevNext((prev) => [...prev, address]);
          setNextStack([]);
        }
        const data = res?.obj?.sort((a, b) => {
          return a.timestamp - b.timestamp;
        });
        setTree(data?.slice(0, 6));
        setRootUser(res.rootUserUniqueId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(prevStack, ":::prevStack");

  const handlePrevNext = (action) => {
    setPrevNext((prev) => {
      if (!prev || prev.length === 0) return prev;

      // Handle "Prev" action
      if (action === "p" && prev.length > 1) {
        const lastItem = prev[prev.length - 1]; // Get last item
        setNextStack((next) => [...next, lastItem]); // Store it in nextStack
        const prevValue = prev[prev.length - 2]; // Get previous value
        handleTree(prevValue, true); // Fetch previous tree data
        return prev.slice(0, -1); // Remove last entry from prevStack
      }

      // Handle "Next" action
      if (action === "n" && nextStack.length > 0) {
        const nextValue = nextStack[nextStack.length - 1]; // Get last removed item
        handleTree(nextValue, true); // Fetch next tree data
        setPrevNext((prev) => [...prev, nextValue]); // Restore it to prevStack
        setNextStack((next) => next.slice(0, -1)); // Remove from nextStack
      }

      return prev; // Return previous stack if no action is taken
    });
  };

  // const handlePrevNext = (action) => {
  //   setPrevNext((prev) => {
  //     if (!prev || prev.length === 0) return prev;

  //     if (action === "p" && prev.length > 1) {
  //       const lastItem = prev[prev.length - 1]; // Get last item
  //       setNextStack((next) => [...next, lastItem]); // Store it in nextStack
  //       const prevValue = prev[prev.length - 2]; // Get previous value
  //       handleTree(prevValue, true); // Fetch user with navigation flag
  //       return prev.slice(0, -1); // Remove last entry from prevNext
  //     }

  //     if (action === "n") {
  //       setNextStack((next) => {
  //         if (next.length > 0) {
  //           const nextValue = next[next.length - 1]; // Get last removed item
  //           handleTree(nextValue, true); // Fetch user with navigation flag
  //           setPrevNext((prev) => [...prev, nextValue]); // Restore it to prevNext
  //           return next.slice(0, -1); // Remove from nextStack
  //         }
  //         return next;
  //       });
  //     }

  //     return prev;
  //   });
  // };

  useEffect(() => {
    if (address) {
      handleTree(address);
    } else toast.error("Please connect your wallet");
  }, [address]);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <div className="p-4 dashboardbg">
        <main className="content-dashboard">
          <Navbar title="Community" />
          {/* <HeaderDashboard title="Community" /> */}
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
                <button
                  className="prev-next-btn"
                  onClick={() => {
                    handlePrevNext("p");
                  }}
                >
                  PREV
                </button>
                <button
                  className="prev-next-btn"
                  onClick={() => {
                    handlePrevNext("n");
                  }}
                >
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
              <div className="logo Level-owner">{rootUser && rootUser}</div>
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
                    onClick={() => {
                      handleTree(tree && tree[0]?.uniqueRandomId.toString());
                    }}
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
                          onClick={() => {
                            handleTree(
                              tree && tree[2]?.uniqueRandomId.toString()
                            );
                          }}
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
                          onClick={() => {
                            handleTree(
                              tree && tree[3]?.uniqueRandomId.toString()
                            );
                          }}
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
                    onClick={() => {
                      handleTree(tree && tree[1]?.uniqueRandomId.toString());
                    }}
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
                          onClick={() => {
                            handleTree(
                              tree && tree[4]?.uniqueRandomId.toString()
                            );
                          }}
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
                          onClick={() => {
                            handleTree(
                              tree && tree[5]?.uniqueRandomId.toString()
                            );
                          }}
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
