const express = require('express');
const wishlistController = require( '../controllers/wishlistController');
const router = express.Router();
// const categories = require('../data/demodata');
// var {WishlistData} = categories
router.get('/',wishlistController.createWishlist );

module.exports = router;
