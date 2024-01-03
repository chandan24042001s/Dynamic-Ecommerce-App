import React, { useEffect, useState } from 'react'
import "./register.scss"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { register } from '../../utils/reduxStore/authSlice';
import { validateEmail } from '../../utils/validateEmail';
const Register = () => {
    const isSuccess=useSelector((store)=>store.auth)
    const isLoggedIn=useSelector((store)=>store.auth)
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        name: '',
   email: '',
   password: '',
   cpassword: ''
    }
    );
    const {name,email,password,cpassword}=formData;

    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value});
    }

    const registerUser=async(e)=>{
        e.preventDefault();
        console.log(name,email,password,cpassword);
        if(!email || !password){
            return toast.error("All field are required")
        }
        if(password.length<6){
            return toast.error("password must be upto 6 characters")
        }
        if(!validateEmail(email)){
            return toast.error("please enter a valid email")
        }
        if(password!==cpassword){
            return toast.error("password do not match")
        }
        const userData={name,email,password}
        await dispatch(register(userData))
    }
   useEffect(()=>{
    if(!isSuccess && isLoggedIn){
       navigate("/")
    }
   })


  return (
    <form className="form" onSubmit={registerUser} >
    <p className="title">Register </p>
    <p className="message">Signup now and get full access to our app. </p>
     
        <label>
            <input name="name" value={name} onChange={handleInputChange} className="input" type="text" placeholder="" required/>
            <span>Name</span>
        </label>

    <label>
        <input name="email" value={email} onChange={handleInputChange} className="input" type="email" placeholder="" required/>
        <span>Email</span>
    </label> 
        
    <label>
        <input name="password" value={password} onChange={handleInputChange} className="input" type="password" placeholder="" required/>
        <span>Password</span>
    </label>
    <label>
        <input name="cpassword" value={cpassword} onChange={handleInputChange} className="input" type="password" placeholder="" aria-required/>
        <span>Confirm password</span>
    </label>
    <button type='submit' className="submit">Submit</button>
    <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>
  )
}

export default Register