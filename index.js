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
      text: `7학년 남자 : https://meet.google.com/wmf-nune-dyk
        7학년 여자 : https://meet.google.com/djh-atun-dgp
        8학년 남자 : https://meet.google.com/oqh-ggvk-egw
        8학년 여자 : https://meet.google.com/jik-uevk-hpy
        9학년 남자 : https://meet.google.com/ixx-gkxz-rci
        9학년 여자 : https://meet.google.com/sog-ztfg-oha`,
      html: `<h1>스학공 알리미</h1>
        <b>오늘도 열심히 공부해보세요!<b><br>
        7학년 남자 : https://meet.google.com/wmf-nune-dyk<br>
        7학년 여자 : https://meet.google.com/djh-atun-dgp<br>
        8학년 남자 : https://meet.google.com/oqh-ggvk-egw<br>
        8학년 여자 : https://meet.google.com/jik-uevk-hpy<br>
        9학년 남자 : https://meet.google.com/ixx-gkxz-rci<br>
        9학년 여자 : https://meet.google.com/sog-ztfg-oha<br>`,
    })
  
    console.log(`Message sent: ${info.messageId}`)
}

const stop = () => { console.log('[System] Stop') }
const task = () => main().catch(console.error)

const job = new CronJab('0 25 7 MON,WED,THU * *', task, stop, true, 'Asia/Seoul')

