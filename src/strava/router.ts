import { AsyncRouter } from 'express-async-router'
import { KEYS } from '../redisMiddleware'
import { MapsRequest } from '../interfaces/routes'
import { strava } from '../clients'
import { StravaAuthValue } from '../interfaces/redis'

const router = AsyncRouter()
router.post('/auth', async (req: MapsRequest, res) => {
  const stravaAuthResponse = await strava.auth(req?.body?.code)
  if (stravaAuthResponse?.athlete?.username) {
    const {
      access_token,
      refresh_token,
      expires_at,
      athlete: { username },
    } = stravaAuthResponse
    req.redis.set<StravaAuthValue>(KEYS.STRAVA_AUTH(username), {
      access_token,
      refresh_token,
      expires_at: expires_at * 1000,
    })
    res.cookie('access_token', access_token)
    res.cookie('username', stravaAuthResponse.athlete.username)
    res.sendStatus(204)
  }
})

export default router
