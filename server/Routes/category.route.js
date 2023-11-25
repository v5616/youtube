const express = require("express");
const { getCategory } = require("../Controllers/category.controller");
const categoryRouter = express.Router();

categoryRouter.get("/category", getCategory);

module.exports = categoryRouter;
