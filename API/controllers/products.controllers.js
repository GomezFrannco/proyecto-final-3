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

async function allProducts(_req, res) {
  const productsList = await productsDao.readAll();
  res.json(productsList);
}

async function updateProduct(req, res) {
  const { id } = req.params;
  const update = req.body;
  const newProduct = await productsDao.updateOne({ name: id }, update);
  res.json({ newProduct });
}

async function deleteProduct(req, res) {
  const { id } = req.params;
  const deleteProduct = await productsDao.deleteOne({ name: id });
  res.json({ deleteProduct });
}

module.exports = {
  products: {
    save: createProduct,
    find: readProduct,
    findAll: allProducts,
    update: updateProduct,
    delete: deleteProduct,
  },
};
