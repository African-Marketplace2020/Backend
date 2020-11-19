const express = require("express");
const Items = require("./items-model");
const restrict = require("../users/users-middleware");
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

router.post("/items", (req, res) => {
  let item = req.body;

  Items.add(item)
    .then((newItem) => {
      res.status(201).json(newItem);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.put("/items/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Items.findById(id)
    .then((item) => {
      if (item) {
        Items.update(changes, id).then((updatedItem) => {
          res.json(updatedItem);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find an item with that id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update item" });
    });
});

router.delete("/items/:id", (req, res) => {
  const { id } = req.params;

  Items.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find an item with that id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Unable to delete item" });
    });
});

module.exports = router;
