import { IFieldResolver } from 'apollo-server-express'
import { MapsRequest } from '@src/interfaces/routes'
import { ParsedActivity } from '@tokks/strava-parsed/typings'
import parseStravaActivity from '@tokks/strava-parsed/parseActivity'
import { strava } from '@src/clients'

const getStravaActivityDetails: IFieldResolver<any, { req: MapsRequest }, { id: string }> = async (
  _parent,
  args,
  context
): Promise<ParsedActivity> => {
  return parseStravaActivity(
    await strava.getActivityDetails(context.req.body?.cookies?.access_token, args.id)
  )
}

export default getStravaActivityDetails
