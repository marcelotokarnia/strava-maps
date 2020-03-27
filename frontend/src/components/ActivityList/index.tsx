import ActivityEntry from './ActivityEntry'
import React from 'react'

export default ({ activities }) => (
  <div className="nowrap overflow-y-auto ph3 pv4 flex-auto">
    {activities.map(activity => (
      <ActivityEntry key={activity.id} activity={activity} />
    ))}
  </div>
)
