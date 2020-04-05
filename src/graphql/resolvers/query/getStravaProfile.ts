import parseStravaProfile from '../../../utils/parseStravaProfile'
import { strava } from '../../../clients'

export default async (_parent: any, args: any, context: any) =>
  parseStravaProfile(await strava.getProfile(context.req.cookies.access_token))
