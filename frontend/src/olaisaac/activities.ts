import { marceloActivities, marceloActivitiesV3 } from './marcelo'
import { tonActivities, tonActivitiesV3 } from './ton'
import { annaActivities } from './anna'
import { brunaActivities } from './bruna'
import { diegoActivitiesV3 } from './diego'
import { jordsActivities } from './jords'
import { marcioActivitiesV3 } from './marcio'
import { marianaActivities } from './mariana'
import { mateusActivitiesV3 } from './mateus'
import { tereActivities } from './tere'
import { viActivities } from './vi'

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
  ...diegoActivitiesV3,
  ...mateusActivitiesV3,
  ...tonActivitiesV3,
  ...marcioActivitiesV3,
  ...marceloActivitiesV3,
].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
