const express=require("express")
const router=express.Router();
const {registerUser, loginUser, logOut}=require("../controllers/userController");


router.post("/register",registerUser);
router.post("/login",loginUser)
router.post("/logout",logOut)
module.exports=router;