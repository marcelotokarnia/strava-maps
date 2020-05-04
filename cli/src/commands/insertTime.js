import xml2js from 'xml2js'
import fs from 'fs'

export default ({ s, e, file }) => {
  var parser = new xml2js.Parser()
  fs.readFile(file, function (err, data) {
    parser.parseString(data, function (err, result) {
      console.dir(result.gpx.trk[0].trkseg[0].trkpt.length)
    })
  })
}
