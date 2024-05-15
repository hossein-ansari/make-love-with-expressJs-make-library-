const validator = require("fastest-validator");
const v = new validator();

const schema = {
  FirstName: {
    type: "string",
    min: 3,
    max:  18,
  },
  lastName: {
    type: "string",
    min: 3,
    max:22,
  },
};
const check = v.compile(schema);
module.exports = check;