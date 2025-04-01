import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

// export const URLApi = "https://magicverse.org/api";
// export const URLApi = "http://192.168.1.10:8081/api";
export const URLApi = "http://192.168.1.161:8081/api";

export async function getUserInfo(address) {
  try {
    const response = await axios.post(`${URLApi}/get-user-info`, {
      userAddress: address,
    });

    return response.data;
  } catch (error) {
    console.log("Error getUserInfo Admin:", error);
  }
}
export async function createNftVrsFn(
  address,
  initialPrice,
  title,
  description,
  metadataURI,
  totalAmount
) {
  try {
    const response = await axios.post(`${URLApi}/create-nft-vrs`, {
      userAddress: address,
      initialPrice: initialPrice,
      title: title,
      description: description,
      metadataURI: metadataURI,
      totalAmount: totalAmount,
    });
    console.log(response, "from api call");
    return response.data;
  } catch (error) {
    console.log(error, "error in api");
    return error.response;
  }
}

export async function getUserCreatedNftsFn(address) {
  try {
    const response = await axios.post(`${URLApi}/get-user-created-nfts`, {
      userAddress: address,
    });

    return response.data;
  } catch (error) {
    console.log("Error getUserCreatedNfts :", error);
  }
}

export async function getDirectTeam(address, page, limit) {
  try {
    const response = await axios.get(`${URLApi}/directTeam`, {
      params: {
        user: address,
        page: page,
        limit: limit,
      },
    });

    return response.data;
  } catch (error) {
    console.log("Error getUserInfo Admin:", error);
  }
}

export async function getReadyForsaleFn(address, tokenId) {
  try {
    const response = await axios.post(`${URLApi}/get-ready-for-sale`, {
      userAddress: address,
      tokenId: tokenId,
    });

    return response.data;
  } catch (error) {
    console.log("Error getReadyForsaleFn :", error);
  }
}

export async function getTradeUserFn(address) {
  try {
    const response = await axios.post(`${URLApi}/get-all-trades-for-user`, {
      userAddress: address,
    });

    return response.data;
  } catch (error) {
    console.log("Error getTradeUserFn :", error);
  }
}

export async function getReadyForBuyFn(
  userAddress,
  initialPrice,
  title,
  description,
  metadataURI,
  tokenId,
  totalAmount
) {
  // console.log(
  //   userAddress,
  //   initialPrice,
  //   title,
  //   description,
  //   metadataURI,
  //   tokenId,
  //   totalAmount,
  //   "in api call"
  // );
  try {
    if (!title) {
      return;
    }
    const response = await axios.post(`${URLApi}/buy-nft-vrs`, {
      userAddress,
      initialPrice,
      title,
      description,
      metadataURI,
      tokenId,
      totalAmount,
    });

    return response?.data;
  } catch (error) {
    console.log("Error getReadyForBuyFn :", error);
    return false;
  }
}

export async function getCreateBulkNFT(
  userAddress,
  initialPrices,
  titles,
  descriptions,
  metadataURIs,
  totalAmount
) {
  try {
    if (!titles) {
      return;
    }
    const response = await axios.post(`${URLApi}/create-nft-bulk`, {
      userAddress,
      initialPrices,
      titles,
      descriptions,
      metadataURIs,
      totalAmount,
    });

    return response?.data;
  } catch (error) {
    console.log("Error getCreateBulkNFT :", error);
    return false;
  }
}

export async function getUserDirects(address, page = 1, limit = 10) {
  try {
    const response = await axios.post(`${URLApi}/get-user-directs`, {
      userAddress: address,
      page,
      limit,
    });

    return response.data;
  } catch (error) {
    console.log("Error getUserDirects Admin:", error);
  }
}

export async function getRoyalty(address, page = 1, limit = 52) {
  try {
    const response = await axios.post(`${URLApi}/user-royalty-transferred`, {
      userAddress: address,
      page,
      limit,
    });

    return response.data;
  } catch (error) {
    console.log("Error getRoyalty Admin:", error);
  }
}

export async function getTotalTeam(address, page = 1, limit = 10, level) {
  try {
    const response = await axios.post(`${URLApi}/total-team`, {
      userAddress: address,
      page,
      limit,
      level,
    });
    console.log(level, "level in api call");
    return response.data;
  } catch (error) {
    console.log("Error getRoyalty Admin:", error);
  }
}

export async function getMaturedNFTs(address, page = 1, limit = 10) {
  try {
    const response = await axios.post(`${URLApi}/user-matured-nfts`, {
      userAddress: address,
      page,
      limit,
    });

    return response.data;
  } catch (error) {
    console.log("Error getMaturedNFTs Admin:", error);
  }
}

export async function getPurchasedNFTs(address) {
  try {
    const response = await axios.post(`${URLApi}/user-purchased-nft`, {
      userAddress: address,
    });

    return response.data;
  } catch (error) {
    console.log("Error getPurchasedNFT Admin:", error);
  }
}

export async function getOwnedNFTs(address) {
  try {
    const response = await axios.post(`${URLApi}/user-curr-nfts`, {
      userAddress: address,
    });

    return response.data;
  } catch (error) {
    console.log("Error getOwnedNFTs Admin:", error);
  }
}

export async function getFetchTree(address) {
  try {
    const response = await axios.post(`${URLApi}/fetch-tree`, {
      userAddress: address,
    });

    return response.data;
  } catch (error) {
    console.log("Error getOwnedNFTs Admin:", error);
  }
}

export async function getIdToAddress(randomId) {
  try {
    const response = await axios.post(`${URLApi}/id-to-address`, {
      randomId: randomId,
    });

    return response.data;
  } catch (error) {
    console.log("Error getOwnedNFTs Admin:", error);
  }
}

export async function getDirectIncome(address) {
  try {
    const response = await axios.post(`${URLApi}/direct-income`, {
      userAddress: address,
    });

    return response.data;
  } catch (error) {
    console.log("Error getDirectIncome Admin:", error);
  }
}

export async function getLevelIncome(address) {
  try {
    const response = await axios.post(`${URLApi}/level-income`, {
      userAddress: address,
    });

    return response.data;
  } catch (error) {
    console.log("Error getLevelIncome Admin:", error);
  }
}
