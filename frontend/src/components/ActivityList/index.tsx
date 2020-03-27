import ActivityEntry from './ActivityEntry'
import React from 'react'

export default ({ activities }) => (
  <div className="nowrap overflow-y-auto ph1 pv2" style={{ flex: '1 1 0' }}>
    {activities.map(activity => (
      <ActivityEntry key={activity.id} activity={activity} />
    ))}
  </div>
)
