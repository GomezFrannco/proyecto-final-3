const express = require("express");
const { checkAuth } = require("../middlewares/isAuth.middlewares.js");
const { get } = require("../controllers/main.controllers.js");

const router = express.Router();

router.route("/main")
  .get(checkAuth, get.main)

router.route("/user/account")
  .get(checkAuth, get.account)

router.route("/user/cart")
  .get(checkAuth, get.cart)

module.exports = router;
