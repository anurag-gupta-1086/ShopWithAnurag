const express = require('express');
const router = express.Router();

const {signup, sendOTP, login, changePassword, deleteAccount, forgotPassword, resetPassword} = require('../controllers/authController');
const { auth } = require("../middlewares/auth");

router.post('/signup', signup)
router.post('/sendotp', sendOTP)
router.post('/login', login)
router.post('/changepassword', auth, changePassword)
router.post('/deleteaccount', auth, deleteAccount)
router.post('/forgotpassword', forgotPassword)
router.post('/resetpassword', resetPassword)

module.exports = router;