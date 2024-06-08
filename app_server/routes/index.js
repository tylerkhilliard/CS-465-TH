const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travel');

// Define route for fetching travel data
router.get('/travel', travelController.travel);

module.exports = router;
