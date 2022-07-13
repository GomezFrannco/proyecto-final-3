const { Product } = require("../DAO/productsImpl.dao.js");
const { setID } = require("../utils/setId.utils.js");

class ProductController {
  static async postProduct(req, res) {
    const newProduct = req.body;
    newProduct.id = await setID(Product);
    const saveProduct = await Product.addProduct(newProduct);
    return res.json({
      newProduct: saveProduct,
    });
  }
  static async getProducts(_req, res) {
    const allProducts = await Product.getAll();
    return res.json({
      products: allProducts,
    });
  }
  static async getProductById(req, res) {
    const { id } = req.params;
    const productFounded = await Product.getProduct(id);
    return res.json({
      product: productFounded,
    });
  }
  static async updateProduct(req, res) {
    const { id } = req.params;
    const newUpdate = req.body;
    const productUpdated = await Product.updateProduct(id, newUpdate);
    return res.json({
      updated: productUpdated,
    });
  }
  static async deleteProduct(req, res) {
    const { id } = req.params;
    const productDeleted = await Product.removeProduct(id);
    return res.json({
      deleted: productDeleted,
    });
  }
}

module.exports = {
  products: {
    save: ProductController.postProduct,
    find: ProductController.getProductById,
    findAll: ProductController.getProducts,
    update: ProductController.updateProduct,
    delete: ProductController.deleteProduct,
  },
};
