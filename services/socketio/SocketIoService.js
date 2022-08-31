const jwt = require("jsonwebtoken");
const environments = require('dotenv').config().parsed;
const MessageService = require('../mongodb/MessageService');
const UserService = require('../mongodb/UserService');
let socketIoServer;

exports.socketIoConnection = (httpServer) => {
    socketIoServer = require('socket.io')(httpServer);
    socketIoServer.on('connection', (socket) => {

        socket.on('sendMessage', (data) => {
            jwt.verify(data.token, environments.JWT_SECRET_KEY, async (err, decoded) => {
                if (!err) {
                    var messageData = await MessageService.create(
                        decoded._id,
                        data.message,
                        data.userId,
                        data.groupId
                    );
                    messageData.data.sender = await UserService.getById(decoded._id);
                    socketIoServer.emit('sendMessage', messageData.data);
                }
            });
        });
    });
};

exports.sendMessage = (message) => {
    socketIoServer.emit('sendMessage', message);
    console.log(message);
}
