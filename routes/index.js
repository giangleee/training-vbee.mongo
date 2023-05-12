const express = require('express');
const router = express.Router();
const daos = require('../daos')
const controller = require('../controllers')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/task', controller)

module.exports = router;
