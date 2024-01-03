import axios from "axios";

const BACKEND_URL=process.env.REACT_APP_BACKEND_URL;
export const API_URL=`${BACKEND_URL}/api/users/`

//register user
const register=async(userData)=>{
    const response=await axios.post(`http://localhost:5000/api/users/register`,userData)
    return response.data;
}

const authService={register
}

export default authService;