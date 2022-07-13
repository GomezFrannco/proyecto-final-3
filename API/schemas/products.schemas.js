const mongoose = require("mongoose");

const product_schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
    max: 50,
  },
  description: {
    type: String,
    required: true,
    max: 200,
  },
  code: {
    type: String,
    required: true,
    max: 50,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: String,
  },
});

const productModel = new mongoose.model("Products", product_schema);

module.exports = {
  productModel,
  product_schema,
};
