import { connect, ConnectedProps } from 'react-redux'
import { NextRouter, withRouter } from 'next/router'
import ActivityList from 'components/ActivityList'
import { fetchColabRoute } from 'store/actions/thunks'
import GMaps from 'components/maps'
import MapActivityList from 'components/maps/ActivityMap'
import { Polyline } from 'react-google-maps'
import { RootState } from 'interfaces/store/reducers'
import { useEffect } from 'react'

const mapStateToProps = (state: RootState, ownProps: { router: NextRouter }) => {
  const id = ownProps?.router?.query?.id as string
  return {
    id,
    colabRoute: state.map.colabs[id],
  }
}

const mapDispatchToProps = {
  fetchColabRoute,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type ActivitiesProps = ConnectedProps<typeof connector>

const Activities = ({
  colabRoute,
  fetchColabRoute,
  id,
}: ActivitiesProps & { router: NextRouter }) => {
  useEffect(() => {
    if (!colabRoute) {
      fetchColabRoute({ id })
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

export default connector(withRouter(Activities))
