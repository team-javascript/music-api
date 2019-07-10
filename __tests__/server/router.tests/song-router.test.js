const AlbumController = require("../../../src/server/controllers/song-controller");
jest.mock("../../../src/server/controllers/song-controller");

const request = require("supertest");
const app = require("../../../app");

describe("Songs router/controller", () => {
  test("Should successfully connect to '/song' ", done => {
    //Arrange
    request(app)
      .get("/song")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
