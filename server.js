const express = require("express");
const projectRoutes = require("./routes/projects/projectRoutes.js");
const actionsRoutes = require("./routes/actions/actionsRoutes.js");

const server = express();
server.use(express.json());

server.get("/", logger, (req, res) => {
  res.status(200).json({ api: "INDEX ROUTE IS WORKING" });
});

server.use("/projects", logger, projectRoutes);
server.use("/actions", logger, actionsRoutes);

function logger(req, res, next) {
  console.log(`\n${new Date().toISOString()} ${req.method} ${req.url}\n`);
  next();
}

module.exports = server;
