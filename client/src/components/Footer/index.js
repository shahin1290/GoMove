import React from 'react'
import {
  FooterContainer,
  FooterWrap,
  FooterLinkItems,
  FooterLinksWrapper,
  FooterLinksContainer,
  FooterLinkTitle,
  FooterLink,
  Text,
  SubText,
  Address,
  PhoneNumber,
  MailAddress,
  Number,
  Mail
} from './FooterStyling'
import SocialIcons from '../SocialIcons'
import Logo from '../Logo'
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { CgChevronDoubleRight } from 'react-icons/cg'
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <Logo />
              <Text>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </Text>

              <SubText to='/'>
                Read more <CgChevronDoubleRight />
              </SubText>
              <SocialIcons />
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Site map</FooterLinkTitle>
              <FooterLink to='/'>Home</FooterLink>
              <FooterLink to='/'>About Us</FooterLink>
              <FooterLink to='/'>Services</FooterLink>
              <FooterLink to='/'>Free Tools</FooterLink>
              <FooterLink to='/'>Career</FooterLink>
              <FooterLink to='/'>Privacy Policy</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Our Services</FooterLinkTitle>
              <FooterLink to='/'>Services</FooterLink>
              <FooterLink to='/'>Construction</FooterLink>
              <FooterLink to='/'>Renovation</FooterLink>
              <FooterLink to='/'>Architecture Design</FooterLink>
              <FooterLink to='/'>Roofing</FooterLink>
              <FooterLink to='/'>Painting</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Get in Touch</FooterLinkTitle>
              <Address>
                <FaMapMarkerAlt color='#f4a654' />
                <div>
                  110, Lorance Road Sanewadi, Badlapur(W), Thane, Melbourne
                </div>
              </Address>
              <PhoneNumber>
                <FaPhoneAlt color='#f4a654' />
                <Number>+ 1800-365-6548</Number>
              </PhoneNumber>
              <MailAddress>
                <HiOutlineMail color='#f4a654' />
                <Mail>sales@salessoliva.com</Mail>
              </MailAddress>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
