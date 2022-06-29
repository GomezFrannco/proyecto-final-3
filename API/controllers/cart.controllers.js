const { cartDao } = require("../models/cart.models.js");
const { productsDao } = require("../models/products.models.js");

async function addProduct(req, _res) {
  const { id } = req.params;
  const { name } = req.user;
  const cart = await cartDao.readOne({ owner: name });
  const product = await productsDao.readOne({ _id: id });
  cart.products.push(product);
  const added = await cartDao.updateOne({owner: name}, cart);
}

module.exports = {
  carts: {
    add: addProduct,
  },
};
