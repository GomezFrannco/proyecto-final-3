const { Cart } = require('../DAO/cartsImpl.dao.js');
const { Product } = require('../DAO/productsImpl.dao.js');
const { wpp, email } = require('../utils/notification.utils.js');
const { sendMail } =  require("../utils/mail.utils.js");
const { sendWP } = require('../../src/utils/twilio.utils.js')

class CartController {
  static async addProduct(req, _res) {
    const userCart = await Cart.getCart(req.user.name);
    const selectedProduct = await Product.getProduct(req.params.id);
    userCart.products.push(selectedProduct);
    await Cart.updateCart(req.user.name, userCart);
  }
  static async removeProduct(req, _res) {
    const userCart = await Cart.getCart(req.user.name);
    const selectedProduct = await Product.getProduct(req.params.id);
    const itemIndex = userCart.products.findIndex((item)=> selectedProduct.id == item.id);
    const checkQuantity = userCart.products.filter((item)=> selectedProduct.id == item.id);
    checkQuantity.length == 1 ? userCart.products.pull(selectedProduct) : userCart.products.splice(itemIndex, 1);
    await Cart.updateCart(req.user.name, userCart);
  }
  static async buyCart(req, _res) {
    const userCart = await Cart.getCart(req.user.name);
    const whatsappOrder = wpp(userCart, req.user.name);
    const emailOrder = email(userCart, req.user.name);
    sendMail(emailOrder, req.user.name);
    sendWP(whatsappOrder);
    userCart.products = [];
    await Cart.updateCart(req.user.name, userCart);
  }
}

module.exports = {
  carts: {
    add: CartController.addProduct,
    remove: CartController.removeProduct,
    purchase: CartController.buyCart,
  },
};
