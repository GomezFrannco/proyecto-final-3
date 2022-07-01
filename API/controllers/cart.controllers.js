const { cartDao } = require("../models/cart.models.js");
const { productsDao } = require("../models/products.models.js");
const { sendMail } =  require("../utils/mail.utils.js");
const { sendWP } = require('../../src/utils/twilio.utils.js')
require('../../src/config/dotenv.config.js')

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
    let order = `${name}'s order:\n=================\n`
    let initial = 0
    for (const i of cart.products) {
      const currentPrice = i.price;
      initial = initial + currentPrice;
      order += `Product: ${i.title}\n`
      order += `Price: $${i.price}\n=================\n`
    }
    order+= `\nTotal: $${initial}`
    const msg = {
      body: order,
      from: process.env.TWILIO_WP,
      to: `whatsapp:${process.env.ADMIN_PHONE}`,
    }
    sendWP(msg)
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
