const { transporter } = require("../config/nodemailer.config.js");

async function sendMail(msg) {
  const mailOptions = {
    from: process.env.ADMIN_GMAIL,
    to: process.env.ADMIN_GMAIL,
    subject: "New registration!",
    html: msg,
  };
  return await transporter.sendMail(mailOptions);
}

module.exports = {
  sendMail,
};
