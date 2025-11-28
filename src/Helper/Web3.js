import {
  writeContract,
  readContract,
  waitForTransactionReceipt,
  getBalance,
} from "@wagmi/core";
import { toast } from "react-hot-toast";
import {
  CONTRACT_ADDRESS_ABI,
  CONTRACT_ADDRESS,
  tokenAbi,
  USDT_TOKEN,
  IFT_ABI,
  IFT_Token,
} from "../Helper/Config";
import { config } from "../main";
import Web3 from "web3";
const web3 = new Web3(Web3.givenProvider);

export async function isUserExist(address) {
  try {
    const result = await readContract(config, {
      abi: CONTRACT_ADDRESS_ABI,
      address: CONTRACT_ADDRESS,
      functionName: "isUserExist",
      args: [address],
    });

    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function registerfn(refAddress, amt) {
  try {
    const result = await writeContract(config, {
      abi: CONTRACT_ADDRESS_ABI,
      address: CONTRACT_ADDRESS,
      functionName: "register",
      args: [refAddress],
    });
    const res = waitForTransactionReceipt(config, { hash: result });
    const data = await toast.promise(res, {
      loading: "User registration is pending...",
      success: "User register Successfully",
      error: "Registration failed",
    });
    return data;
  } catch (error) {
    console.log(error);
  }
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
  const res = await waitForTransactionReceipt(config, { hash: result });
  return res;
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

  const data = await waitForTransactionReceipt(config, { hash: result });

  return data;
}

export async function changeOwnerFn(ownerAddress) {
  try {
    const result = await writeContract(config, {
      abi: CONTRACT_ADDRESS_ABI,
      address: CONTRACT_ADDRESS,
      functionName: "changeOwner",
      args: [ownerAddress],
    });

    return result;
  } catch (error) {
    console.log(error);
  }
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
  const res = await waitForTransactionReceipt(config, { hash: result });
  return res;
}

export async function createNFTsBulkFn(
  title,
  descriptions,
  metadataURIs,
  initialPrices,
  totalAmt,
  v,
  r,
  s,
  tokenId
) {
  const result = await writeContract(config, {
    abi: CONTRACT_ADDRESS_ABI,
    address: CONTRACT_ADDRESS,
    functionName: "createNFTslast",
    args: [
      title,
      descriptions,
      metadataURIs,
      initialPrices,
      totalAmt,
      v,
      r,
      s,
      tokenId,
    ],
  });
  const res = await waitForTransactionReceipt(config, { hash: result });
  return res;
}

export async function getNfts(tokenId) {
  try {
    const result = await readContract(config, {
      abi: CONTRACT_ADDRESS_ABI,
      address: CONTRACT_ADDRESS,
      functionName: "nfts",
      args: [tokenId],
    });

    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function upgradePackageFn(amt) {
  try {
    const result = await writeContract(config, {
      abi: CONTRACT_ADDRESS_ABI,
      address: CONTRACT_ADDRESS,
      functionName: "upgradePackage",
      args: [amt],
    });
    const res = waitForTransactionReceipt(config, { hash: result });
    const data = await toast.promise(res, {
      loading: "User upgradation is pending...",
      success: "User upgradation Successfully",
      error: "Upgradation failed",
    });
    console.log(data, "upgradePackageFn");
    return data;
  } catch (error) {
    console.log(error);
  }
}

// export async function usersFn(address) {
//   try {
//     const result = await readContract(config, {
//       abi: CONTRACT_ADDRESS_ABI,
//       address: CONTRACT_ADDRESS,
//       functionName: "users",
//       args: [address],
//     });

//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function usersFn(address) {
  try {
    const result = await readContract(config, {
      abi: CONTRACT_ADDRESS_ABI,
      address: CONTRACT_ADDRESS,
      functionName: "users",
      args: [address],
    });

    return result;
  } catch (error) {
    console.error("usersFn Error:", error);

    return {
      error: true,
      exists: false,
      data: null,
    };
  }
}


export async function getAvailaibleBalance(address) {
  try {
    const result = await readContract(config, {
      abi: CONTRACT_ADDRESS_ABI,
      address: CONTRACT_ADDRESS,
      functionName: "availaibleBalance",
      args: [address],
    });

    return Number(result);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchUserTokenBalance(address) {
  try {
    const balance = await getBalance(config, {
      address: address,
      token: USDT_TOKEN,
    });
    return balance.formatted;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchNftIncome(address) {
  try {
    const result = await readContract(config, {
      abi: CONTRACT_ADDRESS_ABI,
      address: CONTRACT_ADDRESS,
      functionName: "nftIncome",
      args: [address],
    });

    return result;
  } catch (error) {
    console.log(error);
  }
}
export async function fetchIFTTtokenBalance() {
  console.log("in Contract result:");
  const result = await readContract(config, {
    abi: IFT_ABI,
    address: IFT_Token,
    functionName: "rateInUSDT",
    args: [],
  });
  console.log("Contract result:", result);
  return result;
}

export async function fetchWalletBalance(address) {
  try {
    const balance = await getBalance(config, {
      address: address,
      token: IFT_Token,
    });
    return balance.formatted;
  } catch (error) {
    console.log(error);
  }
}
