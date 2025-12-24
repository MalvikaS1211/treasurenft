import React, { useState, Fragment } from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";
import Navbar from "./Navbar";
import { getTransactionHash } from "../../Helper/API_Functions";

export default function TransactionHash() {
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

      if (res?.success) {
        toast.success(res?.message);
        setTxHash("");
      } else {
        toast.error(res?.message || "Invalid transaction hash");
      }
    } catch (error) {
      toast.error("An error occurred while fetching the transaction hash");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="p-4 dashboardbg">
        <main className="content-dashboard">
          <Navbar title="Get Transaction Hash" />

          <Box>
            <Card
              sx={{
                width: "100%",
                maxWidth: 480,
                borderRadius: 4,
                backgroundColor: "#1d1d1f",
                color: "#fff",
                boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{ mb: 3, fontWeight: 600 }}
                >
                  Enter Transaction Hash
                </Typography>

                <input
                  type="text"
                  value={TxHash}
                  onChange={(e) => setTxHash(e.target.value)}
                  placeholder="Enter your transaction hash"
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid #3a3a45",
                    backgroundColor: "#2a2a32",
                    color: "#fff",
                    marginBottom: "20px",
                  }}
                />

                <Button
                  fullWidth
                  onClick={handleClick}
                  disabled={loading}
                  sx={{
                    py: 1.3,
                    borderRadius: 2,
                    fontWeight: 600,
                    background:
                      "linear-gradient(135deg, #6c63ff, #4f46e5)",
                    textTransform: "none",
                    fontSize: "14px",
                    "&:hover": {
                      opacity: 0.9,
                    },
                    color: "#fff",
                  }}
                >
                  {loading ? (
                    <CircularProgress size={22} sx={{ color: "#fff" }} />
                  ) : (
                    "Submit"
                  )}
                </Button>

                {result?.message && (
                  <Typography
                    sx={{
                      mt: 3,
                      fontSize: "14px",
                      textAlign: "center",
                      color: "#ccc",
                    }}
                  >
                    <b>Note:</b> {result.message}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Box>
        </main>
      </div>
    </Fragment>
  );
}
