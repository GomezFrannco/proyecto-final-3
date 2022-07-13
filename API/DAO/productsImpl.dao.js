const ProductInterface = require("../interfaces/products.interfaces.js");
const { productModel } = require("../schemas/products.schemas.js");
const Connection = require("./connection.dao.js");

class ProductDAO extends ProductInterface {
  constructor() {
    super();
    this.connection = Connection.getInstance();
    this.db = productModel;
  }
  async addProduct(product) {
    try {
      this.connection.connect();
      return await this.db.create(product);
    } catch (error) {
      console.log(error.message);
    } finally {
      this.connection.disconnect();
    }
  }
  async getProduct(id) {
    try {
      await this.connection.connect();
      return await this.db.findOne({ id: id });
    } catch (error) {
      console.log(error.message);
    } finally {
      await this.connection.disconnect();
    }
  }
  async getAll() {
    try {
      await this.connection.connect();
      return await this.db.find();
    } catch (error) {
      console.log(error.message);
    } finally {
      await this.connection.disconnect();
    }
  }
  async updateProduct(id, update) {
    try {
      await this.connection.connect();
      return await this.db.findOneAndUpdate({ id: id }, update);
    } catch (error) {
      console.log(error.message);
    } finally {
      await this.connection.disconnect();
    }
  }
  async removeProduct(id) {
    try {
      await this.connection.connect();
      return await this.db.findOneAndDelete({ id: id });
    } catch (error) {
      console.log(error.message);
    } finally {
      await this.connection.disconnect();
    }
  }
}

module.exports = {
  Product: new ProductDAO(),
};
