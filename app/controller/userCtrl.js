var express = require('express');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var bcrypt = require('bcrypt');
var User = require('../models/userModel.js');
var crypto = require('crypto');

var registration = function(req, res) {

      let Password = req.body.Password;
      //let Email = req.body.email;
      let confirmpassword = { confirmpassword : req.body.confirmpassword };
      var token;
      if(confirmpassword.confirmpassword == Password) {

            User.findOne({Email:req.body.Email},{},(err,data)=>{
              if(err){  res.json({ message : "There are error due to ",err  }) }
                 if(!data){
                   crypto.randomBytes(10,(err,buf)=>{
                     token = buf.toString('hex');
                     req.body.verificationToken = token;
                   });
                    bcrypt.hash(Password, 10, (err, hash)=> {
                      if (err) {
                          res.json({ message: "unable to bcrypt the password",status: 200 })
                        } else if (hash){
                              let requestObj = {
                                  FirstName: req.body.FirstName,
                                  LasName: req.body.LastName,
                                  Phone: req.body.Phone,
                                  Email : req.body.Email,
                                  Password: hash,
                                  State : req.body.State,
                                  City :  req.body.City,
                                  Gender : req.body.Gender,
                                  verificationToken :req.body.verificationToken
                                  };

                                  if(requestObj.FirstName && requestObj.LasName && requestObj.Phone && requestObj.Email && requestObj.Gender && requestObj.State && requestObj.City){
                                    User.create(requestObj,(err, data)=>{
                                      if (err) {
                                            console.log('errrrrrrrrrrrrrrrrrr', err);
                                             res.json({ message: "error, There is unable to store record in db",status: 400 })
                                           } else if (data) {

                                               res.json({meassage :"New Account has been register successfully",status : 200})
                                               var transporter = nodemailer.createTransport({
                                                service: 'gmail',
                                                auth: {
                                                    user: 'javedkhan199501@gmail.com',
                                                    pass: 'arshwrarshi'
                                                }
                                            });
                                            var mailOptions = {
                                                from: 'javedkhan199501@gmail.com',
                                                to: 'javedkhan19950@gmail.com',
                                                subject: 'Advocate case dairy',
                                                text: 'this is the link for reset the password'
                                            };
                                            transporter.sendMail(mailOptions, function(error, info) {
                                                if (error) {
                                                    console.log(error);
                                                } else {
                                                    console.log('Email sent: ' + info.response);
                                                }
                                            })
                                          }
                                             else {
                               console.log("hi there are hash", data.Email);
                                res.json({ message: "There are an error to get the data", status: 400 })
                            }
                          })
                        }
                          else {res.json({ message : "Please enter the all required field ",meaasge : 400 })
                      console.log("errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",err);
                        }

                    }
                     else {
                        res.json({  message: "Password is unable to bcrypt the password" , status: 400 })
                    }
                })
              }
              else {
                res.json({messagge : "This email id is already register with us",status : 400})}
             })
      }
      else {
            res.json({ message: "Password and confirmPassword not match " });
        }
    }


    exports.registration = registration;
