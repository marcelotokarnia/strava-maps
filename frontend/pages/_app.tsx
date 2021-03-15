import 'tachyons/css/tachyons.min.css'
import 'css/index.css'
import React, { FC, useEffect } from 'react'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { meta } from 'api'
import Navbar from 'components/Navbar'
import { wrapper } from 'store'

const DYNONav = dynamic(() => Promise.resolve(Navbar), { ssr: false })

const WrappedApp: FC<AppProps> = ({ Component, pageProps, router }) => {
  useEffect(() => {
    meta(false).tags(router.pathname) // time to wake up heroku dynos 🦕🛌🦖😴
  }, [])
  return (
    <>
      {router.pathname !== '/olaisaac' ? <DYNONav /> : null}
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(WrappedApp)
