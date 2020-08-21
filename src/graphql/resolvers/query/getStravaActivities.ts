import { IFieldResolver } from 'apollo-server-express'
import { KEYS } from '@src/middlewares/redis'
import { MapsRequest } from '@src/interfaces/routes'
import { ParsedActivity } from '@tokks/strava-parsed/typings'
import parseStravaActivity from '@tokks/strava-parsed/parseActivity'
import { strava } from '@src/clients'
import { sudoRefreshToken } from '@src/utils/manageTokens'

const getStravaActivities: IFieldResolver<any, { req: MapsRequest }, { mapId: string }> = async (
  _parent: any,
  args: any,
  context: any
): Promise<Array<ParsedActivity>> => {
  let access_token
  if (args.mapId) {
    const { username } = await context.req.redis.get(KEYS.SAVED_MAP(args.mapId))
    access_token = await sudoRefreshToken(context.req, username)
  } else {
    access_token = context.req.body?.cookies?.access_token
  }
  return (await strava.getActivities(access_token)).map(parseStravaActivity)
}

export default getStravaActivities
