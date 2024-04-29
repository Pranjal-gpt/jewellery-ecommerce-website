const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  user: { type: String, ref: 'User', required: true,unique: true }, // Reference to the user who owns the wishlist
  products: [{ type:Object, ref: 'Product' }], // Array of product references
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;
