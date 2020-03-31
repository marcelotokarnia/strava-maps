import 'tachyons/css/tachyons.min.css'
import '../src/css/index.css'
import { addDecorator } from '@storybook/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

addDecorator(storyFn => <BrowserRouter>{storyFn()}</BrowserRouter>)
