const CartInterface = require("../interfaces/cart.interfaces.js");
const { cartModel } = require("../schemas/cart.schemas.js");
const Connection = require("./connection.dao.js");

class CartDAO extends CartInterface {
  constructor() {
    super();
    this.connection = Connection.getInstance();
    this.db = cartModel;
  }
  async addCart(owner) {
    try {
      await this.connection.connect();
      return await this.db.create(owner);
    } catch (error) {
      console.log(error.message);
    } finally {
      await this.connection.disconnect();
    }
  }
  async getCart(owner) {
    try {
      await this.connection.connect();
      return await this.db.findOne({ owner: owner });
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
  async updateCart(owner, update) {
    try {
      await this.connection.connect();
      return await this.db.findOneAndUpdate({ owner: owner }, update);
    } catch (error) {
      console.log(error.message);
    } finally {
      await this.connection.disconnect();
    }
  }
}

module.exports = {
  Cart: new CartDAO(),
};
