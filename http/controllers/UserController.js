const UserService = require("../../services/mongodb/UserService");
const {
    GetByIdRequest,
    LoginRequest
} = require("../../http/requests/UserControllerRequests");

exports.login = async (request, response) => {
    validationResponse = LoginRequest(request);
    if (validationResponse.isSuccess) {
        serviceResponse = await UserService.login(
            request.body.email,
            request.body.password
        );
        response.send(serviceResponse, serviceResponse.statusCode);
    } else {
        response.send(validationResponse, validationResponse.statusCode)
    }
}

exports.getAll = async (request, response) => {
    serviceResponse = await UserService.getAll();
    response.send(serviceResponse, serviceResponse.statusCode);
}

exports.getById = async (request, response) => {
    validationResponse = GetByIdRequest(request);
    if (validationResponse.isSuccess) {
        serviceResponse = await UserService.getById(request.query.id);
        response.send(serviceResponse, serviceResponse.statusCode);
    } else {
        response.send(validationResponse, validationResponse.statusCode)
    }
}
