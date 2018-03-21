var request = require('request'); // require in request
var initGet = {uri: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='};
var parameter = require('./app');



var apiCaller = function (urlin, cb) {
    
    //use request to make the external http call to the JSON api
    var url = urlin.concat(parameter.parameter);
    console.log (url);
    request({
      url: url,
      json: true
    }, function (error, response, body) {
  
      if (!error && response.statusCode === 200) {
        cb(body);// Send body/response to callback
      }
    })
  };

  // Call the api with a call back
  var apiGet = function(cb) {
    return apiCaller(initGet.uri, cb);
  //return apiCaller(parameter);

  };

  module.exports = {
    apiGet: apiGet
  };