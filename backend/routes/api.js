var express = require('express');
var router = express.Router();
var request = require('request'); // "Request" library
require('dotenv').config();

// Called on by the .env
var client_id = `${process.env.CLIENT_ID}`;
var client_secret = `${process.env.CLIENT_SECRET}`;



// Object used to request authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

// Pupose: to get the token and send it as a JSON object
//  uses request with authOptions to make token request
//
router.get('/', function(req, res, next) {
  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
    var token = body.access_token;
    var tokenObj = {};
    tokenObj.name = token;
    res.send(JSON.stringify(tokenObj))
  }
});
});


module.exports = router;
