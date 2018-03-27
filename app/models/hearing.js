var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Schema created for to case we can add new case or delete for update .........//
   var hearingdetails = new Schema({

selectCase      : { type: mongoose.Schema.Types.ObjectId, ref: 'cases'},
fixedFor                : { type : String },//fixed for used  for reason for next hearing....
scheduled_Date          :  {type : Date  },
remarks                 :  {type : String }
});

 module.exports = mongoose.model('hear',hearingdetails);
//blockcha1n7  password for wifi
