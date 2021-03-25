import React, { useState } from 'react'
import Select from 'react-select'
import axios from 'axios'
import quoteImage from '../../images/quote.png'
import {
  FormHeader,
  FormWrapper,
  GridHalfWidth,
  StyledButton,
  Input,
  Textarea,
  Response,
  Form
} from './QuoteFormStyling'
import { options } from './selectOptions'

const QuoteForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [moveFrom, setMoveFrom] = useState('')
  const [moveTo, setMoveTo] = useState('')
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/sendMail', {
        name,
        email,
        phone,
        moveFrom,
        moveTo,
        message
      })
      setResponse(res.data)
    } catch (error) {
      console.log(error)
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
      {response.map((res) => (
        <Response key={res}>{res}</Response>
      ))}
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
            value={phone}
            placeholder='Phone'
            onChange={(e) => setPhone(e.target.value)}
          />
        </GridHalfWidth>

        <Select
          options={options}
          required
          placeholder='Move From'
          onChange={({ value }) => {
            setMoveFrom(value)
          }}
        />

        <Select
          options={options}
          required
          placeholder='Move To'
          onChange={({ value }) => {
            setMoveTo(value)
          }}
        />

        <GridHalfWidth>
          <Textarea
            value={message}
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
