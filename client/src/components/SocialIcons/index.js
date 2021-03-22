import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import styled from 'styled-components'

const IconsContainer = styled.div`
  margin-top: 5px;
  display: flex;
  width: 80%;
  justify-content: space-between;
`
const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`

const SocialIcons = () => {
  return (
    <IconsContainer>
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
    </IconsContainer>
  )
}

export default SocialIcons
