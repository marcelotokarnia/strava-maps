// https://github.com/tulios/mappersmith/issues/100
// TODO
// const FormData = require('form-data')

// const uploadFile = filePath => {
//   const fileName= path.basename(filePath, path.extname(filePath))
//   const formData = new FormData()
//   const boundary = formData.getBoundary()
//   formData.append('file', fs.createReadStream(filePath))

//   let data = Buffer.alloc(0)
//   formData.on('data', chunk => {
//     data = Buffer.concat([data, Buffer.from(chunk)])
//   })
//   formData.on('end', () => {
//     client.Files.upload({
//       name : fileName,
//       body: data,
//       headers: {'Content-Type' : `multipart/form-data;boundary=${boundary}`}
//     }).then(response => {console.log(response)}).catch(e => console.log(JSON.stringify(e)))
//   })
//   formData.resume()
// }

export default () => ({
  prepareRequest: (next: any) =>
    next().then((request: any) =>
      request.enhance({
        body: {
          ...request.body(),
        },
      })
    ),
})
