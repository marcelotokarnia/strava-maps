import Activity from './Activity'
import React from 'react'

export default ({ activities }) =>
  activities.map(activity => <Activity key={activity.name} activity={activity} />)
