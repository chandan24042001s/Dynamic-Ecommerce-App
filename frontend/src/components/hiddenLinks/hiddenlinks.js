import { useSelector } from "react-redux"

const ShowonLogin=({children})=>{
    const {isLoggedIn}=useSelector((state)=>state.auth)
    if(isLoggedIn){
        return children
    }
    return null
}

export const ShowonLogout=({children})=>{
    const {isLoggedIn}=useSelector((state)=>state.auth)
    if(!isLoggedIn){
        return children
    }
    return null
}

export default ShowonLogin;
