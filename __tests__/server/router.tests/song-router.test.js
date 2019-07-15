const request = require("supertest");

// const Song = require("../../../src/server/models/__mocks__/song");
const app = require("../../../app");

jest.mock("../../../src/server/models/__mocks__/song.js");

describe.skip("SongRoutes", () => {
  describe("addSong", () => {
    test("should get a 200 status and call create/find (1) time", done => {
      request(app)
        .post("/song")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(song.create.mock.calls.length).toEqual(1);
          expect(song.find.mock.calls.length).toEqual(1);
          done();
        });

        song.create.mockReset();
      song.find.mockReset();
    });
  });

//   describe("getArtists", () => {
//     test.skip("should get a 200 status and call find() (1) time", done => {
//       request(app)
//         .get("/artist")
//         .expect(200)
//         .end(function(err, res) {
//           if (err) return done(err);
//           expect(Artist.find.mock.calls.length).toEqual(1);
//           done();
//         });

//       Artist.find.mockReset();
//     });
//   });

//   describe("updateArtists", () => {
//     test.skip("should get a 200 status and call findByIdAndUpdate (1) time", done => {
//       request(app)
//         .put("/artist/id")
//         .expect(200)
//         .end(function(err, res) {
//           if (err) return done(err);
//           expect(Artist.findByIdAndUpdate.mock.calls.length).toEqual(1);
//           done();
//         });

//       Artist.findByIdAndUpdate.mockReset();
//     });
//   });

//   describe("find single Artist", () => {
//     test.skip("should get a 200 status and call findOne (1) time", done => {
//       request(app)
//         .get("/artist/id")
//         .expect(200)
//         .end(function(err, res) {
//           if (err) return done(err);
//           expect(Artist.findOne.mock.calls.length).toEqual(1);
//           done();
//         });

//       Artist.findOne.mockReset();
//     });
//   });

//   describe("delete Artist", () => {
//     test.skip("should get a 200 status and call remove (1) time", done => {
//       request(app)
//         .delete("/artist/id")
//         .expect(200)
//         .end(function(err, res) {
//           if (err) return done(err);
//           expect(Artist.remove.mock.calls.length).toEqual(1);
//           done();
//         });

//       Artist.remove.mockReset();
//     });
//   });
});
