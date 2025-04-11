import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import SignUp from "../SignUp";

import Home from "../Home";
import Explore from "../Explore";
import Collection from "../Collection";
import DepositNFT from "../DepositNFT";
// import NoxiousAudience from "../NoxiousAudience";
import Account from "../Account";

import Airdrop from "../Airdrop";
import NFTCreation from "../NftCreation";
import NFTBuySell from "../NFTBuySell";
import Dashboard from "../dashboard";
import Refferal from "../Refferal";
import Community from "../Community";
import DownLine from "../DownLine";
import NFTBuy from "../NFTBuy";
import Registration from "../Registration";
import CreateNFT from "../CreateNFT";
import LiveAuction from "../LiveAuction";
import Trade from "../Trade";
import Royality from "../Royality";
import SignIn from "../SignIn";
import Direct from "../Direct";
import Level from "../Level";
import BlogPage from "../Blog";
import BlogDetail from "../BlogDetail";

function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/explore" element={<Explore></Explore>} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/depositNFT" element={<DepositNFT />} />

          <Route path="/account" element={<Account />} />
          {/* <Route path="/account/level" element={<Level />} /> */}
          <Route path="/Airdrop" element={<Airdrop />} />
          <Route path="/NFTcreation" element={<CreateNFT />} />
          {/* <Route path="/NFTBuySell" element={<NFTBuySell />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/refferal" element={<Refferal />} />
          <Route path="/community" element={<Community />} />
          <Route path="/downline" element={<DownLine />} />
          <Route path="/royality" element={<Royality />} />
          <Route path="/buyNft" element={<Trade />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/direct" element={<Direct />} />
          <Route path="/level" element={<Level />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
