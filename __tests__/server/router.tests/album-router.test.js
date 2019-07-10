const AlbumController = require("../../../src/server/controllers/album-controller");

const request = require("supertest");
const app = require("../../../app");

describe("Albums router/controller", () => {
  test("Should successfully connect to '/album' ", done => {
    //Arrange
    request(app)
      .get("/album")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
