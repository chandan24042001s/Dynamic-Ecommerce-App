const asyncHandler=require("express-async-handler")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: "1d"
    })
}

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

    const User=require("../models/userModel")
    //check if user exists
    const userExists=await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error("Email already Registered")
    };

    //Create new User
    const user=await User.create({
        name,email,password
    })

    //Generate Token for User
    if(user){
        const {_id,name,email,role}=User
        res.cookie("token",generateToken(_id),{
            path:"/",
            httpOnly:true,
            expires:new Date(Date.now()+1000*86400),
            // secure:true,  for deployment
            // sameSite:none
        })
         // send user data 
        res.status(201).json({
            success:true,
            data:_id,name,email,role,token,
            message:'regisered successfully'
        })
    }else{
        res.status(400)
        throw new Error("Invalid user Data")
    }
   
  
})


module.exports={
    registerUser
}