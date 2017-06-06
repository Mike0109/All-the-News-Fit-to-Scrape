var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var app = express();
var mongoose = require('mongoose');

var app = express();


app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 3000;


require("./config/connection");


app.use(logger("dev"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));


var routes = require('./controllers/news.js');
app.use('/',routes);



app.listen(port, function() {
    console.log("Listening on port:" + port);
});