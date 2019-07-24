const mongoose = require("mongoose");

module.exports = mongoose.model("Song", {
  title: { type: String },
  songLink: { type: String },
  duration: { type: String },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  rating: { type: Number, default: 0 }
});
