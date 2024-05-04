// import express from "express"
const express = require('express');
const router = express.Router();

const categories = require('../data/demodata');
var {New,allcategories,recommended,mostGifted,collections} = categories


router.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.ip;
  const userAgent = req.headers['user-agent'];
  console.log(`IP: ${ip}`);
  console.log(`User Agent: ${userAgent}`);
  res.json({New,allcategories,recommended,mostGifted,collections});
});

module.exports = router;
