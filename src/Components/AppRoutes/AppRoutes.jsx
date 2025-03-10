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
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
