const mongoose = require("mongoose");

module.exports = mongoose.model("Album", {
  title: { type: String },
  albumArt: { type: String },
  songList: { type: String },
  recordLabel: { type: String }
});
