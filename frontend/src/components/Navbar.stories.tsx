import { Navbar } from './Navbar'
import React from 'react'

export default { title: 'Navbar Component' }

const defaultProps = {
  toggleMockApi: 'N/A' as any,
  mockedApi: false,
  hasActivities: false,
  tick: 1,
}

export const NavbarRaw = () => <Navbar {...defaultProps} />
