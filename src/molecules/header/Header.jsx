import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, NavbarBrand } from 'reactstrap'

const Header = () => (
  <header className='mb-4'>
    <Helmet>
      <title>hceris</title>
    </Helmet>
    <Navbar color='faded'>
      <NavbarBrand>Mario Fernandez</NavbarBrand>
    </Navbar>
  </header>
)

export default Header
