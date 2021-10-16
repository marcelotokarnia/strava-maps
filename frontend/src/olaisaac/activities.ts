import { annaActivities, annaActivitiesV3 } from './anna'
import { brunaActivities, brunaActivitiesV3 } from './bruna'
import { marceloActivities, marceloActivitiesV3 } from './marcelo'
import { tonActivities, tonActivitiesV3 } from './ton'
import { assoc } from 'ramda'
import { diegoActivitiesV3 } from './diego'
import { encodeToPolyline } from '../utils/transformActivities'
import { jordsActivities } from './jords'
import { juliaActivitiesV3 } from './julia'
import { luguiActivitiesV3 } from './lugui'
import { marcioActivitiesV3 } from './marcio'
import { marianaActivities } from './mariana'
import { mateusActivitiesV3 } from './mateus'
import { mattioliActivitiesV3 } from './mattioli'
import { ParsedStravaActivity } from '@tokks/strava'
import { ruiActivitiesV3 } from './rui'
import { steActivitiesV3 } from './ste'
import { tereActivities } from './tere'
import { v4Goal } from './v4Goal'
import { viActivities } from './vi'
import { viPitonActivitiesV3 } from './viPiton'

export const olaIsaacActivitiesV1 = [
  ...annaActivities,
  ...marceloActivities,
  ...marianaActivities,
  ...brunaActivities,
  ...tereActivities,
  ...jordsActivities,
  ...viActivities,
  ...tonActivities,
].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())

export const olaIsaacActivitiesV3 = [
  ...annaActivitiesV3,
  ...diegoActivitiesV3,
  ...mateusActivitiesV3,
  ...tonActivitiesV3,
  ...marcioActivitiesV3,
  ...marceloActivitiesV3,
  ...juliaActivitiesV3,
  ...luguiActivitiesV3,
  ...ruiActivitiesV3,
  ...mattioliActivitiesV3,
  ...steActivitiesV3,
  ...viPitonActivitiesV3,
  ...brunaActivitiesV3,
].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())

export const getOlaIsaacActivitiesV4 = (activities: Array<ParsedStravaActivity>) => {
  let distanceMet = 0
  const respActivities = activities.reverse().map(acti => {
    const newDistanceMet = distanceMet + acti.distance
    let beginIndex = v4Goal.findIndex(({ distance }) => distance > distanceMet) - 1
    let endIndex = v4Goal.findIndex(({ distance }) => distance > newDistanceMet)
    if (beginIndex === -2) {
      beginIndex = v4Goal.length - 1
      endIndex = v4Goal.length - 1
    }
    distanceMet = newDistanceMet
    let v4Slice
    if (beginIndex < v4Goal.length && endIndex < v4Goal.length) {
      v4Slice = v4Goal.slice(beginIndex, endIndex)
    } else if (beginIndex < v4Goal.length) {
      v4Slice = v4Goal.slice(beginIndex)
    } else {
      v4Slice = []
    }
    return assoc(
      'id',
      distanceMet,
      assoc(
        'startPosition',
        { lat: v4Goal[beginIndex].lat, lng: v4Goal[beginIndex].lng },
        assoc('polyline', encodeToPolyline(v4Slice), acti)
      )
    )
  })
  return {
    activities: respActivities.reverse(),
    center: v4Goal.find(({ distance }) => distance > distanceMet),
  }
}
