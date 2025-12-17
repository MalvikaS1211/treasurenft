import React, { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { useAccount } from "wagmi";
import Navbar from "./Navbar";
import { getTransactionHash } from "../../Helper/API_Functions";
import toast from "react-hot-toast";

export default function GetYourTxHash() {
  const { address } = useAccount();
  const [TxHash, setTxHash] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const handleClick = async () => {
    if (!TxHash) {
      toast.error("Please enter a transaction hash");
      return;
    }

    try {
      setLoading(true);

      const res = await getTransactionHash(TxHash);
      setResult(res);

      if (res?.success === true) {
        toast.success(res?.message);
        setTxHash("");
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 dashboardbg">
      <main className="content-dashboard">
        <Navbar title="Get Transaction Hash" />

        <div style={{ minHeight: "100vh" }} className="mt-4">
          <Box sx={{ minHeight: "25vh", display: "flex" }}>
            <Card
              sx={{
                width: "100%",
                maxWidth: 500,
                borderRadius: 4,
                backgroundColor: "#1d1d1f",
                color: "#fff",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Enter Transaction Hash
                </Typography>

                <Box>
                  <div style={{ marginBottom: "20px" }}>
                    <input
                      type="text"
                      value={TxHash}
                      onChange={(e) => setTxHash(e.target.value)}
                      placeholder="Enter your transaction hash"
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #555",
                        backgroundColor: "#2a2a2c",
                        color: "#fff",
                      }}
                    />
                  </div>

                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleClick}
                    sx={{
                      py: 1.2,
                      borderRadius: 2,
                      fontWeight: 600,
                      background: "linear-gradient(135deg, #6c63ff, #4f46e5)",
                      textTransform: "none",
                      fontSize: "12px",
                    }}
                    disabled={loading}
                  >
                    {loading ? (
                      <CircularProgress size={22} sx={{ color: "#fff" }} />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
          {result?.message && (
            <p
              className="pt-4 text-white p-4"
              style={{ textAlign: "justify", color: "black", fontSize: "16px" }}
            >
              <b> Note :</b> {result?.message}
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
