const mailer = require('nodemailer')
const { Quote } = require('./quote_template')

const sendMail = (data) => {
  const smtpTransport = mailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  })

  const mailOptions = {
    from: `"NodeMailer Contact" ${process.env.MAIL_USER}`,
    to: 's.patowary@yahoo.com',
    subject: 'GoMove Contact Request',
    html: Quote(data)
  }

  smtpTransport.sendMail(mailOptions, (err, response) => {
    if (err) {
      console.log(err)
    } else {
      console.log('success')
    }
    smtpTransport.close()
  })
}

module.exports = { sendMail }
