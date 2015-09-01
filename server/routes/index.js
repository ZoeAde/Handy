var express = require('express');
var router = express.Router();

router.get('/handy', function(req, res, next) {
  res.render('index');
});

router.get('/handy/main', function(req, res, next) {
  res.render('home');
});

module.exports = router;
