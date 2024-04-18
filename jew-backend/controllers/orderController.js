const Order = require('../models/ordersModel');

exports.createOrder = async (req, res) => {
  try {
    const { email, products, totalAmount, shippingAddress } = req.body;
    const newOrder = new Order({ shippingAddress });
    await newOrder.save();
    res.status(201).json({ success: true, message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ success: false, message: 'Failed to place order' });
  }
};
