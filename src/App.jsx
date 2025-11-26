import { useState } from "react";

import { Toaster } from "react-hot-toast";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AppRoutes from "./Components/AppRoutes/AppRoutes";
// import "../src/css/headernew.css";
import "../src/css/Buy.css";
import "../src/css/Level.css";
import "./css/NFTCreation.css";
import "./css/custom.css";
import "./MalvikaCss/animate.css";
import "./MalvikaCss/bootstrap.css";
import "./MalvikaCss/font-awesome.css";
import "./MalvikaCss/ntfs.css";
import "./MalvikaCss/responsive.css";
import "./MalvikaCss/shortcodes.css";
import "./MalvikaCss/style.css";
import "./css/Blog.css";
import "./css/chat.css";
import WelcomeModal from "./Components/Common/WelcomeModal";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              fontWeight: "500",
              backgroundColor: "#f0f8ff",
              color: "#333",
              borderRadius: "8px",
              padding: "10px",
              fontSize: "14px",
            },
          },
          error: {
            style: {
              fontWeight: "500",
              backgroundColor: "#ffe5e5",
              color: "#900",
              borderRadius: "8px",
              padding: "10px",
              fontSize: "14px",
            },
          },
          loading: {
            style: {
              fontWeight: "500",
              backgroundColor: "#fffbe5",
              color: "#555",
              border: "1px solid #ffd700",
              borderRadius: "8px",
              padding: "10px",
              fontSize: "14px",
            },
          },
        }}
      />
      <AppRoutes />
      {/* <WelcomeModal /> */}
    </>
  );
}

export default App;
