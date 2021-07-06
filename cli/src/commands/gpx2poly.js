import { encode } from '@mapbox/polyline'
import fs from 'fs'
import { last } from 'ramda'
import xml2js from 'xml2js'

export default ({ file }) => {
  const filename = last(file.split('/'))
  const parser = new xml2js.Parser()
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

      const content = encode(latLng).replace(/\\/g, '\\\\')
      console.log(content)

      fs.writeFile(`inputLog/arr2poly-${filename}`, content, err => {
        if (err) {
          throw err
        }
      })
    })
  })
}
