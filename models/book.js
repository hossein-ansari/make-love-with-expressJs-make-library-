const mongoose = require("mongoose")
const bookModel = mongoose.model("books", {
  name: {
    type: "String",
    required: 'true',
    minLength : 3
  },
  outer: {
    type: "String",
    required: 'false',
    minLength : 3
  }

})
module.exports = bookModel;