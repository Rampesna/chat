const {httpResponse} = require("../helpers/responses");

exports.getAll = (request, response) => {
    serviceResponse = {
        'isSuccess': true,
        'message': 'All Users!',
        'data': [],
        'statusCode': 200
    };
    response.send(httpResponse(serviceResponse), serviceResponse.statusCode);
}