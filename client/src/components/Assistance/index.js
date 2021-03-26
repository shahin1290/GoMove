import React from 'react'
import styled from 'styled-components'
import { FaCalculator, FaPhone, FaDollarSign } from 'react-icons/fa'

const TopContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
`

const Title = styled.div`
  font-size: 14px;
  color: #fff;
  margin-top: 20px;
  font-weight: bold;
`

const Description = styled.div`
  font-size: 14px;
  color: #fff;
  margin-top: 15px;
`

const StyledIcon = styled.div`
  color: #fff;
  font-size: 30px;
`

const Assistance = () => {
  return (
    <TopContainer>
      <Wrapper>
        <StyledIcon>
          <FaCalculator />
        </StyledIcon>

        <Title>Free Estimate</Title>
        <Description>
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.
        </Description>
      </Wrapper>
      <Wrapper>
        <StyledIcon>
          <FaPhone />
        </StyledIcon>

        <Title>24/7 Services</Title>
        <Description>
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.
        </Description>
      </Wrapper>
      <Wrapper>
        <StyledIcon>
          <FaDollarSign />
        </StyledIcon>

        <Title>Flat Rate Fees</Title>
        <Description>
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.
        </Description>
      </Wrapper>
    </TopContainer>
  )
}

export default Assistance
