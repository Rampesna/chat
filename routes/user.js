const express = require('express');
const router = express.Router();
const httpResponse = require('../helpers/responses');

router.get('/getAll', (request, response) => {
    response.send(httpResponse(
        true,
        'All Users',
        null,
        200
    ), 200);
});

module.exports = router;
