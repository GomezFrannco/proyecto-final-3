const { Client } = require('../config/twilio.config.js')
const { log } = require('../utils/logs.utils.js')

async function sendWP(msg) {
  try {
    const res = await Client.messages.create(msg)
  } catch (error) {
    log.console(error.message);
    log.file(error.message);
  }
};

module.exports = {
  sendWP
};
    