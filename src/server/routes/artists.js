var express = require("express");
var router = express.Router();

const Artist = require("../models/artist");

/* GET artist listing. */
router.get("/", function(req, res, next) {
  res.send("hello world");
});

router.post("/add", async (req, res, next) => {
  Artist.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    profilePicture: req.body.profilePicture,
    albumList: req.body.albumList
  });
  res.send(await Artist.find())
});

module.exports = router;
