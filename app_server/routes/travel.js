var express = require('express');
var router = express.Router();
var controller = require('../Controllers/travel');

router.get('/', controller.travel);

module.exports = router;