var mongoose = require('mongoose');
var Schema = mongoose.Schema;

     var adminrcd = new Schema({
            FirstName :               { type : String, required : true},
            LastName  :               { type : String },
            Phone     :               { type : Number },
            Image     :               { type : String, default : '' },
            Password  :               { type : String  },
            Email     :               { type : String },
            State     :               { type : String},
            City      :               { type : String },
            Gender    :               { type : String },
            active              :     { default:false,type:Boolean},
            verificationToken  :      { type : String},
            AccountType :             { type : String ,
                                            enum : ['Admin','Client'],
                                                    default : 'Admin' },
            Verifymail :              { verificationStatus : { type : Boolean , default : false },



            CreatedAt :               { type  : Date ,default : Date.now },
            IsDelete :                { type : Boolean , defaults : false },
            verificationToken :       { type : String }

                    }

   });

module.exports = mongoose.model('user',adminrcd);
