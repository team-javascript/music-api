const express = require("express");
const router = express.Router();

const SongController = require("../controllers/song-controller");

// Add Song
router.post("/", SongController.addSong);

/* GET Songs. */
router.get("/", SongController.getSongs);

/* GET Song. */
router.get("/:id", SongController.getSong);

// Update Song
router.put("/:id", SongController.updateSong);

// Delete Song
router.delete("/:id", SongController.deleteSong);

module.exports = router;
