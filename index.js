var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const app = express();

app.use(express.json());

app.use('/register', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
