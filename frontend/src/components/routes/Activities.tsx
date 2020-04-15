import { connect, ConnectedProps } from 'react-redux'
import React, { useEffect } from 'react'
import ActivityList from '../ActivityList'
import { fetchActivities } from '../../store/actions/thunks'
import GMaps from '../maps'
import { length } from 'ramda'
import MapActivityList from '../maps/ActivityMap'
import { RootState } from '../../interfaces/store/reducers'

const mapStateToProps = (state: RootState) => ({
  defaultCenter: state.map.defaultCenter,
  fetchedActivities: state.activities.fetchedActivities,
  useMockApi: state.activities.useMockApi,
})

const mapDispatchToProps = {
  fetchActivities,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type ActivitiesProps = ConnectedProps<typeof connector>

const Activities = ({
  defaultCenter,
  fetchedActivities,
  fetchActivities,
  useMockApi,
}: ActivitiesProps) => {
  useEffect(() => {
    if (!length(fetchedActivities)) {
      fetchActivities(useMockApi)
    }
  })
  if (!defaultCenter) return null
  return (
    <div className="flex" style={{ height: '800px' }}>
      <ActivityList />
      <GMaps defaultZoom={12} center={defaultCenter} defaultCenter={defaultCenter}>
        <MapActivityList />
      </GMaps>
    </div>
  )
}

export default connector(Activities)
