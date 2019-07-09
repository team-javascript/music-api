const express = require("express");
const router = express.Router();

const ArtistController = require("../controllers/artist-controller");

/* GET artists. */

router.get("/", ArtistController.getArtists);

/* GET artist. */

router.get("/:id", ArtistController.getArtist);

router.post("/add", ArtistController.addArtist);

module.exports = router;


