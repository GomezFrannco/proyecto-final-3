const passport = require("passport");
const { userModel } = require("../models/user.models.js");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  passport.deserializeUser((id, done) => {
    userModel.findById(id, done);
  });
};
