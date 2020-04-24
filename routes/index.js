var express = require('express');
var router = express.Router();
// Load the MySQL pool connection
const pool = require('../data/config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Be A Donor' });
});


/* GET register page */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register Now'});
});

// Add a new user
router.post('/register', function(req, res, next) {
  pool.query('INSERT INTO tbl_user SET ?', req.body, (error) => {
    if (error) throw error;
  });
    
});

module.exports = router;
