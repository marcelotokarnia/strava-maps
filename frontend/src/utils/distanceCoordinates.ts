import { Position } from '@tokks/strava'
const degreesToRadians = (degrees: number) => {
  return (degrees * Math.PI) / 180
}

export const distanceInKmBetweenEarthCoordinates = (latlon1: Position, latlon2: Position) => {
  const { lat: lat1, lng: lon1 } = latlon1
  const { lat: lat2, lng: lon2 } = latlon2
  const earthRadiusKm = 6371

  const dLatRads = degreesToRadians(lat2 - lat1)
  const dLonRads = degreesToRadians(lon2 - lon1)

  const lat1Rads = degreesToRadians(lat1)
  const lat2Rads = degreesToRadians(lat2)

  const a =
    Math.sin(dLatRads / 2) * Math.sin(dLatRads / 2) +
    Math.sin(dLonRads / 2) * Math.sin(dLonRads / 2) * Math.cos(lat1Rads) * Math.cos(lat2Rads)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return earthRadiusKm * c
}
