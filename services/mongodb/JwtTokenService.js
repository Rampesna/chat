const {
    serviceResponse
} = require("../../helpers/responses");
const IJwtTokenService = require("../../interfaces/IJwtTokenService");
const JwtTokenModel = require("../../models/mongodb/JwtTokenModel");
const jwt = require('jsonwebtoken');
const envoirments = require('dotenv').config().parsed;

class JwtTokenService extends IJwtTokenService {
    constructor() {
        super();
    }

    async generateToken(data) {
        let token = jwt.sign(data, 'AYS_JWT_SECRET_KEY', {});
        JwtTokenModel.create({
            token: token,
        });
        return serviceResponse(
            true,
            'Token is generated',
            token,
            200
        );
    }

    async validateToken(token) {
        let jwtToken = JwtTokenModel.findOne({
            token: token,
        });
        if (!jwtToken) {
            return serviceResponse(
                false,
                'Token is not valid',
                null,
                401
            );
        } else if (!jwt.verify(jwtToken, 'AYS_JWT_SECRET_KEY')) {
            return serviceResponse(
                false,
                'Token is not valid',
                null,
                401
            );
        } else {
            return serviceResponse(
                true,
                'Token is valid',
                null,
                200
            );
        }
    }
}

module.exports = new JwtTokenService();
