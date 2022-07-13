const { transporter } = require("../config/nodemailer.config.js");

async function sendMail(user) {
  const msg = `<h1>${user.name} is now registered</h1>
  <h2>User data:</h2>
   <ul>
     <li><p>email: ${user.email}</p></li>
     <li><p>name: ${user.name}</p></li>
     <li><p>age: ${user.age}</p></li>
     <li><p>adress: ${user.adress}</p></li>
     <li><p>phone: ${user.phone}</p></li>
   </ul>`
  const mailOptions = {
    from: process.env.ADMIN_GMAIL,
    to: process.env.ADMIN_GMAIL,
    subject: "New registration! 🎉🥳",
    html: msg,
  };
  return await transporter.sendMail(mailOptions);
}

module.exports = {
  sendMail,
};
