import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import cors from "cors";


// const app = express();
// app.use(cors());



// const server = createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"]
//   }
// });
// io.on("connection", (socket: Socket) => {
//   console.log(`User connected: ${socket.id}`);

//   socket.on("message", (data) => {
//     console.log("Received message:", data);
//     io.emit("message", data);
//   });

//   socket.on("disconnect", () => {
//     console.log(`User disconnected: ${socket.id}`);
//   });
// });

