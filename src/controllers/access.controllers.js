const { cartDao } = require("../../API/models/cart.models.js");
const { sendMail } = require("../utils/mail.utils.js");

// =================LOGIN====================
async function getLogin(_req, res) {
  return res.status(200).render("pages/access.pages.ejs", {
    title: "Login",
    failed: "",
    partial: "login.partials.ejs",
  });
}
async function postLogin(req, res) {
  return res.status(200).redirect("/main");
}

async function failLogin(_req, res) {
  return res.status(403).render("pages/access.pages.ejs", {
    title: "Login",
    failed: "username or password is not valid!",
    partial: "login.partials.ejs",
  });
}

// ================SIGNUP====================
async function getSignup(_req, res) {
  return res.status(200).render("pages/access.pages.ejs", {
    title: "Signup",
    failed: " ",
    partial: "signup.partials.ejs",
  });
}
async function postSignup(req, res) {
  cartDao.create({ owner: req.user.name });
  const user = 
  `<h1>${req.user.name} is now registered</h1>
   <h2>User data:</h2>
    <ul>
      <li><p>email: ${req.user.email}</p></li>
      <li><p>name: ${req.user.name}</p></li>
      <li><p>age: ${req.user.age}</p></li>
      <li><p>adress: ${req.user.adress}</p></li>
      <li><p>phone: ${req.user.phone}</p></li>
    </ul>`
  sendMail(user);
  return res.status(200).redirect("/login");
}

async function failSignup(_req, res) {
  return res.status(500).render("pages/access.pages.ejs", {
    title: "Signup",
    failed: "something happened, please try again",
    partial: "signup.partials.ejs",
  });
}

// ================LOGOUT====================
async function getLogout(req, res) {
  req.logout({}, (err) => {
    res.send(err);
  });
  res.status(200).redirect("/login");
}

// ================EXPORT====================
module.exports = {
  get: {
    login: getLogin,
    signup: getSignup,
    logout: getLogout,
  },
  post: {
    login: postLogin,
    signup: postSignup,
  },
  fail: {
    login: failLogin,
    signup: failSignup,
  },
};
