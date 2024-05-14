const express = require("express");
const booksRouters = express.Router();
const bookModel = require("../models/book");
const Validator = require("../validator/booksValidator");
const userController = require('../controller/bookController')

booksRouters.post("/create",userController.create )
booksRouters.get("/getOne/:id",userController.getOne )
booksRouters.get("/getAll",userController.getAll )
booksRouters.delete("/deleteOne/:id",userController.deleteOne )
booksRouters.put("/updateOne/:id",userController.updateOne )


module.exports = booksRouters;
