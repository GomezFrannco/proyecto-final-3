const { createTransport } = require("nodemailer");
require("./dotenv.config.js");

const transporter = createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: process.env.ADMIN_GMAIL,
    pass: process.env.PASS_ADMIN,
  },
});

module.exports = {
  transporter,
};
