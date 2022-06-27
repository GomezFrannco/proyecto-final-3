const { productModel } = require("../schemas/products.schemas.js");
const { Access } = require("./dataAccess.models.js");

class Products extends Access {
  constructor(Schema) {
    super(Schema);
  }
}

const productsDao = new Products(productModel);

module.exports = { productsDao };
