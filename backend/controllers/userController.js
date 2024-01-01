const asyncHandler=require("express-async-handler")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")

//register user controller
const registerUser=asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body;
    //validation
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please fill in all required fields")
    }
    if(password.length<6){
        res.status(400)
        throw new Error("password must be upto 6 character")
    }

    const {User}=require("../models/userModel")
    //check if user exists
    const userExists=await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error("Email already Registered")
    };

    res.status(200).json({
        success:true,
        message:'regisered successfully'
    })
})


module.exports={
    registerUser
}