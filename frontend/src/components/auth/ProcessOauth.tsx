import { drop, pathOr, pipe, split } from 'ramda'
import { connect } from 'react-redux'
import { fetchActivities } from '../../store/actions'
import { getVariableFromStringPairs } from '../../utils'
import { useEffect } from 'react'

const mapDispatchToProps = {
  fetchActivities,
}

const connector = connect(null, mapDispatchToProps)

const getQueryVariable = (variable: string): string =>
  pipe<Window, string, string, Array<string>, string>(
    pathOr('', ['location', 'search']),
    drop(1),
    split('&'),
    getVariableFromStringPairs(variable)
  )(window)

type ProcessOauthProps = {
  fetchActivities: (code: string) => any
}

const ProcessOauth = (props: ProcessOauthProps) => {
  useEffect(() => {
    if (window.location.search.indexOf('code') !== -1) {
      props.fetchActivities(getQueryVariable('code'))
    }
  })
  return null
}

export default connector(ProcessOauth)
