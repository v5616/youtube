require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 4000;
app.use(express.json());

mongoose
  .connect(
    `${process.env.MONGO_URL}`,
    {
      dbName: "youtube",
      user: "vishal",
      pass: "56162000",
      useNewUrlParser: true,
      useunifiedTopology: true,
    }
  )
  .then(() => {
    console.log("mongo db connected");
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const ProductRoute = require("./Routes/Product.Route");
const languageRouter = require("./Routes/language.route");
const categoryRouter = require("./Routes/category.route");
app.use("/", ProductRoute);
app.use("/", languageRouter);
app.use("/", categoryRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
