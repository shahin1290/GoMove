import React from 'react'
import { FaBars } from 'react-icons/fa'

import Logo from '../Logo'
import {
  Nav,
  NavLogo,
  NavbarContainer,
  NavItem,
  NavMenu,
  NavLinks,
  MobileIcon
} from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <Logo />
          </NavLogo>

          <MobileIcon>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks to='about'>HOME</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='about'>ABOUT US</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to='about'>SERVICES</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to='about'>PAGES</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to='about'>BLOG</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='about'>CONTACT</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
