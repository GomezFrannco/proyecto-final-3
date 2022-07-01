const twilio = require('twilio');
require('./dotenv.config.js');

const Client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

module.exports = {
  Client
}