import { AsyncRouter, Response } from 'express-async-router'
import { refreshToken, updateRedisAndCookies } from '../utils/manageTokens'
import { MapsRequest } from '../interfaces/routes'
import setXCookies from '../utils/setXCookies'
import { strava } from '../clients'

const FRONTEND_LOGIN_PATH = `https://strava.tokks.tech/login`
const STRAVA_CLIENT_ID = `client_id=${process.env.STRAVA_CLIENT_ID}`
const STRAVA_OAUTH_ENDPOINT = 'https://www.strava.com/oauth/authorize'
const LOGIN_ROUTE = `redirect_uri=${FRONTEND_LOGIN_PATH}`
const RESPONSE_TYPE = 'response_type=code'
const SCOPE = 'scope=activity:read_all,read_all,profile:read_all'
const STRAVA_ENDPOINT = `${STRAVA_OAUTH_ENDPOINT}?${STRAVA_CLIENT_ID}&${LOGIN_ROUTE}&${RESPONSE_TYPE}&${SCOPE}`

const router = AsyncRouter()
router.get('/auth', async (req: MapsRequest, res: Response) => {
  if (req.cookies?.access_token && req.cookies?.username) {
    if (await refreshToken(req, res)) {
      return { redirectUri: `${FRONTEND_LOGIN_PATH}?code=cached` }
    }
  }
  return { redirectUri: STRAVA_ENDPOINT }
})

router.post('/auth', async (req: MapsRequest, res: Response) => {
  if (req?.body?.code) {
    if (req.body.code.includes('::')) {
      const [username, access_token] = req.body.code.split('::')
      req.cookies.username = username
      req.cookies.access_token = access_token
      if (await refreshToken(req, res)) {
        setXCookies(res, { access_token, username })
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
  }
})

export default router
