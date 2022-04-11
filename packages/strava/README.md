# @tokks/strava

[![npm package][npm-image]][npm-url]
[![Build Status][circle-image]][circle-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependencies Status][david-image]][david-url]
[![DevDependencies Status][dev-david-image]][dev-david-url]

This is a fast, light weighted, promise based, fully typed (Typescript) node client for Strava v3 API.

## Installation

```bash
npm install @tokks/strava mappersmith
```

or

```bash
yarn add @tokks/strava mappersmith
```

## Getting started

### Creating a Strava app

First of all you will need to create your own strava api app at [Strava](https://www.strava.com/settings/api). Follow their steps, fill in all the necessary forms and you should be provided a `Client ID` and `Client Secret`. Those are important to set up your Node application, save them (but don't worry, you can check back at any time.)

A read `access_token` and a `refresh_token` will also be available for you, those are useful for testing and setting up your Node application but you will not need them in the final version. Save them as well (note that the `access_token` expires every 6 hours so you might need to reach back a few more times).

### Setting up your Client ID and Client Secret

This package is going to read those secrets from the following environment variables `STRAVA_CLIENT_ID` and `STRAVA_SECRET`, make sure to store them correctly, one way to do it is:

```
export STRAVA_CLIENT_ID="Client ID"
export STRAVA_SECRET="Client Secret"
```

### Oauth flow (getting user access token)

The first thing your node application needs to do is get user access token, as described in [Strava API Auth flow](https://developers.strava.com/docs/authentication/).

Follow the steps described in the Oauth flow above

- The user has to be redirected to:

```
https://www.strava.com/oauth/authorize?client_id=${YOUR_CLIENT_ID}&redirect_uri=${YOUR_DOMAIN_ROUTE}&response_type=code&scope=${YOUR_NEEDED_SCOPE}
```

`YOUR_DOMAIN_ROUTE` is the callback that will be called when the user authorizes your application in the strava interface. It should be able to read the provided `code` and `scope` from the query string.

`YOUR_NEEDED_SCOPE` are the scopes that your Node application will request from the user, you can [read more about scopes here](https://developers.strava.com/docs/authentication/#details-about-requesting-access).

With that `code` at hand, it's time to call the Strava API for the first time to request a valid user `access_token`

```js
const response = await stravaApi().Auth.authorize({ body: { code } }))

// >> response.data()
// {
//   access_token: 'a4b945687g...',
//   athlete: {...},
//   expires_at: 1568775134,
//   expires_in: 21600,
//   refresh_token: 'e5n567567...',
//   token_type: 'Bearer',
// }

// >> response.status()
// 200
```

You should probably save this access_token on your database or session cache or something, so you don't keep on asking your user to authorize your application against Strava all the time.

## Using Signed Resources on the API

In order to use all the authenticated endpoints provided by Strava API, you are going to need that `access_token` you just saved when initializing a client.

```js
const response = await stravaApi({ access_token }).Activities.getActivityById({ id })

// >> response.data()
// {
// achievement_count: 0,
// athlete: { id: 134815, resource_state: 1 },
// athlete_count: 1,
// average_cadence: 67.1,
// average_heartrate: 140.3,
// average_speed: 5.54,
// average_watts: 175.3,
// comment_count: 1,
// ...
// }

// >> response.status()
// 200
```

### And it's all typed in Typescript

We do try to keep the naming as close as possible to the official strava documentation so you should have no problem relating to why the client calls `.Activities.getActivityById` instead of `.UserActivities.fetchSingle` when reading Strava official documentation.

![Strava Official Docs](https://raw.githubusercontent.com/marcelotokarnia/strava-maps/HEAD/packages/strava/docs/assets/stravaActivitiesDocs.png)

## Strava Documentation

- [Your Strava API Application](https://www.strava.com/settings/api)
- [Strava Developers Home](http://www.strava.com/developers)
- [Strava API Auth flow](https://developers.strava.com/docs/authentication/)
- [Strava API Docs](https://developers.strava.com/docs/reference/)

## Author

[Marcelo Tokarnia](https://marcelo.tokarnia.tech) <marcelo.tokarnia@gmail.com>

[npm-image]: https://img.shields.io/npm/v/@tokks/strava.svg
[npm-url]: http://npmjs.org/package/@tokks/strava
[circle-image]: https://img.shields.io/circleci/build/github/marcelotokarnia/strava-maps/master?style=plastic&token=28616685180a7b8823786c1e00e0f2fae8ee4172
[circle-url]: https://circleci.com/gh/marcelotokarnia/strava-maps
[david-image]: https://david-dm.org/marcelotokarnia/strava-maps/status.svg?path=packages/strava
[david-url]: https://david-dm.org/marcelotokarnia/strava-maps?path=packages/strava
[dev-david-image]: https://david-dm.org/marcelotokarnia/strava-maps/dev-status.svg?path=packages/strava
[dev-david-url]: https://david-dm.org/marcelotokarnia/strava-maps?path=packages/strava&type=dev
[coveralls-image]: https://coveralls.io/repos/github/marcelotokarnia/strava-maps/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/marcelotokarnia/strava-maps?branch=master
