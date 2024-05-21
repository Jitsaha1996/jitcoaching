const express =require("express")
const router=express.Router();
const {registerUsers, authUsers}=require("../controllers/userController")
router.route('/').post(registerUsers);
router.route('/login').post(authUsers);
module.exports=router;