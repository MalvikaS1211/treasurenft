import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

// export const URLApi = "http://64.227.155.146:8081/api";
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
  console.log(
    userAddress,
    initialPrice,
    title,
    description,
    metadataURI,
    tokenId,
    totalAmount,
    "in api call"
  );
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

export async function getRoyalty(address, page = 1, limit = 10) {
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

export async function getTotalTeam(address, page = 1, limit = 10, level = 1) {
  try {
    const response = await axios.post(`${URLApi}/total-team`, {
      userAddress: address,
      page,
      limit,
      level,
    });

    return response.data;
  } catch (error) {
    console.log("Error getRoyalty Admin:", error);
  }
}
