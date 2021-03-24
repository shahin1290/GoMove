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
const Title = styled.div`
  color: #fff;
`
const Response = styled.div`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`
const QuoteForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [moveFrom, setMoveFrom] = useState('')
  const [moveTo, setMoveTo] = useState('')
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      axios.post('/api/sendMail', {
        name,
        email,
        phone,
        moveFrom,
        moveTo,
        message
      })
      setResponse('Successfully sent')
    } catch (error) {
      setResponse('Something went wrong')
    }
  }
  return (
    <FormContainer>
      <Title>Get a Quote</Title>
      {message ? <Response>{response}</Response> : null}
      <Form onSubmit={handleSubmit}>
        <GridHalfWidth>
          <Input
            required
            value={name}
            type='text'
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
          />
        </GridHalfWidth>

        <GridHalfWidth>
          <Input
            required
            value={email}
            type='email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </GridHalfWidth>

        <GridHalfWidth>
          <Input
            required
            type='text'
            placeholder='phone'
            onChange={(e) => setPhone(e.target.value)}
          />
        </GridHalfWidth>

        <Input
          required
          type='text'
          placeholder='Move From'
          onChange={(e) => setMoveFrom(e.target.value)}
        />

        <Input
          required
          type='text'
          placeholder='Move To'
          onChange={(e) => setMoveTo(e.target.value)}
        />

        <GridHalfWidth>
          <Textarea
            required
            placeholder='message'
            rows='5'
            onChange={(e) => setMessage(e.target.value)}
          ></Textarea>
        </GridHalfWidth>

        <GridHalfWidth>
          <StyledButton type='submit'>Submit</StyledButton>
        </GridHalfWidth>
      </Form>
    </FormContainer>
  )
}

export default QuoteForm
