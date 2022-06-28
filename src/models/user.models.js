const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  picture: {
    type: String,
    required: false,
  }
});

const userModel = mongoose.model("Usuarios", Schema);

module.exports = {
  userModel,
};
