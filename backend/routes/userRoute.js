const express=require("express")
const router=express.Router();
const {registerUser, loginUser, logOut, getUser}=require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");


router.post("/register",registerUser);
router.post("/login",loginUser)
router.get("/logout",logOut)
router.get("/getUser",protect,getUser)



module.exports=router;