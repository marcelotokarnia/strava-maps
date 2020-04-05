import { ActivitiesState, RootState } from '../../interfaces/store/reducers'
import Activity from './ActivityPolyline'
import { connect } from 'react-redux'
import ErrorBoundary from '../ErrorBoundary'
import React from 'react'

const mapStateToProps = (state: RootState) => ({
  activitiesList: state.activities.activitiesList,
  profiles: state.profiles,
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

export default connector(
  ({
    activitiesList,
    profiles,
  }: {
    activitiesList: ActivitiesState['activitiesList']
    profiles: any
  }) =>
    activitiesList.map((activity, idx) => (
      <ErrorBoundary key={activity.id}>
        <Activity
          profile={profiles[activity.athleteId]}
          activity={activity}
          color={colorRotation[idx % colorRotation.length]}
        />
      </ErrorBoundary>
    ))
)
