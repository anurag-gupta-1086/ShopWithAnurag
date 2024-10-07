const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        maxLength:50,
    },
    lastName:{
        type:String,
        required:true,
        maxLength:50,
    },
    email:{
        type:String,
        required:true,
        maxLength:50,
    },
    encPass:{
        type:String,
        required:true,
    },
    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Profile",
    },
    country:{
        type:String,
        maxLength:50,
    },
    forgotPasswordToken:{
        type:String,
    },
    forgotPasswordTokenExpires:{
        type:Date,
    }
})

module.exports=mongoose.model("User", userSchema);