import {
  getActivityById as getActivityByIdFixture,
  parseActivity as parseActivityFixture,
} from '@tokks/strava-tester/fixtures'
import parseActivity from './parseActivity'

describe('parseStravaActivity utils', () => {
  it('should parse strava response into graphql schema', () => {
    const result = parseActivity(getActivityByIdFixture)
    expect(result).toEqual(parseActivityFixture)
  })
})
