import React from 'react'
import residentialImage from '../../images/moving.jpg'
import {
  SectionContainer,
  ServiceContainer,
  Wrapper,
  CardContainer,
  TopContainer,
  ServiceThumbnail,
  Caption,
  ContentContainer,
  Text,
  Button
} from './ServiceSectionStyling'

const ServiceSection = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <h1>Our Services __</h1>

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
      </Wrapper>
    </SectionContainer>
  )
}

export default ServiceSection
