exports._404 = (request, response) => {
    response.send({
        'isSuccess': false,
        'message': 'Page not found!',
        'data': null,
        'statusCode': 404
    }, 404);
};

exports._403 = (request, response) => {
    response.send({
        'isSuccess': false,
        'message': 'Forbidden!',
        'data': null,
        'statusCode': 403
    }, 403);
};
