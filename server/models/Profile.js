const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    gender:{
        type:String,
        maxLength:50,
    },
    dateOfBirth:{
        type:String,
        maxLength:50,
    },
    imageUrl:{
        type:String,
    }
})

module.exports=mongoose.model("Profile", ProfileSchema);