var express = require('express');
var router = express.Router();
const axios = require('axios');
const weatherController = require('../controllers/weatherController');

/* send request to the backend */
router.get('/', weatherController.searchWeather);

module.exports = router;
