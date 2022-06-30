const { cartDao } = require("../models/cart.models.js");
const { productsDao } = require("../models/products.models.js");
const { sendMail } =  require("../utils/mail.utils.js");

async function addProduct(req, _res) {
  const { id } = req.params;
  const { name } = req.user;
  const cart = await cartDao.readOne({ owner: name });
  const product = await productsDao.readOne({ _id: id });
  cart.products.push(product);
  const added = await cartDao.updateOne({owner: name}, cart);
}

async function removeProduct(req, _res) {
  const { id } = req.params;
  const { name } = req.user;
  const cart = await cartDao.readOne({ owner: name });
  if (id !== 'purchase') {
    const product = await productsDao.readOne({ _id: id });
    cart.products.pull(product._id);
    const removed = await cartDao.updateOne({ owner: name }, cart);
  } else {
    let order = `<h1>${name}'s order:</h1>`
    let initial = 0
    for (const i of cart.products) {
      const currentPrice = i.price;
      initial = initial + currentPrice;
      order += `<div style="padding:25px; border:1px solid black;"><h3>Product: ${i.title}</h3>`
      order += `<h3>Price: $${i.price}</h3></div>`
    }
    order+= `<div style="padding:25px; border:1px solid black;"><h3>Total: $${initial}</h3></div>`
    sendMail(order, name)
    cart.products = [];
    const removed = await cartDao.updateOne({ owner: name }, cart);
  }
}

module.exports = {
  carts: {
    add: addProduct,
    remove: removeProduct,
  },
};
