const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/chat', {
    useNewUrlParser: true
});

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
