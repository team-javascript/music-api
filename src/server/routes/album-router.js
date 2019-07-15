const express = require("express");
const router = express.Router();

const AlbumController = require("../controllers/album-controller");

// Add Album
router.post("/", AlbumController.addAlbum);

/* GET Albums. */
router.get("/", AlbumController.getAlbums);

/* GET Album. */
router.get("/:id", AlbumController.getAlbum);

// Update Album
router.put("/:id", AlbumController.updateAlbum);

// Delete Album
router.delete("/:id", AlbumController.deleteAlbum);

module.exports = router;
