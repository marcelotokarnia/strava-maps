export default () => ({
  prepareRequest: (next: any) =>
    next().then((request: any) =>
      request.enhance({
        body: {
          grant_type: 'authorization_code',
          client_id: process.env.STRAVA_CLIENT_ID,
          client_secret: process.env.STRAVA_SECRET,
          ...request.body(),
        },
      })
    ),
})
