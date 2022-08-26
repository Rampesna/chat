const express = require('express');
const router = express.Router();
const { httpResponse} = require('../helpers/responses');

router.get('/getAll', (request, response) => {
    serviceResponse = {
        'isSuccess': true,
        'message': 'All Users!',
        'data': [],
        'statusCode': 200
    };
    response.send(httpResponse(serviceResponse), serviceResponse.statusCode);
});

module.exports = router;
