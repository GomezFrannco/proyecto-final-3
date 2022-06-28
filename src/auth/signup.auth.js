const { Strategy } = require("passport-local");
const passport = require("passport");
const bcrypt = require("bcrypt");
const { userModel } = require("../models/user.models.js");
const init = require("../utils/passport.utils.js");

passport.use(
  "signup",
  new Strategy(
    {
      passReqToCallback: true,
    },
    async (req, name, password, done) => {
      try {
        const exists = await userModel.findOne({ name });
        if (exists) {
          return done(null, false);
        } else {
          const newUser = {
            email: req.body.email,
            password: bcrypt.hashSync(password, bcrypt.genSaltSync(10), null),
            name,
            age: req.body.age,
            adress: req.body.adress,
            phone: req.body.phone,
            picture: `${req.file ? 'uploads/' + req.file.filename : 'uploads/default-image.png'}`
          };
          const saveNewUser = await userModel.create(newUser);
          return done(null, saveNewUser);
        }
      } catch (err) {
        console.log({
          message: err.message,
        });
      }
      return done(null, false);
    }
  )
);

init();

module.exports = passport;
