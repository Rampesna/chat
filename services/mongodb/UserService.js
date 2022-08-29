const {serviceResponse} = require("../../helpers/responses");
const IUserService = require("../../interfaces/IUserService");
const JwtTokenService = require("./JwtTokenService");
const UserModel = require("../../models/mongodb/UserModel");
const jwt = require('jsonwebtoken');

class UserService extends IUserService {
    constructor() {
        super();
    }

    async login(
        email,
        password
    ) {
        var user = await UserModel.findOne({
            email: email
        });
        console.log(user);
        if (user != null) {
            if (user.comparePassword(password)) {
                var token = (await JwtTokenService.generateToken(user)).data;
                return serviceResponse(
                    true,
                    'User logged in successfully',
                    {
                        token: token
                    },
                    200
                );
            } else {
                return serviceResponse(
                    false,
                    'Password is incorrect',
                    null,
                    400
                );
            }
        } else {
            return serviceResponse(
                false,
                'User not found',
                null,
                404
            );
        }

    }

    async getAll() {
        let allUsers = await UserModel.find();
        return serviceResponse(
            true,
            'All users',
            allUsers,
            200
        );
    }

    async getById(
        id
    ) {
        var user = await UserModel.findOne({
            id: id
        });
        return serviceResponse(
            true,
            'User',
            user,
            200
        );
    }
}

module.exports = new UserService();
