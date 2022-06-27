require('../config/dotenv.config.js')

const options = {
  secret: process.env.SECRET,
  rolling: true,
  resave: true,
  saveUninitialized: true,
};

module.exports = {
  options
}