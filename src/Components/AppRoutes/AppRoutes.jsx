import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "../LandingPage/Home";
import Explore from "../Explore";

import Dashboard from "../Dashboard/dashboard";
import Refferal from "../Dashboard/Refferal";
import Community from "../Dashboard/Community";
import DownLine from "../Dashboard/DownLine";

import Registration from "../Login/Registration";
import CreateNFT from "../CreateNFT/CreateNFT";
import LiveAuction from "../LandingPage/LiveAuction";
import Trade from "../Trade";
import Royality from "../Dashboard/Royality";
import SignIn from "../Login/SignIn";
import Direct from "../Dashboard/Direct";
import Level from "../Dashboard/Level";
import BlogPage from "../Blog/Blog";
import BlogDetail from "../Blog/BlogDetail";
import ChatSupport from "../Support/ChatSupport";
import ChatConversation from "../Support/ChatConversation";
import TradingIncome from "../Dashboard/TradingIncome";
import Staking from "../Staking";
import CommingSoon from "../CommingSoon";

function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<CommingSoon/>} /> */}

          <Route path="/" element={<Home />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/explore" element={<Explore />} />

          {/* <Route path="/account/level" element={<Level />} /> */}

          <Route path="/NFTcreation" element={<CreateNFT />} />
          {/* dashboard routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/refferal" element={<Refferal />} />
          <Route path="/community" element={<Community />} />
          <Route path="/downline" element={<DownLine />} />
          <Route path="/royality" element={<Royality />} />
          <Route path="/buyNft" element={<Trade />} />
          <Route path="/direct" element={<Direct />} />
          <Route path="/level" element={<Level />} />
          <Route path="/Trading-Income" element={<TradingIncome />} />
          <Route path="/support" element={<ChatSupport />} />
          <Route path="/support-chat" element={<ChatConversation />} />
          {/* dashboard routes */}
          <Route path="/signup" element={<Registration />} />
          <Route path="/signin" element={<SignIn />} />

          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          <Route path="/staking" element={<Staking />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
