import { connect, ConnectedProps } from 'react-redux'
import { NextRouter, withRouter } from 'next/router'
import { fetchActivityDetails } from 'store/actions/thunks'
import dynamic from 'next/dynamic'
import GMaps from 'components/maps'
import { Marker } from 'react-google-maps'
import { RootState } from 'interfaces/store/reducers'
import { useEffect } from 'react'

const mapStateToProps = (state: RootState, ownProps: { router: NextRouter }) => {
  const id = ownProps?.router?.query?.id as string
  return {
    id,
    defaultCenter: state.map.defaultCenter,
    activityDetails: state.activities.details?.[id],
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
}: ActivityProps & { router: NextRouter }) => {
  useEffect(() => {
    if (!activityDetails) {
      fetchActivityDetails(id)
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

export default dynamic(() => Promise.resolve(withRouter(connector(Activity))))
