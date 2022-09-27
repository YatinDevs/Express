var express = require('express');
const app = require('../app');
var router = express.Router();


router.get('/', function(req, res, next) {
 res.send("this is login page ")
});

module.exports = router;

