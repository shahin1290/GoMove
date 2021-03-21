import React from 'react'
import {
  FooterContainer,
  FooterWrap,
  FooterLinkItems,
  FooterLinksWrapper,
  FooterLinksContainer,
  FooterLinkTitle,
  FooterLink,
  SocialIcons,
  SocialIconLink
} from './FooterElemetns'

import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> SITE MAP</FooterLinkTitle>
              <FooterLink to='/signin'>Home</FooterLink>
              <FooterLink to='/signin'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </FooterLink>
              <FooterLink to='/signin'>Read more</FooterLink>

              <SocialIcons>
                <SocialIconLink to='/' target='_blank' arial-label='Facebook'>
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink to='/' target='_blank' arial-label='Instagram'>
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink to='/' target='_blank' arial-label='Instagram'>
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink to='/' target='_blank' arial-label='Instagram'>
                  <FaInstagram />
                </SocialIconLink>
              </SocialIcons>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> SITE MAP</FooterLinkTitle>
              <FooterLink to='/signin'>Home</FooterLink>
              <FooterLink to='/signin'>About Us</FooterLink>
              <FooterLink to='/signin'>Services</FooterLink>
              <FooterLink to='/signin'>Free Tools</FooterLink>
              <FooterLink to='/signin'>Career</FooterLink>
              <FooterLink to='/signin'>Privacy Policy</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> SITE MAP</FooterLinkTitle>
              <FooterLink to='/signin'>Home</FooterLink>
              <FooterLink to='/signin'>About Us</FooterLink>
              <FooterLink to='/signin'>Services</FooterLink>
              <FooterLink to='/signin'>Free Tools</FooterLink>
              <FooterLink to='/signin'>Career</FooterLink>
              <FooterLink to='/signin'>Privacy Policy</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> SITE MAP</FooterLinkTitle>
              <FooterLink to='/signin'>Home</FooterLink>
              <FooterLink to='/signin'>About Us</FooterLink>
              <FooterLink to='/signin'>Services</FooterLink>
              <FooterLink to='/signin'>Free Tools</FooterLink>
              <FooterLink to='/signin'>Career</FooterLink>
              <FooterLink to='/signin'>Privacy Policy</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
