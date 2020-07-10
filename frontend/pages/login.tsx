import { connect, ConnectedProps } from 'react-redux'
import { NextRouter, withRouter } from 'next/router'
import { Component } from 'react'
import cookies from 'next-cookies'
import { stravaAuth } from 'store/actions/thunks'

const mapStateToProps = state => ({
  useMockApi: state.activities.useMockApi,
})

const mapDispatchToProps = {
  stravaAuth,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type LoginProps = ConnectedProps<typeof connector>

class Login extends Component<LoginProps & { router: NextRouter } & { accessToken: string }> {
  static async getInitialProps(ctx) {
    return {
      accessToken: cookies(ctx).access_token || '',
    }
  }
  componentDidMount = () => {
    const { router, accessToken, stravaAuth, useMockApi } = this.props
    const code = router?.query?.code as string
    const redirectTo = router?.query?.redirectTo as string
    const callback = () => router.push(redirectTo || '/activities')
    accessToken ? callback() : code && stravaAuth(code, useMockApi, callback)
  }
  render() {
    return null
  }
}

export default connector(withRouter(Login))
