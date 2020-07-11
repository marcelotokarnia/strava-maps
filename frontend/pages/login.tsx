import { Component, FC, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { NextRouter, withRouter } from 'next/router'
import cookies from 'next-cookies'
import dynamic from 'next/dynamic'
import { stravaAuth } from 'store/actions/thunks'

const mapDispatchToProps = {
  stravaAuth,
}

const connector = connect(null, mapDispatchToProps)

type LoginProps = ConnectedProps<typeof connector>

const Login: FC<LoginProps & { router: NextRouter } & { accessToken: string }> = ({
  router,
  accessToken,
  stravaAuth,
}) => {
  useEffect(() => {
    const code = router?.query?.code as string
    const redirectTo = router?.query?.redirectTo as string
    const callback = () => router.push(redirectTo || '/activities')
    accessToken ? callback() : code && stravaAuth(code, callback)
  })
  return null
}

const DYNOComponent = dynamic(() => Promise.resolve(connector(withRouter(Login))), { ssr: false })

class AddHeaders extends Component<{ accessToken: string }> {
  // UNSAFE_componentDidMount() {
  //   const { router, accessToken, stravaAuth } = this.props
  //   const code = router?.query?.code as string
  //   const redirectTo = router?.query?.redirectTo as string
  //   const callback = () => router.push(redirectTo || '/activities')
  //   accessToken ? callback() : code && stravaAuth(code, callback)
  // }
  static async getInitialProps(ctx) {
    return {
      accessToken: cookies(ctx).access_token || '',
    }
  }
  render() {
    return <DYNOComponent accessToken={this.props.accessToken} />
  }
}

export default DYNOComponent
