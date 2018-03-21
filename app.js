var express = require('express');
var api = require('./api');
var path = require ('path');
var app = express();
const bodyParser = require('body-parser')
var param ="beer";
var did = "";

app.use(bodyParser.json());
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));


app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
})


app.get('/', function (req, res) {
  //res.send('Hello World!');  
  api.apiGet(function (data) {
    // render to the index.jade and pass the data from api call
    res.render('index',{result:data});
  });
})



app.post('/search', (req, res) => {
    param = req.body.search;
    module.exports.parameter = param; 
    res.redirect('/')
})

app.post('/drinkid', (req, res) => {
    did = req.body.drinkid;
    module.exports.drinkid = did;
    console.log(param)
    res.redirect('/drink')
})

app.get('/drink', function (req, res) {
    //res.send('Hello World!');  
    api.apiDrink(function (data) {
        // render to the index.jade and pass the data from api call
        res.render('drink',{drinkresult:data});
      });
  })

module.exports.parameter = param; 
module.exports.drinkid = did; 
