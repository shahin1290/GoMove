import React from 'react'
import SocialIcons from '../SocialIcons/index'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

import {
  AddressSection,
  Container,
  PhoneMailAddress,
  PhoneNumber,
  MailAddress,
  Number,
  Mail
} from './AddressbarStyling'

const Addressbar = () => {
  return (
    <AddressSection>
      <Container>
        <PhoneMailAddress>
          <PhoneNumber>
            <FaPhoneAlt />
            <Number>+ 1800-365-6548</Number>
          </PhoneNumber>
          <MailAddress>
            <HiOutlineMail />
            <Mail>sales@salessoliva.com</Mail>
          </MailAddress>
        </PhoneMailAddress>
        <SocialIcons />
      </Container>
    </AddressSection>
  )
}

export default Addressbar
