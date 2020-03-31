import Checkbox from './Checkbox'
import React from 'react'

export default { title: 'Styleguide Checkbox Component' }

export const checked = () => (
  <Checkbox checked text="Click to Disable" disabledText="Click to Enable" />
)

export const notChecked = () => <Checkbox text="Click to Disable" disabledText="Click to Enable" />
