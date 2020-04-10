import { Navbar } from './Navbar'
import React from 'react'

export default { title: 'Navbar Component' }

const defaultProps = {
  toggleMockApi: 'N/A' as any,
  mockedApi: true,
  hasActivities: true,
}

export const NavbarRaw = () => <Navbar {...defaultProps} />
