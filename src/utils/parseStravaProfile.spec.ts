import parsedStravaProfile from '../fixtures/parsedStravaProfile'
import parseStravaProfile from './parseStravaProfile'
import stravaAuthentication from '../fixtures/stravaAuthentication'

describe('parseStravaProfile utils', () => {
  it('should parse strava response into graphql schema', () => {
    const result = parseStravaProfile(stravaAuthentication.athlete)
    expect(result).toEqual(parsedStravaProfile)
  })
})
