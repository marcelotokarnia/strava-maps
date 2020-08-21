import { KEYS, TIME_IN_SECONDS } from '@src/middlewares/redis'
import setXCookies, { clearCookies } from '@src/utils/setXCookies'
import { MapsRequest } from '@src/interfaces/routes'
import { Response } from 'express-async-router'
import { strava } from '@src/clients'
import { StravaAuthValue } from '@src/interfaces/redis'

const HOUR = 1000 * 60 * 60

export const updateRedis = async (
  req: MapsRequest,
  { access_token, refresh_token, expires_at }: StravaAuthValue,
  username: string
): Promise<void> => {
  await req.redis.set<StravaAuthValue>(KEYS.STRAVA_AUTH(username), {
    access_token,
    refresh_token,
    expires_at: expires_at * 1000,
  })
  await req.redis.set<{ username: string }>(
    KEYS.STRAVA_OLD_TOKEN_OWNER(access_token),
    {
      username,
    },
    'EX',
    30 * TIME_IN_SECONDS.DAY
  )
}

export const updateRedisAndCookies = async (
  req: MapsRequest,
  res: Response,
  { access_token, refresh_token, expires_at }: StravaAuthValue,
  username: string
): Promise<void> => {
  await updateRedis(req, { access_token, refresh_token, expires_at }, username)
  setXCookies(res, { access_token, username })
}

const refreshAndUpdateRedis = async (
  req: MapsRequest,
  res: Response,
  refresh_token: string,
  username: string
): Promise<void> => {
  const authValues = await strava.refreshToken(refresh_token)
  await updateRedisAndCookies(req, res, authValues, username)
}

export const refreshToken = async (req: MapsRequest, res: Response): Promise<boolean> => {
  if (req.body?.cookies?.access_token && req.body?.cookies?.username) {
    const { username } = await req.redis.get<{ username: string }>(
      KEYS.STRAVA_OLD_TOKEN_OWNER(req.body.cookies.access_token)
    )
    if (username === req.body.cookies.username) {
      const { access_token, refresh_token, expires_at } = await req.redis.get<StravaAuthValue>(
        KEYS.STRAVA_AUTH(username)
      )
      if (expires_at < new Date().getTime() - HOUR) {
        await refreshAndUpdateRedis(req, res, refresh_token, username)
      } else if (access_token !== req.body.cookies.access_token) {
        setXCookies(res, { access_token })
      }
      return true
    } else {
      clearCookies(res, ['access_token', 'username'])
    }
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
    await updateRedis(req, { access_token, refresh_token, expires_at }, username)
    return access_token
  } else {
    return oldAccessToken
  }
}
