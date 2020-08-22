import 'tachyons/css/tachyons.min.css'
import 'css/index.css'
import React, { FC } from 'react'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { GetServerSideProps } from 'next'
import { meta } from 'api'
import Navbar from 'components/Navbar'
import { wrapper } from 'store'

const DYNONav = dynamic(() => Promise.resolve(Navbar), { ssr: false })

export const getServerSideProps: GetServerSideProps = async ({ req: { url } }) => {
  await meta(false).tags(url) // time to wake up heroku dynos 🦕🛌🦖😴
  return {
    props: {},
  }
}

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <DYNONav />
    <Component {...pageProps} />
  </>
)

export default wrapper.withRedux(WrappedApp)
