import { connect, ConnectedProps } from 'react-redux'
import { getCookieVariable, getQueryVariable } from '../../utils'
import { stravaAuth } from '../../store/actions/thunks'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const mapStateToProps = state => ({
  useMockApi: state.activities.useMockApi,
})

const mapDispatchToProps = {
  stravaAuth,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type LoginProps = ConnectedProps<typeof connector>

const Login = (props: LoginProps) => {
  const history = useHistory()
  const callback = () => history.push('/activities')
  useEffect(() => {
    if (getCookieVariable('access_token')) {
      callback()
    } else if (window.location.search.indexOf('code') !== -1) {
      props.stravaAuth(getQueryVariable('code'), props.useMockApi, callback)
    }
  })
  return null
}

export default connector(Login)
