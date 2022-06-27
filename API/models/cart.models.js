const { cartModel } = require("../schemas/cart.schemas.js");
const { Access } = require("./dataAccess.models.js");

class Cart extends Access {
  constructor(Schema) {
    super(Schema);
  }
}

const cartDao = new Cart(cartModel);

module.exports = { cartDao };
