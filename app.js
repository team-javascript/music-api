var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require("./src/server/models/db")

// var indexRouter = require('./src/server/routes/index');
var artistRouter = require('./src/server/routes/artists');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/artists', artistRouter);

module.exports = app;
