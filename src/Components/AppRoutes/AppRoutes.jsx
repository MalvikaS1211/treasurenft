import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import SignUp from "../SignUp";
import Dashboard from "../dashboard";
import Home from "../Home";
import Explore from "../Explore";
import Collection from "../Collection";
import DepositNFT from "../DepositNFT";
import NoxiousAudience from "../NoxiousAudience";
import Account from "../Account";
import Level from "../Level";
import Airdrop from "../Airdrop";
import NFTCreation from "../NftCreation";
import NFTBuySell from "../NFTBuySell";
function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/explore" element={<Explore></Explore>} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/depositNFT" element={<DepositNFT />} />
          <Route path="/exploreCreator" element={<NoxiousAudience />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/level" element={<Level />} />
          <Route path="/Airdrop" element={<Airdrop />} />
          <Route path="/NFTcreation" element={<NFTCreation />} />
          <Route path="/NFTBuySell" element={<NFTBuySell />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
