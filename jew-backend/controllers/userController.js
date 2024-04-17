// UserController.js

const User = require('../models/userModel'); // Assuming you have a User model

// Sign up a new user
exports.signup = async (req, res) => {
  console.log(req.body)
	try {
		await User.create(req.body)
		res.json({ status: 'ok' })
	} catch (err) {
    console.log(err)
		res.json({ status: 'error', error: 'Duplicate email' })
	}
};

// Sign in an existing user
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !user.comparePassword(password)) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Here you can generate a JWT token for authentication if needed
    res.status(200).json({ message: 'Sign in successful' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all users (admin-only)
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
