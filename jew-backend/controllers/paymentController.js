const Razorpay = require('razorpay');
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const   Payment = require("../models/paymentModel.js")
var crypto = require("crypto")
const app = express();
dotenv.config({path:"../config/config.env"})
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY || "rzp_test_Wx6io4dwXTCRxn",
  key_secret: process.env.RAZORPAY_API_KEY_SECRET ||"zATFwGeOvmcOwHvmArfyOsn8"
});

// Define your checkout controller
exports.checkout =  async (req, res) => {
    console.log(req.body.amount)
        const options={
            amount:Number(req.body.amount*100),
            currency:"INR",
        };
        try {
            const order = await instance.orders.create(options);
            // Implement your checkout logic here
            
            // Return a success response
            res.status(200).json({ 
                status:"ok",
                order,
             });
        } catch (error) {
            // Handle any errors that occur during checkout
            console.error(error);
            res.status(500).json({ error: 'An error occurred during checkout' });
        }
    };

    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
exports.paymentVerification = async (req, res) => {
    console.log(req.body)
    const {razorpay_order_id,razorpay_payment_id,razorpay_signature} = req.body;
    let body = razorpay_order_id + "|" + razorpay_payment_id;
   
    const expectedSignature = crypto.createHmac('sha256', "zATFwGeOvmcOwHvmArfyOsn8")// process.env.RAZORPAY_API_KEY_SECRET)
    .update(body.toString())
    .digest('hex');
    
    console.log("sign reci",razorpay_signature);
    console.log("sign gene",expectedSignature);
    
    const isAuthentic = expectedSignature === razorpay_signature;
    if (isAuthentic) {
        // Database comes here
    
        await Payment.create({
          razorpay_order_id,
          razorpay_payment_id,
          razorpay_signature,
        });
    
        res.redirect(
          `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
        );
      } else {
        res.status(400).json({
          success: false,
        });
      }
}
