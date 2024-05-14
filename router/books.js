const express = require("express");
const booksRouters = express.Router();
const bookModel = require("../models/book");
const Validator = require("../validator/booksValidator");
const userController = require('../controller/bookController')


booksRouters.post("/create",userController.create )
booksRouters.post("/getOne",userController.getOne )
booksRouters.post("/getAll",userController.getAll )
booksRouters.post("/deleteOne",userController.deleteOne )
booksRouters.post("/updateOne",userController.updateOne )


module.exports = booksRouters;
