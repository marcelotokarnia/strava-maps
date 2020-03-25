import { compose, withStateHandlers } from 'recompose'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import ActivityList from './components/maps/strava/ActivityList'
import GMaps from './components/maps'
import { isEmpty } from 'ramda'
import ProcessOauth from './components/auth/ProcessOauth'
import React from 'react'
import ReactDOM from 'react-dom'

const App = compose(
  withStateHandlers(
    () => ({
      activities: [],
    }),
    {
      setActivities: () => activities => ({
        activities,
      }),
    }
  )
)(({ activities, setActivities }) => (
  <Router>
    <Switch>
      <Route path="/login">
        <ProcessOauth setActivities={setActivities} />
      </Route>
      <Route path="/">
        <a href="https://www.strava.com/oauth/authorize?client_id=28106&redirect_uri=https://strava-maps.herokuapp.com/login&response_type=code&scope=activity:read_all">
          LOG IN STRAVA
        </a>
      </Route>
    </Switch>
    {!isEmpty(activities) && (
      <GMaps defaultZoom={12} defaultCenter={activities[0].startPosition}>
        <ActivityList activities={activities} />
      </GMaps>
    )}
  </Router>
))

ReactDOM.render(<App />, document.getElementById('root'))
