import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import Logo from '../Logo'
import {
  Nav,
  NavLogo,
  NavbarContainer,
  NavItem,
  NavMenu,
  NavLinks
} from './NavbarStyling'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <Logo />
          </NavLogo>

          <NavMenu>
            <NavItem>
              <NavLinks to='about'>
                home <RiArrowDownSLine />
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='about'>
                about us <RiArrowDownSLine />
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to='about'>
                services
                <RiArrowDownSLine />
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to='about'>
                pages
                <RiArrowDownSLine />
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to='about'>
                blog
                <RiArrowDownSLine />
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='about'>
                contact
                <RiArrowDownSLine />
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
