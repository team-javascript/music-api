const ReviewController = require("../../../src/server/controllers/artist-controller");
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
  // });
//   test("Should render a list of reviews for each provided review when route is '/reviews' ", done => {
//     //Arrange
//     request(app)
//       .get("/reviews")
//       .then(response => {
//         expect(response.text).toBe(
//           '<!DOCTYPE html>\r\n<html lang="en">\r\n\r\n<head>\r\n   <meta charset="UTF-8">\r\n   <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n   <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n   <link rel=\'stylesheet\' type="text/css" href="/stylesheets/style.css" media="all" />\r\n   <title>...Welp...</title>\r\n</head>\r\n\r\n<body>\r\n   <div class="layout__wrapper">\r\n      <header class="layout__header">\r\n         <h1 class="grid-center">...Welp...</h1>\r\n         <nav class="grid-right">\r\n            <ul class="nav__menu__list">\r\n               <li class="nav__menu__list__item"><a href="/reviews">Reviews</a></li>\r\n               <li class="nav__menu__list__item"><a href="/categories">Categories</a></li>\r\n               <li class="nav__menu__list__item"><a href="/tags">Tags</a></li>\r\n            </ul>\r\n         </nav>\r\n      </header>\r\n      <main>\r\n   <div class="grid-container">\r\n      <form action="/reviews/add" method="POST">\r\n         <label class="meme__label"> Title </label><input class="meme__input" maxlength="20" type="text" name="title" />\r\n         <label class="meme__label"> Image Url</label><input class="meme__input" type="text" name="imageUrl" />\r\n         <label class="meme__label">Category:</label><select class="meme__input" name="category">\r\n         </select>\r\n         <label class="meme__label">Content</label><input class="meme__input" type="text" name="content" />\r\n         <fieldset class="tags">\r\n            <legend class="meme__label">Tags:</legend>\r\n         </fieldset>\r\n         <button type="submit">Add Meme</button>\r\n      </form>\r\n   </div>\r\n   <ul class="reviews__cards__list">\r\n      <li class="reviews__card__list__item">\r\n         Test Title\r\n         <a href="/reviews/5">\r\n            <figure class="reviews__meme__figure"><img class="reviews__meme__image" src="test URL" alt="Test Title">\r\n            </figure>\r\n         </a>\r\n      </li>\r\n   </ul>\r\n</main>\r\n      <a class="home__button" href="/">Back To Home</a>\r\n      <footer class="layout__footer">\r\n         <small class="layout__footer__copy">&copy; Aquisitions Inc, 2019</small>\r\n      </footer>\r\n   </div>\r\n</body>'
//         );
//         done();
//       });
//   });

//   test("should successfully connect to '/reviews/1'", done => {
//     // Arrange
//     request(app)
//       // Act
//       .get("/reviews/1")
//       .then(response => {
//         // Assert

//         expect(response.statusCode).toBe(200);
//         done();
//       });
//   });

//   test("should render a single review", done => {
//     // Arrange
//     request(app)
//       // Act
//       .get("/reviews/1")
//       .then(response => {
//         // Assert
//         expect(response.text).toBe(
//           `<!DOCTYPE html>\r\n<html lang="en">\r\n\r\n<head>\r\n   <meta charset="UTF-8">\r\n   <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n   <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n   <link rel=\'stylesheet\' type="text/css" href="/stylesheets/style.css" media="all" />\r\n   <title>...Welp...</title>\r\n</head>\r\n\r\n<body>\r\n   <div class="layout__wrapper">\r\n      <header class="layout__header">\r\n         <h1 class="grid-center">...Welp...</h1>\r\n         <nav class="grid-right">\r\n            <ul class="nav__menu__list">\r\n               <li class="nav__menu__list__item"><a href="/reviews">Reviews</a></li>\r\n               <li class="nav__menu__list__item"><a href="/categories">Categories</a></li>\r\n               <li class="nav__menu__list__item"><a href="/tags">Tags</a></li>\r\n            </ul>\r\n         </nav>\r\n      </header>\r\n      <main>\r\n    <section class="review__card__details">\r\n        <h1 class="review__card__title"></h1>\r\n        <figure><img src= alt=""></figure>\r\n    </section>\r\n    <ul class="review__card__list">\r\n        <li class="review__card__content">Content: </li>\r\n    </ul>\r\n</main>\r\n      <a class="home__button" href="/">Back To Home</a>\r\n      <footer class="layout__footer">\r\n         <small class="layout__footer__copy">&copy; Aquisitions Inc, 2019</small>\r\n      </footer>\r\n   </div>\r\n</body>`
//         );
//         done();
//       });
//   });
});
