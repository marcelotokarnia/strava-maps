import { connect, ConnectedProps } from 'react-redux'
import { FC, useEffect } from 'react'
import { getCookieVariable, getQueryVariable } from 'utils'
import { stravaAuth } from 'store/actions/thunks'
import { useRouter } from 'next/router'

const mapStateToProps = state => ({
  useMockApi: state.activities.useMockApi,
})

const mapDispatchToProps = {
  stravaAuth,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type LoginProps = ConnectedProps<typeof connector>

const Login: FC<LoginProps> = props => {
  const router = useRouter()
  useEffect(() => {
    const code = getQueryVariable('code')
    const accessToken = getCookieVariable('access_token')
    const redirectTo = getQueryVariable('redirectTo')
    const callback = () => router.push(redirectTo || '/activities')
    accessToken ? callback() : code && props.stravaAuth(code, props.useMockApi, callback)
  })
  return null
}

export default connector(Login)
