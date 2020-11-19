const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");
const welcomeRouter = require("./welcome/welcome-router")
const usersRouter = require("./users/users-router");
const itemsRouter = require("./items/items-router");
require("dotenv").config()
const PORT = process.env.PORT || 5000;
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use(welcomeRouter);
server.use("/api", usersRouter, itemsRouter );

// server.get("/", (req, res) => {
//   res.send("Server Running, /API/REGISTER to register a new user (expecting a username, password and role) /API/LOGIN to log in");
// });
server.use((err, req, res, next) => {
	console.log(err)
	
	res.status(500).json({
		message: "Something went wrong",
	})
})


server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});