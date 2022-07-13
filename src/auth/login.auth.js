const { Strategy } = require("passport-local");
const passport = require("passport");
const bcrypt = require("bcrypt");
const { User } = require('../DAO/userImpl.dao.js');
const init = require("../utils/passport.utils.js");
const { log } = require('../utils/logs.utils.js');
const Connection = require('../DAO/connection.dao.js');

passport.use("login", new Strategy(async (name, password, done) => {
    try {
      const connection = Connection.getInstance();
      if (connection.status == false) {
        await connection.connect()
      }
      const find = await User.getUser({ name });
      if (!find) {
        done(null, false);
      } else {
        const comparison = bcrypt.compareSync(password, find.password);
        comparison ? done(null, find) : done(null, false); 
      }
    } catch (err) { 
      log.console.error(err.message);
      log.file.error(err.message);
    }
  })
);

init();

module.exports = passport;
