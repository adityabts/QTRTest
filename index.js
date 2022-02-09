import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { getSampleData } from "./genrator.js";

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: [
      "http://127.0.0.1:5500",
      "http://192.168.1.245:5500",
      "http://localhost:3001",
      "http://localhost:3000",
    ],
  },
});

app.get("/socket");

io.on("connection", (socket) => {
  let count = io.engine.clientsCount; // may or may not be similar to the count of Socket instances in the main namespace, depending on your usage
  let count2 = io.of("/").sockets.size;

  socket.on("disconnect", (reason) => {
    console.log("Discconected ::::::::", reason, "Socket ID ::: ", socket.id);
    console.log("Count", count);
    console.log("Count 2", count2);
    count = io.engine.clientsCount;
    count2 = io.of("/").sockets.size;
  });

  socket.conn.once("upgrade", () => {
    // called when the transport is upgraded (i.e. from HTTP long-polling to WebSocket)
    console.log("upgraded transport", socket.conn.transport.name); // prints "websocket"
  });

  if (count > 0) {
    setInterval(() => {
      let vary = "less";
      socket.emit("bed007", getSampleData(vary));
    }, 8000);
  }

  console.log("Count", count);
  console.log("Count 2", count2);
  console.log("Socket ID ::: ", socket.id); // ojIckSD2jqNzOqIrAGzL
});
httpServer.listen(80);
