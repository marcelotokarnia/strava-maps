import * as Sentry from '@sentry/node'
import bodyParser from 'body-parser'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import express from 'express'
import graphqlServer from './graphql'
import mapRouter from './map/router'
import redisMiddleware from './redisMiddleware'
import stravaRouter from './strava/router'

export const port = process.env.PORT || 8080

const ALLOWED_CORS_ORIGINS = [
  'https://strava-maps.herokuapp.com',
  'https://strava.tokks.tech',
  'http://localhost:3000',
]

export default fn => {
  const app = express()
  app.use(
    cors({
      credentials: true,
      origin: function (origin, callback) {
        // allow requests with no origin
        // (like mobile apps or curl requests)
        const CORS_ERROR = `The CORS policy for this site does not allow access from the specified Origin.`
        const params: [Error | null, boolean] =
          !origin || ALLOWED_CORS_ORIGINS.includes(origin)
            ? [null, true]
            : [new Error(CORS_ERROR), false]
        return callback(...params)
      },
    })
  )
  Sentry.init({ dsn: 'https://cd09b20da70241fea1782b8bbb6e15b4@o401355.ingest.sentry.io/5260828' })
  app.use(Sentry.Handlers.requestHandler())

  app.use(cookieParser())
  app.use(bodyParser.json())
  app.use(redisMiddleware)
  app.use('/strava', stravaRouter)
  app.use('/map', mapRouter)
  graphqlServer.applyMiddleware({ app, path: '/graphql' })

  app.use(Sentry.Handlers.errorHandler())

  return app.listen(port, fn)
}
