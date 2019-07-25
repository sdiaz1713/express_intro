var express = require('express');
var router = express.Router();
var userData = require('../mock-data/user-data');

/* GET user's favorite color. */
router.get('/:name', function(req, res, next) {
  var name = req.params.name
  res.json(userData[name]["favoriteColor"])
});

module.exports = router;
