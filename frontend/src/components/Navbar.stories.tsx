import { Navbar } from './Navbar'
import React from 'react'

export default { title: 'Navbar Component' }

const defaultProps = {
  toggleMockApi: 'N/A' as any,
  mockedApi: false,
  hasActivities: false,
}

export const NavbarRaw = () => <Navbar {...defaultProps} />
