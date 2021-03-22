import React from 'react'
import SocialIcons from '../SocialIcons/index'
import styled from 'styled-components'

import { Nav, NavbarContainer } from './AddressbarElements'

const PhoneMailAddress = styled.div`
  display: flex;
`

const PhoneNumber = styled.div`
  font-size: 14px;
`

const MailAddress = styled.div`
  font-size: 14px;
`

const Addressbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <PhoneMailAddress>
            <PhoneNumber>+46761256612</PhoneNumber>
            <MailAddress>shahin.ie@gmail.com</MailAddress>
          </PhoneMailAddress>

          <SocialIcons />
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Addressbar
