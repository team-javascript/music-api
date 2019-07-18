const Artist = require("../models/artist");

class ArtistController {
  static async getArtists(req, res, next) {
    const artists = await Artist.find();
    res.send(artists);
  }

  static async getArtist(req, res) {
    const id = req.params.id;

    // id auth, if artist id != param id => error?

    res.send(await Artist.findOne({ _id: id }));
  }

  static async addArtist(req, res, next) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const profilePicture = req.body.profilePicture;
    const albumList = req.body.albumList;

    Artist.create({
      firstName: firstName,
      lastName: lastName,
      profilePicture: profilePicture,
      albumList: albumList
    });

    res.send(await Artist.find());
  }

  //Update an artist
  static async updateArtist(req, res) {
    const id = req.params.id;
    const updates = req.body;

    let changes = {};
    let updateKey = {};

    for (updateKey of Object.keys(updates)) {
      changes[updateKey] = updates[updateKey];
    }

    res.send(
      await Artist.findByIdAndUpdate(
        { _id: id },
        { $set: changes },
        { new: true }
      )
    );
  }

  //Delete an Artist
  static async deleteArtist(req, res) {
    const id = req.params.id;

    res.send(await Artist.remove({ _id: id }));
  }

  // Add album

  static async addAlbum(req, res) {
    const id = req.params.id;
    const updates = req.body;

    let changes = {};
    let updateKey = {};

    for (updateKey of Object.keys(updates)) {
      changes[updateKey] = updates[updateKey];
    }

    res.send(
      await Artist.findByIdAndUpdate(
        { _id: id },
        { $set: changes },
        { new: true }
      )
    );

  }
}

module.exports = ArtistController;
