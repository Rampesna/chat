const express = require('express');
const http = require('http');
const userRoutes = require('./routes/user');
const errorsRoutes = require('./routes/errors');
const envoirments = require('dotenv').config().parsed;

const server = express();

const httpServer = http.createServer(server);
const {Server} = require("socket.io");
const socketIoServer = new Server(httpServer);
httpServer.listen(3000, () => {
    console.log('listening on *:3000');
});

server.use(express.json());
server.listen(envoirments.SERVER_PORT);

socketIoServer.on('connection', (socket) => {
    console.log('a user connected');
});

socketIoServer.on('disconnect', (socket) => {
    console.log('a user disconnected');
});

server.use('/user', userRoutes);
server.use('/', errorsRoutes);

server.get('/', (req, res) => {
    res.end('Home Page!');
});

server.get('*', (request, response) => {
    response.redirect('/404');
});
