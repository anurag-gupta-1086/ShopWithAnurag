const User = require("../models/User");
const Profile = require("../models/Profile");
exports.update = async(req,res) => {
    try{
        const {firstName, lastName, email, gender, country, dateOfBirth, image, userId} = req.body;
        
        const userData = await User.findById(userId);
        if (!userData) {
            return res.status(404).json({
                success:false,
                message:'User not found',
            })
        }

        userData.firstName = firstName;
        userData.lastName = lastName;
        userData.email = email;
        userData.country = country;

        await userData.save();
        
        const profileId = userData.additionalDetails;
        const profileData = await Profile.findById(profileId);
        if (!profileData) {
            return res.status(404).json({
                success:false,
                message:'Profile not found',
            })
        }
        profileData.gender = gender;
        profileData.dateOfBirth = dateOfBirth;
        profileData.imageUrl = image;
        
        await profileData.save();

        const updatedUserDetails = await User.findOne({
            _id:userId,
        }).populate('additionalDetails');

        return res.status(200).json({
            success:true,
            message:'User details updated successfully',
            data:updatedUserDetails,
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