import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import emitSocketData from "./newGen.js";

import fs from "fs";

var pathTrail = "./lastfecthedID.json";

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: [
      "http://127.0.0.1:5500",
      "http://127.0.0.1:3000",
      "http://localhost:3001",
      "http://localhost:3000",
      "https://demo.quantaira.io",
    ],
  },
});
// lastTime
app.get("/socket");

// 1. Call Lastfetched json
// 2. Grab all active beds and pid
// 3. loop array and emit data (Call loop array with PID and bedId, in retrun grab a. Complete data and send via socket and update last ID for PID)

setInterval(() => {
  let trxId = "5283B5A9-2924-4977-8120-69AA7447F98D";
  emitSocketData().then((completeData) => {
    io.emit(trxId, completeData);
  });
}, 2000);

io.on("connection", (socket) => {
  let count = io.engine.clientsCount; // may or may not be similar to the count of Socket instances in the main namespace, depending on your usage
  let count2 = io.of("/").sockets.size;

  socket.on("disconnect", (reason) => {
    console.log("==========================================================");
    console.log("Discconected ::::::::", reason, "Socket ID ::: ", socket.id);
    console.log("Count", count, " || ", count2);
    console.log("==========================================================");
    count = io.engine.clientsCount;
    count2 = io.of("/").sockets.size;
  });

  socket.conn.once("upgrade", () => {
    // called when the transport is upgraded (i.e. from HTTP long-polling to WebSocket)
    console.log("upgraded transport", socket.conn.transport.name); // prints "websocket"
  });

  if (count > 0) {
  }
  console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
  console.log("Count", count, count2, "||||", socket.id);
  console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
});
httpServer.listen(3001);
