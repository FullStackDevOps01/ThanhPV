/**
 * Created by thanh on 19/6/2016.
 */
'use strict';
var express = require('express'),
    db = require('../models'),
    router = express.Router(),
    logger = require('../helpers/logger');

// create a new user
router.post('/create', function(req, res){
    var user = new db.User(req.body);
    user.save(function(error, new_user){
        if (error) {
            return res.status(406).send(JSON.stringify({error}));
        }
        delete new_user['salt'];
        delete new_user['password'];
        res.send(JSON.stringify(new_user));
    });
});

router.get('/', function (req, res) {
    logger.info('New request from %s to /', req.connection.remoteAddress);
    res.send('test');
});

module.exports = router;
