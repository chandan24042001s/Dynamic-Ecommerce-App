const express=require("express")
const router=express.Router();
const {registerUser, loginUser}=require("../controllers/userController");


router.post("/register",registerUser);
router.post("/login",loginUser)
router.post("/logout",loginUser)
module.exports=router;