import { connect, ConnectedProps } from 'react-redux'
import React, { useEffect } from 'react'
import { fetchActivities } from 'store/actions/thunks'
import { getCookieVariable } from 'utils'
import GMaps from 'components/maps'
import { length } from 'ramda'
import MapActivityList from 'components/maps/ActivityMap'
import { RootState } from 'interfaces/store/reducers'

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
const defaultCenter = { lat: +getCookieVariable('lat'), lng: +getCookieVariable('lng') }
const defaultZoom = +getCookieVariable('zoom')

const Activities = ({
  defaultCenter: df,
  fetchedActivities,
  fetchActivities,
  useMockApi,
}: ActivitiesProps) => {
  useEffect(() => {
    if (!length(fetchedActivities)) {
      fetchActivities(useMockApi)
    }
  })
  return (
    <GMaps
      mapTypeId="satellite"
      defaultZoom={defaultZoom || 12}
      center={defaultCenter.lat ? defaultCenter : df}
      defaultCenter={defaultCenter}
      containerElement={<div className="ma2" style={{ height: '1000px' }} />}
    >
      <MapActivityList />
    </GMaps>
  )
}

export default connector(Activities)
