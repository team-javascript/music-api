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

  static async addArtist(req, res,next) {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const profilePicture = req.body.profilePicture
    const albumList = req.body.albumList

   Artist.create({firstName : firstName, lastName : lastName, profilePicture : profilePicture, albumList : albumList})

   res.send(await Artist.find())




  }
}

module.exports = ArtistController;
