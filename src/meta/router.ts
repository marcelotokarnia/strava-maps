import { AsyncRouter } from 'express-async-router'
import { FRONTEND_HOST } from '@src/constants'
import { KEYS } from '@src/middlewares/redis'
import { MapsRequest } from '@src/interfaces/routes'

const router = AsyncRouter()

router.post('/tags', async (req: MapsRequest) => {
  // the host is not important here
  const url = new URL(FRONTEND_HOST + req.body.url)
  if (url.pathname === '/activities') {
    const qs = Object.fromEntries(
      (url.search
        ?.slice(1)
        .split('&')
        .map(a => a.split('=')) ?? []) as Array<[string, string]>
    )
    const mapId = qs.mapId
    if (mapId) {
      const { username } = await req.redis.get(KEYS.SAVED_MAP(mapId))
      const image = await req.redis.get(KEYS.STRAVA_SCREENSHOT(mapId))
      return {
        title: `${username}'s latest strava map`,
        description: `Check out ${username}'s latest strava activities on this nice interactive big map`,
        image,
      }
    } else {
      return {
        title: `My latest strava map`,
        description: `Check out my latest strava activities on this nice interactive big map`,
      }
    }
  }
})

export default router
