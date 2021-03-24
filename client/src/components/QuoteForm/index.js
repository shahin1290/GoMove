import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import quoteImage from '../../images/quote.png'

const FormHeader = styled.div`
  box-shadow: 0 0.3px 0 #fff;
  height: 100px;
  display: flex;
  h1 {
    color: #fff;
  }
  img {
    width: 140px;
    height: 140px;
    margin-top: -30px;
    margin-left: -48px;
  }
`
const FormWrapper = styled.div`
  background: #002441;
  width: 30%;
`
const Form = styled.form`
  width: 290px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 20px 0;
`
const GridHalfWidth = styled.div`
  grid-column: span 2;
`
const StyledButton = styled.button`
  background: #f4a654;
  border: 0;
  color: #fff;
  padding: 0.5em;
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
  padding: 0.5em;
  width: 100%;
`
const Textarea = styled.textarea`
  padding: 1em;
  width: 100%;
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
    <FormWrapper>
      {' '}
      <FormHeader>
        <img src={quoteImage} alt='quote' />
        <h1>Get a quote</h1>
      </FormHeader>
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
            placeholder='Phone'
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
            placeholder='Message'
            rows='4'
            onChange={(e) => setMessage(e.target.value)}
          ></Textarea>
        </GridHalfWidth>

        <GridHalfWidth>
          <StyledButton type='submit'>Submit</StyledButton>
        </GridHalfWidth>
      </Form>
    </FormWrapper>
  )
}

export default QuoteForm
