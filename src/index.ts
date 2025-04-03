import express from "express";
import mongoose from "mongoose";
import path from "path";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const MONGO_URL = "mongodb://localhost:27017";
mongoose.connect(MONGO_URL , {
    dbName: "wayz"
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB", err);
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});



const server = createServer(app);

const io = new Server(server)
io.on("connection", (socket: Socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("message", (data) => {
    console.log("Received message:", data);
    io.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
