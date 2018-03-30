var express = require('express');
var usered = require('../app/controller/userCtrl');
var router = express.Router();
router.get('/getUsers', function(req, res){
  console.log('from hgggggggggggggfrouter');

})

router.post('/registration', usered.registration);
router.post('/login',usered.login);
router.post('/verifyEmail',usered.verifyEmail);
router.post('/forgotPassword',usered.forgotPassword);
router.post('/resetPasswordByUserId',usered.resetPasswordByUserId);
module.exports = router;
