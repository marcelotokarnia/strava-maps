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
import { v5Goal } from './v5Goal'
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

const getActivitiesByGoal = (goal: { distance: number; lat: number; lng: number }[]) => (
  activities: Array<ParsedStravaActivity>
) => {
  let distanceMet = 0
  const respActivities = activities.reverse().map(acti => {
    const newDistanceMet = distanceMet + acti.distance / 1000
    let beginIndex = goal.findIndex(({ distance }) => distance > distanceMet) - 1
    let endIndex = goal.findIndex(({ distance }) => distance > newDistanceMet)
    if (beginIndex === -2) {
      beginIndex = goal.length - 1
      endIndex = goal.length - 1
    }
    distanceMet = newDistanceMet
    let slice
    if (beginIndex < goal.length && endIndex < goal.length) {
      slice = goal.slice(beginIndex, endIndex)
    } else if (beginIndex < goal.length) {
      slice = goal.slice(beginIndex)
    } else {
      slice = []
    }
    let changedId
    if (!acti.id) {
      changedId = assoc('id', distanceMet, acti)
    } else {
      changedId = acti
    }
    return assoc(
      'startPosition',
      { lat: goal[beginIndex].lat, lng: goal[beginIndex].lng },
      assoc('polyline', encodeToPolyline(slice), assoc('totalDistance', distanceMet, changedId))
    )
  })
  const lastElement = goal.slice(-1)[0]
  const center =
    distanceMet >= lastElement.distance
      ? lastElement
      : goal.find(({ distance }) => distance > distanceMet)
  return {
    activities: respActivities.reverse(),
    center,
    distance: distanceMet,
  }
}

export const getOlaIsaacActivitiesV4 = getActivitiesByGoal(
  v4Goal.map(e => assoc('distance', e.distance / 1000, e))
)

export const getOlaIsaacActivitiesV5 = getActivitiesByGoal(v5Goal)
