import * as Sentry from '@sentry/node'
import bodyParser from 'body-parser'
import express from 'express'
import graphqlServer from './graphql'
import mapRouter from './map/router'
import metaRouter from './meta/router'
import parseCookies from './middlewares/parseCookies'
import redisMiddleware from './middlewares/redis'
import stravaRouter from './strava/router'

export const port = process.env.PORT || 8080

export default fn => {
  const app = express()
  Sentry.init({ dsn: 'https://cd09b20da70241fea1782b8bbb6e15b4@o401355.ingest.sentry.io/5260828' })
  app.use(Sentry.Handlers.requestHandler())

  app.use(parseCookies())
  app.use(bodyParser.json())
  app.use(redisMiddleware)
  app.use('/strava', stravaRouter)
  app.use('/map', mapRouter)
  app.use('/meta', metaRouter)
  graphqlServer.applyMiddleware({
    app,
    path: '/graphql',
  })
  app.use(Sentry.Handlers.errorHandler())
  return app.listen(port, fn)
}
