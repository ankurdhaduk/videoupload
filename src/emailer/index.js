var nodemailer = require('nodemailer');
var cron = require('node-cron');

  
  const taskStart = async () => {
      
//  cron.schedule('* * * * *', () => {
//     console.log('will execute every minute until stopped');
//   }, {
//     scheduled: true,
//     timezone: "America/Sao_Paulo"
//   });
var task = cron.schedule('* * * * *', () =>  {
    i++;
    if(i == 1){
        console.log('stopped task123 ' + i);
        // task.stop();
        task.destroy();
    }
  }, {
    scheduled: false
  });
  var i =0;
  task.start();
  }
const sendEmail = async () => {    
    
var transporter = nodemailer.createTransport({
    // service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: 'XXXXX@gmail.com',
      pass: 'xxx'
    }
  });
  
  var mailOptions = {
    from: 'pranavbrahmbhatt009@gmail.com',
    to: 'ankurdhaduk1988@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
    await transporter.sendMail(mailOptions, console.log);
  };
  
module.exports = taskStart;