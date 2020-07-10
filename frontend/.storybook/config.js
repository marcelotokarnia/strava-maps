import 'tachyons/css/tachyons.min.css'
import 'css/index.css'
import { addDecorator } from '@storybook/react'
import Router from 'next/router'
Router.router = {
  push: () => {},
  prefetch: () => new Promise((resolve, reject) => {}),
}

addDecorator(withNextRouter({}))
