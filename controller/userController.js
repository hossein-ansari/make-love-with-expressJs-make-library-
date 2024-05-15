const userModel = require("../models/user");
const { isValidObjectId } = require("mongoose");
const Validator = require("../validator/usersValidator");

exports.create = async (req, res) => {
  const isValid = Validator(req.body);
  if (!isValid) {
    res.status(422).json(isValid);
  }
  const { firstName, lastName } = req.body;
  userModel.create({ firstName, lastName });
  res.status(200).json({
    massage: "user created",
  });
};
exports.getOne = async (req, res) => {
  const { id } = req.params;
  const isValidId = isValidObjectId(id);
  if (!isValidId) {
    res.status(422).json(isValidId);
  }
  const user = await userModel.findById(id);
  if (!user) {
    res.status(404).json(isValidId);
  }
  res.status(200).json(user);
};
exports.getAll = async (req, res) => {
  const user = await userModel.find({});
  if (!user) {
    res.status(404).json(isValidId);
  }
  res.status(200).json(user);
};
exports.deleteOne = async (req, res) => {
  const { id } = req.params;
  const isValidId = isValidObjectId(id);
  if (!isValidId) {
    res.status(422).json(isValidId);
  }
  const user = await userModel.findByIdAndDelete(id);
  if (!user) {
    res.status(404).json({ massage: "user deleted" });
  }
  res.status(200).json(user);
};
exports.updateOne = async (req, res) => {
  const { firstName, lastName } = req.body;
  const { id } = req.params;
  const isValidId = isValidObjectId(id);
  if (!isValidId) {
    res.status(422).json(isValidId);
  }
  const user = await userModel.findByIdAndUpdate(id, {
    firstName: firstName,
    lastName: lastName,
  });
  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }
  res.status(200).json(user);
};
