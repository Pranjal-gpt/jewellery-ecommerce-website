const Wishlist = require('../models/wishlistModel')

exports.createWishlist = async(req,res) =>{
    try {
        console.log(req.body)
        res.status(201).json({status:"ok",infoMsg:req.body})
    } catch (error) {
        res.status(501).json({status:"no",infoMsg:"Wishlist not saved"})
    }
}