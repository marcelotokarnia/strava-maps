import { connect, ConnectedProps } from 'react-redux'
import React, { useEffect } from 'react'
import ActivityList from '../ActivityList'
import { fetchColabRoute } from '../../store/actions/thunks'
import GMaps from '../maps'
import MapActivityList from '../maps/ActivityMap'
import { Polyline } from 'react-google-maps'
import { RootState } from '../../interfaces/store/reducers'

const mapStateToProps = (state: RootState, ownProps: any) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps
  return {
    id,
    colabRoute: state.map.colabs[id],
    useMockApi: state.activities.useMockApi,
  }
}

const mapDispatchToProps = {
  fetchColabRoute,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type ActivitiesProps = ConnectedProps<typeof connector>

const Activities = ({ colabRoute, fetchColabRoute, useMockApi, id }: ActivitiesProps) => {
  useEffect(() => {
    if (!colabRoute) {
      fetchColabRoute({ useMockApi, id })
    }
  })
  if (!colabRoute) return null
  const defaultCenter = colabRoute[0]
  return (
    <>
      <div className="flex" style={{ height: '800px' }}>
        <ActivityList />
        <GMaps defaultZoom={10} center={defaultCenter} defaultCenter={defaultCenter}>
          <Polyline
            path={colabRoute}
            options={{
              zIndex: -1,
              strokeColor: '#000000',
              strokeWeight: 4,
            }}
          />
          <MapActivityList />
        </GMaps>
      </div>
    </>
  )
}

export default connector(Activities)
