import React from 'react'
import QuoteForm from '../QuoteForm'
import deliveryImage from '../../images/delivery.jpeg'
import {
  SectionContainer,
  SectionWrapper,
  Profile,
  Point,
  BulletPoint,
  GridWrap
} from './QuoteSectionStyling'
import { FaCheckCircle } from 'react-icons/fa'

const QuoteSection = () => {
  return (
    <SectionContainer>
      <SectionWrapper>
        <Profile>
          <h1>Why Choose Us__</h1>
          <p>
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            consequatur? Quis autem vel eum iure reprehenderit qui eum fugiat
            quo
          </p>
          <img src={deliveryImage} alt='delivery' />
          <p>
            it aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
            ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui
            in ea voluptate velit esse quam nihil molestiae consequatur, vel
            illum qui dolorem eum fugiat quo voluptas nulla pariliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur? Quis autem vel eum iure reprehenderit qui in ea
            voluptate velit esse quam nihil molestiae consequatur, vel illum qui
            dolorem eum fugiat quo voluptas nulla pari voluptas nulla pariliquam
            quaerat
          </p>
          <GridWrap>
            <BulletPoint>
              <FaCheckCircle />
              <Point>24-Hours Emergency Services</Point>
            </BulletPoint>
            <BulletPoint>
              <FaCheckCircle />
              <Point>24-Hours Emergency Services</Point>
            </BulletPoint>
            <BulletPoint>
              <FaCheckCircle />
              <Point>24-Hours Emergency Services</Point>
            </BulletPoint>
            <BulletPoint>
              <FaCheckCircle />
              <Point>24-Hours Emergency Services</Point>
            </BulletPoint>
            <BulletPoint>
              <FaCheckCircle />
              <Point>24-Hours Emergency Services</Point>
            </BulletPoint>
            <BulletPoint>
              <FaCheckCircle />
              <Point>24-Hours Emergency Services</Point>
            </BulletPoint>
          </GridWrap>
        </Profile>
        <QuoteForm />
      </SectionWrapper>
    </SectionContainer>
  )
}

export default QuoteSection
