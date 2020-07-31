import parsedStravaActivity from '@src/fixtures/parsedStravaActivity'
import parseStravaActivity from '@src/utils/parseStravaActivity'
import stravaAthleteActivities from '@src/fixtures/stravaAthleteActivities'

describe('parseStravaActivity utils', () => {
  it('should parse strava response into graphql schema', () => {
    const result = parseStravaActivity(stravaAthleteActivities[0])
    expect(result).toEqual(parsedStravaActivity)
  })
})
