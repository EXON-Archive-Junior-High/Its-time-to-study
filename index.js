const nodemailer = require('nodemailer');
const settings = require('./settings.json')
const CronJab = require('cron').CronJob

const main = async () => {
    console.log('[System] Sending mail...')
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: settings.from.name,
        pass: settings.from.password,
      },
    })
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"스학공 알리미" <${settings.mail_name}>`,
      to: settings.to,
      subject: '스스로 학습하자!',
      html: settings.content,
    })
  
    console.log(`[System] Message sent: ${info.messageId}`)
}

const stop = () => console.log('[System] Stop')
const task = () => main().catch(console.error)

const job = new CronJab('0 25 7 MON,WED,THU * *', task, stop, true, 'Asia/Seoul')

