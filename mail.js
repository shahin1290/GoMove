const mailer = require('nodemailer')
const { Quote } = require('./quote_template')
const { Thanks } = require('./thanks_template')

const sendMail = (data) => {
  const emailTo = [
    { email: 's.patowary@yahoo.com', template: Quote(data) },
    { email: data.email, template: Thanks(data) }
  ]

  const smtpTransport = mailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  })

  emailTo.forEach((el) => {
    const mailOptions = {
      from: `"NodeMailer Contact" ${process.env.MAIL_USER}`,
      to: el.email,
      subject: 'GoMove Contact ',
      html: el.template
    }

    smtpTransport.sendMail(mailOptions, (err, response) => {
      if (err) {
        console.log(err)
      } else {
        console.log('success')
      }
      smtpTransport.close()
    })
  })
}

module.exports = { sendMail }
