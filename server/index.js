#!/usr/bin/env node
require("dotenv").config();
const express = require('express');
const config = require("./Helpers/config");
const routes = require('./routes');
const logger = require("./Helpers/logger");
const Worker = require("./Workers");

const app = express();

app.use(express.json());
for (const route of routes) {
   app.use(route.pathPrefix, route.routingInstance);
}

app.listen(config.port, () => {
   logger.info("Server listening on Port: " + config.port);
});

const workers = new Worker();
workers.startVaccineNotifier();

module.exports = app;
