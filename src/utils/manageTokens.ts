import setXCookies, { clearCookies } from '@src/utils/setXCookies'
import { KEYS } from '@src/middlewares/redis'
import { MapsRequest } from '@src/interfaces/routes'
import { Response } from 'express-async-router'
import { strava } from '@src/clients'
import { StravaAuthValue } from '@src/interfaces/redis'

const HOUR = 1000 * 60 * 60

export const updateRedisAndCookies = async (
  req: MapsRequest,
  res: Response,
  { access_token, refresh_token, expires_at, expires_in }: StravaAuthValue & { expires_in: number },
  username: string
): Promise<void> => {
  await req.redis.set<StravaAuthValue>(KEYS.STRAVA_AUTH(username), {
    access_token,
    refresh_token,
    expires_at: expires_at * 1000,
  })
  setXCookies(res, { access_token, username }, expires_in)
}

const refreshAndUpdateRedis = async (
  req: MapsRequest,
  res: Response,
  token: string,
  username: string
): Promise<void> => {
  const authValues = await strava.refreshToken(token)
  await updateRedisAndCookies(req, res, authValues, username)
}

export const refreshToken = async (req: MapsRequest, res: Response): Promise<boolean> => {
  const { access_token, refresh_token, expires_at } = await req.redis.get<StravaAuthValue>(
    KEYS.STRAVA_AUTH(req.cookies.username)
  )
  if (access_token === req.cookies.access_token) {
    if (expires_at < new Date().getTime() - HOUR) {
      await refreshAndUpdateRedis(req, res, refresh_token, req.cookies.username)
    }
    return true
  } else {
    clearCookies(res, ['access_token', 'username'])
  }
  return false
}

export const sudoRefreshToken = async (req: MapsRequest, username: string): Promise<string> => {
  const {
    access_token: oldAccessToken,
    refresh_token: oldToken,
    expires_at: oldExpiresAt,
  } = await req.redis.get<StravaAuthValue>(KEYS.STRAVA_AUTH(username))
  if (oldExpiresAt < new Date().getTime() - HOUR) {
    const { access_token, refresh_token, expires_at } = await strava.refreshToken(oldToken)
    await req.redis.set<StravaAuthValue>(KEYS.STRAVA_AUTH(username), {
      access_token,
      refresh_token,
      expires_at: expires_at * 1000,
    })
    return access_token
  } else {
    return oldAccessToken
  }
}
