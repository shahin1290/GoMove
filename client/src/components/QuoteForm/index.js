import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const FormContainer = styled.div`
  background: black;
  width: 30%;
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
  background: #f4a654;
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

const Textarea = styled.textarea`
  border: 1px solid #e6343b;
  padding: 1em;
  width: 100%;
`
const Title = styled.label`
  color: #fff;
`

const QuoteForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleClick = (e) => {
    e.preventDefault()

    if (e.target.id === 'name') {
      setName(e.target.value)
    }

    if (e.target.id === 'email') {
      setEmail(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const dataToSubmit = {
      name,
      email
    }

    axios.post('/api/sendMail', dataToSubmit)
  }
  return (
    <FormContainer>
      <Title>Get a Quote</Title>
      <Form onSubmit={handleSubmit}>
        <GridHalfWidth>
          <Input
            id='name'
            type='text'
            placeholder='Name'
            onChange={handleClick}
          />
        </GridHalfWidth>

        <GridHalfWidth>
          <Input
            id='email'
            type='email'
            placeholder='Email'
            onChange={handleClick}
          />
        </GridHalfWidth>

        <GridHalfWidth>
          <Input type='text' placeholder='phone' />
        </GridHalfWidth>

        <Input type='text' placeholder='Move From' />

        <Input type='text' placeholder='Move To' />

        <GridHalfWidth>
          <Textarea placeholder='message' rows='5'></Textarea>{' '}
        </GridHalfWidth>

        <GridHalfWidth>
          <StyledButton onClick={handleSubmit}>Submit</StyledButton>
        </GridHalfWidth>
      </Form>
    </FormContainer>
  )
}

export default QuoteForm
