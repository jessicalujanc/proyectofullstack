var express = require('express');
var router = express.Router();

router.get('/users', function(req, res, next) {
  res.send('Esta es la página de usuarios');
});

module.exports = router;
