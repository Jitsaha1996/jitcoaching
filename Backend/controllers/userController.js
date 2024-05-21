const User = require('../models/usersModel');
const asynHandler = require('express-async-handler');
const jwtToken = require('../utils/generateTokes');


const registerUsers = asynHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  const userExist = await User.findOne({ email })
  if (userExist) {
    res.status(400);
    throw new Error("User Already Exist");
  }
  const user = await User.create({
    name, email, password, pic
  })
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      pic: user.pic,
      email: user.email,
      isAdmin: user.isAdmin,
      token: jwtToken(user._id)
    })
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }

  res.json({
    name, email
  })

})

const authUsers = asynHandler(async (req, res) => {
  const { email, password } = req.body;


  const user = await User.findOne({ email });
  const res1 = await user.matchPassword(password);


  if (user && res1) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: jwtToken(user._id)

    });
  } else {
    res.status(401);
    throw new Error("Invalid Email and Password");
  }


})
module.exports = { registerUsers, authUsers };