const mongoose = require('mongoose');
// Define a function to generate order ID
function generateOrderId() {
  const prefix = 'ORD';
  const randomNum = Math.floor(Math.random() * 900000) + 100000;
  return prefix + randomNum;
}
const orderSchema = new mongoose.Schema({
  orderId: { type: String, default: generateOrderId },
  userEmail: { type: String, ref: 'User' },
  products: [{ type: String, ref: 'Product' }],
  totalAmount: { type: Number, required: true },
  shippingAddress: { type: String, required: true },
  orderDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'processing', 'shipped', 'delivered'], default: 'pending' }
  // Add more fields as needed
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
