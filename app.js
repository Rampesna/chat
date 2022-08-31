/*
* Express Server Implementation
* */
const express = require('express');
const expressServer = express();

/**
 * Http Server Implementation
 * */
const http = require('http');
const httpServer = http.createServer(expressServer);

/**
 * Socket.io Implementation
 * */
const {
    socketIoConnection
} = require('./services/socketio/SocketIoService');
socketIoConnection(httpServer);

/**
 * Environment Variables
 * */
const environments = require('dotenv').config().parsed;

/**
 * User Routes
 * */
const userRoutes = require('./routes/user');

/**
 * Error Controller
 * */
const ErrorController = require("./http/controllers/ErrorController");

/**
 * Start Http Server Listening
 * */
httpServer.listen(3000, () => {
    console.log('listening on *:3000');
});

/**
 * Enable Express Server to use bodyParser
 * Start Express Server Listening
 * */
expressServer.use(express.json());
expressServer.listen(environments.SERVER_PORT);

expressServer.use('/user', userRoutes);

/**
 * Catch 404 and forward to error handler
 * */
expressServer.get('*', ErrorController._404);
