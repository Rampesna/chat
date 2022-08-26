function httpResponse(
    serviceResponse
) {
    return {
        'isSuccess': serviceResponse.isSuccess,
        'message': serviceResponse.message,
        'data': serviceResponse.data,
        'statusCode': serviceResponse.statusCode,
    };
}

function serviceResponse(
    isSuccess,
    message,
    data,
    statusCode,
) {
    return {
        'isSuccess': isSuccess,
        'message': message,
        'data': data,
        'statusCode': statusCode,
    };
}

module.exports = {
    httpResponse,
    serviceResponse
};
