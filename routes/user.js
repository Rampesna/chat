const express = require('express');
const router = express.Router();
const UserController = require('../http/controllers/UserController');
const {
    GetByIdRequest,
    LoginRequest
} = require("../http/requests/UserControllerRequests");
const AuthenticationMiddleware = require('../http/middlewares/AuthenticationMiddleware');

router.post('/login', LoginRequest, UserController.login);
router.get('/getAll', AuthenticationMiddleware, UserController.getAll);
router.get('/getById', AuthenticationMiddleware, GetByIdRequest, UserController.getById);
router.get('/getProfile', AuthenticationMiddleware, UserController.getProfile);
router.get('/sendMessage', UserController.sendMessage);

module.exports = router;
