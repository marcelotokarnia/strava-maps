import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Activities from './components/routes/Activities'
import Activity from './components/routes/Activity'
import Login from './components/routes/Login'
import Navbar from './components/Navbar'
import React from 'react'

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/activities">
        <Activities />
      </Route>
      <Route path="/activity/:id">
        <Activity />
      </Route>
    </Switch>
  </Router>
)

export default App
