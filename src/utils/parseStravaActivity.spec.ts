import parsedStravaActivity from 'fixtures/parsedStravaActivity'
import parseStravaActivity from 'utils/parseStravaActivity'
import stravaAthleteActivities from 'fixtures/stravaAthleteActivities'

describe('parseStravaActivity utils', () => {
  it('should parse strava response into graphql schema', () => {
    const result = parseStravaActivity(stravaAthleteActivities[0])
    expect(result).toEqual(parsedStravaActivity)
  })
})
