const UserService = require("../../services/mongodb/UserService");

const {
    sendMessage
} = require('../../services/socketio/SocketIoService');

exports.login = async (request, response) => {
    serviceResponse = await UserService.login(
        request.body.email,
        request.body.password,
        request.headers['user-agent']
    );
    response.send(serviceResponse, serviceResponse.statusCode);
}

exports.getAll = async (request, response) => {
    serviceResponse = await UserService.getAll();
    response.send(serviceResponse, serviceResponse.statusCode);
}

exports.getById = async (request, response) => {
    serviceResponse = await UserService.getById(request.query.id);
    response.send(serviceResponse, serviceResponse.statusCode);
}

exports.getProfile = async (request, response) => {
    serviceResponse = await UserService.getById(request.user.id);
    response.send(serviceResponse, serviceResponse.statusCode);
}

exports.sendMessage = async (request, response) => {
    sendMessage(request.query.message);
    response.send({});
}
