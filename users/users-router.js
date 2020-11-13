const express = require("express");
const bcryptjs = require("bcryptjs");
const Users = require("./users-model");
const router = express.Router();


router.post("/register", (req, res) => {
  let user = req.body;

  const hashed = bcryptjs.hashSync(user.password, 14);

  user.password = hashed;

  Users.add(user)
    .then((newUser) => {
      res.status(201).json(newUser);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;