const url = require("url");

const BookModel = require("./../models/book");

const getAll = async (req,res)=>{
  const books = await BookModel.find();
  res.writeHead(200, { "Content-Type": "application/json" })
  res.write(books)
  res.end()
}

module.exports = {
  getAll
}