const request = require("supertest");

const Artist = require("../../../src/server/models/artist");
const app = require("../../../app");

jest.mock("../../../src/server/models/artist", () => {
  return {
    create: jest.fn(() => {}),
    find: jest.fn(() => []),
    findOne: jest.fn(() => {}),
    findByIdAndUpdate: jest.fn(() => {}),
    remove: jest.fn(() => {})
  };
});

describe("ArtistRoutes", () => {
  describe("addArtist", () => {
    test("should get a 200 status and call create/find (1) time", done => {
      request(app)
        .post("/artist")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(Artist.create.mock.calls.length).toEqual(1);
          expect(Artist.find.mock.calls.length).toEqual(1);
          done();
        });

      Artist.create.mockReset();
      Artist.find.mockReset();
    });
  });

  describe("getArtists", () => {
    test("should get a 200 status and call find() (1) time", done => {
      request(app)
        .get("/artist")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(Artist.find.mock.calls.length).toEqual(1);
          done();
        });

      Artist.find.mockReset();
    });
  });

  describe("updateArtists", () => {
    test("should get a 200 status and call findByIdAndUpdate (1) time", done => {
      request(app)
        .put("/artist/id")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(Artist.findByIdAndUpdate.mock.calls.length).toEqual(1);
          done();
        });

      Artist.findByIdAndUpdate.mockReset();
    });
  });

  describe("find single Artist", () => {
    test("should get a 200 status and call findOne (1) time", done => {
      request(app)
        .get("/artist/id")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(Artist.findOne.mock.calls.length).toEqual(1);
          done();
        });

      Artist.findOne.mockReset();
    });
  });

  describe("delete Artist", () => {
    test("should get a 200 status and call remove (1) time", done => {
      request(app)
        .delete("/artist/id")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(Artist.remove.mock.calls.length).toEqual(1);
          done();
        });

      Artist.remove.mockReset();
    });
  });
});
