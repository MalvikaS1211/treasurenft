import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export const URLApi = "https://iftglobal.org/api";
export const SOCKET_SERVER_URL = "https://iftglobal.org";

// export const URLApi = "http://127.0.0.1:8081/api";
// export const SOCKET_SERVER_URL = "http://127.0.0.1:8081/api";

export const pinataApiKey = "e45f06a4f288fd4c7ded";
export const pinataSecretApiKey =
  "5d66447d15dde18b2851a2d6aefc48f4ca25b29c05440027f816f7d176cb7fdd";

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
export async function claimSalaryIncome(address) {
  try {
    const response = await axios.post(`${URLApi}/claimSalaryIncome`, {
      user: address,
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
    console.log(error, "create-nft-vrs");
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
    console.log("Error getDirectTeam Admin:", error);
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
    console.log(response, "response in getTradeUserFn");
    return response.data;
  } catch (error) {
    const errorMessage =
      error?.response?.data?.message || error.message || "Some error occured";
    toast.error(errorMessage);
    console.log("Error getTradeUserFn :", errorMessage);
    return error;
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
    throw error;
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

export async function getUserDirects(address, page, limit) {
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

export async function getRoyalty(address, page, limit) {
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

export async function getTotalTeam(address, page, limit, level) {
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
    console.log("Error getTotalTeam Admin:", error);
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
    console.log("Error getFetchTree Admin:", error);
  }
}

export async function getIdToAddress(randomId) {
  try {
    const response = await axios.post(`${URLApi}/id-to-address`, {
      randomId: randomId,
    });

    return response.data;
  } catch (error) {
    console.log("Error getIdToAddress Admin:", error);
  }
}

export async function getDirectIncome(address, page, limit) {
  try {
    const response = await axios.post(`${URLApi}/direct-income`, {
      userAddress: address,
      page,
      limit,
    });

    return response.data;
  } catch (error) {
    console.log("Error getDirectIncome Admin:", error);
  }
}

export async function getLevelIncome(address, page, limit) {
  try {
    const response = await axios.post(`${URLApi}/level-income`, {
      userAddress: address,
      page,
      limit,
    });

    return response.data;
  } catch (error) {
    console.log("Error getLevelIncome Admin:", error);
  }
}

export async function getNftStartStop(action, status) {
  try {
    const response = await axios.post(`${URLApi}/block-single-nft-creation`, {
      action,
      status,
    });

    return response.data;
  } catch (error) {
    console.log("Error getNftStartStop Admin:", error);
  }
}

export async function getStatus(user) {
  try {
    const response = await axios.post(`${URLApi}/getStatus`, {
      user,
    });

    return response.data;
  } catch (error) {
    console.log("Error getStatus Admin:", error);
  }
}

export async function createNewTicketFn(user) {
  try {
    const response = await axios.post(`${URLApi}/getStatus`, {
      user,
    });

    return response.data;
  } catch (error) {
    console.log("Error createNewTicketFn Admin:", error);
  }
}

export async function generateTicketFn(
  UserAddress,
  UserName,
  Subject,
  Message
) {
  try {
    const response = await axios.post(`${URLApi}/generateTicket`, {
      UserAddress,
      UserName,
      Subject,
      Message,
    });

    return response.data;
  } catch (error) {
    console.log("Error generateTicket Admin:", error);
  }
}

export async function createMessageFn(Sender, Receiver, Message, TicketId) {
  try {
    const response = await axios.post(`${URLApi}/createMessage`, {
      Sender,
      Receiver,
      Message,
      TicketId,
    });

    return response.data;
  } catch (error) {
    console.log("Error createMessageFn Admin:", error);
  }
}

export async function getTicketByUserAddressFn(UserAddress) {
  try {
    const response = await axios.post(`${URLApi}/getTicketByUserAddress`, {
      UserAddress,
    });

    return response.data;
  } catch (error) {
    console.log("Error getTicketByUserAddressFn Admin:", error);
  }
}

export async function getAllTicket(TicketId, UserAddress) {
  try {
    const response = await axios.post(`${URLApi}/getAllTickets`, {
      id: TicketId,
      userAddress: UserAddress,
    });

    return response.data;
  } catch (error) {
    console.log("Error getAllTicket Admin:", error);
  }
}

export async function getMessage() {
  try {
    const response = await axios.get(`${URLApi}/get-messages`);

    return response.data;
  } catch (error) {
    console.log("Error getMessage Admin:", error);
  }
}
export async function getTradingIncome(address, page, limit) {
  try {
    const response = await axios.post(`${URLApi}/trading-income`, {
      userAddress: address,
      page,
      limit,
    });

    return response.data;
  } catch (error) {
    console.log("Error getTradingIncome Admin:", error);
  }
}

export async function dueNFT(address) {
  try {
    const response = await axios.post(`${URLApi}/dueNFT`, {
      userAddress: address,
    });

    return response.data;
  } catch (error) {
    console.log("Error dueNFT Admin:", error);
  }
}

export async function verifyNftFn(
  tokenId,
  userAddress,
  initialPrice,
  title,
  description,
  metadataURI,
  totalAmount
) {
  try {
    const response = await axios.post(`${URLApi}/verifyNft`, {
      tokenId,
      userAddress,
      initialPrice,
      title,
      description,
      metadataURI,
      totalAmount,
    });

    return response.data;
  } catch (error) {
    console.log("Error verifyNftFn Admin:", error);
  }
}

export async function updateNFTDetails(address, tokenId, txDetails) {
  try {
    const response = await axios.post(`${URLApi}/updateDetails`, {
      userAddress: address,
      tokenId,
      txDetails,
    });

    return response.data;
  } catch (error) {
    console.log("Error updateNFTDetails Admin:", error);
  }
}

export async function getStakingDetail(address, page, limit) {
  try {
    const response = await axios.post(`${URLApi}/getStakingDetails`, {
      user: address,
      page,
      limit,
    });

    return response.data;
  } catch (error) {
    console.log("Error updateNFTDetails Admin:", error);
  }
}

export async function getROI(address) {
  try {
    const response = await axios.post(`${URLApi}/get-roi`, {
      user: address,
    });

    return response.data;
  } catch (error) {
    console.log("Error updateNFTDetails Admin:", error);
  }
}

export async function getPendingMaturedNFT(address) {
  try {
    const response = await axios.post(
      `${URLApi}/get-total-matured-nfts-pending`,
      {
        user: address,
      }
    );

    return response.data;
  } catch (error) {
    console.log("Error getPendingMaturedNFT Admin:", error);
  }
}

export async function getUserLimits(address) {
  try {
    const response = await axios.post(`${URLApi}/get-user-Limits`, {
      userAddress: address,
    });

    return response.data;
  } catch (error) {
    console.log("Error getUserInfo Admin:", error);
  }
}

export async function getUserStats(address) {
  try {
    const response = await axios.post(`${URLApi}/get-user-stat`, {
      userAddress: address,
    });

    return response.data;
  } catch (error) {
    console.log("Error getUserInfo Admin:", error);
  }
}

export async function isInSale(address) {
  const response = await axios.post(URLApi + "/isInsale", {
    tokenId: address,
  });
  return response.data;
}

export async function insertInSale(address) {
  const response = await axios.post(URLApi + "/insertInSale", {
    tokenId: address,
  });
  return response.data;
}

export async function eligibleForCreateNFT(userAddress) {
  try {
    const response = await axios.get(`${URLApi}/eligibleForCreate`, {
      params: {
        userAddress,
      },
    });

    return response.data;
  } catch (error) {
    console.log("Error eligibleForCreate Admin:", error);
  }
}
export async function getDepostList(user, page, limit) {
  try {
    const response = await axios.post(`${URLApi}/getUserDepositList`, {
      user,
      page,
      limit,
    });

    return response.data;
  } catch (error) {
    console.log("Error getDepostList :", error);
  }
}
export async function getSalaryHist(user, page, limit) {
  try {
    const response = await axios.post(`${URLApi}/userSalaryData`, {
      user,
      page,
      limit,
    });

    return response.data;
  } catch (error) {
    console.log("Error getDepostList :", error);
  }
}

export async function getPackageDetails(userAddress) {
  try {
    const response = await axios.post(`${URLApi}/packageDetails`, {
      userAddress,
    });

    return response.data;
  } catch (error) {
    console.log("Error getPackageDetails :", error);
  }
}

export async function getTransactionHash(txHash) {
  try {
    const response = await axios.post(`${URLApi}/recover-MissedTx`, {
      txHash,
    });

    return response.data;
  } catch (error) {
    console.log("Error getTransactionHash :", error);
  }
}

export async function getAllowBulkNFT() {
  try {
    const response = await axios.get(`${URLApi}/bulk-status`, {});

    return response.data;
  } catch (error) {
    console.log("Error eligibleForCreate Admin:", error);
  }
}

export async function getDirectNFTBusiness(user ) {
  try {
    const response = await axios.post(`${URLApi}/getDirectNftBusinesss`, {
      user ,
    });

    return response.data;
  } catch (error) {
    console.log("Error getTransactionHash :", error);
  }
}
