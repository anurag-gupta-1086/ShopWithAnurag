const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    productId:{
        type:String,
        required:true,
        maxLength:50,
    },
    title:{
        type:String,
        required:true,
        maxLength:50,
    },
    subtitle:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    oldPrice:{
        type:Number,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    },
    quantity:{
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    }
    
})

module.exports=mongoose.model("Cart", cartSchema);