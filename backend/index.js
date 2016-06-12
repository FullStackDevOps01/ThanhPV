'use strict';

var express = require('express');
// var fs = require('fs');
var app = express();
var logger = require('./helpers/logger');
var config = require('config');

app.get('/wines', function(req, res) {
    res.send([{name:'wine1'}, {name:'wine2'}]);
});
app.get('/wines/:id', function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
});

app.get('/hello', function (req, res) {
    logger.info('Request from %s to /hello', req.connection.remoteAddress);
    res.send(JSON.stringify({'hello': 'world!!!'}));
});

var server = app.listen(config.get('server.port'), config.get('server.address'), function () {
    var host = server.address().address;
    var port = server.address().port;
    logger.info('Server start at http://%s:%s', host, port);
});