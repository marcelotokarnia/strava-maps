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
  STRAVA_AUTH: (username: string): string => `strava:auth:${username}`,
  STRAVA_SCREENSHOT: (uuid: string): string => `strava:screenshot:${uuid}`,
  SAVED_MAP: (uuid: string): string => `localmap:${uuid}`,
  MAP_COLAB_PATH: (uuid: string): string => `mapcolab:path:${uuid}`,
}

export const TIME = {
  SECOND: 1,
  MINUTE: 60,
  HOUR: 3600,
  DAY: 86400,
}
