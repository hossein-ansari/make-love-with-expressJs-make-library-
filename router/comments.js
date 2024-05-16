const express = require("express");
const commentsRouters = express.Router();
const commentsController = require('../controller/commentController')

commentsRouters.post("/create", commentsController.create )
commentsRouters.get("/getAll", commentsController.getAll )


module.exports = commentsRouters;
