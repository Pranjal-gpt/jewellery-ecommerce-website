const express = require('express');
const router = express.Router();
const categories = require('../data/demodata');
var {WishlistData} = categories
router.get('/', (req, res) => {
  // Send the data from demodata.js as JSON
  res.json(WishlistData);
});

module.exports = router;
