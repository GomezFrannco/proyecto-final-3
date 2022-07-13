const fetch = require("node-fetch");
const { Cart } = require('../../API/DAO/cartsImpl.dao.js');

class MainController {
  static async getMain(req, res) {
    const url = `${req.protocol}://${req.hostname}:8080/api/products`
    const request = await fetch(url, {
      method: "GET"
    });
    const response = await request.json();
    await res.status(200).render("pages/home.pages.ejs", {
      partial: "main.partials.ejs",
      products: response.products,
    });
  }
  static getAccount(req, res) {
    res.status(200).render("pages/home.pages.ejs", {
      partial: "account.partials.ejs",
      avatar: req.user.picture,
      username: req.user.name,
      age: req.user.age,
      adress: req.user.adress,
      phone: req.user.phone,
    });
  }
  static async getCart(req, res) {
    const userCart = await Cart.getCart(req.user.name);
    res.status(200).render("pages/home.pages.ejs", {
      partial: "cart.partials.ejs",
      cart: userCart.products.length,
      itemsIn: userCart.products
    });
  }
}

module.exports = {
  get: {
    main: MainController.getMain,
    account: MainController.getAccount,
    cart: MainController.getCart,
  },
};
