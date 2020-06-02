import { connect, ConnectedProps } from 'react-redux'
import React, { useEffect, useRef } from 'react'
import ActivityList from '../ActivityList'
import { fetchActivities } from '../../store/actions/thunks'
import GMaps from '../maps'
import { GoogleMap } from 'react-google-maps'
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
  const gmap = useRef<GoogleMap>(null)
  if (!defaultCenter) return null
  return (
    <>
      <div className="flex" style={{ height: '800px' }}>
        <ActivityList />
        <GMaps
          forwardedRef={gmap}
          defaultZoom={12}
          center={defaultCenter}
          defaultCenter={defaultCenter}
        >
          <MapActivityList />
        </GMaps>
      </div>
      {/* <button
        className="fr no-underline near-white bg-animate bg-near-white hover-bg-gray inline-flex items-center ma2 tc br2 pa2 pointer bn"
        onClick={() =>
          console.log({
            lat: gmap.current.getCenter().lat(),
            lng: gmap.current.getCenter().lng(),
            zoom: gmap.current.getZoom(),
          })
        }
      >
        <svg
          className="dib w2 h2 br-100"
          height="512pt"
          viewBox="0 0 512 512.00508"
          width="512pt"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m453.335938 512.003906h-394.667969c-32.363281 0-58.66406275-26.304687-58.66406275-58.664062v-309.335938c0-32.363281 26.30078175-58.664062 58.66406275-58.664062h74.667969c8.832031 0 16 7.167968 16 16 0 8.832031-7.167969 16-16 16h-74.667969c-14.699219 0-26.664063 11.964844-26.664063 26.664062v309.335938c0 14.695312 11.964844 26.664062 26.664063 26.664062h394.667969c14.699218 0 26.667968-11.96875 26.667968-26.664062v-181.335938c0-8.832031 7.167969-16 16-16 8.832032 0 16 7.167969 16 16v181.335938c0 32.359375-26.304687 58.664062-58.667968 58.664062zm0 0" />
          <path d="m143.980469 341.0625c-1.171875 0-2.347657-.128906-3.519531-.429688-7.230469-1.683593-12.457032-7.871093-12.457032-15.292968v-32c0-114.6875 93.3125-208 208-208h5.332032v-69.335938c0-6.527344 3.96875-12.394531 10.027343-14.847656 6.035157-2.429688 12.96875-.960938 17.492188 3.753906l138.667969 144c5.972656 6.1875 5.972656 16 0 22.1875l-138.667969 144c-4.523438 4.714844-11.5 6.167969-17.492188 3.753906-6.058593-2.453124-10.027343-8.320312-10.027343-14.847656v-69.332031h-25.34375c-67.113282 0-127.425782 37.289063-157.417969 97.300781-2.753907 5.546875-8.535157 9.089844-14.59375 9.089844zm192.023437-223.722656c-89.601562 0-163.796875 67.304687-174.65625 154.023437 38.78125-43.261719 94.398438-68.691406 154.644532-68.691406h41.34375c8.832031 0 16 7.167969 16 16v45.652344l100.457031-104.320313-100.457031-104.320312v45.65625c0 8.832031-7.167969 16-16 16zm0 0" />
        </svg>
      </button> */}
    </>
  )
}

export default connector(Activities)