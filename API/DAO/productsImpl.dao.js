const ProductInterface = require("../interfaces/products.interfaces.js");
const { productModel } = require("../schemas/products.schemas.js");

class ProductDAO extends ProductInterface {
  constructor() {
    super();
    this.db = productModel;
  }
  async addProduct(product) {
    try {
      return await this.db.create(product);
    } catch (error) {
      console.log(error.message);
    } finally {
    }
  }
  async getProduct(id) {
    try {
      return await this.db.findOne({ id: id });
    } catch (error) {
      console.log(error.message);
    } finally {
    }
  }
  async getAll() {
    try {
      return await this.db.find();
    } catch (error) {
      console.log(error.message);
    } finally {
    }
  }
  async updateProduct(id, update) {
    try {
      return await this.db.findOneAndUpdate({ id: id }, update);
    } catch (error) {
      console.log(error.message);
    } finally {
    }
  }
  async removeProduct(id) {
    try {
      return await this.db.findOneAndDelete({ id: id });
    } catch (error) {
      console.log(error.message);
    } finally {
    }
  }
}

module.exports = {
  Product: new ProductDAO(),
};
