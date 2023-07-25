const mongoose = require("mongoose")

const schema = mongoose.Schema

const UserSchema =new schema({
    email:{
        type:String,
        required:true,
        Lowercase: true,
        unique: true
    },
    password:{
        type:String,
        required:true,
    }
});
const User = mongoose.model('user',UserSchema)
module.exports= User;