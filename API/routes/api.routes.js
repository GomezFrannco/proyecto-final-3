const express = require("express");
const { products } = require("../controllers/products.controllers.js");
const { carts } = require('../controllers/cart.controllers.js')

const router = express.Router();

router.route("/products")
  .get(products.findAll)
  .post(products.save)

router.route("/products/id/:id")
  .get(products.find)
  .put(products.update)
  .delete(products.delete)

router.route("/cart/id/:id")
  .post(carts.add)
  .put(carts.remove)


module.exports = router;
