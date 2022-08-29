const {
    serviceResponse
} = require("../../helpers/responses");

function LoginRequest(
    request
) {
    if (!request.query.email && !request.body.email) {
        return serviceResponse(
            false,
            "Email is required",
            null,
            422
        );
    }

    if (!request.query.password && !request.body.password) {
        return serviceResponse(
            false,
            "Password is required",
            null,
            422
        );
    }

    return serviceResponse(
        true,
        "Success",
        null,
        200
    );
}

function GetByIdRequest(
    request
) {
    if (!request.query.id) {
        return serviceResponse(
            false,
            "Id is required",
            null,
            422
        );
    }

    return serviceResponse(
        true,
        "Success",
        null,
        200
    );
}

module.exports = {
    GetByIdRequest,
    LoginRequest
}
