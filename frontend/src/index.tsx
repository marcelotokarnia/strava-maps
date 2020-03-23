import { compose, withProps } from 'recompose'
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps'
import activities from './fixtures/stravaAthleteActivities'
import ActivityList from './components/strava/ActivityList'
import React from 'react'
import ReactDOM from 'react-dom'

const App = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(() => (
  <>
    <GoogleMap
      defaultZoom={7}
      defaultCenter={{
        lat: activities[0].start_latlng[0],
        lng: activities[0].start_latlng[1],
      }}
    >
      <ActivityList activities={activities} />
    </GoogleMap>
    <a href="https://www.strava.com/oauth/authorize?client_id=28106&redirect_uri=https://webhook.site/24b3972e-c02d-4e15-8eea-1cedb1eecf3e/strava-login&response_type=code&scope=activity:read_all">
      LOG IN STRAVA
    </a>
  </>
))

ReactDOM.render(<App />, document.getElementById('root'))
