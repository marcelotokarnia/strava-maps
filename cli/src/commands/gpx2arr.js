import fs from 'fs'
import { last } from 'ramda'
import xml2js from 'xml2js'

const degreesToRadians = degrees => {
  return (degrees * Math.PI) / 180
}

export const distanceInKmBetweenEarthCoordinates = (latlon1, latlon2) => {
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

export default ({ file }) => {
  const filename = last(file.split('/'))
  const parser = new xml2js.Parser()
  fs.readFile(file, function (err, data) {
    if (err) {
      throw err
    }
    let distance = 0
    parser.parseString(data, function (err, result) {
      if (err) {
        throw err
      }
      const trkpts = result.gpx.trk[0].trkseg[0].trkpt
      const latLng = trkpts.map(({ $: { lat, lon } }) => ({ lat, lng: lon }))
      latLng.forEach((_, i, arr) => {
        if (i !== 0) {
          distance += distanceInKmBetweenEarthCoordinates(arr[i - 1], arr[i])
        }
        arr[i].distance = distance
      })

      fs.writeFile(`output/gpx2arr-${filename}`, JSON.stringify(latLng, null, 2), err => {
        if (err) {
          throw err
        }
      })
    })
  })
}
