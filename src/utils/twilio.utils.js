const { Client } = require('../config/twilio.config.js')

async function sendWP(msg) {
  try {
    const res = await Client.messages.create(msg)
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  sendWP
};
    