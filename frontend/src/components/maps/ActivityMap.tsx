import Activity from './ActivityPolyline'
import React from 'react'

const colorRotation = [
  '#FF0000',
  '#0000FF',
  '#009900',
  '#00CCFF',
  '#FF33FF',
  '#66A1CC',
  '#CC00CC',
  '#61F2F2',
]

export default ({ activities }) =>
  activities.map((activity: any, idx: number) => (
    <Activity
      key={activity.name}
      activity={activity}
      color={colorRotation[idx % colorRotation.length]}
    />
  ))
