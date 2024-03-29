import { ActivityType, SummaryActivity } from '@tokks/strava/typings'

const activity: SummaryActivity = {
  achievement_count: 0,
  athlete: { id: 134815 },
  athlete_count: 1,
  average_speed: 5.54,
  average_watts: 175.3,
  comment_count: 1,
  commute: false,
  device_watts: true,
  distance: 24931.4,
  elapsed_time: 4500,
  elev_high: 1200.0,
  elev_low: 1000.0,
  end_latlng: [37.83, -122.26],
  external_id: 'garmin_push_12345678987654321',
  flagged: false,
  gear_id: 'b12345678987654321',
  has_kudoed: false,
  id: 154504250376823,
  kilojoules: 788.7,
  kudos_count: 3,
  manual: false,
  map: { id: 'a12345678987654321', summary_polyline: null, resource_state: 2 },
  max_speed: 11,
  max_watts: 406,
  moving_time: 4500,
  name: 'Happy Friday',
  photo_count: 0,
  private: false,
  start_date: '2018-05-02T12:15:09Z',
  start_date_local: '2018-05-02T05:15:09Z',
  start_latlng: [37.83, -122.26],
  timezone: '(GMT-08:00) America/Los_Angeles',
  total_elevation_gain: 0,
  total_photo_count: 1,
  trainer: true,
  type: ActivityType.RIDE,
  upload_id: 987654321234567900000,
  upload_id_str: '987654321234567900000',
  weighted_average_watts: 210,
  workout_type: null,
}

export default activity
