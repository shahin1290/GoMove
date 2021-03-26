import React from 'react'

import {
  SectionContainer,
  SectionWrapper,
  ProcessContainer,
  CircleContainer,
  StyledGooglecalendar,
  StyledFaPersonBooth,
  Wrap,
  Main,
  SmallCircle,
  StyledIcon,
  StyledArrow,
  StyledGoPackage,
  StyledFaTruck
} from './ProcessSectionStyling'

const ProcessSection = () => {
  return (
    <SectionContainer>
      <SectionWrapper>
        <h1>Our Work Process</h1>
        <ProcessContainer>
          <Wrap>
            <CircleContainer>
              <Main>
                <StyledGooglecalendar />
                <SmallCircle>
                  <StyledIcon />
                </SmallCircle>
              </Main>
              <StyledArrow />
            </CircleContainer>
            <div>Book Your Service</div>
          </Wrap>
          <Wrap>
            <CircleContainer>
              <Main>
                <StyledGoPackage />
                <SmallCircle>
                  <StyledIcon />
                </SmallCircle>
              </Main>
              <StyledArrow />
            </CircleContainer>
            <div>Pick Your Good</div>
          </Wrap>
          <Wrap>
            <CircleContainer>
              <Main>
                <StyledFaTruck />
                <SmallCircle>
                  <StyledIcon />
                </SmallCircle>
              </Main>
              <StyledArrow />
            </CircleContainer>
            <div>Safe Loading</div>
          </Wrap>
          <Wrap>
            <CircleContainer>
              <Main>
                <StyledFaPersonBooth />
                <SmallCircle>
                  <StyledIcon />
                </SmallCircle>
              </Main>
            </CircleContainer>
            <div>Safe Delivery</div>
          </Wrap>
        </ProcessContainer>
      </SectionWrapper>
    </SectionContainer>
  )
}

export default ProcessSection
