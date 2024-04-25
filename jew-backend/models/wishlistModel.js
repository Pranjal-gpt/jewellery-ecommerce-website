const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  user: { type: String, ref: 'User', required: true }, // Reference to the user who owns the wishlist
  products: [{ type: String, ref: 'Product' }], // Array of product references
  created_at: { type: Date, default: Date.now } // Timestamp for when the wishlist was created
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;
