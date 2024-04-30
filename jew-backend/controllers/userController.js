// UserController.js

const User = require('../models/userModel'); // Assuming you have a User model
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// Sign up a new user
exports.signup = async (req, res) => {
  console.log(req.body)
	try {
    const newPassword = await bcrypt.hash(req.body.password, 8)
		await User.create({
      fullname:req.body.fullname,
      email:req.body.email,
      password:newPassword,
      phone:req.body.phone,
      address1:req.body.address1,
      userType:req.body.userType
    })
		res.json({ status: 'ok',msg:"Account created Succesfully" })
	} catch (err) {
    console.log(err)
		res.json({ status: 'uerror', error: 'Account from this Email already Exist.' })
	}
};

// Sign in an existing user
exports.signin = async (req, res) => {
    const user = await User.findOne({
      email: req.body.email,
    })
  
    if (!user) {
      return res.json({ status: 'no', user: false,error:"User Doesn\'t Exist."})
    }
  
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    )
  
    if (isPasswordValid) {
      const token = jwt.sign(
        {
          name: user.fullname,
          email: user.email,
          userType:user.userType
        },
        'secret123'
      )
  
      return res.json({ status: 'ok', user: token,userType:user.userType })
    } else {
      return res.json({ status: 'no', user: false,error:"Please Enter Correct Password"})
    }
  }

  exports.merchantDetails = async (req, res) => {
    try {
      const user = await User.find({email:req.body.merchant});
      // console.log("user found",user)
      return res.json({ status: 'ok', info: user })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: 'Internal server error' });
    }
  };

  exports.userDetails = async (req, res) => {
    try {
      const user = await User.find({email:req.body.user});
      // console.log("user found",user)
      return res.json({ status: 'ok', info: user })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: 'Internal server error' });
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
