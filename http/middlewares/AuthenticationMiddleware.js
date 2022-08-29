const {
    serviceResponse
} = require('../../helpers/responses');
const jwt = require('jsonwebtoken');
const envoirments = require('dotenv').config().parsed;

const AuthenticationMiddleware = (
    request,
    response,
    next
) => {
    if (!request.headers['authorization']) {
        return response.send(serviceResponse(
            false,
            'You are not authorized to access this route',
            null,
            401
        ), 401);
    }

    jwt.verify(request.headers['authorization'].split(' ')[1], envoirments.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return response.send(serviceResponse(
                false,
                'You are not authorized to access this route',
                null,
                401
            ), 401);
        }

        request.user = {
            id: decoded.id,
            name: decoded.name,
            email: decoded.email,
        }
        next();
    });
};

module.exports = AuthenticationMiddleware;
