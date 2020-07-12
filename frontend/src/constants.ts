export const MINUTE = 60
export const HOUR = 60 * MINUTE
export const DAY = 24 * HOUR
export const BACKEND_HOST =
  process.env.NODE_ENV === 'production'
    ? `https://strava-maps.herokuapp.com`
    : `http://localhost:8080`
