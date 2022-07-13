const { Strategy } = require("passport-local");
const passport = require("passport");
const bcrypt = require("bcrypt");
const { User } = require("../DAO/userImpl.dao.js");
const init = require("../utils/passport.utils.js");
const { log } = require("../utils/logs.utils.js");
const Connection = require('../DAO/connection.dao.js');

passport.use("signup", new Strategy({ passReqToCallback: true }, async (req, name, password, done) => {
    try {
      const connection = Connection.getInstance();
      if (connection.status == false) {
        await connection.connect()
      }
      const availability = await User.getUser({ name });
      if (availability) {
        return done(null, false);
      } else {
        const newUser = {
          email: req.body.email,
          password: bcrypt.hashSync(password, bcrypt.genSaltSync(10), null),
          name,
          age: req.body.age,
          adress: req.body.adress,
          phone: req.body.phone,
          picture: `${
            req.file
              ? "uploads/" + req.file.filename
              : "uploads/default-image.png"
          }`,
        };
        const saveUser = await User.addUser(newUser);
        return done(null, saveUser);
      }
    } catch (err) {
      log.console.error(err.message);
      log.file.error(err.message);
    }
    return done(null, false);
  })
);

init();

module.exports = passport;
