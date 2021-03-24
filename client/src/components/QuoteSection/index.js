import React from 'react'
import styled from 'styled-components'
import QuoteForm from '../QuoteForm'
import deliveryImage from '../../images/delivery.jpeg'

const SectionContainer = styled.div`
  height: 500px;
  width: 100%;
`

const SectionWrapper = styled.div`
  display: flex;
  max-width: 1100px;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 40px;
`

const Profile = styled.div`
  width: 67%;
  h1 {
    margin-bottom: 20px;
  }
  img {
    width: 180px;
    height: 160px;
    float: left;
    margin: 10px 20px 20px 0;
  }
  p {
    margin-bottom: 20px;
  }
`

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
          <div>
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
            dolorem eum fugiat quo voluptas nulla pari voluptas nulla pariliquam quaerat
          </div>
        </Profile>
        <QuoteForm />
      </SectionWrapper>
    </SectionContainer>
  )
}

export default QuoteSection
