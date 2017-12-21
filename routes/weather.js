var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    req.knex.select().table('weather')
    .then(function(r){
        res.send(r);
    });
});

router.get('/dailycount', function(req, res, next) {
    req.knex('weather').where('created_at', req.query.date).count()
    .then(function(r){
        res.send(r);
    });
});

router.get('/current', function(req, res, next) {
    req.knex('weather').orderBy('created_at', 'desc').first()
    .then(function(r){
        res.send(r);
    });
});

module.exports = router;
