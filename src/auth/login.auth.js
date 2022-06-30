const { Strategy } = require("passport-local");
const passport = require("passport");
const bcrypt = require("bcrypt");
const { userModel } = require("../models/user.models.js");
const init = require("../utils/passport.utils.js");
const { log } = require('../utils/logs.utils.js');

passport.use(
  "login",
  new Strategy(async (name, password, done) => {
    try {
      const findUser = await userModel.findOne({ name });
      if (!findUser) {
        done(null, false);
      } else {
        const comparison = bcrypt.compareSync(password, findUser.password);
        comparison ? done(null, findUser) : done(null, false);
      }
    } catch (err) {
      log.console.error(err.message);
      log.file.error(err.message);
    }
  })
);

init();

module.exports = passport;
