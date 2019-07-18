const express = require("express");
const router = express.Router();

const ArtistController = require("../controllers/artist-controller");

// Add Artist
router.post("/", ArtistController.addArtist);

/* GET artists. */
router.get("/", ArtistController.getArtists);

/* GET artist. */
router.get("/:id", ArtistController.getArtist);

// Update Artist
router.put("/:id", ArtistController.updateArtist);

// Delete Artist
router.delete("/:id", ArtistController.deleteArtist);

// Add album to artist

router.put("/:id/addAlbum", ArtistController.addAlbum)

module.exports = router;
