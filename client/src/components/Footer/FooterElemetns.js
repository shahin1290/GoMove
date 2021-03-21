import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
  background-color: #101522;
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
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
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
export const SocialIcons = styled.div`
  margin-top: 5px;
  display: flex;
  width: 80%;
  justify-content: space-between;
`
/* export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
` */

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`
