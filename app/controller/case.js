var express = require('express');
var mongoose = require('mongoose');
var Case = require('../models/caseModel.js');
var Hearing = require('../models/hearing.js');

var addNewCase = function(req,res){
      reqobj = {
         caseName  : req.body.caseName,
         engagedFor : req.body.engagedFor,
         courtName  : req.body.courtName,
         clientname  : req.body.clientname,
         opposite_Party_Name  : req.body.opposite_Party_Name,
         opposite_Party_Advocate  : req.body.opposite_Party_Advocate,
         applicable_Act  : req.body.applicable_Act,
         remarks   : req.body.remarks,
         case_state  : req.body.case_state,
         endDate : req.body.endDate,
         startDate : req.body.startDate
       };
        if(reqobj.caseName && reqobj.engagedFor && reqobj.courtName && reqobj.clientname && reqobj.opposite_Party_Name && reqobj.opposite_Party_Advocate && reqobj.applicable_Act){
              Case.create(reqobj,(err,data) => {
                  if(err){
                  res.json({message : "There  is error to save  info in db",status : 400,err:err})
                  }
                  else if(data){
                  res.json({message: "Your case has been listed in our files!.",status : 200 })
                }
                else{
                  res.json({message : "Please enter the correct details"})
                }
              })
            }
            else {
               res.json({message : "Please enter the all required fields ",status : 400})
            }
    }

  getAllCase =  (req,res) => {
    _id = req.body.userId;
    Case.find({},(err,data)=>{
      if(err){
        res.json({message : "There is error to get data from db",data : 400})
      }else if(data){
        res.json({message : "All cases records  here",status : 200,records : data})
      }else{
        res.json({message : "Error to get data",status : 400})
      }
    })
  }

   getCaseById =  (req,res) => {
    let Id = req.body.id;
    Case.find({_id : Id},(err,data)=>{
      if(err){
        res.json({message : "There is error to get data from db", status : 400})
      }else if(data){
        res.json({message : "Your Case.",status : 200,records : data})
      }else{
        res.json({message : "Error to get data",status : 400})
      }
    })
  }


    addNewHearing = (req,res)=>{
      reqobj = {
                  selectCase : req.body.caseId,
                  fixedFor :req.body.fixedFor,
                  scheduled_Date :req.body.scheduled_Date,
                  remarks  : req.body.remarks
      }
        if(reqobj.selectCase,reqobj.fixedFor && reqobj.scheduled_Date && reqobj.remarks){
      Hearing.create(reqobj,(err,data)=>{
        if(err){
        res.json({message : "There  is error to save  info in db",data : 400})
        }
        else if(data){
        res.json({message: "New hearing of case Scheduled successfully",data : 200 })
      }
      else{
        res.json({message : "Please enter the correct details"})
      }
    })
  }
  else {
     res.json({message : "Please enter the all required fields ",data : 200})
  }

}
getHearingByUserid =  (req,res) => {
  _id = req.body.userId;
  Hearing.findOne({_id},{}).populate("selectCase").exec(function(err, data){
            if(err){
              res.json({message : "Please enter the correct details",status :400})
            }else if(data) {
              res.json({message : "Hearing detailed received sucessfully",status:200,data :data})
            }else {res.json({message : "Please enter the correct userId",status : 400})
          }
  })
}
//get All hearing api regarding all cases .
 getAllHearing = (req,res)=>{
   Hearing.find({}).populate("selectCase").exec(function(err, data){
     if(err){
       res.json({message : "error to get data from db",status : 400})
     }else if(data) {
       res.json({message : "All hearing details are get sucessfully regarding all cases",status : 200,data:data})
     }else{
       res.json({message : "error to get the data",status : 400})
     }
   })
 }

     exports.addNewCase = addNewCase;
     exports.getAllCase = getAllCase;
     exports.addNewHearing = addNewHearing;
     exports.getHearingByUserid = getHearingByUserid;
     exports.getAllHearing = getAllHearing;
     exports.getCaseById = getCaseById;