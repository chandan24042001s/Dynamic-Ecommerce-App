require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors")
const cookieParser=require("cookie-parser")
const PORT=process.env.PORT || 5000
const app= express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))
app.use(
    cors({
        origin:["https://localhost:3000","https://siya-ram-store.vercel.app"],
        credentials:true,
    })
)

//Routes
app.get("/",(req,res)=>{
    res.send("homepage")
})

mongoose.connect(process.env.DATABASE_URL)
        .then(()=>{
            app.listen(PORT,()=>{
                console.log("app run at 3000");
})
            })

        .catch((err)=>{
            console.log(err)
        })
     

