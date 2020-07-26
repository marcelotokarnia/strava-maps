import { BuffedRedis } from 'interfaces/redis'
import { Request } from 'express'

export type MapsRequest = { redis: BuffedRedis } & Request
