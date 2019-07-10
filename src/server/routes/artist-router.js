const express = require("express");
const router = express.Router();

const ArtistController = require("../controllers/artist-controller");

/* GET artists. */
router.get("/", ArtistController.getArtists);

/* GET artist. */
router.get("/:id", ArtistController.getArtist);

// Add Artist
router.post("/add", ArtistController.addArtist);

// Update Artist
router.put("/:id", ArtistController.updateArtist);

// Delete Artist
router.delete("/:id", ArtistController.deleteArtist);

module.exports = router;
