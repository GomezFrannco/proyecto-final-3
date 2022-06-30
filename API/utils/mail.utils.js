const { transporter } = require('../../src/config/nodemailer.config.js');

async function sendMail(msg, user) {
  const mailOptions = {
    from: process.env.ADMIN_GMAIL,
    to: process.env.ADMIN_GMAIL,
    subject: `New purchase from: ${user}!`,
    html: msg,
  };
  return await transporter.sendMail(mailOptions);
}

module.exports = {
  sendMail,
};
