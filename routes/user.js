const express = require('express');
const router = express.Router();
const UserController = require('../http/controllers/UserController');
const AuthenticationMiddleware = require('../http/middlewares/AuthenticationMiddleware');

router.post('/login', UserController.login);
router.get('/getAll', AuthenticationMiddleware, UserController.getAll);
router.get('/getById', AuthenticationMiddleware, UserController.getById);

module.exports = router;

