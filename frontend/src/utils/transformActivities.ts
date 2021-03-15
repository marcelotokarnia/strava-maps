import { assoc, divide, evolve, flip, map, multiply, pipe, type } from 'ramda'
import { decode } from '@mapbox/polyline'
import { leftZeroPadding } from './'
import moment from 'moment'
import { ParsedStravaActivity } from '@tokks/strava'
import { Position } from '@tokks/strava-parsed/typings'
import { TransformedStravaActivity } from 'interfaces/activities'

const tryDecode = polyline => (polyline ? decode(polyline) : [])
export const modifyPolyline = (polyline: Array<Position> | string): Array<Position> => {
  if (Array.isArray(polyline)) {
    return polyline
  }
  return pipe<string, Array<[number, number]>, Array<{ lat: number; lng: number }>>(
    tryDecode,
    map(([lat, lng]) => ({ lat, lng }))
  )(polyline)
}

const isNumber = (p: number | string): p is number => type(p) === 'Number'

export const modifyTime = (seconds: number | string): string => {
  if (!isNumber(seconds)) {
    return seconds
  }
  seconds = Math.floor(seconds)
  const days = leftZeroPadding(Math.floor(seconds / (60 * 60 * 24)), 2)
  seconds = seconds % (60 * 60 * 24)
  const hours = leftZeroPadding(Math.floor(seconds / (60 * 60)), 2)
  seconds = seconds % (60 * 60)
  const minutes = leftZeroPadding(Math.floor(seconds / 60), 2)
  seconds = leftZeroPadding(seconds % 60, 2)
  if (+days) {
    return `${days}D ${hours}H ${minutes}M ${seconds}S`
  } else if (+hours) {
    return `${hours}H ${minutes}M ${seconds}S`
  } else if (+minutes) {
    return `${minutes}M ${seconds}S`
  } else {
    return `${seconds}S`
  }
}

export const modifySpeed = (speed: number): number => speed && multiply(3.6)(speed)

export const modifyDistance = (distance: number): number => distance && flip(divide)(1000)(distance)

export const modifyDate = (dt: string): string => moment(dt).format('MMM DD YYYY')

export default (activities: Array<ParsedStravaActivity>): Array<TransformedStravaActivity> =>
  activities
    .map(
      evolve({
        distance: modifyDistance,
        pace: {
          average: modifyTime,
          max: modifyTime,
        },
        polyline: modifyPolyline,
        speed: {
          average: modifySpeed,
          max: modifySpeed,
        },
        startDate: modifyDate,
        time: {
          moving: modifyTime,
          elapsed: modifyTime,
        },
      })
    )
    .map(act =>
      act.speed
        ? assoc(
            'pace',
            {
              average: modifyTime(3600 / act.speed.average),
              max: modifyTime(3600 / act.speed.max),
            },
            act
          )
        : act
    ) as any
