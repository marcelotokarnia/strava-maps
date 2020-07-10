import { connect, ConnectedProps } from 'react-redux'
import Activity from './ActivityPolyline'
import ErrorBoundary from 'components/ErrorBoundary'
import React from 'react'
import { RootState } from 'interfaces/store/reducers'

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

type ActivityMapProps = ConnectedProps<typeof connector>

export default connector(({ activitiesList, profiles }: ActivityMapProps) => (
  <>
    {activitiesList.map((activity, idx) => (
      <ErrorBoundary key={activity.id}>
        <Activity
          profile={profiles[activity.athleteId]}
          activity={activity}
          color={colorRotation[idx % colorRotation.length]}
        />
      </ErrorBoundary>
    ))}
  </>
))
