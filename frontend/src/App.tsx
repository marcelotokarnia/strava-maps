import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Activities from './components/routes/Activities'
import Activity from './components/routes/Activity'
import CloseUpMap from './components/routes/CloseUpMap'
import Colab from './components/routes/Colab'
import Login from './components/routes/Login'
import Navbar from './components/Navbar'
import React from 'react'

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/activities" component={Activities} />
      <Route path="/map" component={CloseUpMap} />
      <Route path="/activity/:id" component={Activity} />
      <Route path="/colab/:id" component={Colab} />
    </Switch>
  </Router>
)

export default App
