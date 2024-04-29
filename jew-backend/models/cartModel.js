const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: { type: String, ref: 'User', required: true,unique: true }, // Reference to the user who owns the wishlist
  products: [{ type:Object, ref: 'Product' }], // Array of product references
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
