const mongoose = require("mongoose");
const { setDate } = require("../utils/setDate.utils.js");
const { product_schema } = require("./products.schemas.js");

const Schema = new mongoose.Schema({
  owner: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    default: setDate(),
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
