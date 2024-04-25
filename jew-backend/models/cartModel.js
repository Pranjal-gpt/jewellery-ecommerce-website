const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userEmail: { type: String, required: true }, // Primary key for the user's email
  products: [{ 
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, // Reference to the product
    quantity: { type: Number, default: 1 } // Quantity of the product in the cart
  }],
  created_at: { type: Date, default: Date.now } // Timestamp for when the cart was created
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
