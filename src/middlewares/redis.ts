import { NextFunction, Response } from 'express'
import { assoc } from 'ramda'
import { BuffedRedis as BuffedRedisType } from '@src/interfaces/redis'
import { MapsRequest } from '@src/interfaces/routes'
import Redis from 'ioredis'

let redis, BuffedRedis: BuffedRedisType

export { BuffedRedis }

export default async (req: MapsRequest, _: Response, next: NextFunction): Promise<void> => {
  if (!redis) {
    redis = new Redis(process.env.REDIS_URL)
    BuffedRedis = assoc(
      'get',
      async key => {
        return JSON.parse(await redis.get(key))
      },
      assoc(
        'set',
        (key, value, ...args) => {
          if (args.length) {
            return redis.set(key, JSON.stringify(value), ...args)
          } else {
            return redis.set(key, JSON.stringify(value))
          }
        },
        redis
      )
    )
    BuffedRedis.on('reconnecting', delay => console.log('Reconnecting to Redis', { delay }))
    BuffedRedis.on('error', error => console.log('Redis encountered an error', { error }))
  }
  req.redis = BuffedRedis
  next()
}

export const KEYS = {
  MAP_COLAB_PATH: (uuid: string) => `mapcolab:path:${uuid}`,
  SAVED_MAP: (uuid: string) => `localmap:${uuid}`,
  STRAVA_AUTH: (username: string) => `strava:auth:${username}`,
  STRAVA_OLD_TOKEN_OWNER: (access_token: string) => `strava:auth:token:owner:${access_token}`,
  STRAVA_SCREENSHOT: (uuid: string) => `strava:screenshot:${uuid}`,
}

export const TIME_IN_SECONDS = {
  SECOND: 1,
  MINUTE: 60,
  HOUR: 3600,
  DAY: 86400,
}
