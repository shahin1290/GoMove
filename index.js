const express = require('express')
require('dotenv').config()
const yup = require('yup')

const app = express()
app.use(express.json())

const { sendMail } = require('./mail')

const inputSchema = yup.object().shape({
  name: yup.string().min(2).max(30).lowercase().trim().required(),
  email: yup.string().lowercase().trim().email().required(),
  phone: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'phone number is not valid'
    ),
  message: yup.string().min(10).max(30).lowercase().trim().required(),
  moveFrom: yup.string().min(3).max(30).lowercase().trim().required(),
  moveTo: yup.string().min(3).max(30).lowercase().trim().required()
})

app.post('/api/sendMail', async (req, res) => {
  try {
    const normalizedInput = await inputSchema.validate(req.body, {
      abortEarly: false
    })
    sendMail(normalizedInput)
    res.send(['SUCCESSFULLY SENT REQUEST'])
  } catch (err) {
    const errors = []
    err.inner.forEach((e) => {
      errors.push(e.message)
    })
    res.send(errors)
  }
})

app.listen(3001, () => {
  console.log('listening on 3001')
})
