import React from 'react'
import styled from 'styled-components'
import contactHeroImg from '../../images/review-hero.png'

const SectionContainer = styled.div`
  position: relative;
  top: 150px;
  left: 50%;
  height: 300px;
  width: 100%;
  background: #002945;
  transform: translate(-50%, -50%);
  display: flex;
`
const Content = styled.div`
  width: 80%;
  background: #002945;
  border-left: 300px solid #f4a654;
  border-top: 300px solid transparent;
`
const Imagebox = styled.div`
  width: 40%;
  height: 100%;
  background: #f4a654;
  img {
    height: 390px;
    position: relative;
    bottom: 30%;
    left: 50%;
  }
`

const Wrap = styled.div`
  position: relative;
  top: -240px;
  width: 600px;
`
const Title = styled.div`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
`
const Subtitle = styled.div`
  font-size: 1.2rem;
  color: #fff;
  margin: 20px 0;
`
const Contact = styled.div`
  font-size: 1.7rem;
  color: #f4a654;
  font-weight: bold;
`
const ContactSection = function (props) {
  return (
    <SectionContainer>
      <Imagebox>
        <img src={contactHeroImg} alt='contactHeroImg'></img>
      </Imagebox>
      <Content>
        <Wrap>
          <Title>Ready to get moving? grt your free quote</Title>
          <Subtitle>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          </Subtitle>
          <Contact>Call Us: 1800-456-589 </Contact>
        </Wrap>
      </Content>
    </SectionContainer>
  )
}

export default ContactSection
