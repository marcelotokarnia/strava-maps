import { refreshToken, sudoRefreshToken } from '@src/utils/manageTokens'
import { AsyncRouter } from 'express-async-router'
import { KEYS } from '@src/middlewares/redis'
import { mapAsyncLocalStorage } from '@src/map'
import { MapsRequest } from '@src/interfaces/routes'
import saveMap from '@src/map/utils/saveMap'
import strava from '@src/clients/strava'

const router = AsyncRouter()
router.post('/save', async (req: MapsRequest, res, next) => {
  if (req.body?.cookies?.access_token && req.body?.cookies?.username) {
    if (await refreshToken(req, res)) {
      const store = new Map()
      store.set('cookies', req.body?.cookies)
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

router.post('/colab/:uuid', async (req: MapsRequest) => {
  const mapColab = await req.redis.get<{ routeId: string; username: string }>(
    KEYS.MAP_COLAB_PATH(req.params.uuid)
  )
  const routeAccessToken = await sudoRefreshToken(req, mapColab.username)
  const route = await strava.getRoute(routeAccessToken, mapColab.routeId)

  return route.map.polyline
})
export default router
