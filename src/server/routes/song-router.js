const express = require("express");
const router = express.Router();

const SongController = require("../controllers/song-controller");

/* GET Songs. */
router.get("/", SongController.getSongs);

/* GET Song. */
router.get("/:id", SongController.getSong);

// Add Song
router.post("/add", SongController.addSong);

// Update Song
router.put("/:id", SongController.updateSong);

// Delete Song
router.delete("/:id", SongController.deleteSong);

module.exports = router;
