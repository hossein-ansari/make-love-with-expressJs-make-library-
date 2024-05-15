const express = require("express");
const booksRouters = express.Router();
const bookController = require('../controller/bookController')

booksRouters.post("/create",bookController.create )
booksRouters.get("/getOne/:id",bookController.getOne )
booksRouters.get("/getAll",bookController.getAll )
booksRouters.delete("/deleteOne/:id",bookController.deleteOne )
booksRouters.put("/updateOne/:id",bookController.updateOne )

module.exports = booksRouters;
