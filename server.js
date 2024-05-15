const express = require("express");
const app = express();
require("./db");
const bookModel = require("./models/book");
const Validator = require("./validator/booksValidator");
const bookRouter = require('./router/books')
const usersRouter = require('./router/users')

app.use(express.json());


app.use('/books/',bookRouter)
app.use('/users/',usersRouter)





app.listen(3000, () => {
  console.log("connected to server");
});
