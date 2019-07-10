const express = require("express");
const router = express.Router();

const AlbumController = require("../controllers/album-controller");

/* GET Albums. */
router.get("/", AlbumController.getAlbums);

/* GET Album. */
router.get("/:id", AlbumController.getAlbum);

// Add Album
router.post("/add", AlbumController.addAlbum);

// Update Album
router.put("/:id", AlbumController.updateAlbum);

// Delete Album
router.delete("/:id", AlbumController.deleteAlbum);

module.exports = router;
