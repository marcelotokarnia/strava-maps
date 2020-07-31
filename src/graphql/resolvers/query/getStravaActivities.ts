import { KEYS } from '@src/middlewares/redis'
import parseStravaActivity from '@src/utils/parseStravaActivity'
import { strava } from '@src/clients'
import { sudoRefreshToken } from '@src/utils/manageTokens'

export default async (_parent: any, args: any, context: any) => {
  let access_token
  if (args.mapId) {
    const { username } = await context.req.redis.get(KEYS.SAVED_MAP(args.mapId))
    access_token = await sudoRefreshToken(context.req, username)
  } else {
    access_token = context.req.cookies.access_token
  }
  return (await strava.getActivities(access_token)).map(parseStravaActivity)
}
