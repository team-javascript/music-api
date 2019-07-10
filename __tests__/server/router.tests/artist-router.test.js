const ArtistController = require("../../../src/server/controllers/artist-controller");
jest.mock("../../../src/server/controllers/artist-controller");

const request = require("supertest");
const app = require("../../../app");

describe("Artists router/controller", () => {
  test("Should successfully connect to '/artist' ", done => {
    //Arrange
    request(app)
      .get("/artist")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
