const express = require('express');
const wishlistController = require( '../controllers/wishlistController');
const router = express.Router();
// const categories = require('../data/demodata');
// var {WishlistData} = categories
router.post('/get',wishlistController.getWishlist );
router.post('/set',wishlistController.setWishlist );
router.post('/add',wishlistController.addToWishlist );
router.post('/delete',wishlistController.deleteWishlist );

module.exports = router;
