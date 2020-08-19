# strava-maps

[![circle ci][circle-image]][circle-url]
[![Dependencies Status][david-image]][david-url]

Plot your strava activities on google maps and get insights out of it.

### Application Stack:

- Javascript (Powered by [Typescript](https://www.typescriptlang.org/))
- Backend: [Node](https://nodejs.org/en/) & [Express Server](https://expressjs.com/) (Data layer powered by [Apollo Graphql](https://www.apollographql.com/))
- Frontend: [React](https://reactjs.org/) (State management with [Redux](https://redux.js.org/)) and Styling with Minimalistic CSS [Tachyons](https://tachyons.io/)
- [Redis Database](https://redis.io/)

---

- Communication between frontend and backend with [Mappersmith client API](https://github.com/tulios/mappersmith).
- Communication between backend and strava API with [Axios HTTP client](https://github.com/axios/axios).

---

- Unit tests with [Jest](https://jestjs.io/)
- E2E tests on the backend leveraged on [Supertest](https://github.com/visionmedia/supertest)
- Visual Components Catalog with [Storybook](https://storybook.js.org/) which automatically generates Jest Snapshot tests to prevent unintended changes.
- ~~E2E tests on the frontend with [Cypress](https://www.cypress.io/)~~ (Coming soon)

---

- Continuous Integration with [CircleCI](https://circleci.com/) and Git hooks with [Husky](https://github.com/typicode/husky)
- Continuous Delivery with [Heroku](https://www.heroku.com/)

### How to Run the application locally

[Step by step](docs/localEnvironment.md)

### Visit the application

[Strava@Vercel](https://strava.tokks.tech/)

Login with your Strava credentials (or not, just click the toggle to use mocked data instead)

and navigate the application with fixtures from my own data.

[circle-image]: https://img.shields.io/circleci/build/github/marcelotokarnia/strava-maps/master?style=plastic&token=28616685180a7b8823786c1e00e0f2fae8ee4172
[circle-url]: https://circleci.com/gh/marcelotokarnia/strava-maps
[david-image]: https://david-dm.org/marcelotokarnia/strava-maps/status.svg
[david-url]: https://david-dm.org/marcelotokarnia/strava-maps