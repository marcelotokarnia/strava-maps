import 'tachyons/css/tachyons.min.css'
import './css/index.css'
import { compose, withStateHandlers } from 'recompose'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import ActivityList from './components/ActivityList'
import GMaps from './components/maps'
import { isEmpty } from 'ramda'
import MapActivityList from './components/maps/ActivityMap'
import Navbar from './components/Navbar'
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
    <Navbar />
    <Switch>
      <Route path="/login">
        <ProcessOauth setActivities={setActivities} />
      </Route>
    </Switch>
    {!isEmpty(activities) && (
      <div className="flex" style={{ height: '800px' }}>
        <ActivityList activities={activities} />
        <GMaps defaultZoom={12} defaultCenter={activities[0].startPosition}>
          <MapActivityList activities={activities} />
        </GMaps>
      </div>
    )}
  </Router>
))

ReactDOM.render(<App />, document.getElementById('root'))
