import { AsyncRouter, Response } from 'express-async-router'
import { refreshToken, updateRedisAndCookies } from '../utils/manageTokens'
import { MapsRequest } from '../interfaces/routes'
import { strava } from '../clients'

const STRAVA_CLIENT_ID = `client_id=${process.env.STRAVA_CLIENT_ID}`
const STRAVA_OAUTH_ENDPOINT = 'https://www.strava.com/oauth/authorize'
const LOGIN_ROUTE = 'redirect_uri=https://strava-maps.herokuapp.com/login'
const RESPONSE_TYPE = 'response_type=code'
const SCOPE = 'scope=activity:read_all,read_all,profile:read_all'
const STRAVA_ENDPOINT = `${STRAVA_OAUTH_ENDPOINT}?${STRAVA_CLIENT_ID}&${LOGIN_ROUTE}&${RESPONSE_TYPE}&${SCOPE}`

const router = AsyncRouter()
router.get('/auth', async (req: MapsRequest, res: Response) => {
  if (req.cookies?.access_token && req.cookies?.username) {
    if (await refreshToken(req, res)) {
      return res.redirect(307, '/login?code=cached')
    }
  }
  return res.redirect(307, STRAVA_ENDPOINT)
})

router.post('/auth', async (req: MapsRequest, res: Response) => {
  if (req?.body?.code) {
    if (req.body.code.includes('::')) {
      const [username, access_token] = req.body.code.split('::')
      req.cookies.username = username
      req.cookies.access_token = access_token
      if (await refreshToken(req, res)) {
        res.clearCookie('access_token').cookie('access_token', access_token, {})
        res.clearCookie('username').cookie('username', username)
        return res.sendStatus(204)
      }
    }
    const stravaAuthResponse = await strava.auth(req?.body?.code)
    if (stravaAuthResponse?.athlete?.username) {
      const {
        access_token,
        refresh_token,
        expires_at,
        athlete: { username },
      } = stravaAuthResponse
      await updateRedisAndCookies(req, res, { access_token, refresh_token, expires_at }, username)
    }
    return res.sendStatus(204)
  }
})

export default router
