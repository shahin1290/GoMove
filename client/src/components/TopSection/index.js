import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../../images/shadow.jpg'
import banner from '../../images/hero2.png'

const BannerImg = styled.img`
  height: 500px;
`

const TopContainer = styled.div`
  width: 100%;
  height: 500px;
  background-image: linear-gradient(
      rgba(189, 195, 199, 0.9),
      rgba(189, 195, 199, 0.9)
    ),
    url(${BackgroundImage});
  background-size: cover;
  background-position: center center;
`

const BannerContainer = styled.div`
  display: flex;
  max-width: 1100px;
  align-items: center;
  margin: 0 auto;
`

const Banner = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  color: white;
`

const SubTitle = styled.div`
  color: white;
`

const ButtonContainer = styled.div`
  display: flex;
`

const Button = styled.button`
  width: 100px;
  height: 40px;
  &:nth-child(1) {
    background-color: blue;
  }
  &:nth-child(2) {
    background-color: orange;
  }
`

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
