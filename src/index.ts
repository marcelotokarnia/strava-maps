import createServer, { port } from './server'

createServer(() => {
  console.log(`Example app listening on port http://localhost:${port}!`)
})
