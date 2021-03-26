import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
  background-color: #052236;
  height: 400px;
`
export const FooterWrap = styled.div`
  padding: 48px 24px;
  max-width: 1100px;
  margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`
export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`
export const Text = styled.div`
  font-size: 14px;
  padding: 10px 0;
`

export const SubText = styled.div`
  font-size: 15px;
  padding: 10px 0;
  color: #f4a654;
  display: flex;
  align-items: center;
`
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 50px;
  text-align: lef;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`
export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
  text-transform: uppercase;
`

export const FooterLink = styled(Link)`
  font-size: 14px;
  margin-bottom: 0.5rem;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`

export const Address = styled.div`
  font-size: 14px;

  display: flex;
  div {
    padding-left: 10px;
  }
`

export const PhoneNumber = styled.div`
  font-size: 14px;
  display: flex;
  margin: 15px 0;
`

export const MailAddress = styled.div`
  font-size: 14px;
  display: flex;
`

export const Number = styled.div`
  font-size: 14px;
  margin: 0 9px;
`

export const Mail = styled.div`
  font-size: 14px;
  margin: 0 9px;
`
