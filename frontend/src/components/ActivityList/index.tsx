import { connect, ConnectedProps } from 'react-redux'
import ActivityEntry from './ActivityEntry'
import ActivityFilter from './ActivityFilter'
import ErrorBoundary from 'components/ErrorBoundary'
import React from 'react'
import { RootState } from 'interfaces/store/reducers'

const mapStateToProps = (state: RootState) => ({
  activitiesList: state.activities.activitiesList,
})

const connector = connect(mapStateToProps)

type ActivityListProps = ConnectedProps<typeof connector>

export default connector(({ activitiesList }: ActivityListProps) => (
  <div className="nowrap overflow-y-auto ph1 pv2" style={{ flex: '1 1 0' }}>
    <ActivityFilter />
    {activitiesList.map(activity => (
      <ErrorBoundary key={activity.id}>
        <ActivityEntry activity={activity} />
      </ErrorBoundary>
    ))}
  </div>
))
