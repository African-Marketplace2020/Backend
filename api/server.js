const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const usersRouter = require("../users/users-router");
const server = express();
require("dotenv").config()
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api", usersRouter );
server.get("/", (req, res) => {
  res.send("Server Running");
});

module.exports = server;