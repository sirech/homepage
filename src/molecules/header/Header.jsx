import React from 'react'
import { Helmet } from 'react-helmet'

import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, NavbarBrand } from 'reactstrap'

const Header = () => (
  <header className='mb-4'>
    <Helmet>
      <title>hceris</title>
    </Helmet>
    <Navbar color='faded'>
      <LinkContainer to='/about'>
        <NavbarBrand>Mario Fernandez</NavbarBrand>
      </LinkContainer>
    </Navbar>
  </header>
)

export default Header
