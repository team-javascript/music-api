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
    const profilePicture = req.body.profilePicture;
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

  // id auth, if Album id != param id => error?
}

module.exports = AlbumController;
