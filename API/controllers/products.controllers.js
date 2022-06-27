const { productsDao } = require("../models/products.models.js");

async function createProduct(req, res) {
  const product = req.body;
  const saveProduct = await productsDao.create(product);
  res.json({ saveProduct });
}

async function readProduct(req, res) {
  const { id } = req.params;
  const findProduct = await productsDao.readOne({ id: id });
  res.json({ findProduct });
}

async function deleteProduct(req, res) {
  const { id } = req.params;
  const deleteProduct = await productsDao.deleteOne({ id: id });
  res.json({ deleteProduct });
}

module.exports = {
  products: {
    save: createProduct,
    find: readProduct,
    delete: deleteProduct,
  },
};
