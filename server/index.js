require("dotenv").config();
const express = require('express');
const config = require("./Helpers/config");
const routes = require('./routes');
const logger = require("./Helpers/logger");

const app = express();

app.use(express.json());
for (const route of routes) {
   app.use(route.pathPrefix, route.routingInstance);
}

app.listen(config.port, () => {
   logger.info("Server listening on Port: " + config.port);
});

module.exports = app;
