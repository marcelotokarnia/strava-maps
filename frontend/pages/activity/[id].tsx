import { connect, ConnectedProps } from 'react-redux'
import React, { useEffect } from 'react'
import { fetchActivityDetails } from '../../store/actions/thunks'
import GMaps from '../maps'
import { Marker } from 'react-google-maps'
import { RootState } from '../../interfaces/store/reducers'

const mapStateToProps = (state: RootState, ownProps: { match: { params: { id: string } } }) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps
  return {
    id,
    defaultCenter: state.map.defaultCenter,
    activityDetails: state.activities.details?.[id],
    useMockApi: state.activities.useMockApi,
  }
}

const mapDispatchToProps = {
  fetchActivityDetails,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type ActivityProps = ConnectedProps<typeof connector>

const Activity = ({
  id,
  activityDetails,
  defaultCenter,
  fetchActivityDetails,
  useMockApi,
}: ActivityProps) => {
  useEffect(() => {
    if (!activityDetails) {
      fetchActivityDetails(id, useMockApi)
    }
  })
  if (!activityDetails) {
    return null
  }
  return (
    <div className="flex" style={{ height: '800px' }}>
      <GMaps defaultZoom={14} center={defaultCenter} defaultCenter={defaultCenter}>
        <Marker position={activityDetails.startPosition} />
      </GMaps>
    </div>
  )
}

export default connector(Activity)
