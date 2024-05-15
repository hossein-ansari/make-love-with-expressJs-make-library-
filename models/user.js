const mongoose = require("mongoose")
const userModel = mongoose.model("users", {
  firstName: {
    type: "String",
    required: 'true',
    minLength : 3,
    maxLength : 18

  },
  lastName: {
    type: "String",
    required: 'false',
    minLength : 3,
    maxLength : 22

  }

})
module.exports = userModel;