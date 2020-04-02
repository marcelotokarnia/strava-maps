import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import graphqlServer from './graphql'
import path from 'path'
import stravaRouter from './strava/router'

export const port = process.env.PORT || 8080

export default fn => {
  const app = express()
  app.use(cookieParser())
  app.use(bodyParser.json())
  app.use('/strava', stravaRouter)
  graphqlServer.applyMiddleware({ app, path: '/graphql' })
  // frontend facing
  // const frontendRouter = AsyncRouter()
  const frontendPath = (filePath: string) => path.join(__dirname, '../frontend', filePath)
  app.get('/manifest.json', function (req, res) {
    res.sendFile(frontendPath('public/manifest.json'))
  })
  app.get('/favicon.ico', function (req, res) {
    res.sendFile(frontendPath('public/favicon.ico'))
  })
  app.use('/static', express.static(frontendPath('build/static')))

  app.get('/*', function (req, res) {
    res.sendFile(frontendPath('build/index.html'))
  })
  return app.listen(port, fn)
}
