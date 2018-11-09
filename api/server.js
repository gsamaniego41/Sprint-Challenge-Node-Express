const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const server = express();

const projectsRouter = require("./projectsRouter");
const actionsRouter = require("./actionsRouter");

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan("dev"));

server.use("/projects", projectsRouter);
server.use("/actions", actionsRouter);

module.exports = server;
