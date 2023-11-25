const express = require("express");
const router = express.Router();
// const Product = require("../Models/Producs.model");
const {
  getProducts,
  postProducts,
} = require("../Controllers/product.controller");

router.get("/products", getProducts);

router.post("/products", postProducts);

module.exports = router;
