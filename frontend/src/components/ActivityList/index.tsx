import ActivityEntry from './ActivityEntry'
import ActivityFilter from './ActivityFilter'
import { connect } from 'react-redux'
import ErrorBoundary from '../ErrorBoundary'
import React from 'react'
import { RootState } from '../../interfaces/store/reducers'

const mapStateToProps = (state: RootState) => ({
  activitiesList: state.activities.activitiesList,
})

const connector = connect(mapStateToProps)

export default connector(({ activitiesList }) => (
  <div className="nowrap overflow-y-auto ph1 pv2" style={{ flex: '1 1 0' }}>
    <ActivityFilter />
    {activitiesList.map(activity => (
      <ErrorBoundary key={activity.id}>
        <ActivityEntry activity={activity} />
      </ErrorBoundary>
    ))}
  </div>
))
