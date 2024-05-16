const validator = require('fastest-validator')
const v = new validator
const schema = {
    body:{
        type:'string'
    }
}
const check = v.compile(schema)
module.exports = check