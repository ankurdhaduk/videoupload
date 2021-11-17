var amqp = require('amqplib/callback_api');
amqp.connect('amqp://localhost', function (error, connection) { });

amqp.connect('amqp://localhost', function (error, connection) {
    if (error) {
        console.log(error);
    }
    connection.createChannel(function (error1, channel) { });
});

amqp.connect('amqp://localhost', function (error0, connection) {
    if (error0) {
        console.log(error0);;
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            console.log(error1);
        }
        var queue = 'mail';

        var toEmail = ["jignashakotdiya10@gmail.com"]
        channel.assertQueue(queue, {
            durable: false
        });
        for (const email of toEmail) {
            channel.sendToQueue(queue, Buffer.from(email));
            console.log(" [x] Sent %s", email);
        }


        //   setInterval(function() {
        //     var msg = 'Hello world'+count;
        //     channel.assertQueue(queue, {
        //         durable: false
        //     });

        //     channel.sendToQueue(queue, Buffer.from(msg));
        //       console.log(" [x] Sent %s", msg);
        //     });    
        //     }, 1);
    });
});
