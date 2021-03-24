const express = require('express')
require('dotenv').config()

const app = express()
app.use(express.json())

const { sendMail } = require('./mail')

app.post('/api/sendMail', (req, res) => {
  sendMail(req.body)
})

app.listen(3001, () => {
  console.log('listening on 3001')
})
