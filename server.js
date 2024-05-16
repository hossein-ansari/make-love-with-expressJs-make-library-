const express = require("express");
const app = express();
require("./db");
const bookModel = require("./models/book");
const bookRouter = require('./router/books')
const usersRouter = require('./router/users')
const commentsRouter = require('./router/comments')

app.use(express.json());

app.use('/books/',bookRouter)
app.use('/users/',usersRouter)
app.use('/comments/',commentsRouter)

app.listen(3000, () => {
  console.log("connected to server");
});
