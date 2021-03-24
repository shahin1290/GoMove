import React from 'react'
import {
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialGooglePlus,
  TiSocialTwitter
} from 'react-icons/ti'
import styled from 'styled-components'

const IconsContainer = styled.div`
  display: flex;
`
const SocialIconLink = styled.a`
  color: #fff;
  font-size: 18px;
  margin-left: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #fff;
`

const SocialIcons = () => {
  return (
    <IconsContainer>
      <SocialIconLink to='/' target='_blank' arial-label='Facebook'>
        <TiSocialFacebook />
      </SocialIconLink>
      <SocialIconLink to='/' target='_blank' arial-label='Instagram'>
        <TiSocialTwitter />
      </SocialIconLink>
      <SocialIconLink to='/' target='_blank' arial-label='Instagram'>
        <TiSocialGooglePlus />
      </SocialIconLink>
      <SocialIconLink to='/' target='_blank' arial-label='Instagram'>
        <TiSocialLinkedin />
      </SocialIconLink>
    </IconsContainer>
  )
}

export default SocialIcons
