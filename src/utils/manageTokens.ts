import { KEYS } from '../redisMiddleware'
import { MapsRequest } from '../interfaces/routes'
import { Response } from 'express-async-router'
import { strava } from '../clients'
import { StravaAuthValue } from '../interfaces/redis'

const HOUR = 1000 * 60 * 60

export const updateRedisAndCookies = async (
  req: MapsRequest,
  res: Response,
  { access_token, refresh_token, expires_at }: StravaAuthValue,
  username: string
): Promise<void> => {
  await req.redis.set<StravaAuthValue>(KEYS.STRAVA_AUTH(username), {
    access_token,
    refresh_token,
    expires_at: expires_at * 1000,
  })
  res.clearCookie('access_token').cookie('access_token', access_token, {})
  res.clearCookie('username').cookie('username', username)
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
    res.clearCookie('access_token')
    res.clearCookie('username')
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
