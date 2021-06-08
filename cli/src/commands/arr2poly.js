import { encode } from '@mapbox/polyline'
import fs from 'fs'

export default ({ file }) => {
  fs.readFile(file, function (err, data) {
    if (err) {
      throw err
    }
    const parsedData = JSON.parse(data)

    const latLng = parsedData.map(({ lat, lng }) => [lat, lng])
    const content = encode(latLng)
    console.log(content.replace(/\\/g, '\\\\'))
  })
}
