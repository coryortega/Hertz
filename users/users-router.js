const express = require("express");
const Users = require("./users-model");
const router = express.Router();

router.get("/", async (req, res) => {
  Users.find()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: `Failed to get users, error: ${error}.` });
    });
});

router.get("/:userId", (req, res) => {
  const { userId } = req.params;
    Users.findByUserId(userId)
      .then((user) => {
        if (!user) {
          res.status(404).json({ userRegistered: false });
        } else {
          res.status(200).json({ userRegistered: true });
        }
      })
      .catch((error) => {
        res
          .status(500)
          .json({ message: `Failed to get users, error: ${error}.` });
      });
});

router.post("/", (req, res) => {
  const { userId } = req.body;
  if (userId) {
    Users.add({ userId: userId })
      .then((user) => {
        res.status(201).json({ message: `User with userId ${userId} was created` });
      })
      .catch((err) => {
        res
          .status(409)
          .json({ message: `User with userId ${userId} already exists` });
      });
  } else {
    res.sendStatus(400).json({ message: "Improper input" });
  }
});

module.exports = router;
