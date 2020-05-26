import { Redis } from 'ioredis'

export interface BuffedRedis extends Redis {
  get<T>(key: string): Promise<T>
  set<T>(key: string, value: T, opts: string, args: any): Promise<string>
  set<T>(key: string, value: T): Promise<string>
}

export interface StravaAuthValue {
  access_token: string
  expires_at: number
  refresh_token: string
}
