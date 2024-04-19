const Order = require('../models/ordersModel');

exports.createOrder = async (req, res) => {
  try {
      const { email, products, totalAmount, shippingAddress } = req.body;
    //   console.log(products)
      
      await Order.create({
        userEmail:email,
        products:products,
        totalAmount:totalAmount,
        shippingAddress:shippingAddress
      })
      return res.json({status:"ok"})
    // res.status(201).json({ success: true, message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ success: false, message: 'Failed to place order' });
  }
};
exports.getByUser = async (req, res) => {
    try {
        console.log(req.body.user)
        const orders = await Order.find({userEmail:req.body.user});
        console.log(orders)
        // console.log("user found",user)
        return res.json({ status: 'ok', info: orders })
      } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Internal server error' });
      }
};
