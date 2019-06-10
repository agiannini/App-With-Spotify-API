var express = require('express');
var router = express.Router();
var request = require('request'); // "Request" library
require('dotenv').config();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

var client_id = `${process.env.CLIENT_ID}`;
var client_secret = `${process.env.CLIENT_SECRET}`;


// This allows the app to use Cross Orgin Resource Sharing
router.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers',
    'Content-type': 'application/json'
  });
  next();
});



// your application requests authorization
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
router.get('/', function(req, res, next) {
request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var tokenObj = {};
    console.log(token);
    tokenObj.name = token;
    res.send(JSON.stringify(tokenObj))
    var options = {
      url: 'https://api.spotify.com/v1/users/jmperezperez',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
//      console.log(body);
    });
  }
});
});


router.get('/login', function(req, res) {
var scopes = 'user-read-private user-read-email';
res.redirect('https://accounts.spotify.com/authorize' +
  '?response_type=code' +
  '&client_id=' + client_id +
  (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
  '&redirect_uri=' + encodeURIComponent(redirect_uri));
});

module.exports = router;
