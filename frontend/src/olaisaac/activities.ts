import { annaActivities } from './anna'
import { brunaActivities } from './bruna'
import { jordsActivities } from './jords'
import { marceloActivities } from './marcelo'
import { marianaActivities } from './mariana'
import { tereActivities } from './tere'
import { tonActivities } from './ton'
import { viActivities } from './vi'

export default [
  ...annaActivities,
  ...marceloActivities,
  ...marianaActivities,
  ...brunaActivities,
  ...tereActivities,
  ...jordsActivities,
  ...viActivities,
  ...tonActivities,
].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
