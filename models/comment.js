const mongoose = require("mongoose");
const commentsModel = mongoose.model("comments", {
  body: {
    type: String,
  },
  userId:{
    type: mongoose.Types.ObjectId,
    ref: 'users'
  }
});
module.exports = commentsModel