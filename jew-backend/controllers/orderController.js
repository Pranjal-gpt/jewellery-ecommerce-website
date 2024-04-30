const Order = require('../models/ordersModel');

exports.createOrder = async (req, res) => {
  try {
      const { email, products, totalAmount, shippingAddress } = req.body;
      
      await Order.create({
        userEmail:email,
        products:products,
        totalAmount:totalAmount,
        shippingAddress:shippingAddress
      })
      return res.json({status:"ok"})
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
        return res.json({ status: 'ok', info: orders })
      } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Internal server error' });
      }
};

exports.getByMerchant = async (req, res) => {
    try {
        const orders = await Order.find();
        return res.json({ status: 'ok', info: orders })
      } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Internal server error' });
      }
};
exports.updateStatus = async (req,res) =>{
  try {
    const {orderIds,status} = req.body
    console.log(orderIds,status)
    const updatedOrder = await Order.findByIdAndUpdate(orderIds, { status }, { new: true });

    if (!updatedOrder) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }
    console.log(updatedOrder)
    res.status(200).json({ success: true, message: 'Order status updated successfully', order: updatedOrder });
  } catch (error) {
    console.log(error)
    console.error('Error updating order status:', error);
    res.status(500).json({ success: false, message: 'Failed to update order status' });
  }
}

exports.deleteOrder = async (req,res) => {
  try {
    const result = await Order.deleteOne({ orderId: req.body.orderId });
    if (result.deletedCount === 0) {
      return { success: false, message: 'Order not found' };
    }

    return res.json({ status: 'ok', info: "Deleted Order Succesfully" })

  } catch (error) {
    console.log("no delete",error)
    return { status: "no", message: 'Failed to delete order', error: error.message };
  }
};

