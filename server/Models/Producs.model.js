const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  revenue: {
    type: Number,
    required: true,
  },
  subscriber: {
    type: Number,
    required: true,
  },
  monetized: {
    type: Boolean,
    required: true,
  },
  language: {
    type: mongoose.Types.ObjectId,
    ref: "language",
    required: true,
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "category",
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;
