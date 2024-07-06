const User = require('../models/usersModel');
const asynHandler = require('express-async-handler');
const jwtToken = require('../utils/generateTokes');


const registerUsers = asynHandler(async (req, res) => {
  const { name, email, password, pic,dob,phone } = req.body;
  const userExist = await User.findOne({ email })
  if (userExist) {
    res.status(400);
    throw new Error("User Already Exist");
  }
  const user = await User.create({
    name, email, password, pic,dob,phone
  })
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      pic: user.pic,
      email: user.email,
      isAdmin: user.isAdmin,
      phone:user.phone,
      dob:user.dob,
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
const editUsers = asynHandler(async (req, res) => {
  const { name, pic,dob,phone ,email} = req.body;
  const userExist = await User.findOne({ email })
  const filter={email:userExist.email};
  console.log("Filter1",userExist);
  // if (userExist) {
  //   res.status(400);
  //   throw new Error("User Already Exist");
  // }
  const updateDocument = {
    $set: {
      name:name,
    pic:pic,
    dob:dob,
    phone:phone
    },
 };
  const user = await User.updateOne(filter,updateDocument);
  console.log("User",user);
  if (user) {
    res.status(200).json({
      message:`${email} updated sucessfully!!`,
      status:"sucess",
      statuscode:200
    })
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }


})

const authUsers = asynHandler(async (req, res) => {
  const { email, password } = req.body;//desturctaring


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
const getUserList = asynHandler(async (req, res) => {
 
  const userList = await User.find();
  res.json(userList);
})
module.exports = { registerUsers, authUsers,getUserList,editUsers };