const {httpResponse} = require("../helpers/responses");

exports._404 = (request, response) => {
    serviceResponse = {
        'isSuccess': false,
        'message': 'Page not found!',
        'data': null,
        'statusCode': 404
    };
    response.send(httpResponse(serviceResponse), serviceResponse.statusCode);
};

exports._403 = (request, response) => {
    serviceResponse = {
        'isSuccess': false,
        'message': 'You dont have permission to access this page!',
        'data': null,
        'statusCode': 403
    };
    response.send(httpResponse(serviceResponse), serviceResponse.statusCode);
};