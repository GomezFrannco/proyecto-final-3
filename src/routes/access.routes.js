const express = require("express");
const { upload } = require("../middlewares/multer.middlewares.js");
const { get, post, fail } = require("../controllers/access.controllers.js");
const passportSignup = require("../auth/signup.auth.js");
const passportLogin = require('../auth/login.auth.js')

const router = express.Router();

router.route("/login")
  .get(get.login)
  .post(passportLogin.authenticate('login', { failureRedirect: '/fail/login' }), post.login);

router.route("/signup")
  .get(get.signup)
  .post(upload.single("uploaded_file"), passportSignup.authenticate('signup', { failureRedirect: '/fail/signup' }), post.signup);

router.route("/logout")
  .get(get.logout);

router.get('/fail/login', fail.login);
router.get('/fail/signup', fail.signup);


module.exports = router;
