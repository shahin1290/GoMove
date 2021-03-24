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
  margin-left: 10px;
`

const MainText = styled.div`
  color: #000;
  font-weight: bold;
  font-size: 20px;
`

const SubText = styled.div`
  color: #f8a555;
  font-size: 15px;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={logo} />
      <LogoText>
        <MainText>GoMove</MainText>
        <SubText>Packer & Mover</SubText>
      </LogoText>
    </LogoContainer>
  )
}

export default Logo
