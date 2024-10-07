const nodemailer = require("nodemailer")

const mailSender = async (email, title, body) => {
    try{
        console.log("present here 1")
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
            secure:false,
        })
        console.log("present here 2")
        const info = await transporter.sendMail({
            from: `ShopWithAnurag <${process.env.MAIL_USER}>`,
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        })
        console.log("present here 4")
        return {
            success:true,
            data:info,
        }
    } catch(err) {
        console.log("present here 3", err)
        return {
            success:false,
            message:err.message,
        }
    }
}

module.exports = mailSender