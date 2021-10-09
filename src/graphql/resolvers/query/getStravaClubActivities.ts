import { assoc } from 'ramda'
import { IFieldResolver } from 'apollo-server-express'
import { MapsRequest } from '@src/interfaces/routes'
import { ParsedActivity } from '@tokks/strava-parsed/typings'
import parseStravaActivity from '@tokks/strava-parsed/parseActivity'
import { strava } from '@src/clients'
import { sudoRefreshToken } from '@src/utils/manageTokens'

const getStravaClubActivities: IFieldResolver<any, { req: MapsRequest }, { id: string }> = async (
  _parent: any,
  args: any,
  context: any
): Promise<Array<ParsedActivity>> => {
  const access_token = await sudoRefreshToken(context.req, 'mtokarnia')

  return (await strava.getClubActivities(access_token, args.id)).map(e =>
    assoc(
      'athleteName',
      `${(e.athlete as any).firstname} ${(e.athlete as any).lastname}`,
      parseStravaActivity(e)
    )
  )
}

export default getStravaClubActivities
