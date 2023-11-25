const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const categorySchema = mongoose.model("category", schema);

module.exports = categorySchema;
