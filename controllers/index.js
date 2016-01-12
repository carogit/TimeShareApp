var express = require('express');
var router = express.Router();

//var Advertdb = require('../models/adverts');

router.use(express.static(__dirname + '/../public'));

router.use('/', require('./advertsCtrl'));

//router.use('/home', require('./homeCtrl'));
router.get('/home', function(req, res) {
  res.send('WELCOME PAGE D\'ACCUEIL QUI MARCHE PAS')
});

module.exports = router


