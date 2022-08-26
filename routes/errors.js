const express = require('express');
const { httpResponse} = require('../helpers/responses');
const router = express.Router();

router.get('/403', (request, response) => {
    response.send('You dont have permission to access this page!');
});

router.get('/404', (request, response) => {
    serviceResponse = {
        'isSuccess': false,
        'message': 'Page not found!',
        'data': null,
        'statusCode': 404
    };
    response.send(httpResponse(serviceResponse), serviceResponse.statusCode);
});

module.exports = router;

