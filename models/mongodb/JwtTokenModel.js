const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {
    connectToMongoDb
} = require('../../connections/mongodb');

connectToMongoDb();

let JwtTokenSchema = new Schema({
    token: String,
    userAgent: String,
});

let JwtTokenModel = mongoose.model('jwt_tokens', JwtTokenSchema);

module.exports = JwtTokenModel;
