const Cart = require("../models/Cart");
exports.add = async(req,res) => {
    try{
        //req.user.id contains user id
        
        const cartData = await Cart.findOne({productId:req.body.id, userId:req.user.id});
        
        if (!cartData) {
            const cartPayload = {
                userId:req.user.id,
                productId:req.body.id,
                title:req.body.title,
                subtitle:req.body.subtitle,
                price:req.body.price,
                oldPrice:req.body.oldPrice,
                imageUrl:req.body.imageUrl,
                quantity:1,
            }
            const cartBodyCreate = await Cart.create(cartPayload)
        } else {
            if (req?.body?.type && req.body.type === 'productspage') {
                return res.status(200).json({
                    success:false,
                    message:'Item is already in the cart',
                })
            }
            cartData.quantity = req.body.quantity;
            await cartData.save()
        }

        return res.status(200).json({
            success:true,
            message:'Updated the cart successfully',
        })
    }catch(err){
        console.log(err);
        return res.status(500)
        .json({
            success:false,
            message:"internal server error"
        })
    }
}

exports.get = async(req,res) => {
    try{
        const {id} = req.user
        
        const cartData = await Cart.find({userId:req.user.id});
        
        if (!cartData) {
            return res.status(500)
            .json({
                success:false,
                data:"Cart data could not be fetched"
            })
        }

        return res.status(200).json({
            success:true,
            message:'Cart data fetched successfully',
            data:cartData
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

exports.removeFromCart = async(req,res) => {
    try{
        const {id} = req.params
        
        const cartData = await Cart.findOne({userId:req.user.id, productId:id});
        
        if (!cartData) {
            return res.status(500)
            .json({
                success:false,
                data:"Item is already deleted"
            })
        }

        const deletedData = await Cart.findByIdAndDelete(cartData._id);

        return res.status(200).json({
            success:true,
            message:'Item is deleted',
            data:deletedData
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