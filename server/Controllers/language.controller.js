const languageSchema = require("../Models/language.modal");

const getLanguage = async (req, res) => {
  const languages = await languageSchema.find();
  res.json({ message: "Fetched languages successfully", response: languages });
};

module.exports = { getLanguage };
