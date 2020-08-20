import 'tachyons/css/tachyons.min.css'
import 'css/index.css'
import React, { FC, useEffect } from 'react'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { FRONTEND_HOST } from '../src/constants'
import { meta } from 'api'
import Navbar from 'components/Navbar'
import { wrapper } from 'store'

const DYNONav = dynamic(() => Promise.resolve(Navbar), { ssr: false })

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    meta(false).tags(FRONTEND_HOST) // time to wake up heroku dynos 🦕🛌🦖😴
  }, [])
  return (
    <>
      <DYNONav />
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(WrappedApp)
