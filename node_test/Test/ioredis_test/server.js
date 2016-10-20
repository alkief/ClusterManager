var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require("body-parser");

var Redis = require("ioredis");

//Deliver the root directory as index.html
app.get('/', function(req, res) {
    /* Sends the index html page to the user */
    fs.readFile('index.html', 'utf8', function(err, data) {
        if (!err) res.send(data);
        else return console.log(err);
    });
});

//For setting up directory access:
//app.use('</directory>', express.static('<directory-name>'));
//
//  Ex: app.use('/js', express.static('js'));
        //This will serve files in the the 'js' folder

app.use('/node_modules', express.static('node_modules'));

var redis = new Redis.Cluster(
              [
              {port: 7000,
                host: "127.0.0.1"},
              {port: 7001,
                host: "127.0.0.1"},
              {port: 7002,
                host: "127.0.0.1"},
              {port: 7003,
                host: "127.0.0.1"},
              {port: 7004,
                host: "127.0.0.1"},
              {port: 7005,
                host: "127.0.0.1"},
              ]
              );

redis.connect();


var server = app.listen('8080', '0.0.0.0', function() {
    console.log("Listening on localhost:8080");
});
