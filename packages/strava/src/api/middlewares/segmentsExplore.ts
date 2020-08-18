export default () => ({
  prepareRequest: (next: any) =>
    next().then((request: any) => {
      const originalParams = request.params()
      return request.enhance({
        params: {
          ...originalParams,
          bounds: decodeURIComponent(originalParams.bounds),
        },
      })
    }),
})
