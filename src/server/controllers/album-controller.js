const Album = require("../models/Album");

class AlbumController {
  static async getAlbums(req, res, next) {
    const Albums = await Album.find();
    res.send(Albums);
  }

  static async getAlbum(req, res) {
    const id = req.params.id;

    // id auth, if Album id != param id => error?

    res.send(await Album.findOne({ _id: id }));
  }

  static async addAlbum(req, res, next) {
    const title = req.body.title;
    const albumArt = req.body.albumArt;
    const songList = req.body.songList;
    const recordLabel = req.body.recordLabel;

    Album.create({
      title: title,
      albumArt: albumArt,
      songList: songList,
      recordLabel: recordLabel
    });

    res.send(await Album.find());
  }

  //Update an Album
  static async updateAlbum(req, res) {
    const id = req.params.id;
    const updates = req.body;

    let changes = {};
    let updateKey = {};

    for (updateKey of Object.keys(updates)) {
      changes[updateKey] = updates[updateKey];
    }

    res.send(
      await Album.findByIdAndUpdate(
        { _id: id },
        { $set: changes },
        { new: true }
      )
    );
  }

  //Delete an Album
  static async deleteAlbum(req, res) {
    const id = req.params.id;

    res.send(await Album.remove({ _id: id }));
  }

  // Add Song

  // Add album

  // FIX this...

  static async addSongs(req, res) {
    const id = req.params.id;
    const songsToAdd = req.body; // this is an array if multiple songs added!

    const albumToAdd = await Album.findById({ _id: id });
    songsToAdd.forEach(song => {
      albumToAdd.songList.push(song);
    });
    albumToAdd.save(albumToAdd);

    res.send(await albumToAdd);
  }
}

module.exports = AlbumController;
