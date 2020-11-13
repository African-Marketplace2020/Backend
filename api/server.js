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
  res.send("Server Running, /API/REGISTER to register a new user (expecting a username, password and role) /API/LOGIN to log in");
});

module.exports = server;