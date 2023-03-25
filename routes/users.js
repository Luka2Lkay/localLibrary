var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;



//mongodb+srv://Luka:<pass#1ster0.ywwbswc.mongodb.net/local_library?retryWrites=true&w=majority
