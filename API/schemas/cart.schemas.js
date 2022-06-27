const mongoose = require("mongoose");
const { product_schema } = require("./products.schemas.js");

const Schema = new mongoose.Schema({
  id: {
    type: Number,
    default: 1,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
  products: [product_schema],
});

const cartModel = mongoose.model("Carts", Schema);

// How to add a product into a cart

// const cart = new cartModel();
// cart.products.create({
//   id,
//   timestamp,
//   name,
//   description,
//   code,
//   picture,
//   price,
//   stock
// })

module.exports = {
  cartModel,
};
