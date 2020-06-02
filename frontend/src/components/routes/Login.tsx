import { connect, ConnectedProps } from 'react-redux'
import { FC, useEffect } from 'react'
import { getCookieVariable, getQueryVariable } from '../../utils'
import { stravaAuth } from '../../store/actions/thunks'
import { useHistory } from 'react-router-dom'

const mapStateToProps = state => ({
  useMockApi: state.activities.useMockApi,
})

const mapDispatchToProps = {
  stravaAuth,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type LoginProps = ConnectedProps<typeof connector>

const redirectTo = getQueryVariable('redirectTo')

const accessToken = getCookieVariable('access_token')

const code = getQueryVariable('code')

const Login: FC<LoginProps> = props => {
  const history = useHistory()
  useEffect(() => {
    const callback = () => history.push(redirectTo || '/activities')
    accessToken ? callback() : code && props.stravaAuth(code, props.useMockApi, callback)
  })
  return null
}

export default connector(Login)