import parseStravaActivity from '@src/utils/parseStravaActivity'
import { strava } from '@src/clients'

export default async (_parent: any, args: any, context: any) => {
  return parseStravaActivity(
    await strava.getActivityDetails(context.req.cookies.access_token, args.id)
  )
}
