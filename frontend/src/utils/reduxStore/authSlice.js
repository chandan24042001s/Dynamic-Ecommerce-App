import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from '../authServer';
import { toast } from 'react-toastify';

const initialState = {
    isLoggedIn:false,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:" ",
    user:null
}

export const register=createAsyncThunk(
    "auth/register",
    async(userData,thunkAPI)=>{
        try{
            return await authService.register(userData)
        }catch(error){
            const message=(
                error.response &&
                error.response.data.message ||
                error.message ||
                error.toString
            )
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const login=createAsyncThunk(
    "auth/login",
    async(userData,thunkAPI)=>{
        try{
            return await authService.login(userData)
        }catch(error){
            const message=(
                error.response &&
                error.response.data.message ||
                error.message ||
                error.toString
            )
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const logout=createAsyncThunk(
    "auth/logout",
    async(userData,thunkAPI)=>{
        try{
            return await authService.logout()
        }catch(error){
            const message=(
                error.response &&
                error.response.data.message ||
                error.message ||
                error.toString
            )
            return thunkAPI.rejectWithValue(message)
        }
    }
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    RESET_AUTH(state){
        state.isError=false;
        state.isLoggedIn=false;
        state.isSuccess=false;
        state.isLoading=false;
        state.message=" ";
        
    }
  },
  extraReducers:(builder) => {
    builder
    //register user
        .addCase(register.pending, (state) => {
            state.isLoading = true;
        })

        .addCase(register.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.user=null;
            toast.success(action.payload)
        })

        .addCase(register.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isLoggedIn=true;
            state.user=action.payload;
            toast.success("Registration Successful")
        })

//login user
        .addCase(login.pending, (state) => {
            state.isLoading = true;
        })

        .addCase(login.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.user=null;
            toast.success(action.payload)
        })

        .addCase(login.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isLoggedIn=true;
            state.user=action.payload;
            toast.success("Login Successful")
        })
//logout user

.addCase(logout.pending, (state) => {
    state.isLoading = true;
})

.addCase(logout.rejected,(state,action)=>{
    state.isLoading=false;
    state.isError=true;
    state.user=null;
    toast.success(action.payload)
})

.addCase(logout.fulfilled,(state,action)=>{
    state.isLoading=false;
    state.isSuccess=true;
    state.isLoggedIn=false;
    state.user=null;
    toast.success(action.payload)
})
  }
});

export const {RESET_AUTH} = authSlice.actions

export default authSlice.reducer