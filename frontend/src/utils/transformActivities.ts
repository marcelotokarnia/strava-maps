import { divide, evolve, flip, map, multiply, pipe, type } from 'ramda'
import { decode } from '@mapbox/polyline'
import { leftZeroPadding } from './'
import moment from 'moment'
import { ParsedStravaActivity } from 'interfaces/activities'

const tryDecode = polyline => (polyline ? decode(polyline) : [])
export const modifyPolyline = polyline => {
  if (Array.isArray(polyline)) {
    return polyline
  }
  return pipe<string, Array<[number, number]>, Array<{ lat: number; lng: number }>>(
    tryDecode,
    map(([lat, lng]) => ({ lat, lng }))
  )(polyline)
}
export const modifyTime = seconds => {
  if (type(seconds) !== 'Number') {
    return seconds
  }
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

export const modifySpeed = speed => speed && multiply(3.6)(speed)

export const modifyDistance = distance => distance && flip(divide)(1000)(distance)

export const modifyDate = dt => moment(dt).format('MMM DD YYYY')

export default (activities: Array<ParsedStravaActivity>) =>
  activities.map(
    evolve({
      distance: modifyDistance,
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
