const mailer = require('nodemailer')
const { Hello } = require('./hello_template')
const { Thanks } = require('./thanks_template')

const getMailData = (to, name, template) => {
  let data = null
  switch (template) {
    case 'hello':
      data = {
        from: 'Md Shahin Patowary <shahinkona01@gmail.com>',
        to,
        subject: `Hello ${name}`,
        html: Hello()
      }
      break

    case 'thanks':
      data = {
        from: 'Md Shahin Patowary <shahinkona01@gmail.com>',
        to,
        subject: `Hello ${name}`,
        html: Thanks()
      }
      break
    default:
      data
  }
  return data
}

const sendMail = (to, name, type) => {
  const smtpTransport = mailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shahinkona01@gmail.com',
      pass: 'shahinkona01'
    }
  })

  const mail = getMailData(to, name, type)

  smtpTransport.sendMail(mail, function (err, response) {
    if (err) {
      console.log(err)
    } else {
      console.log('success')
    }
    smtpTransport.close()
  })
}

module.exports = { sendMail }
