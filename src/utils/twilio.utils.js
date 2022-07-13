const { Client } = require('../config/twilio.config.js')
const { log } = require('../utils/logs.utils.js')
require('../config/dotenv.config.js')

async function sendWP(order) {
  try {
    const msg = {
      body: order,
      from: process.env.TWILIO_WP,
      to: `whatsapp:${process.env.ADMIN_PHONE}`,
    }
    const res = await Client.messages.create(msg)
  } catch (error) {
    log.console(error.message);
    log.file(error.message);
  }
};

module.exports = {
  sendWP
};
    