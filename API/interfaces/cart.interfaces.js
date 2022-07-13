// this class simulates an interface and is used to be implemented with DAO pattern
class CartInterface {
  async addCart(owner) {}
  async getCart(owner) {}
  async getAll() {}
  async updateCart(owner, update) {}
}

module.exports = CartInterface;
