var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    roll:{
        type:Number,
        validate(value){
            if(value < 0 ) throw new Error("Negative number isn't real")
        }
    },
    name:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        unique:true
    },
    addr:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    }
})


var Users = mongoose.model('Users',UserSchema);
module.exports = Users;