import { BuffedRedis } from './redis'
import { Request } from 'express'

export type MapsRequest = { redis: BuffedRedis } & Request
