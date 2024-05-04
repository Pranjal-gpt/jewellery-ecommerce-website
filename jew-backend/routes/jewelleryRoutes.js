
const express = require('express');
const cors= require('cors');
const router = express.Router();
router.use(express.json())
const jewelleryController = require('../controllers/jewelleryController');
const app = express();
app.use(cors());
// Define user routes
router.post('/add',jewelleryController.insertJewellry);
router.post('/bymerchant',jewelleryController.getJewelryByMerchant);
router.delete('/delete/:id',jewelleryController.deleteJewellery);
router.post('/edit', jewelleryController.editJewellery); 
router.get('/all', jewelleryController.getAllJewelleries);
router.get('/:id', jewelleryController.getJewelleryById);

module.exports = router;
