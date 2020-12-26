const {Schema, model} = require('mongoose')

const scheme = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    position: {type: String, required: true},
})

module.exports = model('User', scheme)