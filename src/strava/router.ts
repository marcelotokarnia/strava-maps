import { AsyncRouter, Response } from 'express-async-router'
import { KEYS, TIME } from '../redisMiddleware'
import { refreshToken, sudoRefreshToken, updateRedisAndCookies } from './utils/manageTokens'
import chrome from 'chrome-aws-lambda'
import { MapsRequest } from '../interfaces/routes'
import puppeteer from 'puppeteer-core'
import { strava } from '../clients'
import wait from 'waait'

const STRAVA_CLIENT_ID = `client_id=${process.env.STRAVA_CLIENT_ID}`
const STRAVA_OAUTH_ENDPOINT = 'https://www.strava.com/oauth/authorize'
const LOGIN_ROUTE = 'redirect_uri=https://strava-maps.herokuapp.com/login'
const RESPONSE_TYPE = 'response_type=code'
const SCOPE = 'scope=activity:read_all,read_all,profile:read_all'
const STRAVA_ENDPOINT = `${STRAVA_OAUTH_ENDPOINT}?${STRAVA_CLIENT_ID}&${LOGIN_ROUTE}&${RESPONSE_TYPE}&${SCOPE}`
const CHROME_EXEC_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

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

const getOptions = async (isDev = false) =>
  isDev
    ? {
        product: 'chrome',
        args: [],
        executablePath: CHROME_EXEC_PATH,
        headless: true,
      }
    : {
        product: 'chrome',
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
      }

router.get('/screenshot/:username', async (req: MapsRequest, res: Response) => {
  const {
    params: { username },
  } = req
  const accessToken = await sudoRefreshToken(req, username)
  const cachedImage = await req.redis.get(KEYS.STRAVA_SCREENSHOT(username))
  if (cachedImage) {
    return cachedImage
  }
  const options = await getOptions(true)
  const browser = await puppeteer.launch(options)
  const page = await browser.newPage()
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1.5 })
  await page.goto(`http://localhost:8080/login?code=${username}::${accessToken}`)
  await wait(3000)
  const buffer = await page.screenshot({ type: 'png' })
  const base64Image = buffer.toString('base64')
  req.redis.set(KEYS.STRAVA_SCREENSHOT(username), base64Image, 'EX', TIME.DAY)
  res.set('Content-type', 'text/png')

  res.status(200).send(base64Image)
})

export default router
