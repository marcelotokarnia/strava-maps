import { connect, ConnectedProps } from 'react-redux'
import React, { FC, useEffect, useRef } from 'react'
import ActivityList from 'components/ActivityList'
import dynamic from 'next/dynamic'
import Extrema from 'components/waypoints/Extrema'
import { fetchOlaIsaacV5 } from 'store/actions/thunks'
import GMaps from 'components/maps'
import { GoogleMap } from 'react-google-maps'
import Head from 'next/head'
import { length } from 'ramda'
import MapActivityList from 'components/maps/ActivityMap'
import { RootState } from 'interfaces/store/reducers'

const mapStateToProps = (state: RootState) => ({
  defaultCenter: state.map.defaultCenter,
  fetchedActivities: state.activities.fetchedActivities,
  challengeProgress: state.activities.challengeProgress,
})

const mapDispatchToProps = {
  fetchOlaIsaacV5,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type ActivitiesProps = ConnectedProps<typeof connector>

const Activities: FC<ActivitiesProps> = ({
  defaultCenter,
  fetchedActivities,
  fetchOlaIsaacV5,
  challengeProgress,
}) => {
  useEffect(() => {
    if (!length(fetchedActivities)) {
      fetchOlaIsaacV5()
    }
  }, [])
  const gmap = useRef<GoogleMap>(null)
  return (
    <>
      <div className="flex" style={{ height: '800px' }}>
        <ActivityList hideFilter />
        <GMaps
          forwardedRef={gmap}
          defaultZoom={12}
          center={defaultCenter}
          defaultCenter={defaultCenter}
        >
          <MapActivityList />
          {challengeProgress > 0 && <Extrema shouldShow />}
        </GMaps>
      </div>
    </>
  )
}

const DYNOComponent = dynamic(() => Promise.resolve(connector(Activities)), { ssr: false })

export default () => (
  <>
    <Head>
      <title>Corre Isaacker Corre</title>
      <meta property="og:title" content="Corre Isaacker Corre" />
      <meta property="og:description" content="Isaackers correram bastante na semana 07.22 👏🏻" />
      <meta
        property="og:image"
        content="https://static.wixstatic.com/media/c0fda2_5f9dffa9777c4c5db74d80499cb2d26f%7Emv2.png/v1/fit/w_2500,h_1330,al_c/c0fda2_5f9dffa9777c4c5db74d80499cb2d26f%7Emv2.png"
      />
      <meta property="og:url" content="https://strava.tokks.tech/olaisaac/v5" />
    </Head>
    <DYNOComponent />
  </>
)
