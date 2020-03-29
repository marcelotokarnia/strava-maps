import ActivityEntry from './ActivityEntry'
import { connect } from 'react-redux'
import React from 'react'
import { RootState } from '../../interfaces/store/reducers'

const mapStateToProps = (state: RootState) => ({
  activitiesList: state.activities.activitiesList,
})

const connector = connect(mapStateToProps)

export default connector(({ activitiesList }) => (
  <div className="nowrap overflow-y-auto ph1 pv2" style={{ flex: '1 1 0' }}>
    {activitiesList.map(activity => (
      <ActivityEntry key={activity.id} activity={activity} />
    ))}
  </div>
))
