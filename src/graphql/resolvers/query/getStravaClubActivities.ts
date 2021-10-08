import { IFieldResolver } from 'apollo-server-express'
import { MapsRequest } from '@src/interfaces/routes'
import { ParsedActivity } from '@tokks/strava-parsed/typings'
import parseStravaActivity from '@tokks/strava-parsed/parseActivity'
import { strava } from '@src/clients'
// import { sudoRefreshToken } from '@src/utils/manageTokens'

const getStravaClubActivities: IFieldResolver<any, { req: MapsRequest }, { id: string }> = async (
  _parent: any,
  args: any,
  context: any
): Promise<Array<ParsedActivity>> => {
  // const access_token = await sudoRefreshToken(context.req, 'mtokarnia')
  const access_token = '39e6686877c4585d01452c5f0cb7a80825379f62'

  return (await strava.getClubActivities(access_token, args.id)).map(parseStravaActivity)
}

export default getStravaClubActivities
