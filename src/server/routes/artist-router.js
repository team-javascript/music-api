const express = require("express");
const router = express.Router();

const ArtistController = require("../controllers/artist-controller");

// Add Artist
router.post("/add", ArtistController.addArtist);

/* GET artists. */
router.get("/", ArtistController.getArtists);

/* GET artist. */
router.get("/:id", ArtistController.getArtist);


// Update Artist
router.put("/:id", ArtistController.updateArtist);

// Delete Artist
router.delete("/:id", ArtistController.deleteArtist);

module.exports = router;
