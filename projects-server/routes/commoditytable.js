var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false });
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json([

    ])
});

router.post('/', urlencodedParser, function(req, res, next) {

    res.json([])

});
module.exports = router;