#!/usr/bin/env node

var amqp = require('amqplib/callback_api');
const sendMail = require('./src/emailer/index')
var queue = 'mail'


amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    channel.assertQueue(queue, {
      durable: false
    });

    channel.consume(queue, function(msg) {
        sendMail(msg)
      }, {
          noAck: true
        });
  });
});
