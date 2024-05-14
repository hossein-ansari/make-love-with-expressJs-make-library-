const bookModel = require("../models/book");
const Validator = require("../validator/booksValidator");
exports.create = async (req,res) =>{
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
}