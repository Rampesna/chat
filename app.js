const express = require('express');
const userRoutes = require('./routes/user');
const errorsRoutes = require('./routes/errors');
const envoirments = require('dotenv').config().parsed;

const server = express();
server.listen(envoirments.SERVER_PORT);

server.use('/user', userRoutes);
server.use('/', errorsRoutes);


server.get('*', (request, response) => {
    response.redirect('/404');
});

server.get('/', (req, res) => {
    res.end('Home Page!');
});

