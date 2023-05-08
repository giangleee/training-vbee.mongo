const express = require('express');
const router = express.Router();
const daos = require('../daos')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/task1', daos.task1)

module.exports = router;
