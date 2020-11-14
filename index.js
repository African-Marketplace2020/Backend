const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const usersRouter = require("./users/users-router");
const server = express();
require("dotenv").config()
const PORT = process.env.PORT || 5000;
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api", usersRouter );
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