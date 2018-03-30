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
            resetPasswordToken  : { type: String},
            resetPasswordExpires: { type: Date},
            AccountType :             { type : String ,
                                            enum : ['Admin','Client'],
                                                    default : 'Admin' },
          verifyEmail         :       {verificationStatus: {type: Boolean, default :false},
                                               Email: {type:String}
                                  },



            CreatedAt :               { type  : Date ,default : Date.now },
            IsDelete :                { type : Boolean , defaults : false }



   });

module.exports = mongoose.model('user',adminrcd);
