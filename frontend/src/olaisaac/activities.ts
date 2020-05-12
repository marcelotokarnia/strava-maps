import { annaActivities } from './anna'
import { brunaActivities } from './bruna'
import { marceloActivities } from './marcelo'
import { marianaActivities } from './mariana'
import { tereActivities } from './tere'

export default [
  ...annaActivities,
  ...marceloActivities,
  ...marianaActivities,
  ...brunaActivities,
  ...tereActivities,
].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
