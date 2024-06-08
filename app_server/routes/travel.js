const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travel');

console.log('travelController:', travelController); 
// Define route for fetching travel data
router.get('/', travelController.travel);

module.exports = router;
