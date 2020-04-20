var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Be A Donor' });
});


/* GET register page */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register Now'});
});

module.exports = router;
