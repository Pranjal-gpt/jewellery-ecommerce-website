// userRoutes.js

const express = require('express');
const router = express.Router();
router.use(express.json())
const UserController = require('../controllers/userController');

// Define user routes
router.post('/signup',UserController.signup);
router.post('/signin',async (req, res) => {res.json({ status: 'ok' })})  //UserController.signin);
router.get('/users', UserController.getUsers); // This route should be protected (admin-only)

module.exports = router;
