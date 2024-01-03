import React, { useEffect, useState } from 'react'
import "./register.scss"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { RESET_AUTH, login } from '../../utils/reduxStore/authSlice';
import { validateEmail } from '../../utils/validateEmail';
const Login = () => {
    const {isSuccess}=useSelector((state)=>state.auth)
    const {isLoggedIn}=useSelector((state)=>state.auth)
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        name: '',
   email: '',
   password: '',
   
    }
    );
    const {name,email,password}=formData;

    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value});
    }

    const loginUser=async(e)=>{
        e.preventDefault();
        console.log(name,email,password);
        if(!email || !password){
            return toast.error("All field are required")
        }
        if(password.length<6){
            return toast.error("password must be upto 6 characters")
        }
        if(!validateEmail(email)){
            return toast.error("please enter a valid email")
        }
      
        const userData={email,password}
        await dispatch(login(userData))
    }
   useEffect(()=>{
    console.log(isSuccess)
    if(isSuccess && isLoggedIn){
       navigate("/")
    }
    dispatch(RESET_AUTH());
   },[isLoggedIn,isSuccess,dispatch,navigate])


  return (
    <div className='formdiv'>
           <form className="form" onSubmit={loginUser} >
    <p className="title">login </p>
    <p className="message">Signup now and get full access to our app. </p>
    

    <label>
        <input name="email" value={email} onChange={handleInputChange} className="input" type="email" placeholder="" required/>
        <span>Email</span>
    </label> 
        
    <label>
        <input name="password" value={password} onChange={handleInputChange} className="input" type="password" placeholder="" required/>
        <span>Password</span>
    </label>
    
    <button type='submit' className="submit">Submit</button>
    <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>
    </div>
  )
}

export default Login