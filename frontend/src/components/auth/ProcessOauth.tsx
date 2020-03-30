import { getCookieVariable, getQueryVariable } from '../../utils'
import { connect } from 'react-redux'
import { fetchActivities } from '../../store/actions'
import { length } from 'ramda'
import { ReduxActivity } from '../../interfaces/store/reducers'
import { useEffect } from 'react'

const mapStateToProps = state => ({
  useMockApi: state.activities.useMockApi,
  activitiesList: state.activities.activities,
})

const mapDispatchToProps = {
  fetchActivities,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type ProcessOauthProps = {
  fetchActivities: (code: string, useMockApi: boolean) => any
  useMockApi: boolean
  activitiesList: Array<ReduxActivity>
}

const ProcessOauth = (props: ProcessOauthProps) => {
  useEffect(() => {
    if (!length(props.activitiesList)) {
      if (getCookieVariable('access_token')) {
        props.fetchActivities('', props.useMockApi)
      } else if (window.location.search.indexOf('code') !== -1) {
        props.fetchActivities(getQueryVariable('code'), props.useMockApi)
      }
    }
  })
  return null
}

export default connector(ProcessOauth)
