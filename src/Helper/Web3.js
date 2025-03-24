import {
  writeContract,
  readContract,
  waitForTransactionReceipt,
} from "@wagmi/core";
import { toast } from "react-hot-toast";
import {
  CONTRACT_ADDRESS_ABI,
  CONTRACT_ADDRESS,
  tokenAbi,
  USDT_TOKEN,
} from "../Helper/Config";
import { config } from "../main";
import Web3 from "web3";
const web3 = new Web3(Web3.givenProvider);

export async function isUserExist(address) {
  const result = await readContract(config, {
    abi: CONTRACT_ADDRESS_ABI,
    address: CONTRACT_ADDRESS,
    functionName: "isUserExist",
    args: [address],
  });

  return result;
}

export async function registerfn(refAddress, amt) {
  const result = await writeContract(config, {
    abi: CONTRACT_ADDRESS_ABI,
    address: CONTRACT_ADDRESS,
    functionName: "register",
    args: [
      refAddress,
      //   (15 * 1e18).toLocaleString("fullwide", { useGrouping: false }),
    ],
  });
  const res = waitForTransactionReceipt(config, { hash: result });
  const data = await toast.promise(res, {
    loading: "User registration is pending...",
    success: "User register Successfully",
    error: "Registration failed",
  });
  return data;
}

export async function approveToken(amt) {
  const result = await writeContract(config, {
    abi: tokenAbi,
    address: USDT_TOKEN,
    functionName: "approve",
    args: [
      CONTRACT_ADDRESS,
      (amt * 1e18).toLocaleString("fullwide", { useGrouping: false }),
    ],
  });

  return result;
}

export async function buyNFTFn(
  tokenId,
  initialPrice,
  v,
  r,
  s,
  title,
  description,
  metadataURI
) {
  console.log(
    tokenId,
    initialPrice,
    v,
    r,
    s,
    title,
    description,
    metadataURI,
    "::::DAsdasdfsadfASDFSADF"
  );
  const result = await writeContract(config, {
    abi: CONTRACT_ADDRESS_ABI,
    address: CONTRACT_ADDRESS,
    functionName: "buyNFT",
    args: [
      tokenId,
      initialPrice.toLocaleString("fullwide", {
        useGrouping: false,
      }),
      v,
      r,
      s,
      title,
      description,
      metadataURI,
    ],
  });

  return result;
}

export async function changeOwnerFn(ownerAddress) {
  const result = await writeContract(config, {
    abi: CONTRACT_ADDRESS_ABI,
    address: CONTRACT_ADDRESS,
    functionName: "changeOwner",
    args: [ownerAddress],
  });

  return result;
}

export async function createNFTFn(
  title,
  description,
  metadataURI,
  initialPrice,
  totalAmount,
  v,
  r,
  s
) {
  console.log(
    title,
    description,
    metadataURI,
    initialPrice,
    totalAmount,
    v,
    r,
    s,
    "FCASDFFFFFFF"
  );
  const result = await writeContract(config, {
    abi: CONTRACT_ADDRESS_ABI,
    address: CONTRACT_ADDRESS,
    functionName: "createNFT",
    args: [
      title,
      description,
      metadataURI,
      initialPrice.toLocaleString("fullwide", { useGrouping: false }),
      totalAmount.toLocaleString("fullwide", { useGrouping: false }),
      v,
      r,
      s,
    ],
  });

  return result;
}

export async function createNFTsBulkFn(
  title,
  descriptions,
  metadataURIs,
  initialPrices,
  totalAmt,
  v,
  r,
  s
) {
  const result = await writeContract(config, {
    abi: CONTRACT_ADDRESS_ABI,
    address: CONTRACT_ADDRESS,
    functionName: "createNFTsBulk",
    args: [
      title,
      descriptions,
      metadataURIs,
      (initialPrices * 1e18).toLocaleString("fullwide", { useGrouping: false }),
      totalAmt,
      v,
      r,
      s,
    ],
  });

  return result;
}

export async function getNfts(tokenId) {
  const result = await readContract(config, {
    abi: CONTRACT_ADDRESS_ABI,
    address: CONTRACT_ADDRESS,
    functionName: "nfts",
    args: [tokenId],
  });

  console.log("eresrsafd", result);
  return result;
}

export async function upgradePackageFn() {
  const result = await writeContract(config, {
    abi: CONTRACT_ADDRESS_ABI,
    address: CONTRACT_ADDRESS,
    functionName: "upgradePackage",
    args: [],
  });
  const res = waitForTransactionReceipt(config, { hash: result });
  const data = await toast.promise(res, {
    loading: "User upgradation is pending...",
    success: "User upgradation Successfully",
    error: "Upgradation failed",
  });
  console.log(data, "upgradePackageFn");
  return data;
}

export async function usersFn(address) {
  const result = await readContract(config, {
    abi: CONTRACT_ADDRESS_ABI,
    address: CONTRACT_ADDRESS,
    functionName: "users",
    args: [address],
  });

  return result;
}
