import React from 'react'
import styled from 'styled-components'
import { FaFunnelDollar } from 'react-icons/fa'

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
`

const Description = styled.div`
  font-size: 14px;
  color: #fff;
  margin-top: 15px;
`

const Assistance = () => {
  return (
    <TopContainer>
      <Wrapper>
        <FaFunnelDollar />
        <Title>Free Estimate</Title>
        <Description>
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. 
        </Description>
      </Wrapper>
      <Wrapper>
        <FaFunnelDollar />
        <Title>Free Estimate</Title>
        <Description>
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. 
        </Description>
      </Wrapper>
      <Wrapper>
        <FaFunnelDollar />
        <Title>Free Estimate</Title>
        <Description>
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. 
        </Description>
      </Wrapper>
    </TopContainer>
  )
}

export default Assistance
