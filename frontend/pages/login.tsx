import { connect, ConnectedProps } from 'react-redux'
import { FC, useEffect } from 'react'
import { getCookieVariable, getQueryVariable } from 'utils'
import { NextRouter, withRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { stravaAuth } from 'store/actions/thunks'

const mapDispatchToProps = {
  stravaAuth,
}

const connector = connect(null, mapDispatchToProps)

type LoginProps = ConnectedProps<typeof connector>

const Login: FC<LoginProps & { router: NextRouter }> = ({ router, stravaAuth }) => {
  useEffect(() => {
    const accessToken = getCookieVariable('access_token')
    const code = getQueryVariable('code')
    const redirectTo = getQueryVariable('redirectTo')
    const callback = () => router.push(redirectTo || '/activities')
    accessToken ? callback() : code && stravaAuth(code, callback)
  })
  return null
}

const DYNOComponent = dynamic(() => Promise.resolve(connector(withRouter(Login))), { ssr: false })

export default DYNOComponent
