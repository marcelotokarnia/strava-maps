import { connect, ConnectedProps } from 'react-redux'
import React, { useEffect } from 'react'
import { fetchActivities } from 'store/actions/thunks'
import GMaps from 'components/maps'
import { length } from 'ramda'
import MapActivityList from 'components/maps/ActivityMap'
import { RootState } from 'interfaces/store/reducers'

const mapStateToProps = (state: RootState) => ({
  defaultCenter: state.map.defaultCenter,
  fetchedActivities: state.activities.fetchedActivities,
})

const mapDispatchToProps = {
  fetchActivities,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type ActivitiesProps = ConnectedProps<typeof connector>
// const defaultCenter = { lat: +getCookieVariable('lat'), lng: +getCookieVariable('lng') }
// const defaultZoom = +getCookieVariable('zoom')

const Activities = ({ defaultCenter: df, fetchedActivities, fetchActivities }: ActivitiesProps) => {
  useEffect(() => {
    if (!length(fetchedActivities)) {
      fetchActivities()
    }
  })
  return (
    <GMaps
      mapTypeId="satellite"
      defaultZoom={12}
      center={df}
      defaultCenter={df}
      containerElement={<div className="ma2" style={{ height: '1000px' }} />}
    >
      <MapActivityList />
    </GMaps>
  )
}

export default connector(Activities)
