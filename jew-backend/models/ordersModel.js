const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userEmail: { type: String, ref: 'User', required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
  totalAmount: { type: Number, required: true },
  shippingAddress: { type: String, required: true },
  orderDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'processing', 'shipped', 'delivered'], default: 'pending' }
  // Add more fields as needed
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
