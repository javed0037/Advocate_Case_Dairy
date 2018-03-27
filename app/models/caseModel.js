var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Schema created for to case we can add new case or delete for update .........//
   var casedetails = new Schema({

       caseName               : { type : String },
       engagedFor             : { type : String },
       courtName              : { type : String },
       clientname             : { type : String },
       opposite_Party_Name     : { type : String },
       opposite_Party_Advocate : { type : String },
       applicable_Act          : { type : String },
       remarks                 : { type : String },
       case_state              : { type : String ,  enum : ['running','decided'],
                                                           default : 'running' },
       CreatedAt :               { type  : Date ,default : Date.now },
       IsDelete :                { type : Boolean , defaults : false }         

     });
 module.exports = mongoose.model('cases',casedetails);
