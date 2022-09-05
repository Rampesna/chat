const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {
    connectToMongoDb
} = require('../../connections/mongodb');

connectToMongoDb();

let MessageSchema = new Schema({
    sender_id: {
        type: String, required: [
            true, 'sender_id is required'
        ]
    },
    message: {
        type: String, required: [
            true, 'Message is required'
        ]
    }
});

let MessageModel = mongoose.model('messages', MessageSchema);

module.exports = MessageModel;
