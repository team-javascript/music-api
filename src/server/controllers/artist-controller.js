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

  static async updateArtist(req, res) {
    const id = req.params.id;

    res.send(
      await Artist.findOneAndUpdate(
        { _id: id },
        { firstName: req.body.firstName, lastName: req.body.lastName },
        { new: true }
      )
    );
  }

  // id auth, if artist id != param id => error?
}

module.exports = ArtistController;
