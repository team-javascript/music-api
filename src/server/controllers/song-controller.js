const Comment = require('../models/comment');
const Song = require('../models/Song');

class SongController {
  static async getSongs(req, res, next) {
    const Songs = await Song.find();
    res.send(Songs);
  }

  static async getSong(req, res) {
    const id = req.params.id;

    // id auth, if Song id != param id => error?

    res.send(await Song.findOne({ _id: id }).populate('comments'));
  }

  static async addSong(req, res, next) {
    const title = req.body.title;
    const songLink = req.body.songLink;
    const duration = req.body.duration;

    await Song.create({
      title: title,
      songLink: songLink,
      duration: duration
    });

    res.send(await Song.find());
  }

  //Update an Song
  static async updateSong(req, res) {
    const id = req.params.id;
    const updates = req.body;

    let changes = {};
    let updateKey = {};

    for (updateKey of Object.keys(updates)) {
      changes[updateKey] = updates[updateKey];
    }

    res.send(
      await Song.findByIdAndUpdate(
        { _id: id },
        { $set: changes },
        { new: true }
      )
    );
  }

  //Delete an Song
  static async deleteSong(req, res) {
    const id = req.params.id;

    res.send(await Song.remove({ _id: id }));
  }

  // rating increment

  static async increaseRating(req, res, next) {
    const id = req.params.id;
    const song = await Song.findOne({ _id: id });

    song.rating++;

    song.save((err, song) => {
      if (err) console.error(err);
      res.send(song);
    });
  }

  static async decreaseRating(req, res, next) {
    const id = req.params.id;
    const song = await Songs.findOne({ _id: id });

    song.rating--;

    song.save((err, song) => {
      if (err) console.error(err);
      res.send(song);
    });
  }

  static async addComment(req, res) {
    const id = req.params.id;
    const song = await Song.findOne({ _id: id });
    const commentToAdd = new Comment({
      content: req.body.content
    });
    song.comments.push(commentToAdd);

    song.save((err, song) => {
      if (err) return console.error(err);
    });

    commentToAdd.save((err, commentToAdd) => {
      if (err) return console.error(err);
      res.send(song);
    });
  }
}

module.exports = SongController;
