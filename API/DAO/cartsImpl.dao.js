const CartInterface = require("../interfaces/cart.interfaces.js");
const { cartModel } = require("../schemas/cart.schemas.js");

class CartDAO extends CartInterface {
  constructor() {
    super();
    this.db = cartModel;
  }
  async addCart(owner) {
    try {
      return await this.db.create(owner);
    } catch (error) {
      console.log(error.message);
    } finally {
    }
  }
  async getCart(owner) {
    try {
      return await this.db.findOne({ owner: owner });
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
  async updateCart(owner, update) {
    try {
      return await this.db.findOneAndUpdate({ owner: owner }, update);
    } catch (error) {
      console.log(error.message);
    } finally {
    }
  }
}

module.exports = {
  Cart: new CartDAO(),
};
