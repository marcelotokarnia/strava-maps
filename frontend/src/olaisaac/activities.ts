import { annaActivities, annaActivitiesV3 } from './anna'
import { brunaActivities, brunaActivitiesV3 } from './bruna'
import { marceloActivities, marceloActivitiesV3 } from './marcelo'
import { tonActivities, tonActivitiesV3 } from './ton'
import { diegoActivitiesV3 } from './diego'
import { jordsActivities } from './jords'
import { juliaActivitiesV3 } from './julia'
import { luguiActivitiesV3 } from './lugui'
import { marcioActivitiesV3 } from './marcio'
import { marianaActivities } from './mariana'
import { mateusActivitiesV3 } from './mateus'
import { mattioliActivitiesV3 } from './mattioli'
import { ruiActivitiesV3 } from './rui'
import { steActivitiesV3 } from './ste'
import { tereActivities } from './tere'
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
