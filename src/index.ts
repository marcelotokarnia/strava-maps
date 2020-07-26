import createServer, { port } from 'server'
import { BuffedRedis } from 'middlewares/redis'

const server = createServer(() => {
  console.log(`Example app listening on port http://localhost:${port}!`)
})

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.')
  console.log('Closing http server.')
  server.close(() => {
    console.log('Http server closed.')
    BuffedRedis.quit()
  })
})
