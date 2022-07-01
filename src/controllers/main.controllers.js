const fetch = require("node-fetch");
const { cartDao } = require('../../API/models/cart.models.js')

async function getMain(req, res) {
  let url = `${req.protocol}://${req.hostname}:8080/api/products`
  const request = await fetch(url, {
    method: "GET",
  });
  const response = await request.json();
  res.status(200).render("pages/home.pages.ejs", {
    partial: "main.partials.ejs",
    products: response,
  });
}

function getAccount(req, res) {
  res.status(200).render("pages/home.pages.ejs", {
    partial: "account.partials.ejs",
    avatar: req.user.picture,
    username: req.user.name,
    age: req.user.age,
    adress: req.user.adress,
    phone: req.user.phone,
  });
}

async function getCart(req, res) {
  const cart = await cartDao.readOne({owner: req.user.name });
  const itemsQ = await cart.products.length;
  res.status(200).render("pages/home.pages.ejs", {
    partial: "cart.partials.ejs",
    cart: itemsQ,
    itemsIn: cart.products
  });
}

module.exports = {
  get: {
    main: getMain,
    account: getAccount,
    cart: getCart,
  },
};
