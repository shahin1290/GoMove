import React from 'react'
import styled from 'styled-components'
import Accordion from '../Accordion'
import ReactPlayer from 'react-player'

const SectionContainer = styled.div`
  height: 700px;
  width: 100%;
`
const SectionWrapper = styled.div`
  display: flex;
  max-width: 1100px;
  justify-content: space-between;
  margin: 0 auto;
`
const Title = styled.h1`
  text-transform: uppercase;
  margin: 50px 0;
`

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const FaqSection = () => {
  return (
    <SectionContainer>
      <SectionWrapper>
        <VideoContainer>
          <Title>Watch video __</Title>
          <ReactPlayer
            width='450px'
            height='310px'
            controls
            url='https://www.youtube.com/watch?v=kUxlZMIXLXQ'
          />
        </VideoContainer>
        <FAQContainer>
          <Title>Faq Question __</Title>
          <Accordion />
        </FAQContainer>
      </SectionWrapper>
    </SectionContainer>
  )
}

export default FaqSection
