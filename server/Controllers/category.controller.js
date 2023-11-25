const categoryModal = require("../Models/category.modal");

const getCategory = async (req, res) => {
  const response = await categoryModal.find();
  res.json({ message: "Fetched categories successfully", response });
};

module.exports = { getCategory };
