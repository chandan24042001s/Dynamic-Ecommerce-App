const dotenv= require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors")
const cookieParser=require("cookie-parser")
const PORT=process.env.PORT || 5000
const app= express();

//Routes
app.get("/",(req,res)=>{
    res.send("homepage")
})

mongoose.connect(process.env.MONGODB_URL)
        .then(()=>{
            app.listen(PORT,()=>{
                console.log("app run at 3000");
})
            })

        .catch((err)=>{
            console.log(err)
        })
     

