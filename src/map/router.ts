import { refreshToken, sudoRefreshToken } from '../utils/manageTokens'
import { AsyncRouter } from 'express-async-router'
import { KEYS } from '../middlewares/redis'
import { mapAsyncLocalStorage } from './'
import { MapsRequest } from '../interfaces/routes'
import saveMap from './utils/saveMap'
import strava from '../clients/strava'

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
        res.send({ mapId })
        next()
      })
    }
  }
})

router.get('/colab/:uuid', async (req: MapsRequest) => {
  const mapColab = await req.redis.get<{ routeId: number; username: string }>(
    KEYS.MAP_COLAB_PATH(req.params.uuid)
  )
  const routeAccessToken = await sudoRefreshToken(req, mapColab.username)
  const route = await strava.getRoute(routeAccessToken, mapColab.routeId)

  return route.map.polyline
})
export default router
