export enum StreamKeys {
  ALTITUDE = 'altitude',
  CADENCE = 'cadence',
  DISTANCE = 'distance',
  GRADE = 'grade_smooth',
  HEARTRATE = 'heartrate',
  LATLNG = 'latlng',
  MOVING = 'moving',
  TEMP = 'temp',
  TIME = 'time',
  VELOCITY = 'velocity_smooth',
  WATTS = 'watts',
}

export type StreamSetArr = Array<any>

export type StreamSetObj = Record<string, any>
