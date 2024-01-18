import { useSelector } from "react-redux"

const ShowonLogin=({children})=>{
    const {user}=useSelector((store)=>store.auth)
    if(user){
        return children
    }
    return null
}

export const ShowonLogout=({children})=>{
    const {user}=useSelector((store)=>store.auth)
    if(!user){
        return children
    }
    return null
}

export default ShowonLogin;
