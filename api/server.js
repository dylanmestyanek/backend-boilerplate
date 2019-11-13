const express = require("express");

// Server middleware imports
const middlewareConfig = require("../config/middleware-config");
const apiRouter = require("./api-router");

const server = express();

// Server middleware
middlewareConfig(server);

// Endpoint / Routes funneled through 'api-router.js'
server.use("/api", apiRouter);

module.exports = server;