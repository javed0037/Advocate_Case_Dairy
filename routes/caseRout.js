var express = require('express');

var router = express.Router();
var caseRouts = require('../app/controller/case');
router.get('/getUsers', function(req, res){
  console.log('from hgggggggggggggfrouter');

})

router.post('/addNewCase', caseRouts.addNewCase);
router.get('/getAllCase',caseRouts.getAllCase);
router.post('/addNewHearing',caseRouts.addNewHearing);
router.post('/getHearingByUserid',caseRouts.getHearingByUserid);
router.get('/getAllHearing',caseRouts.getAllHearing);
router.post('/getCaseById',caseRouts.getCaseById);

module.exports = router;
