'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var imageToAscii = require("image-to-ascii");

var app = express();

//This actually parses the json object body of requests and responses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./api/raas.controller')(app);

var server = app.listen(2683, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Application listening at http://%s:%s', host, port);

    imageToAscii('./images/raas_emoji.png', {size: {height: "45%"}}, function(err, converted) {
        console.log(err || converted);
    });
});
