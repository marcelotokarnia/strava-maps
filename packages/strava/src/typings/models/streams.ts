import { LatLng, meters, metersPerSecond, seconds } from '../'

export enum StreamKeys {
  ALTITUDE = 'altitude',
  CADENCE = 'cadence',
  DISTANCE = 'distance',
  GRADE = 'grade_smooth',
  HEARTRATE = 'heartrate',
  LATLNG = 'latlng',
  MOVING = 'moving',
  POWER = 'watts',
  TEMP = 'temp',
  TIME = 'time',
  VELOCITY = 'velocity_smooth',
  WATTS = 'watts',
}

interface Stream {
  data: Array<any>
  original_size: number
  resolution: 'low' | 'medium' | 'high'
  series_type: 'time' | 'distance'
}

export interface TimeStream extends Stream {
  data: Array<seconds>
}
export interface DistanceStream extends Stream {
  data: Array<meters>
}
export interface LatLngStream extends Stream {
  data: Array<LatLng>
}
export interface AltitudeStream extends Stream {
  data: Array<meters>
}
export interface SmoothVelocityStream extends Stream {
  data: Array<metersPerSecond>
}
export interface HeartrateStream extends Stream {
  data: Array<number>
}
export interface CadenceStream extends Stream {
  data: Array<number>
}
export interface PowerStream extends Stream {
  data: Array<seconds>
}

export interface TemperatureStream extends Stream {
  data: Array<number>
}

export interface MovingStream extends Stream {
  data: Array<boolean>
}

export interface SmoothGradeStream extends Stream {
  data: Array<number>
}

export type StreamSetArr = Array<Stream & { type: StreamKeys }>

export type StreamSetObj = Record<StreamKeys, Stream>
