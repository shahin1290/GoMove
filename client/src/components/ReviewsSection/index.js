import { CarouselProvider, Slide, Slider, DotGroup } from 'pure-react-carousel'
import React from 'react'
import { Element } from 'react-scroll'
import styled from 'styled-components'

import 'pure-react-carousel/dist/react-carousel.es.css'

import { ReviewCard } from '../ReviewCard/index'

const SectionContainer = styled.div`
  height: 700px;
  width: 100%;
  background-color: orange;
`

const ReviewsContainer = styled(Element)`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
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
  .carousel__dot--selected {
    background-color: black;
  }
`

const ReviewsSection = function (props) {
  return (
    <SectionContainer>
      <ReviewsContainer>
        <h1>What our client say</h1>
        <StyledCarouselProvider
          naturalSlideWidth={200}
          naturalSlideHeight={50}
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
      </ReviewsContainer>
    </SectionContainer>
  )
}

export default ReviewsSection
