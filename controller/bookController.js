const bookModel = require("../models/book");
const {isValidObjectId} = require("mongoose")
const Validator = require("../validator/booksValidator");
exports.create = async (req, res) => {
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
};
exports.getAll = async (req, res) => {
  const books = await bookModel.find({});
  res.status(200).json(books);
};
exports.getOne = async (req, res) => {
  const { id } = req.params;
  const idValidator = isValidObjectId(id);
  if (!idValidator) {
    return res.status(404).json({ error: "Book not found" });
  }
  const book = await bookModel.findById(id);
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.status(200).json(book);
};
