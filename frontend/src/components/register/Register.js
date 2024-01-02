import React from 'react'
import "./register.scss"
const Register = () => {
  return (
    <form class="form">
    <p class="title">Register </p>
    <p class="message">Signup now and get full access to our app. </p>
     
        <label>
            <input class="input" type="text" placeholder="" required=""/>
            <span>Name</span>
        </label>

       

            
    <label>
        <input class="input" type="email" placeholder="" required=""/>
        <span>Email</span>
    </label> 
        
    <label>
        <input class="input" type="password" placeholder="" required=""/>
        <span>Password</span>
    </label>
    <label>
        <input class="input" type="password" placeholder="" required=""/>
        <span>Confirm password</span>
    </label>
    <button class="submit">Submit</button>
    <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>
  )
}

export default Register