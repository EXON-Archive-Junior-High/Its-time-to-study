const nodemailer = require('nodemailer');
const settings = require('./settings.json')

const main = async () => {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: settings.mail_name,
        pass: settings.mail_password,
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"스학공 알리미" <${settings.mail_name}>`,
      to: '2020cca005@suwoncca.org',
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
    });
  
    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  };
  
  main().catch(console.error);