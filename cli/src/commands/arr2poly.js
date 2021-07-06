import { encode } from '@mapbox/polyline'
import fs from 'fs'
import { last } from 'ramda'

export default ({ file }) => {
  const filename = last(file.split('/'))
  fs.readFile(file, function (err, data) {
    if (err) {
      throw err
    }
    const parsedData = JSON.parse(data)

    const latLng = parsedData.map(({ lat, lng }) => [lat, lng])
    const content = encode(latLng).replace(/\\/g, '\\\\')
    console.log(content)

    fs.writeFile(`inputLog/arr2poly-${filename}`, content, err => {
      if (err) {
        throw err
      }
    })
  })
}
