import React from 'react'
import styled from 'styled-components'
import residentialImage from '../../images/moving.jpg'

const ServiceContainer = styled.div`
  height: 500px;
  background-color: #f2f2f2;
  display: flex;
  max-width: 1100px;
  align-items: center;
  margin: 0 auto;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 300px;
  min-height: 250px;
  background-color: #fff;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.17);
  margin: 0.5rem;
  margin-bottom: 1.3em;
`
const TopContainer = styled.div`
  width: 100%;
`

const ServiceThumbnail = styled.div`
  position: relative;
  width: 285px;
  height: 175px;
  img {
    width: 100%;
    height: 100%;
  }
`

const Caption = styled.div`
  position: absolute;
  width: 285px;
  height: 50px;
  bottom: 0px;
  left: 0px;
  color: #ffffff;
  background: green;
  text-align: center;
  font-weight: bold;
  opacity: 0.7;
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px 14px;
`

/* const Title = styled.div`
  width: 283px;
  height: 50px;
  bottom: 0px;
  left: 0px;
  color: #ffffff;
  background: green;
  text-align: center;
  font-weight: bold;
  opacity: 0.7;
` */

const Text = styled.div`
  color: black;
`

const Button = styled.button`
  width: 100px;
  height: 40px;
`

const ServiceCard = () => {
  return (
    <ServiceContainer>
      <CardContainer>
        <TopContainer>
          <ServiceThumbnail>
            <img src={residentialImage} alt='residentialImage' />
            <Caption>Residential Service</Caption>
          </ServiceThumbnail>

          <ContentContainer>
            <Text>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores
            </Text>
            <Button>Read More</Button>
          </ContentContainer>
        </TopContainer>
      </CardContainer>

      <CardContainer>
        <TopContainer>
          <ServiceThumbnail>
            <img src={residentialImage} alt='residentialImage' />
            <Caption>Residential Service</Caption>
          </ServiceThumbnail>
          <ContentContainer>
            <Text>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores
            </Text>
            <Button>Read More</Button>
          </ContentContainer>
        </TopContainer>
      </CardContainer>

      <CardContainer>
        <TopContainer>
          <ServiceThumbnail>
            <img src={residentialImage} alt='residentialImage' />
            <Caption>Residential Service</Caption>
          </ServiceThumbnail>
          <ContentContainer>
            <Text>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores
            </Text>
            <Button>Read More</Button>
          </ContentContainer>
        </TopContainer>
      </CardContainer>
    </ServiceContainer>
  )
}

export default ServiceCard
