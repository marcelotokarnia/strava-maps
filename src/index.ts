import 'module-alias/register'
import createServer, { port } from '@src/server'
import { BuffedRedis } from '@src/middlewares/redis'

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
