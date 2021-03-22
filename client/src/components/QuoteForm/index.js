import React from 'react'
import styled, { css } from 'styled-components'

const FormContainer = styled.div`
  background: black;
  width: 25%;
`

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`
const GridHalfWidth = styled.div`
  grid-column: span 2;
`

const StyledButton = styled.button`
  background: #e6343b;
  border: 0;
  color: #fff;
  padding: 1em;
  text-transform: uppercase;
  width: 100%;

  &:hover,
  &:focus {
    background: #b8161f;
    color: #fff;
    outline: 0;
    transition: background-color 2s ease-out;
  }
`

const Input = styled.input`
  border: 1px solid #e6343b;
  padding: 1em;
  width: 100%;
`

const Label = styled.label`
  display: block;
`

const Textarea = styled.textarea`
  border: 1px solid #e6343b;
  padding: 1em;
  width: 100%;
`
const Title = styled.label`
  color: #fff;
`

const QuoteForm = () => {
  return (
    <FormContainer>
      <Title>Get a Quote</Title>
      <Form>
        <GridHalfWidth>
          <Input type='email' placeholder='email' />
        </GridHalfWidth>

        <GridHalfWidth>
          <Input type='email' placeholder='email' />
        </GridHalfWidth>

        <Input type='text' placeholder='name' />

        <Input type='text' placeholder='company' />

        <GridHalfWidth>
          <Textarea placeholder='message' rows='5'></Textarea>{' '}
        </GridHalfWidth>

        <GridHalfWidth>
          <StyledButton>Submit</StyledButton>
        </GridHalfWidth>
      </Form>
    </FormContainer>
  )
}

export default QuoteForm
