import React from 'react'
import styled from 'styled-components'
import { FaAngleDoubleRight, FaLongArrowAltRight } from 'react-icons/fa'
import { SiGooglecalendar } from 'react-icons/si'

const SectionContainer = styled.div`
  height: 500px;
  width: 100%;
  background-color: #f2f2f2;
`
const SectionWrapper = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  h1 {
    text-align: center;
    margin: 50px;
    text-transform: uppercase;
  }
`

const ProcessContainer = styled.div`
  display: flex;
  padding-top: 40px;
`

const CircleContainer = styled.div`
  width: 300px;
  height: 300px;
  margin-left: 10px;
  position: relative;
`

const StyledBigIcon = styled(SiGooglecalendar)`
  font-size: 40px;
  margin-top: 35px;
  margin-left: 35px;
  position: absolute;
`

const StyledIcon = styled(FaAngleDoubleRight)`
  background: #f4a654;
  margin-top: 16px;
  margin-left: 15px;
  color: #fff;
  font-weight: bold;
`

const StyledArrow = styled(FaLongArrowAltRight)`
  font-size: 30px;
  font-weight: bold;
  position: relative;
  top: 40px;
  left: 170px;
`

const Main = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: absolute;
  border: 2px solid #f4a654;
`

const SmallCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f4a654;
  overflow: hidden;
  position: relative;
  top: 25%;
  right: -75%;
`

const ProcessSection = () => {
  return (
    <SectionContainer>
      <SectionWrapper>
        <h1>Our Work Process</h1>
        <ProcessContainer>
          <CircleContainer>
            <Main>
              <StyledBigIcon />
              <SmallCircle>
                <StyledIcon />
              </SmallCircle>
            </Main>
            <StyledArrow />
          </CircleContainer>
          <CircleContainer>
            <Main>
              <StyledBigIcon />
              <SmallCircle>
                <StyledIcon />
              </SmallCircle>
            </Main>
            <StyledArrow />
          </CircleContainer>

          <CircleContainer>
            <Main>
              <StyledBigIcon />
              <SmallCircle>
                <StyledIcon />
              </SmallCircle>
            </Main>
            <StyledArrow />
          </CircleContainer>

          <CircleContainer>
            <Main>
              <StyledBigIcon />
              <SmallCircle>
                <StyledIcon />
              </SmallCircle>
            </Main>
          </CircleContainer>
        </ProcessContainer>
      </SectionWrapper>
    </SectionContainer>
  )
}

export default ProcessSection
