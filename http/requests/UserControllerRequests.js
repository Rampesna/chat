const {
    serviceResponse
} = require("../../helpers/responses");

const LoginRequest = (
    request,
    response,
    next
) => {
    console.log(request.body);
    console.log(request.query);
    if (!request.query.email && !request.body.email) {
        return response.send(serviceResponse(
            false,
            "Email is required",
            null,
            422
        ), 422);
    }

    if (!request.query.password && !request.body.password) {
        return response.send(serviceResponse(
            false,
            "Password is required",
            null,
            422
        ), 422);
    }

    next();
};

const GetByIdRequest = (
    request,
    response,
    next
) => {
    if (!request.query.id) {
        return response.send(serviceResponse(
            false,
            "Id is required",
            null,
            422
        ), 422);
    }

    next();
};

module.exports = {
    GetByIdRequest,
    LoginRequest
}
