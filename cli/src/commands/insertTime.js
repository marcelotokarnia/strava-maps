import fs from 'fs'
import { last } from 'ramda'
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
      const splits = (e - s) / (trkpts.length - 1)
      result.gpx.metadata[0].time = [s.toISOString()]
      trkpts.forEach((trkpt, i) => {
        trkpt.time = [new Date(+s + i * splits).toISOString()]
      })
      const processed = builder.buildObject(result)
      fs.writeFile(`output/insertTime-${filename}`, processed, err => {
        if (err) {
          throw err
        }
      })
    })
  })
}
