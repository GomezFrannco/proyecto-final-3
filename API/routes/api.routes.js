const express = require("express");
const { products } = require("../controllers/products.controllers.js");

const router = express.Router();

router.route("/products")
  .post(products.save)

router.route("/products/:id")
  .get(products.find)
  .delete(products.delete)


router.route("/cart").get();

module.exports = router;
