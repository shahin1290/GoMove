import React from 'react'
import banner from '../../images/hero2.png'

import {
  BannerImg,
  TopContainer,
  BannerContainer,
  Banner,
  Title,
  SubTitle,
  ButtonContainer,
  Button
} from './FeatureStyling'

const TopSection = () => {
  return (
    <TopContainer>
      <BannerContainer>
        <Banner>
          <Title>We Provide Best Moving Service</Title>
          <SubTitle>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti
          </SubTitle>
          <ButtonContainer>
            <Button>Our Services</Button>
            <Button>Learn More</Button>
          </ButtonContainer>
        </Banner>
        <BannerImg src={banner} />
      </BannerContainer>
    </TopContainer>
  )
}

export default TopSection
