import {
  getLoggedInAthlete as getLoggedInAthleteFixture,
  parseAthlete as parseAthleteFixture,
} from '@tokks/strava-tester/fixtures'
import parseAthlete from './parseAthlete'

describe('parseStravaProfile utils', () => {
  it('should parse strava response into graphql schema', () => {
    const result = parseAthlete(getLoggedInAthleteFixture)
    expect(result).toEqual(parseAthleteFixture)
  })
})
