var nodemailer = require('nodemailer');
// var cron = require('node-cron');

// const taskStart = async () => {

//   var task = cron.schedule('* * * * *', () => {
//     i++;
//     if (i == 1) {
//       console.log('stopped task123 ' + i);
//       // task.stop();
//       task.destroy();
//     }
//   }, {
//     scheduled: false
//   });
//   var i = 0;
//   task.start();
// }
const sendEmail = async (email) => {
  var transporter = nodemailer.createTransport({
    // service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: 'thummarchirag21@gmail.com',
      pass: 'Chirag@1991'
    }
  });

  var mailOptions = {
    from: 'thummarchirag21@gmail.com',
    to: email,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  await transporter.sendMail(mailOptions, console.log);
};

module.exports = sendEmail;