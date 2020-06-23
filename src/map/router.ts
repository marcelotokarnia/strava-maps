import { AsyncRouter } from 'express-async-router'
import { mapAsyncLocalStorage } from './'
import { MapsRequest } from '../interfaces/routes'
import { refreshToken } from '../utils/manageTokens'
import saveMap from './utils/saveMap'

const router = AsyncRouter()
router.post('/save', async (req: MapsRequest, res, next) => {
  if (req.cookies?.access_token && req.cookies?.username) {
    if (await refreshToken(req, res)) {
      const store = new Map()
      store.set('cookies', req.cookies)
      store.set('redis', req.redis)
      const { lat, lng, zoom } = req.body
      mapAsyncLocalStorage.run(store, async () => {
        const mapId = saveMap({ lat, lng, zoom })
        res.set('Content-Type', 'application/json')
        res.set('Content-Length', String(JSON.stringify({ mapId }).length))
        res.send({ mapId })
        next()
      })
    }
  }
})
export default router
