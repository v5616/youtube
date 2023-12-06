const productModal = require("../Models/Producs.model");

const getProducts = async (req, res) => {
  try {
    const results = await productModal.find().populate("language category");
    if (req.query.id) {
      console.log(req.query);
      const data = await productModal.find({ category: req.query.id });
      res.json({ message: "successfully get products", response: data });
    } else {
      if (results.length > 6) {
        res.status(200).send({
          status: 200,
          message: "successfully get products",
          response: results.reverse().filter((ele, ind) => {
            return ind < 6;
          }),
        });
      } else {
        res.status(200).send({
          status: 200,
          message: "successfully get products",
          response: results.reverse(),
        });
      }
    }
  } catch (error) {
    res.status(400).send({ status: 400, message: error, response: [] });
  }
};

const postProducts = async (req, res) => {
  const Producs = new productModal({
    name: req.body.name,
    revenue: req.body.revenue,
    subscriber: req.body.subscriber,
    monetized: req.body.monetized,
    language: req.body.language,
    category: req.body.category,
    tag: req.body.tag,
  });
  Producs.save().then((result) => {
  });
  res.status(200).send({ status: 200, message: "successfully created" });
};

module.exports = { getProducts, postProducts };
