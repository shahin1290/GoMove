const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

const { sendMail } = require('./mail')

app.post('/api/sendMail', (req, res) => {
  const { name, email } = req.body

  console.log(name, email)

  sendMail(email, name, 'hello')
})

app.listen(3001, () => {
  console.log('listening on 3001')
})
