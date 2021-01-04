const {Schema, model} = require('mongoose')

const scheme = new Schema({
    name: {type: String},
    type: {type: String},
})

module.exports = model('Projects', scheme)