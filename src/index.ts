// import { AsyncRouter } from 'express-async-router'
import express from 'express'
import graphqlServer from './graphql'
import path from 'path'

const port = process.env.PORT || 8080
const app = express()
// frontend facing
// const frontendRouter = AsyncRouter()
const frontendPath = (filePath: string) => path.join(__dirname, '../frontend', filePath)
app.get('/', function (req, res) {
  res.sendFile(frontendPath('build/index.html'))
})
app.get('/manifest.json', function (req, res) {
  res.sendFile(frontendPath('public/manifest.json'))
})
app.get('/favicon.ico', function (req, res) {
  res.sendFile(frontendPath('public/favicon.ico'))
})
app.use('/static', express.static(frontendPath('build/static')))

graphqlServer.applyMiddleware({ app, path: '/graphql' })
app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}!`))
