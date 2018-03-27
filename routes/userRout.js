var express = require('express');
var usered = require('../app/controller/userCtrl');
var router = express.Router();
router.get('/getUsers', function(req, res){
  console.log('from hgggggggggggggfrouter');

})

router.post('/registration', usered.registration);
module.exports = router;
