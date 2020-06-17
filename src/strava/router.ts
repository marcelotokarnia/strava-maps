import { AsyncRouter, Response } from 'express-async-router'
import { KEYS, TIME } from '../redisMiddleware'
import { refreshToken, sudoRefreshToken, updateRedisAndCookies } from '../utils/manageTokens'
import { MapsRequest } from '../interfaces/routes'
import puppeteer from 'puppeteer'
import { strava } from '../clients'
import wait from 'waait'

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

const getHost = (isDev = false) =>
  isDev ? `http://localhost:8080` : `https://strava-maps.herokuapp.com`

router.get('/screenshot/:uuid', async (req: MapsRequest, res: Response) => {
  const {
    params: { uuid },
  } = req
  const { username } = await req.redis.get(KEYS.SAVED_MAP(uuid))
  const accessToken = await sudoRefreshToken(req, username)
  const cachedImage = await req.redis.get(KEYS.STRAVA_SCREENSHOT(username))
  let base64Image
  if (cachedImage) {
    base64Image = cachedImage
  } else {
    const isDev = process.env.NODE_ENV !== 'production'
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
    const page = await browser.newPage()
    await page.setViewport({ width: 1680, height: 1030, deviceScaleFactor: 1 })
    const url = `${getHost(isDev)}/login?code=${username}::${accessToken}&redirectTo=/map`
    await page.goto(url)
    await wait(10000)
    const buffer = await page.screenshot({ type: 'png' })
    base64Image = buffer.toString('base64')
    req.redis.set(KEYS.STRAVA_SCREENSHOT(username), base64Image, 'EX', TIME.DAY)
  }
  const img = Buffer.from(base64Image, 'base64')
  res.set('Content-Type', 'image/png')
  res.set('Content-Length', String(img.length))

  return img
})

export default router
