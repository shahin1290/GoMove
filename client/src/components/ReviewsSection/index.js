import { CarouselProvider, Slide, Slider, DotGroup } from 'pure-react-carousel'
import React from 'react'
import { Element } from 'react-scroll'
import styled from 'styled-components'
import reviewHeroImg from '../../images/review-hero.png'

import 'pure-react-carousel/dist/react-carousel.es.css'

import { ReviewCard } from '../ReviewCard/index'
import Assistance from '../Assistance'

const SectionContainer = styled.div`
  height: 557px;
  width: 100%;
  background-color: #f8a555;
`

const ReviewsContainer = styled(Element)`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 70px;
`

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 500px;
`

const StyledDotGroup = styled(DotGroup)`
  display: flex;
  justify-content: flex-end;
  button {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: white;
    border: none;
    outline: none;
    &:not(:last-of-type) {
      margin-right: 3px;
    }
  }
  & .carousel__dot--selected {
    background-color: black;
  }
`

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 50px;
  }
`

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
`

const ReviewsSection = function (props) {
  return (
    <SectionContainer>
      <ReviewsContainer>
        <LeftSection>
          <h1>What our client say __</h1>
          <img src={reviewHeroImg} alt='reviewHeroImage' />
        </LeftSection>

        <RightSection>
          <StyledCarouselProvider
            naturalSlideWidth={200}
            naturalSlideHeight={66}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0}>
                <ReviewCard />
              </Slide>
              <Slide index={1}>
                <ReviewCard />
              </Slide>

              <Slide index={2}>
                <ReviewCard />
              </Slide>
            </Slider>

            <StyledDotGroup />
          </StyledCarouselProvider>

          <Assistance />
        </RightSection>
      </ReviewsContainer>
    </SectionContainer>
  )
}

export default ReviewsSection
