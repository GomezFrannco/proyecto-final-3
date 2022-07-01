const express = require("express");
const { upload } = require("../middlewares/multer.middlewares.js");
const { get, post, fail } = require("../controllers/access.controllers.js");
const passportSignup = require("../auth/signup.auth.js");
const passportLogin = require('../auth/login.auth.js')

const router = express.Router();

router.route("/login")
  .get(get.login)
  .post(passportLogin.authenticate('login', { failureRedirect: '/failLogin' }), post.login);

router.route("/signup")
  .get(get.signup)
  .post(upload.single("picture"), passportSignup.authenticate('signup', { failureRedirect: '/failSignup' }), post.signup);

router.route("/logout")
  .get(get.logout);

router.get('/failLogin', fail.login);
router.get('/failSignup', fail.signup);


module.exports = router;
