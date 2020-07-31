import parsedStravaProfile from '@src/fixtures/parsedStravaProfile'
import parseStravaProfile from '@src/utils/parseStravaProfile'
import stravaAuthentication from '@src/fixtures/stravaAuthentication'

describe('parseStravaProfile utils', () => {
  it('should parse strava response into graphql schema', () => {
    const result = parseStravaProfile(stravaAuthentication.athlete)
    expect(result).toEqual(parsedStravaProfile)
  })
})
