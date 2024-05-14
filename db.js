const mongoose = require("mongoose");

const dbUrl = "mongodb://127.0.0.1:27017/library";
mongoose
  .connect(dbUrl)
  .then(() => { 
    console.log("connect");
  })
  .catch((err) => {
    console.log(err);
  });
