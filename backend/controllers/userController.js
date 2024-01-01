const asyncHandler=require("express-async-handler")

//register user
const registerUser=asyncHandler(async(req,res)=>{
    res.send("Register user....")
    res.status(200).json({
        success:true,
        message:'regisered successfully'
    })
})

module.exports={
    registerUser
}