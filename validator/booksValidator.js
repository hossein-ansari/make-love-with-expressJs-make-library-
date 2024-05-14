const validator = require("fastest-validator");
const v = new validator();

const schema = {
  name: {
    type: "string",
    min: 3,
  },
  outer: {
    type: "string",
    min: 3,
  },
};
const check = v.compile(schema);
module.exports = check;
