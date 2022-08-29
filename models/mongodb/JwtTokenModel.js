const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://127.0.0.1:27017/chat', {
    useNewUrlParser: true
});

let JwtTokenSchema = new Schema({
    token: String,
    userAgent: String,
});

let JwtTokenModel = mongoose.model('jwt_tokens', JwtTokenSchema);

module.exports = JwtTokenModel;
