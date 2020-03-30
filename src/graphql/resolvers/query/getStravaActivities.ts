import parseStravaActivity from '../../../utils/parseStravaActivity'
import { strava } from '../../../clients'

export default async (_parent: any, args: any, context: any) =>
  (await strava.getActivities(context.req.cookies.access_token)).map(parseStravaActivity)
