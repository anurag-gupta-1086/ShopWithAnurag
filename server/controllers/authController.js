//import the model
const User = require("../models/User");
const OTP = require("../models/OTP");
const Profile = require("../models/Profile");
const otpGenerator = require('otp-generator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const mailSender = require("../utils/mailSender");
const forgotPasswordTemplate = require("../mail/forgotPasswordTemplate");

exports.sendOTP = async(req,res) => {
    try{
        const {email} = req.body;
        console.log("email : ", email)
        const emailPresent = await User.findOne({email});
        if (emailPresent) {
            return res.status(401).json({
                success:false,
                message:'User is already registered',
            })
        }

        let otp = otpGenerator.generate(6,{
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        })
        let otpRes = await OTP.findOne({otp})
        while(otpRes) {
            otp = otpGenerator.generate(6,{
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
            })
            otpRes = await OTP.findOne({otp});
        }
        const otpPayload = {email, otp};
        const otpBody = await OTP.create(otpPayload)
        console.log("AG14 otpbody : ", otpBody)

        return res.status(200).json({
            success:true,
            message:'OTP sent successfully',
            otp,
        })
    }catch(err){
        console.log(err);
        return res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}


exports.signup = async(req,res) => {
    try{
        const {firstName, lastName, email, newPass, gender, country, enteredOtp} = req.body;
        if (!firstName || !lastName || !email || !newPass || !enteredOtp) {
            return res.status(403).json({
                success:false,
                message: "All fields are required",
            });
        }

        const otpResponse = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1)
        console.log(otpResponse);

        if (!otpResponse || otpResponse.length == 0) {
            return res.status(400).json({
                success:false,
                message:"Otp has expired",
            })
        } else if (enteredOtp !== otpResponse[0].otp) {
            console.log("Entered otp is ",enteredOtp)
            console.log("Backend otp is ",otpResponse[0].otp);
            return res.status(400).json({
                success:false,
                message:"Entered otp is incorrect",
            })
        }

        const hashedPassword = await bcrypt.hash(newPass, 10);

        const profileDetails = await Profile.create({
            gender:(gender) ? gender:null,
            dateOfBirth:null,
            imageUrl:null,
         })


        const response = await User.create({
            firstName, 
            lastName, 
            email, 
            encPass:hashedPassword, 
            additionalDetails:profileDetails._id,
            country:(country) ? country : null,
        });

        return res.status(200).json({
            success:true,
            data:response,
            message:'User entry created successfully',
        });
    }catch(err){
        console.log(err);
        return res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}

exports.login = async(req,res) => {
    try{
        const {email, pass} = req.body;
        let userResp = await User.findOne({email}).populate('additionalDetails');
        if (!userResp) {
            return res.status(401)
            .json({
                success:false,
                message:'Please first signup with your email id',
            })
        }
        console.log("userResp ",userResp)
        if (await bcrypt.compare(pass, userResp.encPass)) {
            const token = jwt.sign(
                { email, id:userResp._id},
                process.env.JWT_SECRET,
                {
                    expiresIn: "72h",
                }
            )
            
            userResp.token = token;
            userResp.encPass = undefined;

            const options = {
                expires: new Date(Date.now() + 3*24*60*60*1000),
                httpOnly: true,
            }

            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user:userResp,
                message:'User is logged in successfully',
            })

        } else {
            return res.status(401)
            .json({
                success:false,
                message:'Password is incorrect',
            })
        }

    }catch(err){
        console.log(err);
        return res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}


exports.changePassword = async(req,res) => {
    try{
        const {oldPass, newPass} = req.body;
        const {email} = req.user;
        const userResp = await User.findOne({email});
        if (!userResp) {
            return res.status(401)
            .json({
                success:false,
                message:'Please first signup with your email id',
            })
        }
        if (await bcrypt.compare(oldPass, userResp.encPass)) {
            const hashedPassword = await bcrypt.hash(newPass, 10);
            userResp.encPass = hashedPassword;
            await userResp.save();

            return res.status(200)
            .json({
                success:true,
                message:'New password is updated successfully'
            })

        } else {
            return res.status(401)
            .json({
                success:false,
                message:'Password is incorrect',
            })
        }

    }catch(err){
        console.log(err);
        return res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}


exports.deleteAccount = async(req,res) => {
    try{
        const {email} = req.user;
        const userResp = await User.findOne({email});
        if (!userResp) {
            return res.status(401)
            .json({
                success:false,
                message:'User details not found in db',
            })
        }

        const profileId = userResp.additionalDetails;
        const profileResp = await Profile.findById(profileId);
        if (!profileResp) {
            return res.status(401)
            .json({
                success:false,
                message:'User profile details not found in db',
            })
        }

        const userQuery = {email}
        const userDeletedResult = await User.deleteOne(userQuery);

        const profileQuery = {_id:profileId}
        const profileDeletedResult = await Profile.deleteOne(profileQuery);

        return res.status(200)
        .json({
            success:true,
            message:'User account is deleted'
        })

    }catch(err){
        console.log(err);
        return res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}


exports.forgotPassword = async(req,res) => {
    try{
        const {email} = req.body;
        const userResp = await User.findOne({email});
        if (!userResp) {
            return res.status(401)
            .json({
                success:false,
                message:'Please first signup with your email id',
            })
        }
        
        const token = crypto.randomBytes(20).toString('hex');
        userResp.forgotPasswordToken = token;
        userResp.forgotPasswordTokenExpires = Date.now() + 3600000;
        await userResp.save()

        const mailResponse = await mailSender(
            email,
            "Forgot Password Email",
            forgotPasswordTemplate(`http://localhost:3000/resetpassword/${token}`)
        )

        return res.status(200)
        .json({
            success:true,
            message:'Forgot password email sent successfully'
        })


    }catch(err){
        console.log(err);
        return res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}


exports.resetPassword = async(req,res) => {
    try{
        const {newPass, token} = req.body;
        const userResp = await User.findOne({forgotPasswordToken:token, forgotPasswordTokenExpires: {$gt:Date.now()} });
        if (!userResp) {
            return res.status(401)
            .json({
                success:false,
                message:'Token is expired',
            })
        }
        const hashedPassword = await bcrypt.hash(newPass, 10);
        userResp.encPass = hashedPassword
        userResp.forgotPasswordToken = undefined
        userResp.forgotPasswordTokenExpires = undefined
        await userResp.save();

        return res.status(200)
        .json({
            success:true,
            message:'Password is updated successfully'
        })


    }catch(err){
        console.log(err);
        return res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}