import parseStravaActivity from '../../../utils/parseStravaActivity'
import { strava } from '../../../clients'

export default async (_parent: any, args: any) =>
  (await strava.getActivities(args.token)).map(parseStravaActivity)
