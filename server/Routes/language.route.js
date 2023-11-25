const express = require("express");
const { getLanguage } = require("../Controllers/language.controller");

const languageRouter = express.Router();

languageRouter.get("/language", getLanguage);

module.exports = languageRouter;
