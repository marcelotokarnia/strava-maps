import 'tachyons/css/tachyons.min.css'
import 'css/index.css'
import React, { FC } from 'react'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Navbar from 'components/Navbar'
import { wrapper } from 'store'

const DYNONav = dynamic(() => Promise.resolve(Navbar), { ssr: false })

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <DYNONav />
    <Component {...pageProps} />
  </>
)

export default wrapper.withRedux(WrappedApp)
