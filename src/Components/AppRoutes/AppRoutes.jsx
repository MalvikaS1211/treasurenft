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
function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/explore" element={<Explore></Explore>} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
