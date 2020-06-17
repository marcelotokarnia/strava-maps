import { KEYS } from '../../../redisMiddleware'
import parseStravaProfile from '../../../utils/parseStravaProfile'
import { strava } from '../../../clients'
import { sudoRefreshToken } from '../../../utils/manageTokens'

export default async (_parent: any, args: any, context: any) => {
  let access_token = context.req.cookies.access_token
  if (args.mapId) {
    const { username } = await context.req.redis.get(KEYS.SAVED_MAP(args.mapId))
    access_token = await sudoRefreshToken(context.req, username)
  }

  return parseStravaProfile(await strava.getProfile(access_token))
}
