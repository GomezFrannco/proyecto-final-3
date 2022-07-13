const { Cart } = require("../../API/DAO/cartsImpl.dao.js");
const { sendMail } = require("../utils/mail.utils.js");
const Connection = require('../DAO/connection.dao.js');

class AccessControllers {
  static async getLogin(_req, res) {
    return res.status(200).render("pages/access.pages.ejs", {
      title: "Login",
      failed: "",
      partial: "login.partials.ejs",
    });
  }
  static async postLogin(_req, res) {
    return res.status(200).redirect("/main");
  }
  static async failLogin(_req, res) {
    return res.status(403).render("pages/access.pages.ejs", {
      title: "Login",
      failed: "username or password is not valid!",
      partial: "login.partials.ejs",
    });
  }
  static async getSignup(_req, res) {
    return res.status(200).render("pages/access.pages.ejs", {
      title: "Signup",
      failed: " ",
      partial: "signup.partials.ejs",
    });
  }
  static async postSignup(req, res) {
    await Cart.addCart({ owner: req.user.name });
    sendMail(req.user);
    return res.status(200).redirect("/login");
  }
  static async failSignup(_req, res) {
    return res.status(500).render("pages/access.pages.ejs", {
      title: "Signup",
      failed: "something happened, please try again",
      partial: "signup.partials.ejs",
    });
  }
  static async getLogout(req, res) {
    const connection = Connection.getInstance();
    if (connection.status == true) {
      await connection.disconnect()
    }
    await req.logout({}, (err) => {
      res.send(err);
    });
    res.status(200).redirect("/login");
  }
}

module.exports = {
  get: {
    login: AccessControllers.getLogin,
    signup: AccessControllers.getSignup,
    logout: AccessControllers.getLogout,
  },
  post: {
    login: AccessControllers.postLogin,
    signup: AccessControllers.postSignup,
  },
  fail: {
    login: AccessControllers.failLogin,
    signup: AccessControllers.failSignup,
  },
};
