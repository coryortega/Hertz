const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const users = require("../users/users-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", users);

server.get("/", (req, res) => {
  res.send(`<h1>Up and running...</h1>`);
});

module.exports = server;