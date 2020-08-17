import { IFieldResolver } from 'apollo-server-express'
import { KEYS } from '@src/middlewares/redis'
import { MapsRequest } from '@src/interfaces/routes'
import { ParsedAthlete } from '@tokks/strava-parsed/typings'
import parseStravaProfile from '@tokks/strava-parsed/parseAthlete'
import { strava } from '@src/clients'
import { sudoRefreshToken } from '@src/utils/manageTokens'

const getStravaProfile: IFieldResolver<any, { req: MapsRequest }, { mapId: string }> = async (
  _parent,
  args,
  context
): Promise<ParsedAthlete> => {
  let access_token
  if (args.mapId) {
    const { username } = await context.req.redis.get(KEYS.SAVED_MAP(args.mapId))
    access_token = await sudoRefreshToken(context.req, username)
  } else {
    access_token = context.req.cookies.access_token
  }

  return parseStravaProfile(await strava.getProfile(access_token))
}

export default getStravaProfile
