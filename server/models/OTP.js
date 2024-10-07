const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/emailVerificationTemplate");


const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        maxLength:50,
    },
    otp:{
        type:String,
        required:true,
        maxLength:50,
    },
    createdAt: {
		type: Date,
		default: Date.now,
		expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
	},
})

async function sendVerificationEmail(email, otp) {
    try{
        const mailResponse = await mailSender(
            email,
            "Verification Email",
            emailTemplate(otp)
        )
    } catch (err) {
        console.log("Error occured while sending verification email");
    }
}

otpSchema.pre("save", async function (next) {
    //Only send an email when a new document is created
    if (this.isNew) {
        await sendVerificationEmail(this.email, this.otp);
    }
    next()
})

module.exports=mongoose.model("OTP", otpSchema);