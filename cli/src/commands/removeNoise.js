import { findIndex, last } from 'ramda'
import fs from 'fs'
import xml2js from 'xml2js'

export default ({ s, e, file }) => {
  const parser = new xml2js.Parser()
  const builder = new xml2js.Builder()
  const filename = last(file.split('/'))

  fs.readFile(file, function (err, data) {
    if (err) {
      throw err
    }
    parser.parseString(data, function (err, result) {
      if (err) {
        throw err
      }
      const trkpts = result.gpx.trk[0].trkseg[0].trkpt
      const startIndex = s && findIndex(({ time }) => new Date(time) > s, trkpts)
      const endIndex = e && findIndex(({ time }) => new Date(time) > e, trkpts)

      if (startIndex) {
        if (endIndex) {
          trkpts.splice(startIndex, endIndex - startIndex)
        } else {
          result.gpx.trk[0].trkseg[0].trkpt = trkpts.slice(0, startIndex)
        }
      } else if (endIndex) {
        result.gpx.trk[0].trkseg[0].trkpt = trkpts.slice(endIndex)
      }

      const processed = builder.buildObject(result)
      fs.writeFile(`output/removeNoise-${filename}`, processed, err => {
        if (err) {
          throw err
        }
      })
    })
  })
}
