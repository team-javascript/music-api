const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

require("./src/server/models/db");

const artistRouter = require("./src/server/routes/artist-router");
const albumRouter = require("./src/server/routes/album-router");
const songRouter = require("./src/server/routes/song-router");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/', indexRouter);
app.use("/artists", artistRouter);
app.use("/albums", albumRouter);
app.use("/songs", songRouter);

module.exports = app;
