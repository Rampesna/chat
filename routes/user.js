const express = require('express');
const router = express.Router();
const UserController = require('../http/controllers/UserController');

router.post('/login', UserController.login);
router.get('/getAll', UserController.getAll);
router.get('/getById', UserController.getById);

module.exports = router;
