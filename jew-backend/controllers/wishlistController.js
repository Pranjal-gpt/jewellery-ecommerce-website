const Wishlist = require('../models/wishlistModel')
exports.getWishlist = async (req, res) => {
    try {
        const wishlist = await Wishlist.find({user:req.body.user});
        return res.json({ status: 'ok', info: wishlist })
      } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Internal server error' });
      }
};
exports.setWishlist = async(req,res) =>{
    try {
        // console.log(req.body)
        const wishlist = await Wishlist.findOne({ user: req.body.user });
        console.log(wishlist&&wishlist.products.length)
    } catch (error) {
        console.log(error)
        res.status(501).json({status:"no",infoMsg:"Wishlist not saved"})
    }
}

exports.addToWishlist = async(req,res) =>{
    try {
        const wishlist = await Wishlist.findOne({ user: req.body.user });
        console.log(wishlist)
        if (wishlist) {
            wishlist.products.push(req.body.product);
            await wishlist.save();
            res.status(200).json({ status: "ok", infoMsg: "Product added to wishlist" });
        } else {
            const newWishlist = new Wishlist({ user: req.body.user, products: [req.body.product] });
            await newWishlist.save();
            res.status(201).json({ status: "ok", infoMsg: "Wishlist created and added" });
        }
    } catch (error) {
        console.log(error)
        res.status(501).json({status:"no",infoMsg:"Product not added to wishlist"})
    }
}
exports.deleteWishlist = async(req,res) =>{
    try {
        const wishlist = await Wishlist.findOne({ user: req.body.data.user });
        if (wishlist) {
            const index = wishlist.products.findIndex(product => product.id === req.body.data.productId);
            if (index !== -1) {
                wishlist.products.splice(index, 1);
                await wishlist.save();
                res.status(200).json({ status: "ok", infoMsg: "Product removed from wishlist" });
            } else {
                res.status(404).json({ status: "no", infoMsg: "Product not found in wishlist" });
            }
        } else {
            res.status(404).json({ status: "no", infoMsg: "Wishlist not found" });
        }
    } catch (error) {
        console.log(error)
        res.status(501).json({status:"no",infoMsg:"Wishlist not deleted"})
    }
}