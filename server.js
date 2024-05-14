const express = require("express");
const app = express();
require("./db");
const bookModel = require("./models/book");
const Validator = require("./validator/booksValidator");

app.use(express.json());

app.get("/", (req, res) => {});
app.post("/books", (req, res) => {
  const validatorRes = Validator(req.body);
  if (validatorRes !== true) {
    res.status(422).json(validatorRes);
  }
  let { name, outer } = req.body;
  bookModel.create({
    name,
    outer,
  });
  res.status(200).json({
    massage: "user created",
  });
});
app.listen(3000, () => {
  console.log("connected to server");
});
