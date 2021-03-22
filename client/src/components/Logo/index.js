import React from 'react'
import styled from 'styled-components'
import logo from '../../images/logo.png'

const LogoImg = styled.img`
  width: 4rem;
  height: 4rem;
`

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
`

const MainText = styled.div`
  color: red;
`

const SubText = styled.div`
  color: blue;
`

const LogoContainer = styled.div`
  display: flex;
`

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={logo} />
      <LogoText>
        <MainText>Go MOve</MainText>
        <SubText>Picker & Mover</SubText>
      </LogoText>
    </LogoContainer>
  )
}

export default Logo
