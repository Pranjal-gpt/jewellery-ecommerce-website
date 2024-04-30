const express = require('express');

const router = express.Router();
router.use(express.json())
const {checkout,paymentVerification} = require('../controllers/paymentController');
// GET /api/payment
router.get('/getkey', (req, res) => {
    res.status(200).json({ key:"rzp_test_Wx6io4dwXTCRxn" });
});
router.post('/checkout',checkout);
router.post('/paymentverification',paymentVerification)

module.exports = router;