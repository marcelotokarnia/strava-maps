export default () => ({
  prepareRequest: (next: any) =>
    next().then((request: any) =>
      request.enhance({
        body: {
          grant_type: 'refresh_token',
          client_id: process.env.STRAVA_CLIENT_ID,
          client_secret: process.env.STRAVA_SECRET,
          ...request.body(),
        },
      })
    ),
})
