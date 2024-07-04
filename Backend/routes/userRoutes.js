const express =require("express")
const router=express.Router();
const {registerUsers, authUsers,getUserList}=require("../controllers/userController")
router.route('/').post(registerUsers);
router.route('/').get(getUserList);
router.route('/login').post(authUsers);
module.exports=router;