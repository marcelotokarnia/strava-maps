import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import ActivityList from './components/ActivityList'
import { connect } from 'react-redux'
import GMaps from './components/maps'
import MapActivityList from './components/maps/ActivityMap'
import Navbar from './components/Navbar'
import ProcessOauth from './components/auth/ProcessOauth'
import React from 'react'
import { RootState } from './interfaces/store/reducers'

const mapStateToProps = (state: RootState) => ({
  defaultCenter: state.map.defaultCenter,
})

const connector = connect(mapStateToProps)

const App = ({ defaultCenter }) => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login">
          <ProcessOauth />
        </Route>
      </Switch>
      {defaultCenter && (
        <div className="flex" style={{ height: '800px' }}>
          <ActivityList />
          <GMaps defaultZoom={12} defaultCenter={defaultCenter}>
            <MapActivityList />
          </GMaps>
        </div>
      )}
    </Router>
  )
}

export default connector(App)
