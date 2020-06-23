import * as Sentry from '@sentry/node'
import redisMiddleware, { KEYS } from './redisMiddleware'
import { addTransformations } from './utils/cloudinary'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import fs from 'fs'
import graphqlServer from './graphql'
import mapRouter from './map/router'
import { MapsRequest } from './interfaces/routes'
import path from 'path'
import stravaRouter from './strava/router'

export const port = process.env.PORT || 8080

const generatedMetaTags = async ({ path, query, redis }) => {
  if (path === '/activities') {
    if (query.mapId) {
      const image = await redis.get(KEYS.STRAVA_SCREENSHOT(query.mapId))
      return `<meta property="og:title" content="My latest strava activities"/>
      <meta
        property="og:description"
        content="Check out my latest strava activities on this nice big map"
      />
      <meta
        property="og:image"
        content="${addTransformations({ url: image, transformations: 'c_scale,w_600' })}"
      />
      <meta
        property="og:url"
        content="https://strava-maps.herokuapp.com/activities?mapId=${query.mapId}"
      />`
    }
  }
  return ''
}

export default fn => {
  const app = express()
  Sentry.init({ dsn: 'https://cd09b20da70241fea1782b8bbb6e15b4@o401355.ingest.sentry.io/5260828' })
  app.use(Sentry.Handlers.requestHandler())

  app.use(cookieParser())
  app.use(bodyParser.json())
  app.use(redisMiddleware)
  app.use('/strava', stravaRouter)
  app.use('/map', mapRouter)
  graphqlServer.applyMiddleware({ app, path: '/graphql' })

  // frontend facing
  const frontendPath = (filePath: string) => path.join(__dirname, '../frontend', filePath)
  app.get('/manifest.json', function (req, res) {
    res.sendFile(frontendPath('public/manifest.json'))
  })
  app.get('/favicon.ico', function (req, res) {
    res.sendFile(frontendPath('public/favicon.ico'))
  })
  app.use('/static', express.static(frontendPath('build/static')))

  app.get('/*', function (req: MapsRequest, res) {
    fs.readFile(frontendPath('build/index.html'), 'utf8', async function (err, data) {
      if (err) {
        throw err
      }
      res.send(data.replace('<meta name="$$GENERATED_META_TAGS"/>', await generatedMetaTags(req)))
    })
  })
  app.use(Sentry.Handlers.errorHandler())

  return app.listen(port, fn)
}
