import styled from 'styled-components'
import BackgroundImage from '../../images/shadow.jpg'

export const BannerImg = styled.img`
  height: 600px;
`
export const TopContainer = styled.div`
  width: 100%;
  height: 600px;
  background-image: linear-gradient(
      rgba(189, 195, 199, 0.9),
      rgba(189, 195, 199, 0.9)
    ),
    url(${BackgroundImage});
  background-size: cover;
  background-position: center center;
`

export const BannerContainer = styled.div`
  display: flex;
  max-width: 1100px;
  align-items: center;
  margin: 0 auto;

`

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`

export const Title = styled.div`
  color: white;
  font-size: 50px;
  font-weight: bold;
`

export const SubTitle = styled.div`
  color: white;
  margin: 30px 0;
`

export const ButtonContainer = styled.div`
  display: flex;
`

export const Button = styled.button`
  width: 120px;
  height: 40px;
  border: 0;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;

  &:nth-child(1) {
    background-color: #002441;
    margin-right: 20px;
  }
  &:nth-child(2) {
    background-color: #f4a654;
  }
`
