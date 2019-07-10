const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

require("./src/server/models/db");

// const indexRouter = require('./src/server/routes/index');
const artistRouter = require("./src/server/routes/artist-router");
const albumRouter = require("./src/server/routes/album-router");
const songRouter = require("./src/server/routes/song-router");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use('/', indexRouter);
app.use("/artist", artistRouter);
app.use("/album", albumRouter);
app.use("/song", songRouter);

module.exports = app;
