var express = require('express');
var app = express();
//var mongodb = require('mongodb').MongoClient;
var bodyparser = require('body-parser');
var mongoose  = require('mongoose');
var bcrypt = require('bcrypt');
var cors = require('cors');

app.use(bodyparser.urlencoded({
  extended : false
}));
app.use(bodyparser.json());
var USER =require('./routes/userRout');
var CASE =  require('./routes/caseRout');
app.use(cors());
app.use('/user',USER);
app.use('/case',CASE);
mongoose.connect('mongodb://localhost:27017/advocate_case_Dairy');
//mongodb.connect('mongodb://javed0037:javed123@ds123619.mlab.com:23619/advocate_case_dairy');
app.listen(9090,function(req,res){
  console.log("port 9090 is Running......................... ");
})

module.exports = app;
