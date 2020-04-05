import { DAY, HOUR, MINUTE } from '../constants'
import transformActivities, { modifyPolyline } from './transformActivities'
import stravaAthleteActivities from '../fixtures/getStravaActivities'

describe('transformActivities utils function', () => {
  describe('startDate attribute', () => {
    it('should return parsed', () => {
      expect(
        transformActivities([
          {
            startDate: stravaAthleteActivities[0].startDate,
          } as any,
        ])
      ).toEqual([{ startDate: 'Mar 22 2020' }])
    })
    it('should parse even when polyline is undefined', () => {
      expect(transformActivities([{ polyline: undefined } as any])).toEqual([{ polyline: [] }])
    })
  })

  describe('distance attribute', () => {
    it('should return km', () => {
      expect(
        transformActivities([
          {
            distance: 15000,
          } as any,
        ])
      ).toEqual([{ distance: 15 }])
    })
  })

  describe('polyline attribute', () => {
    it('should decode polyline', () => {
      expect(
        transformActivities([
          {
            polyline: stravaAthleteActivities[0].polyline,
          } as any,
        ])
      ).toEqual([{ polyline: modifyPolyline(stravaAthleteActivities[0].polyline) }])
    })
    it('should parse even when polyline is undefined', () => {
      expect(transformActivities([{ polyline: undefined } as any])).toEqual([{ polyline: [] }])
    })
  })

  describe('speed attribute', () => {
    it('should return km/h', () => {
      expect(
        transformActivities([
          {
            speed: {
              average: 1,
            },
          } as any,
        ])
      ).toEqual([{ speed: { average: 3.6 } }])
    })
    it('should parse even when polyline is undefined', () => {
      expect(
        transformActivities([
          {
            speed: {
              average: undefined,
            },
          } as any,
        ])
      ).toEqual([
        {
          speed: {
            average: undefined,
          },
        },
      ])
    })
  })

  describe('time attribute', () => {
    it('should return left padded seconds, minutes and hours', () => {
      expect(
        transformActivities([
          {
            time: {
              elapsed: 1 + MINUTE + HOUR + DAY,
              moving: undefined,
            },
          } as any,
        ])
      ).toEqual([
        {
          time: {
            elapsed: '01D 01H 01M 01S',
            moving: undefined,
          },
        },
      ])
    })
    it('should omit days/hours', () => {
      expect(
        transformActivities([
          {
            time: {
              elapsed: 1 + MINUTE,
            },
          } as any,
        ])
      ).toEqual([
        {
          time: {
            elapsed: '01M 01S',
          },
        },
      ])
    })
    it('should omit days/hours/minutes', () => {
      expect(
        transformActivities([
          {
            time: {
              elapsed: 1,
            },
          } as any,
        ])
      ).toEqual([
        {
          time: {
            elapsed: '01S',
          },
        },
      ])
    })
  })
})
