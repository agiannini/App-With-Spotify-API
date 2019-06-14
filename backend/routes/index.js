var express = require('express');
var router = express.Router();
var request = require('request'); // "Request" library
require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




module.exports = router;
