let socketIoServer;

exports.socketIoConnection = (httpServer) => {
    socketIoServer = require('socket.io')(httpServer);
    socketIoServer.on('connection', (socket) => {
        console.info(`Client connected [id=${socket.id}]`);

        socket.on('disconnect', () => {
            console.info(`Client disconnected [id=${socket.id}]`);
        });
    });
};
