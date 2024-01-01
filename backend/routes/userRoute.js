const express=require("express")
const router=express.Router();
const {registerUser, loginUser, logOut, getUser, loginStatus, updateUser}=require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");


router.post("/register",registerUser);
router.post("/login",loginUser)
router.get("/logout",logOut)
router.get("/getUser",protect,getUser)
router.patch("/loginStatus", protect, loginStatus)
router.post("/updateuser", protect, updateUser)


module.exports=router;
