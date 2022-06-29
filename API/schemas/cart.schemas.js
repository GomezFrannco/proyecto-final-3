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
  products: [
    {
      type: product_schema,
      ref: "Products",
    },
  ],
});

const cartModel = mongoose.model("Carritos", Schema);

module.exports = {
  cartModel,
};
