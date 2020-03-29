import Activity from './ActivityPolyline'
import { connect } from 'react-redux'
import React from 'react'
import { RootState } from '../../interfaces/store/reducers'

const mapStateToProps = (state: RootState) => ({
  activitiesList: state.activities.activitiesList,
})

const connector = connect(mapStateToProps)

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

export default connector(({ activitiesList }) =>
  activitiesList.map((activity: any, idx: number) => (
    <Activity
      key={activity.name}
      activity={activity}
      color={colorRotation[idx % colorRotation.length]}
    />
  ))
)
