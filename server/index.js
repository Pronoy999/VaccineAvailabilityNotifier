const express = require('express');
const config = require("./Helpers/config");
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const logger = require("./Helpers/logger");

const app = express();

app.use(express.json());
app.use('/users', usersRouter);

app.listen(config.port, () => {
   logger.info("Server listening on Port: " + config.port);
});

module.exports = app;
