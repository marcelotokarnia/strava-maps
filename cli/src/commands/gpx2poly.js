import { dropLast, last } from 'ramda'
import { encode } from '@mapbox/polyline'
import fs from 'fs'
import xml2js from 'xml2js'

export default ({ file }) => {
  const parser = new xml2js.Parser()
  const filename = dropLast(1, last(file.split('/')).split('.'))[0]

  fs.readFile(file, function (err, data) {
    if (err) {
      throw err
    }
    parser.parseString(data, function (err, result) {
      if (err) {
        throw err
      }
      const trkpts = result.gpx.trk[0].trkseg[0].trkpt
      const latLng = trkpts.map(({ $: { lat, lon } }) => [lat, lon])
      const content = encode(latLng)
      fs.writeFile(`output/gpx2poly-${filename}.pol`, content, err => {
        if (err) {
          throw err
        }
      })
    })
  })
}
