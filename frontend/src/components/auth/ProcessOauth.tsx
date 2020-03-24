import API, { strava } from '../../api'
import { drop, pathOr, pipe, split } from 'ramda'
import React, { Component } from 'react'
import { getVariableFromStringPairs } from '../../utils'

const getQueryVariable = (variable: string): string =>
  pipe<Window, string, string, Array<string>, string>(
    pathOr('', ['location', 'search']),
    drop(1),
    split('&'),
    getVariableFromStringPairs(variable)
  )(window)

export default class ProcessOauth extends Component {
  async componentDidMount() {
    if (window.location.search.indexOf('code') !== -1) {
      const code = getQueryVariable('code')
      const { access_token } = (await API.strava.auth({ body: { code } })).data()
      window.localStorage.setItem('access_token', access_token)
      await strava.getActivities()
    }
  }
}
