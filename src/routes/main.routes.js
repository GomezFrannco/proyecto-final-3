const express = require("express");
const { checkAuth } = require("../middlewares/isAuth.middlewares.js");
const { get } = require("../controllers/main.controllers.js");

const router = express.Router();

router.get('/',(_req, res) => {
  res.status(200).redirect('/login')
})

router.route("/main")
  .get(checkAuth, get.main)

router.route("/account")
  .get(checkAuth, get.account)

router.route("/cart")
  .get(checkAuth, get.cart)

module.exports = router;
