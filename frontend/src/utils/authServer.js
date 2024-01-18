import axios from "axios";

const BACKEND_URL=process.env.REACT_APP_BACKEND_URL;
export const API_URL=`${BACKEND_URL}/api/users`

//register user
const register=async(userData)=>{
    const response=await axios.post(API_URL + '/register',userData,{
        withCredentials:true
    })
    return response.data;
}

//login user
const login=async(userData)=>{
    const response=await axios.post(API_URL + '/login',userData,{
        withCredentials:true
    })
    return response.data;
}

//logout user
const logout=async(userData)=>{
    const response=await axios.get(`https://localhost:5000/api/users/logout`)
    return response.data.message;
}


const authService={
    register,
    login,logout
}

export default authService;