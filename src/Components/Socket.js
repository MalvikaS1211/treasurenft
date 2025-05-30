// src/socket.ts
import { io, Socket } from "socket.io-client";
import { SOCKET_SERVER_URL } from "../Helper/API_Functions";

// const SOCKET_SERVER_URL =
//   process.env.REACT_APP_SOCKET_SERVER_URL || "http://localhost:8081";

const socket = io(SOCKET_SERVER_URL, {
  path: "/api/socket",
  transports: ["websocket"],
  reconnection: true, // default is true, but explicit is good
  reconnectionAttempts: Infinity, // keep trying forever
  reconnectionDelay: 1000, // 1 second between attempts
  reconnectionDelayMax: 5000, // up to 5 seconds between attempts
  timeout: 20000,
});

export default socket;
