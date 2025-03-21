import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
export const URLApi = "http://192.168.1.150:8081/api";
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

    return response.data;
  } catch (error) {
    console.log("Error in  createNftVrsFn :", error);
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
