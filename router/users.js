const express = require("express");
const usersRouters = express.Router();
const userController = require('../controller/userController')

usersRouters.post("/create",userController.create )
usersRouters.get("/getOne/:id",userController.getOne )
usersRouters.get("/getAll",userController.getAll )
usersRouters.delete("/deleteOne/:id",userController.deleteOne )
usersRouters.put("/updateOne/:id",userController.updateOne )

module.exports = usersRouters;