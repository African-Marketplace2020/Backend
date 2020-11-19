const express = require("express");
const Items = require("./items-model");
const restrict = require("./users-middleware");
const router = express.Router();

router.get("/items", restrict, (req, res, next) => {
  Items.find()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      res.status(500).json({ message: "Unable to get items" });
    });
});

module.exports = router;