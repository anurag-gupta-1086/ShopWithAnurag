const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

exports.auth = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({success:false, message:'Token missing'});
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decode;
    } catch(error) {
        return res.status(401).json({success:false, message:"Token is invalid"})
    }
    next();
}