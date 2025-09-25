import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@rainbow-me/rainbowkit/styles.css";
import {
  connectorsForWallets,
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { opBNB, opBNBTestnet, polygon } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import {
  coreWallet,
  injectedWallet,
  okxWallet,
  rainbowWallet,
  safepalWallet,
  tokenPocketWallet,
  trustWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";
import { argentWallet } from "@rainbow-me/rainbowkit/wallets";
export const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "21538b3e42773b1bcd26d4ab8f177d2d",
  wallets: [
    {
      groupName: "Popular Wallets",
      wallets: [safepalWallet, metaMaskWallet, trustWallet],
    },
  ],
  chains: [opBNBTestnet],
  ssr: false,
});

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Toaster />
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </>
);
