const express = require('express');
const ErrorController = require('../http/controllers/ErrorController');
const router = express.Router();

router.get('/403', ErrorController._403);
router.get('/404', ErrorController._404);

module.exports = router;
